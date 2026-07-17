const strings = {
  es: {
    navAbout: 'Sobre mí',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    heroEyebrow: 'Full Stack Developer · Frontend Web & Mobile',
    heroSub: 'Construyo productos web y mobile para marcas globales y clientes propios. Interfaces rápidas, código mantenible y experiencias que se sienten bien.',
    heroCta1: 'Ver proyectos',
    heroCta2: 'Contactame',
    scroll: 'Scroll',
    aboutTitle: 'Sobre mí',
    aboutBody: 'Programo hace ocho años y pasé por casi todas las capas de un producto: frontend, mobile, backend y la puesta en producción.',
    aboutBody2: 'Trabajé con equipos y clientes de Estados Unidos, España, Chile y Argentina. En algunos proyectos lideré el equipo; en otros entré como consultor para ordenar la arquitectura frontend. Me importa el detalle: el rendimiento, la arquitectura y esa sensación de que todo responde como debe. Del lado del servidor me muevo con Node.js y NestJS, despliego con Docker y AWS, y trabajo en inglés a diario (certificado C1).',
    expTitle: 'Trayectoria',
    'experience.0.role': 'Consultor Frontend y Arquitectura',
    'experience.0.org': 'Independiente · Remoto',
    'experience.0.period': '2024 · Hoy',
    'experience.0.desc': 'Asesoro a unas cuatro empresas de producto: arquitectura frontend, estándares de ingeniería, flujos de autenticación seguros y control de releases, trabajando directo con los equipos y stakeholders.',
    'experience.1.role': 'Mobile Developer',
    'experience.1.org': 'DataArt · Nueva York, remoto',
    'experience.1.period': '2023 · Hoy',
    'experience.1.desc': 'Más de diez proyectos entregados: sitios de producto y apps móviles multiplataforma con React, Next.js y React Native para clientes de turismo y consumo masivo, en equipos ágiles junto a backend, QA y producto.',
    'experience.2.role': 'Frontend Developer',
    'experience.2.org': 'Gaia · España, remoto',
    'experience.2.period': '2021',
    'experience.2.desc': 'CRMs, ERPs y sistemas de gestión para estudios odontológicos y jurídicos, además de una aplicación web y móvil para la gestión portuaria en España.',
    'experience.3.role': 'Full Stack Team Lead',
    'experience.3.org': 'Seekitup · Argentina, remoto',
    'experience.3.period': '2019 · 2020',
    'experience.3.desc': 'Lideré el equipo de desarrollo de una app móvil para guardar y organizar enlaces: decisiones técnicas, code reviews y planificación de sprints, programando en React y React Native.',
    'experience.4.role': 'Full Stack Developer',
    'experience.4.org': 'Ewaffle · Chile, remoto',
    'experience.4.period': '2018 · 2019',
    'experience.4.desc': 'Diseñé y desarrollé de punta a punta una plataforma de cursos online junto a los equipos de diseño y producto, con mantenimiento, refactors y mejoras de rendimiento.',
    projTitle: 'Proyectos',
    'projects.0.name': 'FMCG Mobile App',
    'projects.0.desc': 'App móvil para una marca global de consumo masivo, desplegada en múltiples mercados con foco en rendimiento y estabilidad.',
    'projects.1.name': 'Luxury Travel Platform',
    'projects.1.desc': 'Plataforma mobile para una red internacional de agencias de viajes premium, con experiencias de reserva de alto nivel.',
    'projects.2.name': 'Web Freelance',
    'projects.2.desc': 'SPAs y sitios para clientes propios como consultor independiente: producto completo, del frontend a la API.',
    stackTitle: 'Stack',
    contactTitle: 'Contacto',
    contactHeadline: '¿Trabajamos juntos?',
    cvBtn: 'Descargar CV',
    footerNote: 'Hecho con three.js',
  },
  en: {
    navAbout: 'About',
    navProjects: 'Projects',
    navContact: 'Contact',
    heroEyebrow: 'Full Stack Developer · Frontend Web & Mobile',
    heroSub: 'I build web and mobile products for global brands and my own clients. Fast interfaces, maintainable code, and experiences that feel right.',
    heroCta1: 'View projects',
    heroCta2: 'Get in touch',
    scroll: 'Scroll',
    aboutTitle: 'About me',
    aboutBody: 'I have been writing code for eight years, across almost every layer of a product: frontend, mobile, backend and the path to production.',
    aboutBody2: 'I have worked with teams and clients from the US, Spain, Chile and Argentina. On some projects I led the team; on others I came in as a consultant to sort out the frontend architecture. I care about the details: performance, architecture, and that feeling when everything responds the way it should. On the server side I work with Node.js and NestJS, I deploy with Docker and AWS, and I work in English daily (C1 certified).',
    expTitle: 'Experience',
    'experience.0.role': 'Frontend & Architecture Consultant',
    'experience.0.org': 'Independent · Remote',
    'experience.0.period': '2024 · Present',
    'experience.0.desc': 'I advise around four product companies on frontend architecture, engineering standards, secure authentication flows and release control, working directly with teams and stakeholders.',
    'experience.1.role': 'Mobile Developer',
    'experience.1.org': 'DataArt · New York, remote',
    'experience.1.period': '2023 · Present',
    'experience.1.desc': 'Over ten projects delivered: product websites and cross-platform mobile apps with React, Next.js and React Native for travel and consumer-goods clients, in agile teams alongside backend, QA and product.',
    'experience.2.role': 'Frontend Developer',
    'experience.2.org': 'Gaia · Spain, remote',
    'experience.2.period': '2021',
    'experience.2.desc': 'CRMs, ERPs and management systems for dental and legal practices, plus a web and mobile app for port management in Spain.',
    'experience.3.role': 'Full Stack Team Lead',
    'experience.3.org': 'Seekitup · Argentina, remote',
    'experience.3.period': '2019 · 2020',
    'experience.3.desc': 'I led the development team of a mobile app for saving and organizing links: technical decisions, code reviews and sprint planning, coding in React and React Native.',
    'experience.4.role': 'Full Stack Developer',
    'experience.4.org': 'Ewaffle · Chile, remote',
    'experience.4.period': '2018 · 2019',
    'experience.4.desc': 'I designed and built an online course platform end to end together with the design and product teams, with ongoing maintenance, refactors and performance work.',
    projTitle: 'Projects',
    'projects.0.name': 'FMCG Mobile App',
    'projects.0.desc': 'Mobile app for a global consumer-goods brand, deployed across multiple markets with a focus on performance and stability.',
    'projects.1.name': 'Luxury Travel Platform',
    'projects.1.desc': 'Mobile platform for an international network of premium travel agencies, with high-end booking experiences.',
    'projects.2.name': 'Freelance Web',
    'projects.2.desc': 'SPAs and websites for my own clients as an independent consultant: full product, from frontend to API.',
    stackTitle: 'Stack',
    contactTitle: 'Contact',
    contactHeadline: 'Shall we work together?',
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
