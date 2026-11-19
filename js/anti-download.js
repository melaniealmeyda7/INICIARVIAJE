/**
 * Polyglot Map - Módulo Integral de Seguridad y Protección de Materiales
 * 
 * Funcionalidades:
 * 1. Desactiva menú contextual de clic derecho en todo el sitio y visores.
 * 2. Bloquea atajos de teclado para guardar (Ctrl+S/Cmd+S), imprimir (Ctrl+P/Cmd+P),
 *    ver código fuente (Ctrl+U/Cmd+U) e inspeccionar elementos (F12, Ctrl+Shift+I/C/J).
 * 3. Desactiva arrastre (drag & drop) de elementos e imágenes.
 * 4. Desactiva selección de texto en los contenedores de materiales y diapositivas.
 * 5. Bloquea la impresión de página mediante CSS @media print.
 * 6. Muestra notificación flotante institucional cuando se intenta una acción protegida.
 */

(function () {
  'use strict';

  // Inyectar estilos globales de protección
  const style = document.createElement('style');
  style.id = 'polyglot-protection-styles';
  style.textContent = `
    /* Bloqueo total de impresión */
    @media print {
      html, body {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        overflow: hidden !important;
      }
    }

    /* Clases de protección contra selección y copia */
    .protected-material,
    .pdf-viewer-canvas-wrap,
    .pdf-canvas-container,
    #materialDetailModal,
    #materialModalContent,
    canvas.pdf-page-canvas {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important;
    }

    /* Watermark de seguridad sobre diapositivas */
    .material-watermark-overlay {
      position: absolute;
      inset: 0;
      pointer-events: none;
      background-image: repeating-linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.02) 0px,
        rgba(255, 255, 255, 0.02) 100px,
        rgba(234, 179, 8, 0.04) 100px,
        rgba(234, 179, 8, 0.04) 200px
      );
      z-index: 10;
    }

    /* Notificación flotante de protección */
    #polyglot-toast-protection {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      z-index: 99999;
      background: #09132e;
      color: #fff;
      border: 2px solid #eab308;
      border-radius: 16px;
      padding: 12px 20px;
      box-shadow: 0 10px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(234, 179, 8, 0.3);
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 13px;
      font-weight: 700;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      max-width: 90vw;
      text-align: left;
    }
    #polyglot-toast-protection.show {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
      pointer-events: auto;
    }
  `;
  document.head.appendChild(style);

  // Crear contenedor de Toast de Seguridad
  let toastTimeout = null;
  function getOrCreateToast() {
    let toast = document.getElementById('polyglot-toast-protection');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'polyglot-toast-protection';
      toast.setAttribute('role', 'alert');
      toast.innerHTML = `
        <span style="font-size: 20px; line-height: 1;">🔒</span>
        <div>
          <span style="display: block; font-size: 10px; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; color: #facc15;">
            Material Protegido Oficial
          </span>
          <span id="polyglot-toast-text" style="color: #f1f5f9;">
            Descarga, copia e impresión no permitidas por derechos de autor.
          </span>
        </div>
      `;
      document.body.appendChild(toast);
    }
    return toast;
  }

  function showToast(customText) {
    const toast = getOrCreateToast();
    const textEl = document.getElementById('polyglot-toast-text');
    if (textEl && customText) {
      textEl.textContent = customText;
    }
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // 1. Bloquear clic derecho (contextmenu) en toda la ventana
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showToast('El clic derecho y la descarga están desactivados para proteger el material.');
    return false;
  }, { capture: true });

  // 2. Bloquear atajos de teclado para guardar, imprimir, ver código o inspeccionar
  window.addEventListener('keydown', function (e) {
    const isMac = (navigator.userAgent || '').toUpperCase().includes('MAC');
    const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;
    const key = e.key ? e.key.toLowerCase() : '';

    // Guardar (Ctrl/Cmd + S)
    if (cmdOrCtrl && (key === 's' || e.keyCode === 83)) {
      e.preventDefault();
      e.stopPropagation();
      showToast('Acción no permitida: La descarga de esta página o material está desactivada.');
      return false;
    }

    // Imprimir (Ctrl/Cmd + P)
    if (cmdOrCtrl && (key === 'p' || e.keyCode === 80)) {
      e.preventDefault();
      e.stopPropagation();
      showToast('Acción no permitida: La impresión del material está desactivada.');
      return false;
    }

    // Ver código fuente (Ctrl/Cmd + U)
    if (cmdOrCtrl && (key === 'u' || e.keyCode === 85)) {
      e.preventDefault();
      e.stopPropagation();
      showToast('Acción no permitida: Acceso restringido.');
      return false;
    }

    // DevTools / Inspeccionar (F12, Ctrl/Cmd + Shift + I / C / J)
    if (
      e.key === 'F12' ||
      e.keyCode === 123 ||
      (cmdOrCtrl && e.shiftKey && (key === 'i' || key === 'c' || key === 'j'))
    ) {
      e.preventDefault();
      e.stopPropagation();
      showToast('Herramientas de inspección desactivadas en este visor.');
      return false;
    }
  }, { capture: true });

  // 3. Bloquear Arrastre (drag & drop)
  window.addEventListener('dragstart', function (e) {
    e.preventDefault();
    return false;
  }, { capture: true });

  // 4. Interceptar evento de impresión del navegador
  window.addEventListener('beforeprint', function (e) {
    e.preventDefault();
    showToast('Impresión de material protegida y no permitida.');
    return false;
  });

  // Exponer método en ventana para uso en módulos
  window.PolyglotProtection = {
    showToast: showToast
  };
})();
