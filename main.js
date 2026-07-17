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
    aboutBody: 'Soy desarrollador full stack especializado en frontend. Trabajo con React y React Native creando apps que se usan todos los días en múltiples mercados.',
    aboutBody2: 'Me importa el detalle: el rendimiento, la arquitectura y esa sensación de que todo responde como debe. Del lado del servidor me muevo con Node.js y NestJS, y despliego con Docker y AWS.',
    expTitle: 'Trayectoria',
    'experience.0.role': 'Mobile Developer',
    'experience.0.org': 'Marca global de consumo masivo',
    'experience.0.desc': 'Desarrollo de la app móvil oficial de una marca FMCG global, usada en múltiples mercados. React Native, TypeScript, integración con APIs REST y pipelines de CI/CD.',
    'experience.1.role': 'Mobile Developer',
    'experience.1.org': 'Red internacional de viajes premium',
    'experience.1.desc': 'Desarrollo mobile para una red internacional de agencias de viajes de lujo. React Native, TypeScript y servicios sobre AWS.',
    'experience.2.role': 'Consultor independiente',
    'experience.2.org': 'Clientes propios · Freelance',
    'experience.2.desc': 'SPAs y sitios a medida para clientes propios: del diseño al deploy. React, Next.js, Node.js y NestJS.',
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
    aboutBody: 'I’m a full stack developer specialized in frontend. I work with React and React Native building apps used every day across multiple markets.',
    aboutBody2: 'I care about the details: performance, architecture, and that feeling when everything responds the way it should. On the server side I work with Node.js and NestJS, deploying with Docker and AWS.',
    expTitle: 'Experience',
    'experience.0.role': 'Mobile Developer',
    'experience.0.org': 'Global FMCG brand',
    'experience.0.desc': 'Development of the official mobile app for a global FMCG brand, used across multiple markets. React Native, TypeScript, REST API integration and CI/CD pipelines.',
    'experience.1.role': 'Mobile Developer',
    'experience.1.org': 'International luxury travel network',
    'experience.1.desc': 'Mobile development for an international network of premium travel agencies. React Native, TypeScript and AWS services.',
    'experience.2.role': 'Independent Consultant',
    'experience.2.org': 'Own clients · Freelance',
    'experience.2.desc': 'Custom SPAs and websites for my own clients: from design to deploy. React, Next.js, Node.js and NestJS.',
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
