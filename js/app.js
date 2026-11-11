/**
 * POLYGLOT MAP - Portal Oficial de Bootcamps Gratuitos
 * Temática: Viajero Políglota / Terminal de Vuelos
 * Evento Future Ready - Bootcamp de Idiomas
 */

// Catálogo de Cursos con Temarios Completos para todas las fechas
const COURSES_DATA = [
  {
    id: 'bootcamp-ingles-cero',
    type: 'BOOTCAMP',
    badgeText: 'BOOTCAMP · INGLÉS',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    statusBadge: '✨ NUEVO',
    statusBadgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
    title: 'Inglés desde cero',
    country: 'Estados Unidos / Global',
    flag: 'usa',
    language: 'Inglés',
    scheduleDays: 'Miércoles y viernes',
    scheduleTime: '7:00 a 8:00 p. m.',
    dateFrom: 'DEL',
    dateMain: '18 NOV',
    dateTo: 'AL 18 DIC',
    flightCode: 'PM-ENG01',
    gate: 'Puerta V-01 (Auditorio Virtual)',
    classLink: 'https://zoom.us/join?pwd=polyglotmap-future-ready',
    streamLink: 'https://youtube.com/live',
    registrationLink: 'https://forms.gle/8ANqwWUxt8tfi6RC6?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafE60rN24MB4wGMEHubz6r5r_UrKPuaQhTrbIlcMs1hSweeR208EGV_SzzOsQ_aem_-2YkylOyhS6WLHyH8GU31w',
    seatClass: 'Clase Ejecutiva Lingüística',
    freeBadge: '100% GRATUITO',
    spotsTotal: 50,
    spotsLeft: 7,
    description: 'Aprende los fundamentos del idioma inglés con metodología inmersiva natural de viaje: presentaciones, aeropuerto, hospedaje y conversaciones cotidianas.',
    instructor: 'Coach Bilingüe Polyglot Map',
    perks: ['Clases en vivo', 'Material descargable PDF', 'Acceso a comunidad viajera', 'Certificado de asistencia'],
    syllabus: [
      { session: 'Sesión 1', date: 'Miércoles 18 Nov', time: '7:00 - 8:00 p. m.', title: 'Despegue Lingüístico & Fonética Básica', desc: 'El alfabeto fonético internacional en inglés, vocales cortas/largas y sonidos esenciales para no trabarte.' },
      { session: 'Sesión 2', date: 'Viernes 20 Nov', time: '7:00 - 8:00 p. m.', title: 'Check-in y Presentación Personal', desc: 'Greetings, personal introductions, países, ocupaciones y estructuras con el verbo To Be.' },
      { session: 'Sesión 3', date: 'Miércoles 25 Nov', time: '7:00 - 8:00 p. m.', title: 'En el Aeropuerto & Control de Seguridad', desc: 'Preguntas típicas de oficiales de inmigración, lectura de pases de abordar y cómo pedir ayuda.' },
      { session: 'Sesión 4', date: 'Viernes 27 Nov', time: '7:00 - 8:00 p. m.', title: 'Hospedaje, Hotel y Solicitudes', desc: 'Check-in en hoteles, vocabulario de habitaciones, resolver problemas de servicio y preguntas con Can/Could.' },
      { session: 'Sesión 5', date: 'Miércoles 02 Dic', time: '7:00 - 8:00 p. m.', title: 'Restaurantes, Cafés y Ordenar Comida', desc: 'Food & drinks vocabulary, cómo pedir en restaurantes sin timidez, propinas y modales en la mesa.' },
      { session: 'Sesión 6', date: 'Viernes 04 Dic', time: '7:00 - 8:00 p. m.', title: 'Compras, Precios y Transporte Urbano', desc: 'Preguntar precios (How much is this?), regatear educadamente, tomar trenes, metro y taxis en el extranjero.' },
      { session: 'Sesión 7', date: 'Miércoles 09 Dic', time: '7:00 - 8:00 p. m.', title: 'Emergencias, Salud y Direcciones', desc: 'Asking for directions (turn left, go straight), farmacias, síntomas básicos y números de emergencia.' },
      { session: 'Sesión 8', date: 'Viernes 11 Dic', time: '7:00 - 8:00 p. m.', title: 'Networking Internacional & Pasatiempos', desc: 'Cómo conectar con personas de otros países, hablar de tus hobbies y presentar tu background laboral.' },
      { session: 'Sesión 9', date: 'Miércoles 16 Dic', time: '7:00 - 8:00 p. m.', title: 'Roleplay Inmersivo de Vuelo y Viaje', desc: 'Simulación completa en vivo por salas de grupos: desde el aeropuerto hasta el destino final 100% en inglés.' },
      { session: 'Sesión 10', date: 'Viernes 18 Dic', time: '7:00 - 8:00 p. m.', title: 'Aterrizaje Final Future Ready & Clausura', desc: 'Repaso general, feedback de pronunciación personalizado, entrega de insignias y cierre del bootcamp.' }
    ]
  },
  {
    id: 'club-ingles-a2',
    type: 'CLUB',
    badgeText: 'CLUB DE INGLÉS CONVERSACIONAL',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    statusBadge: '✨ NUEVO',
    statusBadgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
    title: 'Nivel A2',
    country: 'Internacional',
    flag: 'usa',
    language: 'Inglés',
    scheduleDays: 'Todos los lunes',
    scheduleTime: '10:00 a 11:00 a. m.',
    dateFrom: 'DEL',
    dateMain: '9 NOV',
    dateTo: 'AL 14 DIC',
    flightCode: 'PM-ENG-A2',
    gate: 'Puerta V-04 (Auditorio Virtual)',
    classLink: 'https://meet.google.com/new?polyglotmap-club-a2',
    streamLink: 'https://youtube.com/live',
    registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe6Dg2_HyfgnjEXD0Y51eK8UM0koZxayF5WfQ7q2nNBGZ1y2Q/viewform',
    seatClass: 'Club de Oradores',
    freeBadge: '100% GRATUITO',
    spotsTotal: 30,
    spotsLeft: 4,
    description: 'Práctica intensiva 100% hablada para estudiantes con nivel básico-intermedio (A2). Dinámicas de debate, roleplay de viajes y networking global.',
    instructor: 'Facilitador Nativo & Políglota',
    perks: ['Grupos reducidos de práctica', 'Corrección de pronunciación en tiempo real', 'Temas semanales de cultura y viajes', 'Millas de fluidez'],
    syllabus: [
      { session: 'Sesión 1', date: 'Lunes 09 Nov', time: '10:00 - 11:00 a. m.', title: 'Breaking the Ice & Travel Anecdotes', desc: 'Superar el bloqueo mental al hablar, contar anécdotas de viajes pasados usando Past Simple y conectores.' },
      { session: 'Sesión 2', date: 'Lunes 16 Nov', time: '10:00 - 11:00 a. m.', title: 'Debating Technology, AI & Remote Work', desc: 'Expresar opiniones de acuerdo y desacuerdo sobre el futuro del trabajo y la tecnología en equipos globales.' },
      { session: 'Sesión 3', date: 'Lunes 23 Nov', time: '10:00 - 11:00 a. m.', title: 'Cultural Shock & Living Abroad', desc: 'Historias de choque cultural, diferencias de modales alrededor del mundo y vocabulario de adaptación.' },
      { session: 'Sesión 4', date: 'Lunes 30 Nov', time: '10:00 - 11:00 a. m.', title: 'Professional Elevator Pitch & LinkedIn', desc: 'Presentar tu perfil profesional en 60 segundos en inglés fluido, networking y respuesta a preguntas clave.' },
      { session: 'Sesión 5', date: 'Lunes 07 Dic', time: '10:00 - 11:00 a. m.', title: 'Negotiation & Crisis Scenarios', desc: 'Resolución de conflictos en el extranjero: vuelos cancelados, negociaciones y argumentos persuasivos.' },
      { session: 'Sesión 6', date: 'Lunes 14 Dic', time: '10:00 - 11:00 a. m.', title: 'Global Summit Future Ready: Final Speech', desc: 'Micro-charlas finales individuales de 2 minutos por participante, retroalimentación y diplomas Future Ready.' }
    ]
  },
  {
    id: 'bootcamp-portugues-cero',
    type: 'BOOTCAMP',
    badgeText: 'BOOTCAMP · PORTUGUÉS',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    statusBadge: '🔥 Más de 1800 inscritos',
    statusBadgeColor: 'bg-amber-100 text-amber-800 border-amber-300 font-extrabold',
    title: 'Portugués (Desde cero)',
    country: 'Brasil',
    flag: 'brazil',
    language: 'Portugués',
    scheduleDays: 'Martes y jueves',
    scheduleTime: '7:00 a 8:00 p. m.',
    dateFrom: 'DEL',
    dateMain: '17 NOV',
    dateTo: 'AL 17 DIC',
    flightCode: 'PM-BRA01',
    gate: 'Puerta V-08 (Auditorio Virtual A)',
    classLink: 'https://zoom.us/join?pwd=polyglotmap-portugues-zero',
    streamLink: 'https://youtube.com/live',
    registrationLink: 'https://forms.gle/wsipVZ9EkpzA9uXu6',
    seatClass: 'Inmersión Samba Principiante',
    freeBadge: '100% GRATUITO',
    spotsTotal: 40,
    spotsLeft: 6,
    description: 'Fonética, pronunciación carioca y paulista, vocabulario elemental y supervivencia en Brasil para principiantes sin conocimientos previos.',
    instructor: 'Profesor Nativo de São Paulo',
    perks: ['Fonética brasileña guiada', 'Guía de expresiones cotidianas', 'Canciones y cultura carioca', 'Pasaporte con sello de Brasil'],
    syllabus: [
      { session: 'Sesión 1', date: 'Martes 17 Nov', time: '7:00 - 8:00 p. m.', title: 'Fonética Brasileira: Sons Nasais e Alfabeto', desc: 'Diferencias fonéticas con el español, la tilde en ÃO, sonidos de la Ç, X y LH sin trabarse.' },
      { session: 'Sesión 2', date: 'Jueves 19 Nov', time: '7:00 - 8:00 p. m.', title: 'Saudações, Apresentações e Nacionalidades', desc: 'Tudo bem? Tudo bom! Cumplidos brasileños, presentaciones y conjugación básica de verbos SER y ESTAR.' },
      { session: 'Sesión 3', date: 'Martes 24 Nov', time: '7:00 - 8:00 p. m.', title: 'No Aeroporto de Guarulhos e Trânsito', desc: 'Vocabulario de aduana, pedir información, tomar Ubers y moverse por las grandes metrópolis de Brasil.' },
      { session: 'Sesión 4', date: 'Jueves 26 Nov', time: '7:00 - 8:00 p. m.', title: 'Pousada, Hotel e Frases de Sobrevivência', desc: 'Hacer check-in en hoteles y posadas de playa, pedir cosas prestadas y cortesía brasileña.' },
      { session: 'Sesión 5', date: 'Martes 01 Dic', time: '7:00 - 8:00 p. m.', title: 'Na Praia e no Restaurante Típico', desc: 'Pedir picanha, açaí, sucos naturais e pratos típicos. Diálogos reales en botecos y restaurantes.' },
      { session: 'Sesión 6', date: 'Jueves 03 Dic', time: '7:00 - 8:00 p. m.', title: 'Compras, Dinheiro, Pagamentos e Números', desc: 'Cuánto cuesta (quanto custa?), cómo funciona el sistema PIX y comprar en ferias y shoppings.' },
      { session: 'Sesión 7', date: 'Martes 08 Dic', time: '7:00 - 8:00 p. m.', title: 'Expressões Cotidianas e Gírias do Brasil', desc: 'Gírias populares: Legal, Beleza, Massa, Show de bola, Cara, Valeu y modismos regionales.' },
      { session: 'Sesión 8', date: 'Jueves 10 Dic', time: '7:00 - 8:00 p. m.', title: 'Música, Cultura Carioca e Paulista', desc: 'Aprender vocabulario a través de la MPB, Bossa Nova y ritmos actuales para soltar el habla.' },
      { session: 'Sesión 9', date: 'Martes 15 Dic', time: '7:00 - 8:00 p. m.', title: 'Simulação Real de Conversação e Viagem', desc: 'Práctica interactiva en vivo por parejas recreando situaciones reales de viaje en Brasil.' },
      { session: 'Sesión 10', date: 'Jueves 17 Dic', time: '7:00 - 8:00 p. m.', title: 'Encerramento Future Ready & Conclusão', desc: 'Evaluación formativa, despedida con sellos para el pasaporte y consejos de continuidad.' }
    ]
  },
  {
    id: 'bootcamp-portugues-basico2',
    type: 'BOOTCAMP',
    badgeText: 'BOOTCAMP · PORTUGUÉS',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    statusBadge: '🔥 Más de 1800 inscritos',
    statusBadgeColor: 'bg-amber-100 text-amber-800 border-amber-300 font-extrabold',
    title: 'Portugués (Básico 2)',
    country: 'Brasil',
    flag: 'brazil',
    language: 'Portugués',
    scheduleDays: 'Martes y jueves',
    scheduleTime: '7:00 a 8:30 p. m.',
    dateFrom: 'DEL',
    dateMain: '17 NOV',
    dateTo: 'AL 17 DIC',
    flightCode: 'PM-BRA02',
    gate: 'Puerta V-09 (Auditorio Virtual B)',
    classLink: 'https://zoom.us/join?pwd=polyglotmap-portugues-b2',
    streamLink: 'https://youtube.com/live',
    registrationLink: 'https://forms.gle/wsipVZ9EkpzA9uXu6',
    seatClass: 'Fluidez y Estructura Básico 2',
    freeBadge: '100% GRATUITO',
    spotsTotal: 35,
    spotsLeft: 5,
    description: 'Para estudiantes con nociones previas. Construcción de oraciones compuestas, tiempos verbales del pasado, interacción fluida y cultura brasileña profunda.',
    instructor: 'Especialista en Lingüística Portuguesa',
    perks: ['Conversación y gramática aplicada', 'Casos prácticos de viaje y negocios', 'Módulo de 1.5 hrs intensivas', 'Sello Oficial de Inmigración Básico 2'],
    syllabus: [
      { session: 'Sesión 1', date: 'Martes 17 Nov', time: '7:00 - 8:30 p. m.', title: 'Revisão e Diagnóstico: Pretérito Perfeito vs Imperfeito', desc: 'Dominio de los tiempos pasados en portugués, contraste con el portuñol y narración fluida.' },
      { session: 'Sesión 2', date: 'Jueves 19 Nov', time: '7:00 - 8:30 p. m.', title: 'Storytelling: Vivências e Trajetórias', desc: 'Cómo contar tu historia personal y profesional en portugués con naturalidad y corrección gramatical.' },
      { session: 'Sesión 3', date: 'Martes 24 Nov', time: '7:00 - 8:30 p. m.', title: 'Futuro do Presente e Planos de Carreira', desc: 'Proyecciones a futuro, vocabulario corporativo y metas personales en el mercado de Brasil.' },
      { session: 'Sesión 4', date: 'Jueves 26 Nov', time: '7:00 - 8:30 p. m.', title: 'Comunicação Profissional e E-mails Corporativos', desc: 'Redacción de correos formales, vocabulario de LinkedIn en portugués y entrevistas laborales.' },
      { session: 'Sesión 5', date: 'Martes 01 Dic', time: '7:00 - 8:30 p. m.', title: 'Expressando Opiniões e Debates Temáticos', desc: 'Conectores lógicos: porém, contudo, todavia, além disso. Debates sobre sociedad y cultura.' },
      { session: 'Sesión 6', date: 'Jueves 03 Dic', time: '7:00 - 8:30 p. m.', title: 'Diversidade Linguística: Sotaques e Regionalismos', desc: 'Comprensión auditiva de sotaques del Nordeste, Minas Gerais, Rio y São Paulo.' },
      { session: 'Sesión 7', date: 'Martes 08 Dic', time: '7:00 - 8:30 p. m.', title: 'Casos de Negócios e Networking Internacional', desc: 'Cultura empresarial brasileña, cómo cerrar tratos, reuniones virtuales y etiqueta comercial.' },
      { session: 'Sesión 8', date: 'Jueves 10 Dic', time: '7:00 - 8:30 p. m.', title: 'Articulação Oral Rápida e Redução de Sotaque', desc: 'Ejercicios de articulación veloz, fluidez bajo presión y entonación nativa brasileña.' },
      { session: 'Sesión 9', date: 'Martes 15 Dic', time: '7:00 - 8:30 p. m.', title: 'Apresentação de Projetos de Impacto', desc: 'Exposiciones orales de los estudiantes sobre proyectos o destinos de viaje con feedback docente.' },
      { session: 'Sesión 10', date: 'Jueves 17 Dic', time: '7:00 - 8:30 p. m.', title: 'Avaliação Final de Fluência & Certificação Future Ready', desc: 'Feedback individual de avance, desbloqueo de sellos de dominio y clausura del programa.' }
    ]
  }
];

// Estado de la Aplicación
let currentUser = null;
let activeFilter = 'all';
let currentBookingCourse = null;
let credentialCustomPhoto = null;
let attendanceHistory = {}; // courseId -> [dates]

// Inicialización al cargar DOM
document.addEventListener('DOMContentLoaded', () => {
  loadSavedUser();
  setupEventListeners();
  renderCourses();
  updateUIForUser();
  setupCredentialGenerator();
});

// Cargar usuario desde LocalStorage
function loadSavedUser() {
  const saved = localStorage.getItem('polyglot_user');
  if (saved) {
    try {
      currentUser = JSON.parse(saved);
    } catch (e) {
      currentUser = null;
    }
  }

  const savedAtt = localStorage.getItem('polyglot_attendance');
  if (savedAtt) {
    try {
      attendanceHistory = JSON.parse(savedAtt);
    } catch (e) {
      attendanceHistory = {};
    }
  }
}

// Guardar usuario en LocalStorage
function saveUser(user) {
  currentUser = user;
  localStorage.setItem('polyglot_user', JSON.stringify(user));
  updateUIForUser();
  updateCredentialFromUser();
}

// Guardar Asistencia
function saveAttendance(courseId, dateStr) {
  if (!attendanceHistory[courseId]) {
    attendanceHistory[courseId] = [];
  }
  if (!attendanceHistory[courseId].includes(dateStr)) {
    attendanceHistory[courseId].push(dateStr);
  }
  localStorage.setItem('polyglot_attendance', JSON.stringify(attendanceHistory));
}

// Configurar Event Listeners
function setupEventListeners() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('bg-yellow-400', 'text-slate-950', 'font-bold'));
      filterButtons.forEach(b => b.classList.add('bg-white/10', 'text-white'));
      btn.classList.add('bg-yellow-400', 'text-slate-950', 'font-bold');
      btn.classList.remove('bg-white/10', 'text-white');
      activeFilter = btn.getAttribute('data-filter');
      renderCourses();
    });
  });

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLoginFormSubmit);
  }

  const quickCheckinBtn = document.getElementById('quickCheckinBtn');
  if (quickCheckinBtn) {
    quickCheckinBtn.addEventListener('click', handleQuickCheckin);
  }
}

// Actualizar Header y Elementos según estado de sesión
function updateUIForUser() {
  const userGreeting = document.getElementById('userGreeting');
  const userPassportBadge = document.getElementById('userPassportBadge');
  const userMilesBadge = document.getElementById('userMilesBadge');
  const authBtn = document.getElementById('authBtn');
  const boardingPassesNavBtn = document.getElementById('boardingPassesNavBtn');
  const aulaNavBtn = document.getElementById('aulaNavBtn');

  if (currentUser) {
    userGreeting.innerHTML = `
      <span class="text-xs text-sky-200">¡Bienvenido a bordo!</span>
      <span class="font-bold text-white flex items-center gap-1.5">${currentUser.name} ✈️</span>
    `;
    userGreeting.classList.remove('hidden');

    userPassportBadge.classList.remove('hidden');
    userMilesBadge.classList.remove('hidden');
    userMilesBadge.innerHTML = `🌟 ${currentUser.miles || 1200} Millas`;

    // boardingPassesNavBtn permanece oculto por diseño
    if (boardingPassesNavBtn) {
      boardingPassesNavBtn.classList.add('hidden');
    }

    if (aulaNavBtn) {
      aulaNavBtn.classList.remove('hidden');
      aulaNavBtn.classList.add('inline-flex');
    }

    authBtn.innerHTML = `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
      Cerrar Sesión
    `;
    authBtn.className = "px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/20 hover:bg-white/30 text-white border border-white/25 transition-all flex items-center gap-1.5";
    authBtn.onclick = handleLogout;
  } else {
    userGreeting.classList.add('hidden');
    userPassportBadge.classList.add('hidden');
    userMilesBadge.classList.add('hidden');
    boardingPassesNavBtn.classList.add('hidden');

    if (aulaNavBtn) {
      aulaNavBtn.classList.add('hidden');
      aulaNavBtn.classList.remove('inline-flex');
    }

    authBtn.innerHTML = `
      <span class="w-2.5 h-2.5 rounded-full bg-slate-950 animate-ping"></span>
      <span class="tracking-wide">✈️ INICIAR MI VIAJE / USUARIO</span>
    `;
    authBtn.className = "px-6 py-3 rounded-full text-xs sm:text-sm font-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 hover:from-yellow-300 hover:via-amber-400 hover:to-yellow-500 text-slate-950 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:shadow-[0_0_35px_rgba(250,204,21,0.9)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border-2 border-yellow-200 cursor-pointer select-none";
    authBtn.onclick = () => openModal('loginModal');
  }
}

// Renderizar Cursos con fidelidad al Flyer
function renderCourses() {
  const container = document.getElementById('coursesContainer');
  if (!container) return;

  const filtered = COURSES_DATA.filter(c => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ingles') return c.language === 'Inglés';
    if (activeFilter === 'portugues') return c.language === 'Portugués';
    if (activeFilter === 'bootcamp') return c.type === 'BOOTCAMP';
    if (activeFilter === 'club') return c.type === 'CLUB';
    return true;
  });

  container.innerHTML = filtered.map(course => {
    const isBooked = currentUser && currentUser.bookedCourses && currentUser.bookedCourses.some(b => b.courseId === course.id);
    const flagSvg = getFlagSvg(course.flag);

    return `
      <div onclick="handleCardClick('${course.id}')" class="ticket-card bg-white text-slate-900 rounded-3xl p-5 sm:p-7 shadow-xl border border-white/20 flex flex-col md:flex-row items-stretch justify-between gap-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] cursor-pointer group">
        
        <!-- Lado Izquierdo: Bandera e Información del Curso -->
        <div class="flex items-start sm:items-center gap-5 flex-1">
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 flex items-center justify-center shadow-md border-2 border-slate-100 overflow-hidden bg-slate-50">
            ${flagSvg}
          </div>

          <div class="space-y-1.5 flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wide ${course.badgeColor}">
                ${course.badgeText}
              </span>
              ${course.statusBadge ? `
                <span class="inline-flex items-center gap-1 text-[11px] font-black px-2.5 py-0.5 rounded-full border shadow-sm ${course.statusBadgeColor}">
                  ${course.statusBadge}
                </span>
              ` : ''}
            </div>

            <h3 class="text-2xl sm:text-3xl font-black text-[#0f2d8a] tracking-tight">
              ${course.title}
            </h3>

            <div class="text-slate-600 text-sm sm:text-base space-y-0.5 pt-0.5">
              <div class="flex items-center gap-2 font-medium">
                <span class="text-blue-600">📅</span>
                <span>${course.scheduleDays}</span>
              </div>
              <div class="flex items-center gap-2 font-medium">
                <span class="text-blue-600">🕒</span>
                <span>${course.scheduleTime}</span>
              </div>
            </div>

            <div class="flex items-center gap-3 pt-2 text-xs font-mono text-slate-500">
              <span class="bg-slate-100 px-2 py-0.5 rounded font-semibold text-slate-700">✈️ ${course.flightCode}</span>
              <span>📍 ${course.gate}</span>
            </div>

            <!-- AVISO DE INSCRIPCIÓN Y CERTIFICACIÓN OFICIAL -->
            <div class="mt-3.5 p-3 rounded-2xl bg-amber-50 border border-amber-200/80 text-left text-xs space-y-1.5" onclick="event.stopPropagation()">
              <p class="text-amber-950 font-bold leading-snug">
                ⚠️ <strong class="text-amber-900">¿Aún no estás inscrito?</strong> Solamente se dará constancia de participación / certificación a los que estén inscritos y cumplan con los requisitos del programa.
              </p>
              <div class="pt-0.5">
                <a href="${course.registrationLink}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-black text-[#0f2d8a] hover:text-blue-700 hover:underline bg-white px-3 py-1.5 rounded-xl border border-amber-300 shadow-sm transition">
                  <span>📝 Formulario de Inscripción Oficial aquí »</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Lado Derecho: Bloque Amarillo de Fecha del Flyer (Limpio, idéntico al flyer, sin botones) -->
        <div class="flex items-center justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-8">
          <div class="bg-[#ffd200] text-slate-950 font-black rounded-2xl w-36 sm:w-44 py-4 px-3 text-center shadow-md flex flex-col justify-center select-none transform hover:scale-105 transition-transform">
            <span class="text-xs uppercase tracking-wider font-black text-slate-900/90">${course.dateFrom}</span>
            <span class="text-2xl sm:text-3xl font-black tracking-tight leading-none my-1">${course.dateMain}</span>
            <span class="text-xs uppercase tracking-wider font-black text-slate-900/90">${course.dateTo}</span>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

// Banderas en SVG puro
function getFlagSvg(flag) {
  if (flag === 'usa') {
    return `
      <svg class="w-full h-full" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="32" fill="#B22234"/>
        <path d="M0 8h64v5H0zm0 10h64v5H0zm0 10h64v5H0zm0 10h64v5H0zm0 10h64v5H0zm0 10h64v5H0z" fill="#FFFFFF"/>
        <rect width="28" height="28" fill="#3C3B6E"/>
        <circle cx="6" cy="6" r="1.5" fill="#FFFFFF"/>
        <circle cx="14" cy="6" r="1.5" fill="#FFFFFF"/>
        <circle cx="22" cy="6" r="1.5" fill="#FFFFFF"/>
        <circle cx="10" cy="12" r="1.5" fill="#FFFFFF"/>
        <circle cx="18" cy="12" r="1.5" fill="#FFFFFF"/>
        <circle cx="6" cy="18" r="1.5" fill="#FFFFFF"/>
        <circle cx="14" cy="18" r="1.5" fill="#FFFFFF"/>
        <circle cx="22" cy="18" r="1.5" fill="#FFFFFF"/>
        <circle cx="10" cy="24" r="1.5" fill="#FFFFFF"/>
        <circle cx="18" cy="24" r="1.5" fill="#FFFFFF"/>
      </svg>
    `;
  }
  if (flag === 'brazil') {
    return `
      <svg class="w-full h-full" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="32" fill="#009739"/>
        <polygon points="32,8 56,32 32,56 8,32" fill="#FEDD00"/>
        <circle cx="32" cy="32" r="15" fill="#012169"/>
        <path d="M18 34c4-7 16-9 28-2" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <circle cx="28" cy="37" r="1" fill="#FFFFFF"/>
        <circle cx="35" cy="28" r="1" fill="#FFFFFF"/>
        <circle cx="33" cy="40" r="1" fill="#FFFFFF"/>
      </svg>
    `;
  }
  return `<span>🌍</span>`;
}

// Click en Reservar Cupo
function handleCourseBookingClick(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  currentBookingCourse = course;

  if (!currentUser) {
    document.getElementById('bookingCourseName').innerText = course.title;
    document.getElementById('bookingCourseSchedule').innerText = `${course.scheduleDays} · ${course.scheduleTime}`;
    openModal('quickRegisterModal');
  } else {
    finalizeBooking(course, currentUser.name, currentUser.email);
  }
}

// Botón global inferior "Reserva tu cupo »"
function handleGlobalReserveClick() {
  if (COURSES_DATA.length > 0) {
    handleCourseBookingClick(COURSES_DATA[0].id);
  }
}

// Confirmar Reserva y Generar Boarding Pass
function finalizeBooking(course, travelerName, travelerEmail) {
  if (!currentUser) {
    currentUser = {
      name: travelerName || 'Viajero Políglota',
      email: travelerEmail || 'viajero@polyglotmap.com',
      passportNo: 'PM-' + Math.floor(100000 + Math.random() * 900000),
      miles: 1500,
      avatar: '✈️',
      bookedCourses: []
    };
  }

  const alreadyBooked = currentUser.bookedCourses.some(b => b.courseId === course.id);
  if (!alreadyBooked) {
    const seatNumber = `${Math.floor(Math.random() * 25) + 1}${['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)]}`;
    const bookingEntry = {
      courseId: course.id,
      title: course.title,
      flightCode: course.flightCode,
      gate: course.gate,
      seat: seatNumber,
      dateText: `${course.dateMain} (${course.scheduleDays})`,
      timeText: course.scheduleTime,
      bookedAt: new Date().toLocaleDateString('es-PE'),
      qrCodeData: `POLYGLOTMAP|${course.flightCode}|${seatNumber}|${currentUser.passportNo}`
    };

    currentUser.bookedCourses.push(bookingEntry);
    currentUser.miles = (currentUser.miles || 1200) + 500;
    saveUser(currentUser);
  }

  if (course.spotsLeft > 1) {
    course.spotsLeft -= 1;
  }

  renderCourses();
  triggerConfetti();

  closeModal('quickRegisterModal');
  closeModal('loginModal');
  showBoardingPass(course);
}

// =========================================================================
// MÓDULO: BOARDING PASS CON TEMARIO COMPLETO Y BOTONES DE CLASE / ASISTENCIA
// =========================================================================

function showBoardingPass(course) {
  const userBooking = (currentUser && currentUser.bookedCourses) ? (currentUser.bookedCourses.find(b => b.courseId === course.id) || {
    seat: '07A',
    flightCode: course.flightCode,
    gate: course.gate
  }) : { seat: '07A', flightCode: course.flightCode, gate: course.gate };

  const syllabusList = course.syllabus || [];
  const courseAtt = attendanceHistory[course.id] || [];
  const attendanceCount = courseAtt.length;
  const totalSessions = syllabusList.length || 10;

  const modalContent = document.getElementById('boardingPassContent');
  if (modalContent) {
    modalContent.innerHTML = `
      <div class="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ffd200] relative">
        
        <!-- Header de la Tarjeta de Embarque -->
        <div class="bg-[#0e34a0] text-white p-5 sm:p-6 flex items-center justify-between border-b-2 border-dashed border-white/20">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-2xl bg-[#ffd200] text-slate-950 flex items-center justify-center font-black text-2xl shadow">
              ✈️
            </div>
            <div>
              <span class="text-[10px] uppercase tracking-widest font-bold text-yellow-300">Oficial Boarding Pass • Future Ready</span>
              <h4 class="text-xl sm:text-2xl font-black text-white leading-tight">POLYGLOT MAP AIRWAYS</h4>
            </div>
          </div>
          <div class="text-right">
            <span class="inline-block px-3 py-1 bg-[#ffd200] text-slate-950 font-black rounded-lg text-xs uppercase tracking-wider">
              CONFIRMADO • GRATIS
            </span>
            <p class="text-[10px] font-mono text-blue-200 mt-1">Hora Peruana (UTC-5)</p>
          </div>
        </div>

        <!-- Cuerpo del Pase de Abordar -->
        <div class="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          <!-- Metadatos del Pasajero -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4 border-b border-slate-200">
            <div>
              <span class="text-[11px] font-bold uppercase text-slate-400 block">Pasajero / Viajero</span>
              <span class="text-base sm:text-lg font-black text-slate-900 truncate block">${currentUser ? currentUser.name : 'Viajero Políglota'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-slate-400 block">Pasaporte No.</span>
              <span class="text-base sm:text-lg font-mono font-bold text-blue-600 block">${currentUser ? currentUser.passportNo : 'PM-102938'}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-slate-400 block">Vuelo / Código</span>
              <span class="text-base sm:text-lg font-mono font-black text-slate-900 block">${course.flightCode}</span>
            </div>
            <div>
              <span class="text-[11px] font-bold uppercase text-slate-400 block">Asiento Asignado</span>
              <span class="text-xl sm:text-2xl font-mono font-black text-[#0e34a0] block">${userBooking.seat}</span>
            </div>
          </div>

          <!-- Banner del Bootcamp -->
          <div class="bg-blue-50/80 p-4 rounded-2xl border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-black uppercase text-blue-800 tracking-wide">${course.badgeText}</span>
              <h5 class="text-xl sm:text-2xl font-black text-[#0f2d8a]">${course.title}</h5>
              <p class="text-xs text-slate-600 mt-0.5 font-medium">📅 ${course.scheduleDays} | 🕒 ${course.scheduleTime}</p>
            </div>
            <div class="bg-[#ffd200] text-slate-950 px-4 py-2 rounded-xl text-center flex-shrink-0 font-black shadow-sm">
              <span class="text-[10px] block leading-tight">PERÍODO OFICIAL</span>
              <span class="text-base font-black">${course.dateMain}</span>
              <span class="text-[10px] block text-slate-800">${course.dateTo}</span>
            </div>
          </div>

          <!-- BANNER DESTACADO: ABRIR EN PANTALLA COMPLETA ESTILO CREHANA -->
          <div class="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 p-4 sm:p-5 rounded-2xl text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border-2 border-yellow-500">
            <div>
              <span class="text-[10px] font-mono font-black uppercase tracking-widest text-slate-900 bg-black/10 px-2 py-0.5 rounded">
                MODO MICROLEARNING • ESTILO CREHANA
              </span>
              <h5 class="text-lg font-black text-slate-950 mt-1 leading-tight">
                Aula Virtual & Dashboard Completo
              </h5>
              <p class="text-xs text-slate-800 mt-0.5">
                Abre la pantalla completa con reproductor de grabaciones, links de reunión, asistencia en Google Forms y temario detallado.
              </p>
            </div>
            <button onclick="openAulaTab('${course.id}')" class="w-full sm:w-auto bg-slate-950 hover:bg-[#0e34a0] text-yellow-300 font-black px-5 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xl transition-all transform hover:scale-105 active:scale-95 flex-shrink-0 select-none">
              <span>🚀 Abrir en Nueva Pestaña »</span>
            </button>
          </div>

          <!-- ========================================================= -->
          <!-- BOTONES REQUERIDOS: ENTRAR A CLASE, ASISTENCIA, EXAMEN    -->
          <!-- ========================================================= -->
          <div class="bg-slate-900 text-white p-5 rounded-2xl shadow-lg border-2 border-yellow-400/30 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono text-[#ffd200] uppercase font-bold tracking-wider flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                ACCESO DIRECTO A LA SALA DE VUELO
              </span>
              <span class="text-xs font-mono text-slate-300">
                Asistencia: <strong class="text-yellow-300">${attendanceCount}/${totalSessions}</strong> sesiones
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              
              <!-- 1. Botón ENTRAR A LA CLASE -->
              <a href="${course.classLink || 'https://zoom.us'}" target="_blank" class="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black py-3 px-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 text-center group">
                <span class="text-lg group-hover:scale-125 transition-transform">🚀</span>
                <span>Entrar a la Clase</span>
              </a>

              <!-- 2. Botón REGISTRAR ASISTENCIA -->
              <button onclick="recordAttendance('${course.id}')" class="bg-[#ffd200] hover:bg-yellow-400 active:scale-95 text-slate-950 font-black py-3 px-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 text-center">
                <span>📋</span>
                <span>Registrar Asistencia</span>
              </button>

              <!-- 3. Botón EXAMEN FINAL (BLOQUEADO) -->
              <button onclick="handleLockedExam()" class="bg-slate-800 text-slate-400 font-bold py-3 px-4 rounded-xl text-sm border border-slate-700 cursor-not-allowed opacity-80 flex items-center justify-center gap-2 text-center relative group">
                <span class="text-base">🔒</span>
                <span>Examen Final</span>
                <span class="text-[10px] bg-red-500/80 text-white font-bold px-1.5 py-0.5 rounded ml-1 uppercase">Bloqueado</span>
              </button>

            </div>

            <p class="text-[11px] text-slate-400 font-medium text-center pt-1">
              🔒 El examen final se desbloqueará automáticamente en la última sesión para quienes cumplan con la asistencia requerida.
            </p>
          </div>

          <!-- ========================================================= -->
          <!-- TEMARIO COMPLETO PARA TODAS LAS FECHAS MENCIONADAS       -->
          <!-- ========================================================= -->
          <div class="space-y-3 pt-2">
            <div class="flex items-center justify-between border-b pb-2">
              <div>
                <h6 class="text-base sm:text-lg font-black text-[#0e34a0] flex items-center gap-2">
                  <span>📖</span>
                  <span>Temario Oficial & Plan de Vuelo (${syllabusList.length} Sesiones)</span>
                </h6>
                <p class="text-xs text-slate-500">Cronograma sesión por sesión para todas las fechas del bootcamp</p>
              </div>
              <span class="text-xs font-mono bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full font-bold">
                100% En Vivo
              </span>
            </div>

            <div class="space-y-2.5">
              ${syllabusList.map((item, idx) => {
                const isAttended = courseAtt.includes(item.date);
                return `
                  <div class="p-3.5 rounded-xl border transition-all ${isAttended ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200 hover:border-blue-300'}">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div class="flex items-center gap-2 flex-wrap">
                        <span class="bg-[#0e34a0] text-white text-[11px] font-black px-2 py-0.5 rounded font-mono">
                          ${item.session}
                        </span>
                        <span class="text-xs font-bold text-slate-700 flex items-center gap-1">
                          📅 ${item.date}
                        </span>
                        <span class="text-[11px] font-mono text-slate-500">
                          🕒 ${item.time}
                        </span>
                      </div>
                      ${isAttended ? `
                        <span class="inline-flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          ✅ Asistencia Confirmada
                        </span>
                      ` : `
                        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          Programada
                        </span>
                      `}
                    </div>
                    <h6 class="font-bold text-slate-900 text-sm mt-1.5">${item.title}</h6>
                    <p class="text-xs text-slate-600 mt-0.5">${item.desc}</p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Código de Barras y Sellos -->
          <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-dashed border-slate-200">
            <div class="space-y-1 w-full sm:w-1/2">
              <div class="barcode-strip rounded"></div>
              <span class="text-[10px] font-mono text-slate-400 block text-center tracking-widest">PM-ETK-${Math.floor(10000000 + Math.random()*90000000)}</span>
            </div>

            <div class="flex items-center gap-3">
              <div class="passport-stamp text-xs">
                <span>FUTURE</span>
                <span>READY</span>
              </div>
              <div class="passport-stamp green text-xs">
                <span>POLYGLOT</span>
                <span>VERIFIED</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Footer del Modal -->
        <div class="bg-slate-100 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
          <div class="text-xs text-slate-600 font-semibold flex items-center gap-1.5">
            <span>ℹ️ Presenta este boarding pass virtual al inicio de cada clase vía Zoom/Meet.</span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="window.print()" class="bg-slate-800 hover:bg-slate-900 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition">
              <span>🖨️ Imprimir / Guardar PDF</span>
            </button>
            <button onclick="shareTicket('${course.title}')" class="bg-[#ffd200] hover:bg-yellow-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition">
              <span>📲 Compartir por WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    `;
    openModal('boardingPassModal');
  }
}

// Registrar Asistencia
function recordAttendance(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  const todayStr = new Date().toLocaleDateString('es-PE', { weekday: 'long', day: 'numeric', month: 'short' });
  saveAttendance(courseId, todayStr);
  
  if (currentUser) {
    currentUser.miles = (currentUser.miles || 1200) + 150;
    saveUser(currentUser);
  }

  triggerConfetti();
  alertNotification(`¡Asistencia de hoy registrada con éxito! Ganaste +150 millas lingüísticas.`);
  showBoardingPass(course);
}

// Aviso de Examen Final Bloqueado
function handleLockedExam() {
  alert('🔒 Examen Final Bloqueado: Este examen se habilitará oficialmente en la sesión 10 (última semana de clases) para los estudiantes que cuenten con el 100% de asistencia registrada.');
}

// Click en toda la tarjeta del curso
function handleCardClick(courseId) {
  if (!currentUser) {
    handleStartJourneyClick(courseId);
  } else {
    goToClassPanel(courseId);
  }
}

// Click en INICIAR MI VIAJE / USUARIO
function handleStartJourneyClick(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (course) {
    currentBookingCourse = course;
  }
  openModal('loginModal');
}

// Ir al Panel de Clases (aula.html) en pestaña completa
function goToClassPanel(courseId) {
  if (!currentUser) {
    handleStartJourneyClick(courseId);
    return;
  }
  const targetId = courseId || (currentBookingCourse ? currentBookingCourse.id : 'bootcamp-ingles-cero');
  window.open(`aula.html?course=${targetId}`, '_blank');
}

// Compatibilidad
function openAulaTab(courseId) {
  goToClassPanel(courseId);
}

// Ver pase de abordar existente
function viewBoardingPass(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (course) {
    showBoardingPass(course);
  }
}

// Compartir Ticket
function shareTicket(courseTitle) {
  const text = encodeURIComponent(`¡Me acabo de inscribir al ${courseTitle} 100% GRATIS en el Evento Future Ready de Polyglot Map! Reserva tu cupo aquí: https://polyglotmap.com`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

// Constante de Palabra Clave Oficial
const OFFICIAL_PASSCODE = 'GRACIASPOLYGLOTMAP';

// Autocompletar Palabra Clave
function autoFillPasscode() {
  const input = document.getElementById('loginPasscode');
  if (input) {
    input.value = OFFICIAL_PASSCODE;
    input.focus();
  }
}

// Manejar Envío de Formulario con PALABRA CLAVE
function handleLoginFormSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('loginPasscode');
  const errorMsg = document.getElementById('passcodeError');
  const entered = (input ? input.value.trim().toUpperCase() : '');

  // Validación de la palabra clave: GRACIASPOLYGLOTMAP (o si escribió con espacios)
  const normalized = entered.replace(/\s+/g, '');

  if (normalized !== OFFICIAL_PASSCODE) {
    if (errorMsg) errorMsg.classList.remove('hidden');
    if (input) {
      input.classList.add('border-rose-500', 'bg-rose-950/20');
      input.focus();
    }
    return;
  }

  if (errorMsg) errorMsg.classList.add('hidden');

  saveUser({
    name: 'Viajero Políglota',
    email: 'viajero@polyglotmap.com',
    passportNo: 'PM-2026',
    miles: 2500,
    avatar: '👨‍✈️',
    bookedCourses: currentUser ? currentUser.bookedCourses : []
  });

  closeModal('loginModal');
  triggerConfetti();
  alertNotification(`¡Palabra clave correcta! Acceso concedido al Panel de Clases.`);
  
  // Abrir inmediatamente el Panel de Clases
  setTimeout(() => {
    const courseId = currentBookingCourse ? currentBookingCourse.id : 'bootcamp-ingles-cero';
    window.open(`aula.html?course=${courseId}`, '_blank');
  }, 600);
}

// Checkin Rápido
function handleQuickCheckin() {
  autoFillPasscode();
}

// Cerrar Sesión
function handleLogout() {
  if (confirm('¿Deseas cerrar tu sesión de viajero? Tus pases guardados seguirán disponibles al reingresar.')) {
    localStorage.removeItem('polyglot_user');
    currentUser = null;
    updateUIForUser();
    renderCourses();
  }
}

// Mostrar Pasaporte Digital del Viajero
function openPassportModal() {
  if (!currentUser) {
    openModal('loginModal');
    return;
  }

  const passportContainer = document.getElementById('passportContent');
  if (passportContainer) {
    const booked = currentUser.bookedCourses || [];
    passportContainer.innerHTML = `
      <div class="bg-gradient-to-br from-[#071330] via-[#0c2461] to-[#050e26] text-white p-6 sm:p-8 rounded-3xl border-2 border-[#ffd200]/40 shadow-2xl relative overflow-hidden">
        
        <div class="absolute -right-12 -bottom-12 w-64 h-64 rounded-full border-8 border-yellow-400/10 flex items-center justify-center pointer-events-none text-9xl opacity-20">
          🌍
        </div>

        <div class="flex items-center justify-between pb-6 border-b border-white/20">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🛂</span>
            <div>
              <span class="text-xs font-mono tracking-widest text-[#ffd200] block">REPÚBLICA POLÍGLOTA • PASAPORTE DIGITAL</span>
              <h3 class="text-2xl font-black tracking-tight">PASAPORTE DE APRENDIZAJE</h3>
            </div>
          </div>
          <div class="text-right">
            <span class="text-xs font-mono text-sky-300 block">N° DOCUMENTO</span>
            <span class="text-lg font-mono font-black text-[#ffd200]">${currentUser.passportNo}</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 my-6 items-center">
          <div class="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10">
            <div class="w-24 h-24 rounded-2xl bg-gradient-to-tr from-yellow-400 to-amber-200 flex items-center justify-center text-5xl shadow-lg border-2 border-white">
              ${currentUser.avatar || '✈️'}
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-yellow-300 mt-3">Viajero Frecuente</span>
            <span class="text-[11px] text-slate-300">Rango: Políglota Activo</span>
          </div>

          <div class="sm:col-span-2 space-y-3">
            <div>
              <span class="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Nombre Completo</span>
              <span class="text-xl font-black text-white">${currentUser.name}</span>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div>
                <span class="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Correo de Contacto</span>
                <span class="text-sm font-medium text-sky-200 truncate block">${currentUser.email}</span>
              </div>
              <div>
                <span class="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Millas Acumuladas</span>
                <span class="text-base font-black text-[#ffd200] flex items-center gap-1">🌟 ${currentUser.miles || 1200} pts</span>
              </div>
            </div>
            <div class="pt-2">
              <span class="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">Nivel de Idiomas</span>
              <div class="w-full bg-white/10 h-2.5 rounded-full mt-1.5 overflow-hidden">
                <div class="bg-gradient-to-r from-yellow-400 to-emerald-400 h-full rounded-full" style="width: 65%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-white/20 pt-5">
          <h5 class="text-xs uppercase tracking-widest font-mono text-[#ffd200] mb-3 flex items-center gap-1.5">
            <span>✈️ Visas y Bootcamps Registrados (${booked.length})</span>
          </h5>

          ${booked.length === 0 ? `
            <div class="text-center py-6 bg-white/5 rounded-2xl border border-dashed border-white/20">
              <p class="text-sm text-slate-300">Aún no has sellado tu pasaporte con ningún bootcamp.</p>
              <p class="text-xs text-yellow-300 font-semibold mt-1">¡Elige un curso en el catálogo y reserva tu cupo gratis para obtener tu primer sello!</p>
            </div>
          ` : `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${booked.map(b => `
                <div class="p-3 bg-white/10 rounded-xl border border-white/15 flex items-center justify-between">
                  <div>
                    <h6 class="font-bold text-white text-sm">${b.title}</h6>
                    <span class="text-xs font-mono text-sky-200">Vuelo: ${b.flightCode} • Asiento: ${b.seat}</span>
                  </div>
                  <button onclick="viewBoardingPass('${b.courseId}')" class="px-2.5 py-1 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs rounded-lg transition">
                    Pase »
                  </button>
                </div>
              `).join('')}
            </div>
          `}
        </div>

      </div>
    `;
    openModal('passportModal');
  }
}

// Abrir Mis Pases de Abordar
function openMyBookingsModal() {
  if (!currentUser || !currentUser.bookedCourses || currentUser.bookedCourses.length === 0) {
    alertNotification('Aún no tienes pases de abordar. ¡Reserva un bootcamp gratis para emitir tu boleto!');
    return;
  }
  openPassportModal();
}

// =========================================================================
// MÓDULO: GENERADOR DE CREDENCIAL CON SUBIR FOTO & COPY LINKEDIN FUTURE READY
// =========================================================================

function setupCredentialGenerator() {
  const nameInput = document.getElementById('credNameInput');
  const courseSelect = document.getElementById('credCourseSelect');
  const roleSelect = document.getElementById('credRoleSelect');
  const photoInput = document.getElementById('credPhotoInput');

  if (nameInput) {
    nameInput.addEventListener('input', updateCredentialPreview);
  }
  if (courseSelect) {
    courseSelect.addEventListener('change', updateCredentialPreview);
  }
  if (roleSelect) {
    roleSelect.addEventListener('change', updateCredentialPreview);
  }
  if (photoInput) {
    photoInput.addEventListener('change', handleCredentialPhotoUpload);
  }

  updateCredentialFromUser();
  updateCredentialPreview();
}

function updateCredentialFromUser() {
  const nameInput = document.getElementById('credNameInput');
  if (nameInput && currentUser && !nameInput.value) {
    nameInput.value = currentUser.name;
    updateCredentialPreview();
  }
}

function handleCredentialPhotoUpload(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      credentialCustomPhoto = evt.target.result;
      updateCredentialPreview();
      const statusElem = document.getElementById('uploadPhotoStatus');
      if (statusElem) {
        statusElem.innerHTML = `
          <span class="text-emerald-400 font-bold flex items-center gap-1">
            ✅ Foto cargada correctamente.
            <button type="button" onclick="removeUploadedPhoto()" class="text-red-300 hover:text-red-200 underline text-[11px] ml-1">Quitar foto</button>
          </span>
        `;
      }
      alertNotification('¡Foto cargada exitosamente en tu credencial!');
    };
    reader.readAsDataURL(file);
  }
}

function removeUploadedPhoto() {
  credentialCustomPhoto = null;
  const photoInput = document.getElementById('credPhotoInput');
  if (photoInput) photoInput.value = '';
  const statusElem = document.getElementById('uploadPhotoStatus');
  if (statusElem) statusElem.innerHTML = '';
  setCredentialAvatar('👩‍🚀');
  updateCredentialPreview();
  alertNotification('Foto removida. Se restableció el avatar.');
}

function setCredentialAvatar(emoji) {
  credentialCustomPhoto = null;
  const avatarElem = document.getElementById('credBadgeAvatar');
  if (avatarElem) {
    avatarElem.innerHTML = `<span class="text-4xl select-none">${emoji}</span>`;
  }
  const statusElem = document.getElementById('uploadPhotoStatus');
  if (statusElem) statusElem.innerHTML = '';
}

function updateCredentialPreview() {
  const nameInput = document.getElementById('credNameInput');
  const courseSelect = document.getElementById('credCourseSelect');
  const roleSelect = document.getElementById('credRoleSelect');

  const attendeeName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : (currentUser ? currentUser.name : 'Camila Morales');
  const selectedCourseId = courseSelect ? courseSelect.value : 'bootcamp-ingles-cero';
  const attendeeRole = roleSelect ? roleSelect.value : 'PARTICIPANTE OFICIAL';

  const course = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  const nameDisplay = document.getElementById('credBadgeName');
  const roleDisplay = document.getElementById('credBadgeRole');
  const courseDisplay = document.getElementById('credBadgeCourse');
  const scheduleDisplay = document.getElementById('credBadgeSchedule');
  const flagDisplay = document.getElementById('credBadgeFlag');
  const idDisplay = document.getElementById('credBadgeId');
  const avatarElem = document.getElementById('credBadgeAvatar');

  if (nameDisplay) nameDisplay.innerText = attendeeName;
  if (roleDisplay) roleDisplay.innerText = attendeeRole.toUpperCase();
  if (courseDisplay) courseDisplay.innerText = course.title;
  if (scheduleDisplay) scheduleDisplay.innerText = `📅 ${course.scheduleDays} | 🕒 ${course.scheduleTime}`;
  if (flagDisplay) {
    flagDisplay.innerText = course.language === 'Inglés' ? '🇺🇸' : '🇧🇷';
  }
  if (idDisplay) {
    const passNum = currentUser ? currentUser.passportNo : 'PM-2026';
    idDisplay.innerText = `#PM-FUTURE-READY-${course.flightCode}-${passNum.replace('PM-', '')}`;
  }

  if (avatarElem) {
    if (credentialCustomPhoto) {
      avatarElem.innerHTML = `<img src="${credentialCustomPhoto}" class="w-full h-full object-cover rounded-2xl" alt="Foto del Participante" />`;
    }
  }

  // Actualizar también la caja con el copy de LinkedIn en vivo
  updateLinkedInCopyBox(attendeeName, course);
}

// Generar Copy específico para LinkedIn: Evento Future Ready - Bootcamp de Idiomas
function generateLinkedInCopy(attendeeName, course) {
  return `¡Emocionado/a de despegar en un nuevo viaje lingüístico! 🌍✈️

Me acabo de inscribir oficialmente al Evento Future Ready - Bootcamp de Idiomas con Polyglot Map.

📚 Programa: ${course.badgeText} — "${course.title}" (100% Gratuito)
📅 Horario: ${course.scheduleDays} (${course.scheduleTime}) · Hora Peruana (UTC-5)
🚀 Inicio: ${course.dateMain} ${course.dateTo}
📍 Modalidad: Clases en vivo e inmersivas con enfoque de viaje y futuro laboral.

¡Nos vemos en clase! 🎓✨

👉 Reserva tu cupo sin costo y emite tu credencial aquí: https://polyglotmap.com

#PolyglotMap #FutureReady #BootcampIdiomas #Inglés #Portugués #EdTech #AprenderIdiomas #EducaciónGlobal`;
}

function updateLinkedInCopyBox(attendeeName, course) {
  const copyBox = document.getElementById('linkedinCopyText');
  if (copyBox) {
    copyBox.value = generateLinkedInCopy(attendeeName, course);
  }
}

// Copiar Copy de LinkedIn
function copyLinkedInText() {
  const copyBox = document.getElementById('linkedinCopyText');
  if (copyBox) {
    navigator.clipboard.writeText(copyBox.value).then(() => {
      triggerConfetti();
      alertNotification('¡Copy de LinkedIn copiado al portapapeles!');
    }).catch(() => {
      copyBox.select();
      document.execCommand('copy');
      alertNotification('¡Copy copiado al portapapeles!');
    });
  }
}

// Descargar Credencial como Imagen PNG
function downloadCredentialImage() {
  const card = document.getElementById('credentialBadgeCard');
  if (!card) return;

  alertNotification('Generando tu credencial oficial...');

  if (typeof html2canvas === 'function') {
    html2canvas(card, {
      scale: 2.5,
      backgroundColor: null,
      useCORS: true,
      logging: false
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = `Credencial_FutureReady_PolyglotMap_${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      triggerConfetti();
      alertNotification('¡Credencial descargada con éxito! Compártela en LinkedIn.');
    }).catch(err => {
      console.error(err);
      window.print();
    });
  } else {
    window.print();
  }
}

// Compartir Credencial en LinkedIn
function shareCredentialLinkedIn() {
  const nameInput = document.getElementById('credNameInput');
  const courseSelect = document.getElementById('credCourseSelect');

  const attendeeName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : (currentUser ? currentUser.name : 'un Viajero');
  const selectedCourseId = courseSelect ? courseSelect.value : 'bootcamp-ingles-cero';
  const course = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  const shareText = generateLinkedInCopy(attendeeName, course);

  navigator.clipboard.writeText(shareText).then(() => {
    alertNotification('¡Copy copiado al portapapeles! Abriendo LinkedIn...');
  }).catch(() => {});

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://polyglotmap.com')}`;
  window.open(linkedinUrl, '_blank', 'width=650,height=600');
}

// Compartir Credencial en WhatsApp
function shareCredentialWhatsApp() {
  const nameInput = document.getElementById('credNameInput');
  const courseSelect = document.getElementById('credCourseSelect');

  const attendeeName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : (currentUser ? currentUser.name : 'Viajero');
  const selectedCourseId = courseSelect ? courseSelect.value : 'bootcamp-ingles-cero';
  const course = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  const text = encodeURIComponent(`¡Hola! 👋 Me acabo de inscribir al "${course.title}" 100% GRATIS en el Evento Future Ready - Bootcamp de Idiomas de Polyglot Map ✈️. ¡Crea tu credencial de participante y reserva tu cupo aquí: https://polyglotmap.com !`);
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

// Animación de Confetti
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffd200', '#1447e6', '#38bdf8', '#ffffff']
    });
  }
}

// Alertas Flotantes
function alertNotification(msg) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-5 right-5 z-50 bg-slate-900 border-2 border-[#ffd200] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce';
  toast.innerHTML = `
    <span class="text-2xl">✈️</span>
    <span class="text-sm font-bold">${msg}</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// Controladores Genéricos de Modal
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }
}
