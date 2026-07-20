const strings = {
  es: {
    backLink: 'Portafolio',
    downloadLink: 'Descargar PDF',
    cvRole: 'Full Stack Developer · Frontend Web & Mobile',
    summaryTitle: 'Resumen',
    summaryBody: 'Desarrollador full stack con 8 años de experiencia, especializado en frontend web y mobile. Stack centrado en TypeScript: React y Next.js en web, React Native en mobile, Node.js con Express y NestJS en backend, con Docker, CI/CD y AWS en el día a día. Trabajé con equipos y clientes de Estados Unidos, España, Chile y Argentina, liderando equipos y como consultor de arquitectura frontend. Inglés profesional certificado (C1).',
    expTitle: 'Experiencia',
    'experience.0.role': 'Consultor Frontend y Arquitectura',
    'experience.0.org': 'Independiente · Remoto',
    'experience.0.period': 'Ene 2024 · Hoy',
    'experience.0.desc': 'Asesoro a alrededor de cuatro empresas orientadas a producto, definiendo su arquitectura frontend y sus estándares de ingeniería. Diseño flujos de autenticación seguros (JWT con rotación de refresh tokens) e integraciones REST, y establezco procesos de estimación, SLAs y control de releases, trabajando directo con equipos y stakeholders.',
    'experience.1.role': 'Mobile Developer',
    'experience.1.org': 'DataArt · Nueva York, EEUU (remoto)',
    'experience.1.period': 'Ene 2023 · Hoy',
    'experience.1.desc': 'Más de diez proyectos entregados: sitios web de producto y aplicaciones móviles multiplataforma (React, Next.js, React Native) para clientes de turismo y consumo masivo. Trabajo en equipos ágiles junto a backend, QA y product managers, con foco en rendimiento, calidad de código y una experiencia fluida en web, iOS y Android.',
    'experience.2.role': 'Frontend Developer',
    'experience.2.org': 'Gaia · España (remoto)',
    'experience.2.period': 'Ene 2021 · Dic 2021',
    'experience.2.desc': 'CRMs, ERPs y sistemas de gestión para estudios odontológicos y jurídicos, además de una aplicación web y móvil para la gestión portuaria en España. Diseño responsivo, arquitectura de componentes limpia y experiencia consistente entre dispositivos.',
    'experience.3.role': 'Full Stack Team Lead',
    'experience.3.org': 'SeekitUp · Buenos Aires, Argentina (remoto)',
    'experience.3.period': 'Jul 2019 · Dic 2020',
    'experience.3.desc': 'Lideré el equipo de desarrollo de una aplicación móvil para guardar y organizar enlaces. Coordiné decisiones técnicas, code reviews y planificación de sprints, programando activamente en frontend y backend con React y React Native.',
    'experience.4.role': 'Full Stack Developer',
    'experience.4.org': 'eWaffle · Chile (remoto)',
    'experience.4.period': 'Jul 2018 · Jun 2019',
    'experience.4.desc': 'Diseñé y desarrollé de punta a punta una plataforma de aprendizaje online junto a los equipos de diseño y producto, cubriendo frontend y backend, con refactorización, mejoras de rendimiento y documentación para el equipo.',
    skillsLang: 'Lenguajes',
    skillsDb: 'Bases de datos',
    langTitle: 'Idiomas',
    langLine1: 'Español: nativo',
    langLine2: 'Inglés: profesional completo, certificado EF SET C1',
    backBtn: 'Volver al portafolio',
    downloadBtn: 'Descargar PDF',
  },
  en: {
    backLink: 'Portfolio',
    downloadLink: 'Download PDF',
    cvRole: 'Full Stack Developer · Frontend Web & Mobile',
    summaryTitle: 'Summary',
    summaryBody: 'Full stack developer with 8 years of experience, specialized in web and mobile frontend. TypeScript-centered stack: React and Next.js on web, React Native on mobile, Node.js with Express and NestJS on the backend, with Docker, CI/CD and AWS as part of my daily work. I have worked with teams and clients from the US, Spain, Chile and Argentina, both leading teams and as a frontend architecture consultant. Professional English (C1 certified).',
    expTitle: 'Experience',
    'experience.0.role': 'Frontend & Architecture Consultant',
    'experience.0.org': 'Independent · Remote',
    'experience.0.period': 'Jan 2024 · Present',
    'experience.0.desc': 'I advise around four product companies, defining their frontend architecture and engineering standards. I design secure authentication flows (JWT with refresh token rotation) and REST integrations, and set up estimation processes, SLAs and release control, working directly with teams and stakeholders.',
    'experience.1.role': 'Mobile Developer',
    'experience.1.org': 'DataArt · New York, USA (remote)',
    'experience.1.period': 'Jan 2023 · Present',
    'experience.1.desc': 'Over ten projects delivered: product websites and cross-platform mobile apps (React, Next.js, React Native) for travel and consumer-goods clients. I work in agile teams alongside backend, QA and product managers, focused on performance, code quality and a smooth experience across web, iOS and Android.',
    'experience.2.role': 'Frontend Developer',
    'experience.2.org': 'Gaia · Spain (remote)',
    'experience.2.period': 'Jan 2021 · Dec 2021',
    'experience.2.desc': 'CRMs, ERPs and management systems for dental and legal practices, plus a web and mobile app for port management in Spain. Responsive design, clean component architecture and a consistent cross-device experience.',
    'experience.3.role': 'Full Stack Team Lead',
    'experience.3.org': 'SeekitUp · Buenos Aires, Argentina (remote)',
    'experience.3.period': 'Jul 2019 · Dec 2020',
    'experience.3.desc': 'I led the development team of a mobile app for saving and organizing links. I coordinated technical decisions, code reviews and sprint planning while actively coding on both frontend and backend with React and React Native.',
    'experience.4.role': 'Full Stack Developer',
    'experience.4.org': 'eWaffle · Chile (remote)',
    'experience.4.period': 'Jul 2018 · Jun 2019',
    'experience.4.desc': 'I designed and built an online learning platform end to end together with the design and product teams, covering frontend and backend, with refactoring, performance improvements and documentation for the team.',
    skillsLang: 'Languages',
    skillsDb: 'Databases',
    langTitle: 'Languages',
    langLine1: 'Spanish: native',
    langLine2: 'English: full professional, EF SET C1 certified',
    backBtn: 'Back to portfolio',
    downloadBtn: 'Download PDF',
  },
};

const langToggle = document.getElementById('lang-toggle');
let lang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'es';

function applyLang() {
  const dict = strings[lang];
  document.documentElement.lang = lang;
  langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.getAttribute('data-i18n');
    if (dict[key]) node.textContent = dict[key];
  });
}

langToggle.addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  applyLang();
});

applyLang();

const stage = document.querySelector('.cv');
const panels = [...document.querySelectorAll('.cv-panel')];
const depths = [36, 18, 0, -18, -32];
panels.forEach((panel, i) => {
  panel.style.setProperty('--depth', `${depths[i % depths.length]}px`);
});

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reducedMotion) {
  panels.forEach((panel) => panel.classList.add('is-in'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  panels.forEach((panel) => observer.observe(panel));

  let tiltRaf = 0;
  addEventListener('mousemove', (e) => {
    if (tiltRaf) return;
    tiltRaf = requestAnimationFrame(() => {
      tiltRaf = 0;
      const mx = (e.clientX / innerWidth) * 2 - 1;
      const my = (e.clientY / innerHeight) * 2 - 1;
      stage.style.setProperty('--tilt-x', `${(mx * 2.4).toFixed(2)}deg`);
      stage.style.setProperty('--tilt-y', `${(my * -2).toFixed(2)}deg`);
    });
  }, { passive: true });
}
