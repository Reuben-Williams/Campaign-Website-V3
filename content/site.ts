export type Language = "en" | "es";

const imageSources = {
  hero: "/images/campaign/carmen-leaders.jpg",
  community: "/images/campaign/carmen-family-bike-event.jpg",
  table: "/images/campaign/carmen-community-table.jpg",
  listening: "/images/campaign/community-listening-session.jpg",
  literature: "/images/campaign/campaign-literature.jpg",
  civic: "/images/campaign/carmen-civic-event.jpg",
  portrait: "/images/campaign/carmen-community-portrait.jpg",
};

export const siteCopy = {
  en: {
    siteConfig: {
      name: "Carmen T. Morales",
      shortName: "Morales for Assembly",
      office: "Assemblywoman",
      jurisdiction: "New Jersey Legislative District 34",
      repoBasePath: "/Campaign-Website-V3",
      description:
        "A modern campaign website for Carmen T. Morales focused on community service, constituent connection, and practical local priorities.",
      paidFor: "Paid for by Morales for Assembly",
    },
    labels: {
      mainNavigation: "Main navigation",
      mobileNavigation: "Mobile navigation",
      brandHome: "Morales for Assembly home",
      donate: "Donate",
      menu: "Menu",
      close: "Close",
      languageSwitch: "Español",
      languageAria: "Switch site language to Spanish",
    },
    navItems: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Issues", href: "/issues" },
      { label: "Events", href: "/events" },
      { label: "News", href: "/news" },
      { label: "Volunteer", href: "/volunteer" },
    ],
    images: {
      hero: {
        src: imageSources.hero,
        alt: "Carmen Morales with state and community leaders inside a civic chamber.",
      },
      community: {
        src: imageSources.community,
        alt: "Carmen Morales greeting a young family at an outdoor neighborhood event.",
      },
      table: {
        src: imageSources.table,
        alt: "Carmen Morales and residents at a community table during a local event.",
      },
      listening: {
        src: imageSources.listening,
        alt: "Residents gathered around tables during a community listening session.",
      },
      literature: {
        src: imageSources.literature,
        alt: "Morales campaign literature and voter information at an event table.",
      },
      civic: {
        src: imageSources.civic,
        alt: "Carmen Morales participating in a civic community event.",
      },
      portrait: {
        src: imageSources.portrait,
        alt: "Carmen Morales with neighbors and community members.",
      },
    },
    priorities: [
      {
        title: "Affordability and opportunity",
        label: "Economy",
        body: "Support practical policies that help working families keep more stability in their monthly budgets and build long-term opportunity.",
      },
      {
        title: "Safe, connected neighborhoods",
        label: "Community",
        body: "Invest in safer streets, responsive services, and neighborhood partnerships that make public life stronger block by block.",
      },
      {
        title: "Schools and youth programs",
        label: "Education",
        body: "Champion the classrooms, after-school programs, and career pathways that give young people room to grow.",
      },
      {
        title: "Responsive constituent service",
        label: "Service",
        body: "Keep government accessible with clear communication, local office hours, and follow-through when residents need help.",
      },
    ],
    events: [
      {
        title: "Community Listening Session",
        date: "July 18",
        time: "6:00 PM",
        location: "District office and community partners",
        body: "An open conversation on local priorities, affordability, and resident services.",
      },
      {
        title: "Weekend Canvass Launch",
        date: "July 27",
        time: "10:00 AM",
        location: "Campaign field office",
        body: "Volunteer training, turf assignments, and a morning neighborhood launch.",
      },
      {
        title: "Family Resource Fair",
        date: "August 9",
        time: "12:00 PM",
        location: "Local community center",
        body: "A family-friendly event connecting residents with services and campaign updates.",
      },
    ],
    news: [
      {
        title: "Morales campaign opens new volunteer shifts",
        date: "June 28, 2026",
        body: "The campaign is expanding weekend field shifts for residents who want to help with voter contact, events, and outreach.",
      },
      {
        title: "Community leaders join district roundtable",
        date: "June 14, 2026",
        body: "Local leaders met with Carmen Morales to discuss public safety, youth programs, and everyday constituent service.",
      },
      {
        title: "Campaign releases summer organizing calendar",
        date: "May 31, 2026",
        body: "The summer calendar includes canvass launches, phone banks, listening sessions, and neighborhood visibility events.",
      },
    ],
    endorsements: [
      "Local educators",
      "Small business advocates",
      "Public service leaders",
      "Neighborhood volunteers",
      "Labor and community partners",
      "Families across the district",
    ],
    volunteerRoles: [
      "Knock doors with trained team leads",
      "Make calls and send voter texts",
      "Host a neighborhood conversation",
      "Help staff campaign events",
      "Share campaign updates online",
      "Prepare literature and signs",
    ],
    footer: {
      body:
        "A polished campaign website built for residents, supporters, volunteers, and public updates.",
      navigationHeading: "Navigation",
      actionHeading: "Take Action",
      contribute: "Contribute",
      volunteer: "Volunteer",
      updates: "Campaign Updates",
      actionLinksLabel: "Campaign action links",
      footerNavigationLabel: "Footer navigation",
    },
    sections: {
      priorities: {
        eyebrow: "Campaign priorities",
        heading: "Focused on the everyday work residents can feel.",
        body:
          "These issue areas keep the campaign message clear, local, and easy for residents to scan.",
      },
      about: {
        eyebrow: "About Carmen",
        heading: "Visible, accessible, and present in the district.",
        body:
          "This version uses real campaign photography so the site feels specific to Carmen Morales from the first screen.",
        readBio: "Read Bio",
        attendEvent: "Attend Event",
      },
      events: {
        eyebrow: "Events",
        heading: "Organizing calendar",
        body: "Use this area for real campaign events once dates are confirmed.",
      },
      donate: {
        eyebrow: "Donate",
        heading: "Ready for a real contribution provider later.",
        body:
          "This page keeps contribution controls informational until the campaign selects its final compliance and payment provider.",
        chooseAmount: "Choose an amount",
        disabled: "Contribution processing is intentionally disabled until the provider is selected.",
        helpAnotherWay: "Help Another Way",
      },
      endorsements: {
        eyebrow: "Endorsements",
        heading: "Support that can grow into a verified endorsements page.",
        body:
          "This page lists endorsement categories until the campaign confirms the final public names, logos, and approval language.",
        label: "Supporter",
      },
      news: {
        eyebrow: "News",
        heading: "Campaign updates",
        body:
          "Campaign update cards are ready for confirmed announcements and publishing workflows.",
      },
      volunteer: {
        eyebrow: "Volunteer",
        heading: "Build the field program one conversation at a time.",
        body:
          "The form below shows the intended supporter experience and can connect to the campaign's selected intake workflow later.",
      },
      volunteerForm: {
        eyebrow: "Sign up",
        heading: "Volunteer interest form",
        body: "These fields show the intended experience without collecting supporter data yet.",
        formLabel: "Volunteer interest form",
        firstName: "First name",
        lastName: "Last name",
        email: "Email address",
        phone: "Phone number",
        note: "Submissions can be wired to the campaign's intake workflow once it is selected.",
        submit: "Submit Interest",
      },
      heroCaption: "Local campaign photography now powers the site.",
    },
    pages: {
      home: {
        title: "Carmen T. Morales for Assembly",
        eyebrow: "Community-first leadership",
        heading: "A campaign built around service, access, and local results.",
        body:
          "Carmen Morales is organizing with residents, families, and community partners to keep government close to the people it serves.",
        image: "hero",
      },
      about: {
        title: "About Carmen",
        eyebrow: "Public service",
        heading: "Rooted in community. Focused on follow-through.",
        body:
          "Carmen Morales brings a hands-on approach to public service, grounded in neighborhood relationships and direct constituent support.",
        image: "community",
      },
      issues: {
        title: "Issues",
        eyebrow: "Campaign priorities",
        heading: "Practical priorities for New Jersey families.",
        body:
          "The campaign is focused on clear, everyday concerns: affordability, safety, education, and responsive service.",
        image: "table",
      },
      events: {
        title: "Events",
        eyebrow: "On the ground",
        heading: "Meet the campaign in your neighborhood.",
        body: "Join upcoming events, volunteer launches, and listening sessions across the district.",
        image: "listening",
      },
      donate: {
        title: "Donate",
        eyebrow: "Power the campaign",
        heading: "Help reach more voters before Election Day.",
        body:
          "Grassroots contributions help fund field outreach, voter materials, digital tools, and community events.",
        image: "civic",
      },
      endorsements: {
        title: "Endorsements",
        eyebrow: "Community support",
        heading: "A coalition of neighbors, workers, families, and local leaders.",
        body:
          "The campaign is built with people who believe in accessible, service-driven representation.",
        image: "civic",
      },
      news: {
        title: "News",
        eyebrow: "Campaign updates",
        heading: "Latest updates from the trail.",
        body: "Follow organizing updates, event announcements, and campaign news as the site grows.",
        image: "portrait",
      },
      volunteer: {
        title: "Volunteer",
        eyebrow: "Join the team",
        heading: "There is a role for every supporter.",
        body:
          "Help the campaign connect with voters through canvassing, calls, events, and neighbor-to-neighbor outreach.",
        image: "community",
      },
    },
  },
  es: {
    siteConfig: {
      name: "Carmen T. Morales",
      shortName: "Morales for Assembly",
      office: "Asambleísta",
      jurisdiction: "Distrito Legislativo 34 de Nueva Jersey",
      repoBasePath: "/Campaign-Website-V3",
      description:
        "Un sitio moderno de campaña para Carmen T. Morales centrado en el servicio comunitario, la conexión con residentes y prioridades locales prácticas.",
      paidFor: "Pagado por Morales for Assembly",
    },
    labels: {
      mainNavigation: "Navegación principal",
      mobileNavigation: "Navegación móvil",
      brandHome: "Inicio de Morales for Assembly",
      donate: "Donar",
      menu: "Menú",
      close: "Cerrar",
      languageSwitch: "English",
      languageAria: "Cambiar el idioma del sitio a inglés",
    },
    navItems: [
      { label: "Inicio", href: "/" },
      { label: "Sobre Carmen", href: "/about" },
      { label: "Prioridades", href: "/issues" },
      { label: "Eventos", href: "/events" },
      { label: "Noticias", href: "/news" },
      { label: "Voluntariado", href: "/volunteer" },
    ],
    images: {
      hero: {
        src: imageSources.hero,
        alt: "Carmen Morales con líderes estatales y comunitarios dentro de una cámara cívica.",
      },
      community: {
        src: imageSources.community,
        alt: "Carmen Morales saluda a una familia joven en un evento comunitario al aire libre.",
      },
      table: {
        src: imageSources.table,
        alt: "Carmen Morales y residentes en una mesa comunitaria durante un evento local.",
      },
      listening: {
        src: imageSources.listening,
        alt: "Residentes reunidos alrededor de mesas durante una sesión de escucha comunitaria.",
      },
      literature: {
        src: imageSources.literature,
        alt: "Materiales de campaña de Morales e información para votantes en una mesa de evento.",
      },
      civic: {
        src: imageSources.civic,
        alt: "Carmen Morales participa en un evento cívico comunitario.",
      },
      portrait: {
        src: imageSources.portrait,
        alt: "Carmen Morales con vecinos y miembros de la comunidad.",
      },
    },
    priorities: [
      {
        title: "Asequibilidad y oportunidades",
        label: "Economía",
        body:
          "Apoyar políticas prácticas que ayuden a las familias trabajadoras a mantener más estabilidad en sus presupuestos mensuales y crear oportunidades a largo plazo.",
      },
      {
        title: "Vecindarios seguros y conectados",
        label: "Comunidad",
        body:
          "Invertir en calles más seguras, servicios receptivos y alianzas vecinales que fortalezcan la vida pública cuadra por cuadra.",
      },
      {
        title: "Escuelas y programas juveniles",
        label: "Educación",
        body:
          "Defender las aulas, los programas después de clases y las rutas profesionales que dan espacio para que la juventud crezca.",
      },
      {
        title: "Servicio constituyente receptivo",
        label: "Servicio",
        body:
          "Mantener el gobierno accesible con comunicación clara, horarios locales de atención y seguimiento cuando los residentes necesitan ayuda.",
      },
    ],
    events: [
      {
        title: "Sesión de escucha comunitaria",
        date: "18 de julio",
        time: "6:00 PM",
        location: "Oficina del distrito y aliados comunitarios",
        body: "Una conversación abierta sobre prioridades locales, asequibilidad y servicios para residentes.",
      },
      {
        title: "Lanzamiento de canvass de fin de semana",
        date: "27 de julio",
        time: "10:00 AM",
        location: "Oficina de campo de la campaña",
        body: "Capacitación para voluntarios, asignación de zonas y un lanzamiento vecinal por la mañana.",
      },
      {
        title: "Feria familiar de recursos",
        date: "9 de agosto",
        time: "12:00 PM",
        location: "Centro comunitario local",
        body: "Un evento familiar que conecta a residentes con servicios y actualizaciones de campaña.",
      },
    ],
    news: [
      {
        title: "La campaña de Morales abre nuevos turnos de voluntariado",
        date: "28 de junio de 2026",
        body:
          "La campaña está ampliando los turnos de campo de fin de semana para residentes que quieren ayudar con contacto a votantes, eventos y alcance comunitario.",
      },
      {
        title: "Líderes comunitarios se unen a una mesa redonda del distrito",
        date: "14 de junio de 2026",
        body:
          "Líderes locales se reunieron con Carmen Morales para hablar sobre seguridad pública, programas juveniles y servicio constituyente cotidiano.",
      },
      {
        title: "La campaña publica el calendario de organización de verano",
        date: "31 de mayo de 2026",
        body:
          "El calendario de verano incluye lanzamientos de canvass, bancos telefónicos, sesiones de escucha y eventos de visibilidad vecinal.",
      },
    ],
    endorsements: [
      "Educadores locales",
      "Defensores de pequeños negocios",
      "Líderes de servicio público",
      "Voluntarios vecinales",
      "Aliados laborales y comunitarios",
      "Familias de todo el distrito",
    ],
    volunteerRoles: [
      "Tocar puertas con líderes de equipo capacitados",
      "Hacer llamadas y enviar textos a votantes",
      "Organizar una conversación vecinal",
      "Ayudar en eventos de campaña",
      "Compartir actualizaciones de campaña en línea",
      "Preparar literatura y letreros",
    ],
    footer: {
      body:
        "Un sitio de campaña pulido para residentes, simpatizantes, voluntarios y actualizaciones públicas.",
      navigationHeading: "Navegación",
      actionHeading: "Participa",
      contribute: "Contribuir",
      volunteer: "Voluntariado",
      updates: "Actualizaciones de campaña",
      actionLinksLabel: "Enlaces de acción de campaña",
      footerNavigationLabel: "Navegación del pie de página",
    },
    sections: {
      priorities: {
        eyebrow: "Prioridades de campaña",
        heading: "Enfocada en el trabajo cotidiano que los residentes pueden sentir.",
        body:
          "Estas prioridades mantienen el mensaje de campaña claro, local y fácil de revisar para los residentes.",
      },
      about: {
        eyebrow: "Sobre Carmen",
        heading: "Visible, accesible y presente en el distrito.",
        body:
          "Esta versión usa fotografía real de campaña para que el sitio se sienta específico para Carmen Morales desde la primera pantalla.",
        readBio: "Leer biografía",
        attendEvent: "Asistir a un evento",
      },
      events: {
        eyebrow: "Eventos",
        heading: "Calendario de organización",
        body: "Usa esta área para eventos reales de campaña cuando se confirmen las fechas.",
      },
      donate: {
        eyebrow: "Donar",
        heading: "Lista para un proveedor real de contribuciones más adelante.",
        body:
          "Esta página mantiene los controles de contribución informativos hasta que la campaña seleccione su proveedor final de cumplimiento y pagos.",
        chooseAmount: "Elige una cantidad",
        disabled:
          "El procesamiento de contribuciones está desactivado hasta que se seleccione el proveedor.",
        helpAnotherWay: "Ayudar de otra manera",
      },
      endorsements: {
        eyebrow: "Endosos",
        heading: "Apoyo que puede crecer hasta convertirse en una página verificada de endosos.",
        body:
          "Esta página enumera categorías de endosos hasta que la campaña confirme los nombres públicos, logotipos y lenguaje de aprobación finales.",
        label: "Simpatizante",
      },
      news: {
        eyebrow: "Noticias",
        heading: "Actualizaciones de campaña",
        body:
          "Las tarjetas de actualización de campaña están listas para anuncios confirmados y flujos de publicación.",
      },
      volunteer: {
        eyebrow: "Voluntariado",
        heading: "Construir el programa de campo una conversación a la vez.",
        body:
          "El formulario de abajo muestra la experiencia prevista para simpatizantes y puede conectarse al flujo de admisión seleccionado por la campaña más adelante.",
      },
      volunteerForm: {
        eyebrow: "Inscríbete",
        heading: "Formulario de interés voluntario",
        body: "Estos campos muestran la experiencia prevista sin recopilar datos de simpatizantes todavía.",
        formLabel: "Formulario de interés voluntario",
        firstName: "Nombre",
        lastName: "Apellido",
        email: "Correo electrónico",
        phone: "Número de teléfono",
        note:
          "Los envíos pueden conectarse al flujo de admisión de la campaña una vez que se seleccione.",
        submit: "Enviar interés",
      },
      heroCaption: "La fotografía local de campaña ahora impulsa el sitio.",
    },
    pages: {
      home: {
        title: "Carmen T. Morales para la Asamblea",
        eyebrow: "Liderazgo centrado en la comunidad",
        heading: "Una campaña construida alrededor del servicio, el acceso y resultados locales.",
        body:
          "Carmen Morales se organiza con residentes, familias y aliados comunitarios para mantener el gobierno cerca de las personas a las que sirve.",
        image: "hero",
      },
      about: {
        title: "Sobre Carmen",
        eyebrow: "Servicio público",
        heading: "Con raíces en la comunidad. Enfocada en cumplir.",
        body:
          "Carmen Morales aporta un enfoque práctico al servicio público, basado en relaciones vecinales y apoyo directo a los constituyentes.",
        image: "community",
      },
      issues: {
        title: "Prioridades",
        eyebrow: "Prioridades de campaña",
        heading: "Prioridades prácticas para las familias de Nueva Jersey.",
        body:
          "La campaña se enfoca en preocupaciones claras y cotidianas: asequibilidad, seguridad, educación y servicio receptivo.",
        image: "table",
      },
      events: {
        title: "Eventos",
        eyebrow: "En la comunidad",
        heading: "Conoce la campaña en tu vecindario.",
        body: "Únete a próximos eventos, lanzamientos de voluntariado y sesiones de escucha en el distrito.",
        image: "listening",
      },
      donate: {
        title: "Donar",
        eyebrow: "Impulsa la campaña",
        heading: "Ayuda a llegar a más votantes antes del día de la elección.",
        body:
          "Las contribuciones de base ayudan a financiar el alcance de campo, materiales para votantes, herramientas digitales y eventos comunitarios.",
        image: "civic",
      },
      endorsements: {
        title: "Endosos",
        eyebrow: "Apoyo comunitario",
        heading: "Una coalición de vecinos, trabajadores, familias y líderes locales.",
        body:
          "La campaña se construye con personas que creen en una representación accesible y orientada al servicio.",
        image: "civic",
      },
      news: {
        title: "Noticias",
        eyebrow: "Actualizaciones de campaña",
        heading: "Últimas noticias desde la campaña.",
        body:
          "Sigue las actualizaciones de organización, anuncios de eventos y noticias de campaña a medida que el sitio crece.",
        image: "portrait",
      },
      volunteer: {
        title: "Voluntariado",
        eyebrow: "Únete al equipo",
        heading: "Hay un rol para cada simpatizante.",
        body:
          "Ayuda a la campaña a conectar con votantes mediante canvass, llamadas, eventos y alcance de vecino a vecino.",
        image: "community",
      },
    },
  },
} as const;

export type SiteCopy = (typeof siteCopy)[Language];
export type PageKey = keyof SiteCopy["pages"];
export type ImageKey = keyof SiteCopy["images"];

export const donationAmounts = [25, 50, 100, 250, 500, 1000];
export const siteConfig = siteCopy.en.siteConfig;
export const navItems = siteCopy.en.navItems;
export const images = siteCopy.en.images;
export const priorities = siteCopy.en.priorities;
export const events = siteCopy.en.events;
export const news = siteCopy.en.news;
export const endorsements = siteCopy.en.endorsements;
export const volunteerRoles = siteCopy.en.volunteerRoles;
export const pages = siteCopy.en.pages;
