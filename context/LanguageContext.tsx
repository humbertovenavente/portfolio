'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'en' | 'es'

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
  t: (key: string) => string
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  'nav.home': { en: 'Home', es: 'Inicio' },
  'nav.about': { en: 'About', es: 'Sobre mi' },
  'nav.certifications': { en: 'Certifications', es: 'Certificaciones' },
  'nav.experience': { en: 'Experience', es: 'Experiencia' },
  'nav.projects': { en: 'Projects', es: 'Proyectos' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },

  // Hero
  'hero.greeting': { en: "Hello, I'm", es: 'Hola, soy' },
  'hero.role.scrum': { en: 'Scrum Master Certified', es: 'Scrum Master Certificado' },
  'hero.role.fullstack': { en: 'Full Stack Developer', es: 'Desarrollador Full Stack' },
  'hero.role.mobile': { en: 'Mobile App Developer', es: 'Desarrollador de Apps Moviles' },
  'hero.role.web': { en: 'Web Developer', es: 'Desarrollador Web' },
  'hero.role.devops': { en: 'DevOps Developer', es: 'Desarrollador DevOps' },
  'hero.role.qa': { en: 'QA Developer', es: 'Desarrollador QA' },
  'hero.role.pm': { en: 'Junior Project Manager', es: 'Project Manager Junior' },
  'hero.viewProjects': { en: 'View Projects', es: 'Ver Proyectos' },
  'hero.downloadCV': { en: 'Download CV', es: 'Descargar CV' },

  // About
  'about.tag': { en: 'Who I Am', es: 'Quien Soy' },
  'about.title': { en: 'About Me', es: 'Sobre Mi' },
  'about.description': {
    en: 'Computer Science and Systems Engineer, Certified Professional Scrum Master (PSM I), with experience in full-stack development, cloud integration (AWS, Google Cloud, Azure), databases, and AI-driven solutions. I build scalable web applications using the MERN stack, Oracle APEX, Power Apps, and modern frameworks. Strong leadership, agile mindset, and a focus on delivering high-quality results.',
    es: 'Ingeniero en Informatica y Sistemas, Scrum Master Profesional Certificado (PSM I), con experiencia en desarrollo full-stack, integracion en la nube (AWS, Google Cloud, Azure), bases de datos y soluciones impulsadas por IA. Desarrollo aplicaciones web escalables usando MERN stack, Oracle APEX, Power Apps y frameworks modernos. Fuerte liderazgo, mentalidad agil y enfoque en entregar resultados de alta calidad.',
  },
  'about.skills': { en: 'My Work Skills', es: 'Mis Habilidades' },
  'about.technologies': { en: 'Technologies I Work With', es: 'Tecnologias con las que Trabajo' },
  'about.awards': { en: 'Awards & Recognition', es: 'Premios y Reconocimientos' },
  'about.press': { en: 'In the Press', es: 'En la Prensa' },
  'about.pressTitle': {
    en: 'Celebrating university innovation in Guatemala',
    es: 'Celebramos la innovacion universitaria en Guatemala',
  },
  'about.pressDesc': {
    en: 'Featured article about the ILAN Innovation Awards and the university innovation ecosystem in Guatemala.',
    es: 'Articulo destacado sobre los Premios ILAN de Innovacion y el ecosistema de innovacion universitaria en Guatemala.',
  },
  'about.awardTitle': { en: 'ILAN Innovation Awards 2025', es: 'Premios ILAN de Innovacion 2025' },
  'about.awardIssuer': {
    en: 'Israel Innovation Network · Universidad del Istmo',
    es: 'Israel Innovation Network · Universidad del Istmo',
  },
  'about.awardDesc': {
    en: 'Awarded 2nd place for the project "Prototype with Neural Networks and Clustering to Predict Local Fashion Trends" — recognized for work, dedication, and commitment to the benefit of society through innovation.',
    es: 'Segundo lugar por el proyecto "Prototipo con Redes Neuronales y Clustering para Predecir Tendencias de Moda Locales" — reconocido por trabajo, dedicacion y compromiso en beneficio de la sociedad a traves de la innovacion.',
  },

  // Skills
  'skill.frontend': { en: 'Frontend Development', es: 'Desarrollo Frontend' },
  'skill.backend': { en: 'Backend Development', es: 'Desarrollo Backend' },
  'skill.uiux': { en: 'UI/UX Design', es: 'Diseno UI/UX' },
  'skill.mobile': { en: 'Mobile Development', es: 'Desarrollo Movil' },
  'skill.devops': { en: 'DevOps & Cloud', es: 'DevOps y Cloud' },
  'skill.odoo': { en: 'Odoo', es: 'Odoo' },
  'skill.git': { en: 'Git', es: 'Git' },
  'skill.lowcode': { en: 'Low Code Apps', es: 'Apps Low Code' },
  'skill.pm': { en: 'Project Management', es: 'Gestion de Proyectos' },

  // Tech categories
  'tech.languages': { en: 'Programming Languages', es: 'Lenguajes de Programacion' },
  'tech.frameworks': { en: 'Frameworks and libraries', es: 'Frameworks y librerias' },
  'tech.mobile': { en: 'Mobile Applications', es: 'Aplicaciones Moviles' },
  'tech.databases': { en: 'Databases', es: 'Bases de Datos' },
  'tech.lowcode': { en: 'Low-Code', es: 'Low-Code' },
  'tech.cicd': { en: 'CI/CD', es: 'CI/CD' },
  'tech.tools': { en: 'Tools', es: 'Herramientas' },

  // Certifications
  'cert.tag': { en: 'Achievements', es: 'Logros' },
  'cert.title': { en: 'Certifications', es: 'Certificaciones' },
  'cert.description': {
    en: 'Professional certifications and courses that demonstrate my commitment to continuous learning and skill development.',
    es: 'Certificaciones profesionales y cursos que demuestran mi compromiso con el aprendizaje continuo y el desarrollo de habilidades.',
  },

  // Experience
  'exp.tag': { en: 'My Journey', es: 'Mi Trayectoria' },
  'exp.title': { en: 'Work Experience', es: 'Experiencia Laboral' },
  'exp.description': {
    en: 'A timeline of my professional experience and internships that have shaped my career.',
    es: 'Una linea de tiempo de mi experiencia profesional y pasantias que han formado mi carrera.',
  },
  'exp.employment': { en: 'Employment', es: 'Empleo' },
  'exp.internships': { en: 'Internships', es: 'Pasantias' },

  // Experience items
  'exp.apparel.title': { en: 'AI Application Developer', es: 'Desarrollador de Aplicaciones IA' },
  'exp.apparel.period': { en: 'Dec 2025 - Present', es: 'Dic 2025 - Presente' },
  'exp.apparel.desc': {
    en: "I contribute to the continuous development and maintenance of the company\u2019s workflows by building and integrating artificial intelligence solutions.",
    es: 'Contribuyo al desarrollo continuo y mantenimiento de los flujos de trabajo de la empresa construyendo e integrando soluciones de inteligencia artificial.',
  },
  'exp.imagen.title': { en: 'Freelance Web Developer', es: 'Desarrollador Web Freelance' },
  'exp.imagen.period': { en: 'May 2025 - Present', es: 'May 2025 - Presente' },
  'exp.imagen.desc': {
    en: 'Freelance web developer with experience in HTML, CSS, JavaScript, and PostgreSQL databases, developing a project with AWS cloud integration for a company operating in Guatemala and providing system maintenance.',
    es: 'Desarrollador web freelance con experiencia en HTML, CSS, JavaScript y bases de datos PostgreSQL, desarrollando un proyecto con integracion en la nube AWS para una empresa en Guatemala y brindando mantenimiento de sistemas.',
  },
  'exp.besteco.title': { en: 'Project Manager & Full Stack Developer', es: 'Project Manager y Desarrollador Full Stack' },
  'exp.besteco.period': { en: 'Feb 2025 - Present', es: 'Feb 2025 - Presente' },
  'exp.besteco.desc': {
    en: 'I led software development project for U.S.-based company as a Project Manager, overseeing a team and solutions using the MERN stack and SCRUM methodology and full stack developer.',
    es: 'Lidere un proyecto de desarrollo de software para una empresa de EE.UU. como Project Manager, supervisando un equipo y soluciones usando MERN stack y metodologia SCRUM como desarrollador full stack.',
  },
  'exp.bantrab.title': { en: 'Development Intern', es: 'Pasante de Desarrollo' },
  'exp.bantrab.period': { en: 'May 2025 - Aug 2025', es: 'May 2025 - Ago 2025' },
  'exp.bantrab.desc': {
    en: 'I participated in the creation of an application in the area of Digital Innovations using Microsoft Power Apps with SQL Server.',
    es: 'Participe en la creacion de una aplicacion en el area de Innovaciones Digitales usando Microsoft Power Apps con SQL Server.',
  },
  'exp.myapp.title': { en: 'Cloud Solutions Intern', es: 'Pasante de Soluciones Cloud' },
  'exp.myapp.period': { en: 'May 2024 - Aug 2024', es: 'May 2024 - Ago 2024' },
  'exp.myapp.desc': {
    en: 'I learned concepts related to cloud solutions using Amazon Web Services (AWS).',
    es: 'Aprendi conceptos relacionados con soluciones en la nube usando Amazon Web Services (AWS).',
  },
  'exp.byte.title': { en: 'Frontend Developer Intern', es: 'Pasante de Desarrollo Frontend' },
  'exp.byte.period': { en: 'May 2023 - Aug 2023', es: 'May 2023 - Ago 2023' },
  'exp.byte.desc': {
    en: 'I collaborated on a project utilizing Angular Material, focusing on creating user-friendly interface for web application. (Frontend)',
    es: 'Colabore en un proyecto utilizando Angular Material, enfocado en crear interfaces amigables para aplicaciones web. (Frontend)',
  },
  'exp.viscosity.title': { en: 'Development Intern', es: 'Pasante de Desarrollo' },
  'exp.viscosity.period': { en: 'May 2022 - Aug 2022', es: 'May 2022 - Ago 2022' },
  'exp.viscosity.desc': {
    en: "I contributed to the development project using Oracle APEX, enhancing the company's workflow and user interface.",
    es: 'Contribui al proyecto de desarrollo usando Oracle APEX, mejorando el flujo de trabajo y la interfaz de usuario de la empresa.',
  },

  // Projects
  'proj.tag': { en: 'My Work', es: 'Mi Trabajo' },
  'proj.title': { en: 'Featured Projects', es: 'Proyectos Destacados' },
  'proj.description': {
    en: "Here you can see some of the projects I've worked on. Each one represents a unique challenge and an opportunity to learn and grow.",
    es: 'Aqui puedes ver algunos de los proyectos en los que he trabajado. Cada uno representa un desafio unico y una oportunidad para aprender y crecer.',
  },
  'proj.playDemo': { en: 'Play demo', es: 'Ver demo' },
  'proj.code': { en: 'Code', es: 'Codigo' },
  'proj.document': { en: 'Document', es: 'Documento' },
  'proj.presentation': { en: 'Presentation', es: 'Presentacion' },
  'proj.video': { en: 'Video', es: 'Video' },

  // Project descriptions
  'proj.makeup.title': { en: 'Makeup e-commerce', es: 'E-commerce de Maquillaje' },
  'proj.makeup.desc': {
    en: 'This project is a makeup e-commerce platform built with TypeScript, React, and Next.js. It offers fast product browsing, responsive UI, and a smooth shopping experience. Hosted on Google Cloud Platform and powered by PostgreSQL, it delivers secure data handling, scalable infrastructure, and reliable performance for managing products, users, and orders.',
    es: 'Este proyecto es una plataforma de e-commerce de maquillaje construida con TypeScript, React y Next.js. Ofrece navegacion rapida de productos, interfaz responsiva y una experiencia de compra fluida. Alojado en Google Cloud Platform con PostgreSQL, brinda manejo seguro de datos, infraestructura escalable y rendimiento confiable.',
  },
  'proj.ontask.title': { en: 'OnTaskTech', es: 'OnTaskTech' },
  'proj.ontask.desc': {
    en: 'OnTaskTech is a modern productivity and company-management platform built with the MERN stack. The system allows users to manage companies, projects, employees, subscriptions, payroll settings, and client interactions through a clean, responsive interface. It includes features such as dynamic dashboards, business-line grouping, project creation, user roles, secure authentication, insurer integrations, and real-time data updates via React Context. The goal is to provide an efficient, scalable tool that centralizes business operations for teams of any size.',
    es: 'OnTaskTech es una plataforma moderna de productividad y gestion empresarial construida con MERN stack. El sistema permite gestionar empresas, proyectos, empleados, suscripciones, nomina e interacciones con clientes a traves de una interfaz limpia y responsiva. Incluye dashboards dinamicos, agrupacion por lineas de negocio, creacion de proyectos, roles de usuario, autenticacion segura e integraciones en tiempo real.',
  },
  'proj.fashion.title': { en: 'FashionSense AI', es: 'FashionSense AI' },
  'proj.fashion.desc': {
    en: 'My prototype (Winner of ILAN 2025) revolutionizes Guatemalan fashion trend analysis through advanced artificial intelligence. Our system combines specialized deep learning models with clustering algorithms to identify unique patterns in local fashion. We use a MobileNetV2 model trained specifically for Guatemalan fashion, processing more than 16,000 images organized into 150 trend clusters to deliver accurate and reliable analysis.',
    es: 'Mi prototipo (Ganador de ILAN 2025) revoluciona el analisis de tendencias de moda guatemalteca a traves de inteligencia artificial avanzada. Nuestro sistema combina modelos de deep learning con algoritmos de clustering para identificar patrones unicos en la moda local. Usamos un modelo MobileNetV2 entrenado especificamente para moda guatemalteca, procesando mas de 16,000 imagenes organizadas en 150 clusters.',
  },
  'proj.jenkins.title': { en: 'Continuous Integration with Jenkins and SonarQube', es: 'Integracion Continua con Jenkins y SonarQube' },
  'proj.jenkins.desc': {
    en: 'Integration of Jenkins and SonarQube to implement a Continuous Integration (CI) pipeline that compiles the code, runs automated tests, and performs code quality analysis. The pipeline is triggered on every change to the repository, generates coverage reports, and validates quality gates before allowing deployment to subsequent environments.',
    es: 'Integracion de Jenkins y SonarQube para implementar un pipeline de Integracion Continua (CI) que compila el codigo, ejecuta pruebas automatizadas y realiza analisis de calidad. El pipeline se activa con cada cambio en el repositorio, genera reportes de cobertura y valida quality gates antes de permitir el despliegue.',
  },
  'proj.odoo.title': { en: 'Odoo Automations', es: 'Automatizaciones Odoo' },
  'proj.odoo.desc': {
    en: 'In this video I show you how I automated content generation for teams using Odoo, Slack, Trello and Power BI in a single integrated flow.',
    es: 'En este video muestro como automatice la generacion de contenido para equipos usando Odoo, Slack, Trello y Power BI en un solo flujo integrado.',
  },

  // Contact
  'contact.tag': { en: 'Get In Touch', es: 'Contactame' },
  'contact.title': { en: "Let's Work Together", es: 'Trabajemos Juntos' },
  'contact.description': {
    en: "Have a project in mind? I'd love to hear about it. I'm always open to discussing new opportunities and collaborations.",
    es: 'Tienes un proyecto en mente? Me encantaria saber mas. Siempre estoy abierto a discutir nuevas oportunidades y colaboraciones.',
  },
  'contact.info': { en: 'Contact Information', es: 'Informacion de Contacto' },
  'contact.email': { en: 'Email', es: 'Correo' },
  'contact.phone': { en: 'Phone', es: 'Telefono' },
  'contact.location': { en: 'Location', es: 'Ubicacion' },
  'contact.available': {
    en: "I'm available for freelance projects and job opportunities. If you have any questions or want to discuss a project, feel free to contact me.",
    es: 'Estoy disponible para proyectos freelance y oportunidades laborales. Si tienes alguna pregunta o quieres discutir un proyecto, no dudes en contactarme.',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'))

  const t = (key: string): string => {
    return translations[key]?.[lang] || key
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
  return context
}
