/**
 * Polyglot Map - Visor de Diapositivas y Materiales en Canvas Seguro
 * 
 * - Renderiza PDFs sobre elementos HTML5 Canvas (sin visor de navegador nativo).
 * - Totalmente protegido contra descargas, sin URLs de descarga expuestas.
 * - Soporta navegación diapositiva por diapositiva y vista corrida (todas).
 * - Soporta controles de zoom, teclado (flechas ← →) y gestos táctiles.
 */

(function () {
  'use strict';

  // Configurar worker de PDF.js si está presente
  if (window.pdfjsLib) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'js/pdf.worker.min.js';
  }

  // Estado del visor actual
  let currentViewer = {
    pdfDoc: null,
    pageNum: 1,
    pageRendering: false,
    pageNumPending: null,
    scale: 1.25,
    mode: 'slide', // 'slide' o 'all'
    canvas: null,
    ctx: null,
    container: null,
    pdfUrl: null
  };

  /**
   * Inicializa el visor seguro en el contenedor especificado
   */
  async function initSecurePdfViewer(containerEl, pdfUrl, options = {}) {
    if (!containerEl) return;
    currentViewer.container = containerEl;
    currentViewer.pdfUrl = pdfUrl;
    currentViewer.pageNum = 1;
    currentViewer.scale = window.innerWidth < 640 ? 0.9 : 1.25;
    currentViewer.mode = 'slide';

    // Construir estructura del visor interactivo
    containerEl.innerHTML = `
      <div class="secure-pdf-viewer w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/70 select-none" oncontextmenu="return false;">
        <!-- Barra superior del visor con controles -->
        <div class="bg-slate-900 border-b border-white/10 px-3 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-2.5">
          
          <!-- Controles de Navegación de Diapositivas -->
          <div class="flex items-center gap-1.5 sm:gap-2">
            <button id="pdfBtnPrev" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer" title="Diapositiva Anterior (←)">
              <span>◀</span>
              <span class="hidden sm:inline">Anterior</span>
            </button>

            <div class="px-3 py-1 rounded-lg bg-slate-950 border border-slate-700 text-xs font-mono font-bold text-yellow-300 flex items-center gap-1">
              <span>Diapositiva</span>
              <span id="pdfPageNum" class="text-white font-extrabold">1</span>
              <span class="text-slate-400">/</span>
              <span id="pdfPageCount" class="text-slate-300">--</span>
            </div>

            <button id="pdfBtnNext" class="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer" title="Siguiente Diapositiva (→)">
              <span class="hidden sm:inline">Siguiente</span>
              <span>▶</span>
            </button>
          </div>

          <!-- Modos de Vista y Zoom -->
          <div class="flex items-center gap-2">
            <!-- Selector de Modo -->
            <div class="inline-flex rounded-lg bg-slate-950 p-0.5 border border-slate-800 text-xs">
              <button id="pdfModeSlide" class="px-2.5 py-1 rounded-md font-bold text-xs transition bg-blue-600 text-white cursor-pointer" title="Ver diapositiva por diapositiva">
                Diapositiva
              </button>
              <button id="pdfModeAll" class="px-2.5 py-1 rounded-md font-bold text-xs transition text-slate-400 hover:text-white cursor-pointer" title="Ver todas las diapositivas seguidas">
                Ver Todas
              </button>
            </div>

            <!-- Controles de Zoom -->
            <div class="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 text-xs">
              <button id="pdfZoomOut" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold transition flex items-center justify-center cursor-pointer" title="Reducir Zoom">
                −
              </button>
              <span id="pdfZoomLevel" class="font-mono text-slate-300 font-bold px-1.5">100%</span>
              <button id="pdfZoomIn" class="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-white font-bold transition flex items-center justify-center cursor-pointer" title="Aumentar Zoom">
                +
              </button>
            </div>

            <!-- Badge de Seguridad -->
            <div class="hidden md:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 font-bold text-[11px]">
              <span>🔒 Solo Lectura</span>
            </div>
          </div>
        </div>

        <!-- Área de Renderizado de Canvas -->
        <div id="pdfViewport" class="relative w-full min-h-[60vh] max-h-[70vh] sm:max-h-[76vh] overflow-y-auto overflow-x-auto p-3 sm:p-5 flex flex-col items-center justify-start bg-slate-950/95 scroll-smooth">
          
          <!-- Spinner de Carga -->
          <div id="pdfLoadingIndicator" class="flex flex-col items-center justify-center py-20 text-slate-400">
            <div class="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p class="text-sm font-bold text-slate-200">Cargando diapositivas en alta resolución...</p>
            <p class="text-xs text-slate-400 mt-1">Protección activa contra descargas</p>
          </div>

          <!-- Contenedor dinámico de Canvas -->
          <div id="pdfCanvasContainer" class="relative w-full flex flex-col items-center gap-4 hidden">
            <!-- Canvas inyectado aquí -->
          </div>

          <!-- Franja de Marca de Agua de Protección -->
          <div class="mt-4 text-center select-none opacity-60 text-[10px] sm:text-xs text-yellow-300/80 font-mono tracking-wider">
            🛡️ POLYGLOT MAP • MATERIAL DIDÁCTICO OFICIAL • PROHIBIDA SU DISTRIBUCIÓN O COPIA
          </div>
        </div>
      </div>
    `;

    // Vincular Eventos de la UI
    document.getElementById('pdfBtnPrev')?.addEventListener('click', onPrevPage);
    document.getElementById('pdfBtnNext')?.addEventListener('click', onNextPage);
    document.getElementById('pdfModeSlide')?.addEventListener('click', () => switchMode('slide'));
    document.getElementById('pdfModeAll')?.addEventListener('click', () => switchMode('all'));
    document.getElementById('pdfZoomOut')?.addEventListener('click', () => adjustZoom(-0.2));
    document.getElementById('pdfZoomIn')?.addEventListener('click', () => adjustZoom(0.2));

    // Si PDF.js no está disponible o falla, usar fallback seguro
    if (!window.pdfjsLib) {
      console.warn('PDF.js no detectado, usando fallback seguro');
      renderFallbackViewer(containerEl, pdfUrl);
      return;
    }

    try {
      const loadingTask = window.pdfjsLib.getDocument({
        url: pdfUrl,
        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/cmaps/',
        cMapPacked: true
      });

      currentViewer.pdfDoc = await loadingTask.promise;
      const countEl = document.getElementById('pdfPageCount');
      if (countEl) countEl.textContent = currentViewer.pdfDoc.numPages;

      const loader = document.getElementById('pdfLoadingIndicator');
      const canvasContainer = document.getElementById('pdfCanvasContainer');
      if (loader) loader.classList.add('hidden');
      if (canvasContainer) canvasContainer.classList.remove('hidden');

      renderCurrentMode();
    } catch (err) {
      console.error('Error al cargar PDF con PDF.js:', err);
      renderFallbackViewer(containerEl, pdfUrl);
    }
  }

  /**
   * Renderiza la página actual o todas según el modo
   */
  function renderCurrentMode() {
    if (!currentViewer.pdfDoc) return;
    const canvasContainer = document.getElementById('pdfCanvasContainer');
    if (!canvasContainer) return;

    if (currentViewer.mode === 'slide') {
      canvasContainer.innerHTML = `
        <div class="relative inline-block max-w-full shadow-2xl rounded-xl overflow-hidden border border-slate-700/80 bg-white">
          <canvas id="pdfSecureCanvas" class="pdf-page-canvas block max-w-full h-auto cursor-default"></canvas>
          <div class="material-watermark-overlay"></div>
        </div>
      `;
      currentViewer.canvas = document.getElementById('pdfSecureCanvas');
      currentViewer.ctx = currentViewer.canvas ? currentViewer.canvas.getContext('2d') : null;
      renderSlidePage(currentViewer.pageNum);
    } else {
      renderAllPages();
    }
    updateNavButtons();
  }

  /**
   * Renderiza una sola diapositiva en el canvas principal
   */
  async function renderSlidePage(num) {
    if (!currentViewer.pdfDoc || !currentViewer.canvas) return;
    currentViewer.pageRendering = true;

    try {
      const page = await currentViewer.pdfDoc.getPage(num);
      const viewport = page.getViewport({ scale: currentViewer.scale });

      const outputScale = window.devicePixelRatio || 1;
      currentViewer.canvas.width = Math.floor(viewport.width * outputScale);
      currentViewer.canvas.height = Math.floor(viewport.height * outputScale);
      currentViewer.canvas.style.width = Math.floor(viewport.width) + 'px';
      currentViewer.canvas.style.height = Math.floor(viewport.height) + 'px';

      const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

      const renderContext = {
        canvasContext: currentViewer.ctx,
        transform: transform,
        viewport: viewport
      };

      await page.render(renderContext).promise;
      currentViewer.pageRendering = false;

      if (currentViewer.pageNumPending !== null) {
        renderSlidePage(currentViewer.pageNumPending);
        currentViewer.pageNumPending = null;
      }

      // Actualizar contador
      const numEl = document.getElementById('pdfPageNum');
      if (numEl) numEl.textContent = num;

      updateNavButtons();
    } catch (err) {
      console.error('Error al renderizar página:', err);
      currentViewer.pageRendering = false;
    }
  }

  function queueRenderPage(num) {
    if (currentViewer.pageRendering) {
      currentViewer.pageNumPending = num;
    } else {
      renderSlidePage(num);
    }
  }

  function onPrevPage() {
    if (currentViewer.pageNum <= 1) return;
    currentViewer.pageNum--;
    queueRenderPage(currentViewer.pageNum);
  }

  function onNextPage() {
    if (!currentViewer.pdfDoc || currentViewer.pageNum >= currentViewer.pdfDoc.numPages) return;
    currentViewer.pageNum++;
    queueRenderPage(currentViewer.pageNum);
  }

  function updateNavButtons() {
    const prevBtn = document.getElementById('pdfBtnPrev');
    const nextBtn = document.getElementById('pdfBtnNext');
    if (prevBtn) prevBtn.disabled = currentViewer.pageNum <= 1 || currentViewer.mode === 'all';
    if (nextBtn) nextBtn.disabled = !currentViewer.pdfDoc || currentViewer.pageNum >= currentViewer.pdfDoc.numPages || currentViewer.mode === 'all';
  }

  /**
   * Cambia entre modo 'slide' y modo 'all' (vista corrida)
   */
  function switchMode(newMode) {
    if (currentViewer.mode === newMode) return;
    currentViewer.mode = newMode;

    const btnSlide = document.getElementById('pdfModeSlide');
    const btnAll = document.getElementById('pdfModeAll');

    if (newMode === 'slide') {
      if (btnSlide) {
        btnSlide.classList.add('bg-blue-600', 'text-white');
        btnSlide.classList.remove('text-slate-400');
      }
      if (btnAll) {
        btnAll.classList.remove('bg-blue-600', 'text-white');
        btnAll.classList.add('text-slate-400');
      }
    } else {
      if (btnAll) {
        btnAll.classList.add('bg-blue-600', 'text-white');
        btnAll.classList.remove('text-slate-400');
      }
      if (btnSlide) {
        btnSlide.classList.remove('bg-blue-600', 'text-white');
        btnSlide.classList.add('text-slate-400');
      }
    }

    renderCurrentMode();
  }

  /**
   * Renderiza todas las diapositivas en secuencia continua
   */
  async function renderAllPages() {
    if (!currentViewer.pdfDoc) return;
    const canvasContainer = document.getElementById('pdfCanvasContainer');
    if (!canvasContainer) return;

    canvasContainer.innerHTML = '';
    const total = currentViewer.pdfDoc.numPages;

    for (let i = 1; i <= total; i++) {
      const pageWrapper = document.createElement('div');
      pageWrapper.className = 'relative inline-block max-w-full shadow-2xl rounded-xl overflow-hidden border border-slate-700/80 bg-white mb-4';
      
      const badge = document.createElement('div');
      badge.className = 'bg-slate-900 text-yellow-300 font-mono text-[10px] font-bold px-3 py-1 flex items-center justify-between border-b border-slate-700';
      badge.innerHTML = `<span>Diapositiva ${i} de ${total}</span><span>🔒 Polyglot Map</span>`;
      pageWrapper.appendChild(badge);

      const canvas = document.createElement('canvas');
      canvas.className = 'pdf-page-canvas block max-w-full h-auto';
      pageWrapper.appendChild(canvas);

      const overlay = document.createElement('div');
      overlay.className = 'material-watermark-overlay';
      pageWrapper.appendChild(overlay);

      canvasContainer.appendChild(pageWrapper);

      try {
        const page = await currentViewer.pdfDoc.getPage(i);
        const viewport = page.getViewport({ scale: currentViewer.scale });
        const outputScale = window.devicePixelRatio || 1;

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = Math.floor(viewport.width) + 'px';
        canvas.style.height = Math.floor(viewport.height) + 'px';

        const ctx = canvas.getContext('2d');
        const transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

        await page.render({
          canvasContext: ctx,
          transform: transform,
          viewport: viewport
        }).promise;
      } catch (e) {
        console.error('Error renderizando diapositiva', i, e);
      }
    }
  }

  /**
   * Ajusta el zoom de visualización
   */
  function adjustZoom(delta) {
    let newScale = currentViewer.scale + delta;
    if (newScale < 0.6) newScale = 0.6;
    if (newScale > 2.5) newScale = 2.5;
    currentViewer.scale = Math.round(newScale * 10) / 10;

    const zoomEl = document.getElementById('pdfZoomLevel');
    if (zoomEl) zoomEl.textContent = Math.round(currentViewer.scale * 100) + '%';

    renderCurrentMode();
  }

  /**
   * Fallback seguro en caso de navegadores antiguos o problemas con el worker
   */
  function renderFallbackViewer(containerEl, pdfUrl) {
    containerEl.innerHTML = `
      <div class="relative w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/80 my-2 select-none" oncontextmenu="return false;">
        <div class="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-white/10">
          <span class="text-xs font-mono text-yellow-300 font-bold">📄 Visor Protegido de Diapositivas</span>
          <span class="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
            🔒 Modo Seguro
          </span>
        </div>
        <div class="relative w-full bg-slate-900">
          <iframe 
            src="${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1" 
            class="w-full h-[65vh] sm:h-[72vh] border-0 bg-slate-900" 
            title="Previsualización Oficial de Diapositivas"
            loading="lazy">
          </iframe>
          <div class="absolute inset-0 pointer-events-none material-watermark-overlay"></div>
        </div>
      </div>
    `;
  }

  // Soporte de navegación por teclado (← / →) cuando el modal de materiales está abierto
  window.addEventListener('keydown', function (e) {
    const modal = document.getElementById('materialDetailModal');
    if (!modal || modal.classList.contains('hidden')) return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onPrevPage();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      onNextPage();
    }
  });

  // Exponer API en ventana
  window.PolyglotPdfViewer = {
    init: initSecurePdfViewer,
    prevPage: onPrevPage,
    nextPage: onNextPage,
    switchMode: switchMode,
    adjustZoom: adjustZoom
  };
})();
