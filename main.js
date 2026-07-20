const strings = {
  es: {
    navAbout: 'Sobre mí',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    heroEyebrow: 'Full Stack Developer · Frontend Web & Mobile',
    heroSub: 'Construyo productos web y mobile para marcas globales y clientes propios. Interfaces rápidas, código mantenible y atención al detalle.',
    heroCta1: 'Ver proyectos',
    heroCta2: 'Hablemos',
    scroll: 'Scroll',
    aboutTitle: 'Sobre mí',
    aboutBody: 'Llevo ocho años desarrollando software y pasé por casi todas las capas de un producto: frontend, mobile, backend y la puesta en producción.',
    aboutBody2: 'Trabajé con equipos y clientes de Estados Unidos, España, Chile y Argentina. En algunos proyectos lideré el equipo; en otros entré como consultor para ordenar la arquitectura frontend. Me importa que el producto responda como debe: el rendimiento, la arquitectura y la experiencia final. Del lado del servidor trabajo con Node.js y NestJS, despliego con Docker y AWS, y uso el inglés a diario (certificado C1).',
    expTitle: 'Trayectoria',
    'experience.0.role': 'Consultor Frontend y Arquitectura',
    'experience.0.org': 'Independiente · Remoto',
    'experience.0.period': '2024 · Hoy',
    'experience.0.desc': 'Asesoro a varias empresas de producto en arquitectura frontend, estándares de ingeniería, flujos de autenticación seguros y control de releases, en contacto directo con los equipos y stakeholders.',
    'experience.1.role': 'Mobile Developer',
    'experience.1.org': 'DataArt · Nueva York, remoto',
    'experience.1.period': '2023 · Hoy',
    'experience.1.desc': 'Más de diez proyectos entregados: sitios de producto y apps móviles multiplataforma con React, Next.js y React Native para clientes de turismo y consumo masivo, en equipos ágiles junto a backend, QA y producto.',
    'experience.2.role': 'Frontend Developer',
    'experience.2.org': 'Gaia · España, remoto',
    'experience.2.period': '2021',
    'experience.2.desc': 'CRMs, ERPs y sistemas de gestión para estudios odontológicos y jurídicos, además de una aplicación web y móvil para la gestión portuaria en España.',
    'experience.3.role': 'Full Stack Team Lead',
    'experience.3.org': 'SeekitUp · Argentina, remoto',
    'experience.3.period': '2019 · 2020',
    'experience.3.desc': 'Lideré el equipo de desarrollo de una app móvil para guardar y organizar enlaces: decisiones técnicas, code reviews y planificación de sprints, programando en React y React Native.',
    'experience.4.role': 'Full Stack Developer',
    'experience.4.org': 'eWaffle · Chile, remoto',
    'experience.4.period': '2018 · 2019',
    'experience.4.desc': 'Diseñé y desarrollé de punta a punta una plataforma de cursos online junto a los equipos de diseño y producto, con mantenimiento, refactors y mejoras de rendimiento.',
    projTitle: 'Proyectos',
    'projects.0.name': 'FMCG Mobile App',
    'projects.0.desc': 'App móvil para una marca global de consumo masivo, publicada en App Store y Google Play y usada en múltiples mercados, con foco en rendimiento y estabilidad.',
    'projects.1.name': 'Luxury Travel Platform',
    'projects.1.desc': 'Plataforma mobile para una red internacional de agencias de viajes premium: reservas con datos dinámicos vía APIs REST y tests unitarios y de integración.',
    'projects.2.name': 'Enterprise CRM & Operations',
    'projects.2.desc': 'Arquitectura frontend modular con control de acceso por roles y JWT, librería de componentes compartida entre unidades de negocio y feature flags para despliegues controlados.',
    'projects.3.name': 'Secure Mobile App',
    'projects.3.desc': 'Autenticación biométrica, almacenamiento seguro de tokens y APIs cifradas, con sincronización en background y releases gestionados en App Store y Google Play.',
    'projects.4.name': 'Web Freelance',
    'projects.4.desc': 'SPAs y sitios para clientes propios como consultor independiente: producto completo, del frontend a la API.',
    'projects.5.name': 'Este sitio',
    'projects.5.desc': 'Este mismo portafolio: estático, sin framework, con la escena 3D en three.js como web component y menos de 700 KB de JavaScript. Código abierto.',
    stackTitle: 'Stack',
    contactTitle: 'Contacto',
    contactHeadline: '¿Trabajamos juntos?',
    cvViewBtn: 'Ver CV',
    cvBtn: 'Descargar CV',
    footerNote: 'Hecho con three.js',
  },
  en: {
    navAbout: 'About',
    navProjects: 'Projects',
    navContact: 'Contact',
    heroEyebrow: 'Full Stack Developer · Frontend Web & Mobile',
    heroSub: 'I build web and mobile products for global brands and my own clients. Fast interfaces, maintainable code and careful attention to detail.',
    heroCta1: 'View projects',
    heroCta2: 'Get in touch',
    scroll: 'Scroll',
    aboutTitle: 'About me',
    aboutBody: 'I have been writing code for eight years, across almost every layer of a product: frontend, mobile, backend and the path to production.',
    aboutBody2: 'I have worked with teams and clients from the US, Spain, Chile and Argentina. On some projects I led the team; on others I came in as a consultant to bring order to the frontend architecture. I care about how a product responds: performance, architecture and the final experience. On the server side I work with Node.js and NestJS, I deploy with Docker and AWS, and I work in English daily (C1 certified).',
    expTitle: 'Experience',
    'experience.0.role': 'Frontend & Architecture Consultant',
    'experience.0.org': 'Independent · Remote',
    'experience.0.period': '2024 · Present',
    'experience.0.desc': 'I advise several product companies on frontend architecture, engineering standards, secure authentication flows and release control, working directly with teams and stakeholders.',
    'experience.1.role': 'Mobile Developer',
    'experience.1.org': 'DataArt · New York, remote',
    'experience.1.period': '2023 · Present',
    'experience.1.desc': 'Over ten projects delivered: product websites and cross-platform mobile apps with React, Next.js and React Native for travel and consumer-goods clients, in agile teams alongside backend, QA and product.',
    'experience.2.role': 'Frontend Developer',
    'experience.2.org': 'Gaia · Spain, remote',
    'experience.2.period': '2021',
    'experience.2.desc': 'CRMs, ERPs and management systems for dental and legal practices, plus a web and mobile app for port management in Spain.',
    'experience.3.role': 'Full Stack Team Lead',
    'experience.3.org': 'SeekitUp · Argentina, remote',
    'experience.3.period': '2019 · 2020',
    'experience.3.desc': 'I led the development team of a mobile app for saving and organizing links: technical decisions, code reviews and sprint planning, coding in React and React Native.',
    'experience.4.role': 'Full Stack Developer',
    'experience.4.org': 'eWaffle · Chile, remote',
    'experience.4.period': '2018 · 2019',
    'experience.4.desc': 'I designed and built an online course platform end to end together with the design and product teams, with ongoing maintenance, refactors and performance work.',
    projTitle: 'Projects',
    'projects.0.name': 'FMCG Mobile App',
    'projects.0.desc': 'Mobile app for a global consumer-goods brand, published on the App Store and Google Play and used across multiple markets, with a focus on performance and stability.',
    'projects.1.name': 'Luxury Travel Platform',
    'projects.1.desc': 'Mobile platform for an international network of premium travel agencies: bookings with dynamic data through REST APIs, plus unit and integration tests.',
    'projects.2.name': 'Enterprise CRM & Operations',
    'projects.2.desc': 'Modular frontend architecture with role-based access control and JWT, a component library shared across business units, and feature flags for controlled rollouts.',
    'projects.3.name': 'Secure Mobile App',
    'projects.3.desc': 'Biometric authentication, secure token storage and encrypted APIs, with background sync and releases managed on the App Store and Google Play.',
    'projects.4.name': 'Freelance Web',
    'projects.4.desc': 'SPAs and websites for my own clients as an independent consultant: full product, from frontend to API.',
    'projects.5.name': 'This site',
    'projects.5.desc': 'This very portfolio: static, no framework, with the three.js scene as a web component and under 700 KB of JavaScript. Open source.',
    stackTitle: 'Stack',
    contactTitle: 'Contact',
    contactHeadline: 'Want to work together?',
    cvViewBtn: 'View CV',
    cvBtn: 'Download CV',
    footerNote: 'Built with three.js',
  },
};

function setupLanguageToggle() {
  const toggle = document.getElementById('lang-toggle');
  let lang = 'es';

  const apply = () => {
    const dict = strings[lang];
    document.documentElement.lang = lang;
    toggle.textContent = lang === 'es' ? 'EN' : 'ES';
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      if (dict[key]) node.textContent = dict[key];
    });
  };

  toggle.addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    apply();
  });
}

function stampCurrentYear() {
  document.getElementById('year').textContent = String(new Date().getFullYear());
}

function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shown');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
}

setupLanguageToggle();
stampCurrentYear();
setupScrollReveal();
