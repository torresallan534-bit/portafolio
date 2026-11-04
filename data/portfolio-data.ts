import { Project, ServiceItem, ReviewItem } from "@/types";

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "axis-pro-usa",
    title: "Creación de Contenido Multimedia, Miniaturas & Video Demos",
    client: "Axis Pro",
    category: "multimedia",
    categoryLabel: "Contenido & Multimedia",
    summary:
      "Desarrollo integral de activos multimedia para USA: 3 demos de video dinámicos, miniaturas de YouTube de alto CTR y carruseles educativos.",
    challenge:
      "La marca requería profesionalizar sus canales digitales en USA con videos de demostración dinámicos, miniaturas llamativas y carruseles educativos que atraparan la atención en segundos.",
    solution:
      "Producción de 3 videos demo con ritmo visual acelerado, diseño de miniaturas con composición estratégica y diagramación de carruseles modulares para Instagram.",
    fullDescription:
      "Proyecto integral de producción visual y multimedia para Axis Pro en el mercado de Estados Unidos. Se desarrollaron 3 videos promocionales/demostrativos, una serie de miniaturas optimizadas para compresión y visualización en YouTube, y múltiples carruseles informativos para Instagram, asegurando una estética tecnológica y de alta conversión.",
    image: "/projects/axis-pro/miniaturas/1.png",
    gallery: [
      "/projects/axis-pro/miniaturas/1.png",
      "/projects/axis-pro/miniaturas/2.png",
      "/projects/axis-pro/miniaturas/3.png",
      "/projects/axis-pro/carrusel-1/1.png",
      "/projects/axis-pro/carrusel-1/2.png",
      "/projects/axis-pro/carrusel-1/3.png",
      "/projects/axis-pro/carrusel-1/4.png",
      "/projects/axis-pro/carrusel-2/1.png",
      "/projects/axis-pro/carrusel-2/2.png",
    ],
    videos: [
      {
        title: "Video Demo 01 — Funcionalidad & Dinamismo",
        url: "/projects/axis-pro/videos/1.mp4",
      },
      {
        title: "Video Demo 02 — Características & Solución",
        url: "/projects/axis-pro/videos/2.mp4",
      },
      {
        title: "Video Demo 03 — Resumen & Llamado a la Acción",
        url: "/projects/axis-pro/videos/3.mp4",
      },
    ],
    aspectRatioClass: "aspect-video",
    tags: ["Edición de Video", "Miniaturas YouTube", "Carruseles Instagram", "Mercado USA"],
    palette: [
      { name: "Azul Pro", hex: "#0284C7" },
      { name: "Cian Eléctrico", hex: "#38BDF8" },
      { name: "Grafito Oscuro", hex: "#0F172A" },
      { name: "Blanco Puro", hex: "#FFFFFF" },
    ],
    deliverables: [
      "3 Videos demostrativos con edición dinámica y motion design",
      "Miniaturas de YouTube probadas para maximizar el CTR",
      "Carruseles informativos y educativos para Instagram",
      "Activos visuales adaptados para campañas digitales en USA",
    ],
    year: "2024",
    clientLocation: "Estados Unidos (USA)",
    featured: true,
  },
  {
    id: "barberia-the-king",
    title: "Campaña Audiovisual & Flyers Publicitarios para Barbería Urbana",
    client: "Barbería The King",
    category: "flyers",
    categoryLabel: "Flyers & Video Promo",
    summary:
      "Producción de 3 videos comerciales para redes sociales más cartelería urbana de alto impacto y cuponeras promocionales.",
    challenge:
      "Baja afluencia de citas en días de inicio de semana y necesidad de mostrar la técnica y la experiencia prémium de la barbería en video.",
    solution:
      "Edición de 3 videos promocionales con música rítmica y cortes precisos, combinados con afiches streetwear de alto contraste para volanteo y Stories.",
    fullDescription:
      "Paquete completo de comunicación visual y video para Barbería The King. La dirección artística integró 3 videos promocionales en formato vertical con edición rápida para TikTok e Instagram Reels, acompañados de afiches publicitarios con ofertas 2x1 y cupones de fidelización.",
    image: "/projects/barberia-the-king/flyer-1.png",
    gallery: [
      "/projects/barberia-the-king/flyer-1.png",
      "/projects/barberia-the-king/flyer-2.png",
    ],
    videos: [
      {
        title: "Video Comercial 01 — Técnica & Estilo Urbano",
        url: "/projects/barberia-the-king/videos/video-1.mp4",
      },
      {
        title: "Video Comercial 02 — Experiencia Prémium en Silla",
        url: "/projects/barberia-the-king/videos/video-2.mp4",
      },
      {
        title: "Video Comercial 03 — Promoción & Ambiente",
        url: "/projects/barberia-the-king/videos/video-3.mp4",
      },
    ],
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Video Promocional", "Barbería", "Reels & TikTok", "Flyers Urbanos"],
    palette: [
      { name: "Dorado Rey", hex: "#EAB308" },
      { name: "Negro Obsidiana", hex: "#09090B" },
      { name: "Plata Cromo", hex: "#E4E4E7" },
      { name: "Gris Plomo", hex: "#52525B" },
    ],
    deliverables: [
      "3 Videos comerciales verticales listos para pauta y redes",
      "Flyers promocionales con perfil CMYK para imprenta",
      "Cuponeras digitales para estados de WhatsApp",
    ],
    year: "2024",
    clientLocation: "Colombia",
    featured: true,
  },
  {
    id: "nails-pastel",
    title: "Identidad Visual, Video Promocional & Catálogo de Citas",
    client: "Nails Pastel",
    category: "branding",
    categoryLabel: "Branding & Video Promo",
    summary:
      "Video promocional delicado y moderno, logotipo distintivo y catálogo de tarifas para spa y salón de uñas.",
    challenge:
      "Nuevo salón de uñas que necesitaba transmitir higiene, sutileza y profesionalismo para captar clientas que valoran servicios prémium.",
    solution:
      "Producción de un video promocional que resalta el detalle de los acabados, junto con un sistema de logotipo y catálogo de precios en tonos pasteles.",
    fullDescription:
      "Desarrollo audiovisual y de marca para Nails Pastel. Incluye un video promocional diseñado para estados de WhatsApp e Instagram Reels mostrando los tratamientos en primer plano, logotipo vectorial, y flyers organizados por combos de manicura y pedicura.",
    image: "/projects/nails-pastel/logo.png",
    gallery: [
      "/projects/nails-pastel/logo.png",
      "/projects/nails-pastel/flyer-1.png",
      "/projects/nails-pastel/flyer-2.png",
      "/projects/nails-pastel/flyer-3.png",
      "/projects/nails-pastel/flyer-4.png",
    ],
    videos: [
      {
        title: "Video Promocional — Cuidado Estético & Acabados",
        url: "/projects/nails-pastel/videos/video-promocional.mp4",
      },
    ],
    aspectRatioClass: "aspect-square",
    tags: ["Video Promocional", "Identidad de Marca", "Nails Spa", "Catálogo"],
    palette: [
      { name: "Rosa Pastel", hex: "#F472B6" },
      { name: "Lavanda Suave", hex: "#C084FC" },
      { name: "Blanco Nácar", hex: "#FDF4FF" },
      { name: "Dorado Champagne", hex: "#FDE047" },
    ],
    deliverables: [
      "Video promocional con tomas de detalle y música envolvente",
      "Logotipo principal y variantes de isotipo",
      "Colección de 4 flyers comerciales con listas de precios",
    ],
    year: "2024",
    clientLocation: "Colombia",
    featured: true,
  },
  {
    id: "allan-zoo-youtube",
    title: "Diseño de Miniaturas de Alto CTR para Canal de YouTube Allan Zoo",
    client: "Allan Zoo",
    category: "multimedia",
    categoryLabel: "Contenido & Multimedia",
    summary:
      "Miniaturas de alto contraste y dinamismo visual para YouTube, enfocadas en animales salvajes, felinos y narrativa documental.",
    challenge:
      "Vídeos documentales y educativos sobre fauna que necesitaban destacar en la página de inicio de YouTube frente a canales consolidados.",
    solution:
      "Composición de alto impacto emocional: recorte minucioso de sujetos, corrección de color dramática, tipografía bold y contraste lumínico para disparar el CTR.",
    fullDescription:
      "Diseño y dirección visual de miniaturas para el canal de YouTube Allan Zoo. Se aplicaron técnicas avanzadas de fotomontaje, iluminación y jerarquía tipográfica para despertar curiosidad inmediata en temáticas sobre felinos salvajes, naturaleza y animales imponentes, garantizando máxima visibilidad en el feed de recomendaciones.",
    image: "/projects/allan-zoo/1.png",
    gallery: [
      "/projects/allan-zoo/1.png",
      "/projects/allan-zoo/2.png",
      "/projects/allan-zoo/3.png",
    ],
    aspectRatioClass: "aspect-video",
    tags: ["Miniaturas YouTube", "Alto CTR", "Diseño Documental", "Fotomontaje"],
    palette: [
      { name: "Ámbar Furia", hex: "#F59E0B" },
      { name: "Rojo Alerta", hex: "#DC2626" },
      { name: "Verde Selva", hex: "#15803D" },
      { name: "Negro Profundo", hex: "#0A0A0B" },
    ],
    deliverables: [
      "Miniaturas 1280x720 en alta definición optimizadas para compresión de YouTube",
      "Fotomontajes y retoque de color dramático en sujetos centrales",
      "Pruebas de legibilidad en pantallas móviles y modo oscuro",
    ],
    year: "2024",
    clientLocation: "YouTube / Global",
    featured: true,
  },
  {
    id: "arepa-secreta-menus",
    title: "Menús Gastronómicos, Cartas 1 & 2 para Arepera Venezolana",
    client: "Arepa Secreta",
    category: "menus",
    categoryLabel: "Menús Gastronómicos",
    summary:
      "Diseño de cartas físicas y digitales separadas por fases (Menú 1 y Menú 2) estructurando rellenos tradicionales, combos y bebidas.",
    challenge:
      "La carta original presentaba saturación de texto, dificultaba la lectura en horas pico y no destacaba los combos con mayor margen de ganancia.",
    solution:
      "Diagramación editorial limpia en varias cartas modulares, fotografía apetitosa y código QR ligero adaptado para lectura en smartphones.",
    fullDescription:
      "Diseño y diagramación completa de las cartas gastronómicas para Arepa Secreta. Se crearon múltiples versiones (Menú 1 y Menú 2) organizando la oferta culinaria con jerarquía tipográfica limpia que resalta rellenos icónicos (reina pepiada, mechada, pernil, queso guayanés), desayunos y bebidas típicas.",
    image: "/projects/arepa-secreta/menu-1.png",
    gallery: [
      "/projects/arepa-secreta/menu-1.png",
      "/projects/arepa-secreta/menu-2.png",
      "/projects/arepa-secreta/menu-3.png",
      "/projects/arepa-secreta/menu-4.png",
      "/projects/arepa-secreta/menu-5.png",
      "/projects/arepa-secreta/menu-6.png",
    ],
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Menú Gastronómico", "Comida Venezolana", "Diseño Editorial", "Carta de Precios"],
    palette: [
      { name: "Maíz Dorado", hex: "#F59E0B" },
      { name: "Terracota Criollo", hex: "#DC2626" },
      { name: "Carbón Bistro", hex: "#18181B" },
      { name: "Blanco Crema", hex: "#FAFAF9" },
    ],
    deliverables: [
      "Cartas completas de platos con fotografías y listas de precios",
      "Estructuración de rellenos típicos, desayunos y combos",
      "Formato optimizado para impresión en alta definición",
      "Versión digital móvil para visualización por código QR",
    ],
    year: "2024",
    clientLocation: "Colombia",
    featured: true,
  },
  {
    id: "arepa-secreta-branding",
    title: "Identidad Visual, Branding 1 & 2, Flyers Comerciales",
    client: "Arepa Secreta",
    category: "branding",
    categoryLabel: "Branding Comercial",
    summary:
      "Sistema de marca integral desarrollado en 2 etapas de branding, con afiches promocionales y empaques para delivery.",
    challenge:
      "El negocio operaba sin un identificador gráfico unificado, lo que debilitaba el reconocimiento en pedidos a domicilio frente a competidores directos.",
    solution:
      "Creación de dos fases de branding con isotipo minimalista basado en el maíz y fogón, paleta cálida apetitosa y sistema de empaques para delivery.",
    fullDescription:
      "Construcción integral de identidad visual y material promocional para Arepa Secreta (Branding 1 y 2). Se diseñó el sistema gráfico, isotipos, paleta de colores y una serie de flyers para promocionar combos del día tanto en salón como en delivery.",
    image: "/projects/arepa-secreta/branding-1.png",
    gallery: [
      "/projects/arepa-secreta/branding-1.png",
      "/projects/arepa-secreta/branding-2.png",
      "/projects/arepa-secreta/flyer-1.png",
      "/projects/arepa-secreta/flyer-2.png",
      "/projects/arepa-secreta/flyer-3.png",
    ],
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Identidad Visual", "Branding Comercial", "Food Branding", "Flyers"],
    palette: [
      { name: "Ámbar Tostado", hex: "#D97706" },
      { name: "Rojo Pasión", hex: "#B91C1C" },
      { name: "Negro Premium", hex: "#0F172A" },
      { name: "Papel Kraft", hex: "#E7E5E4" },
    ],
    deliverables: [
      "Branding 1 y Branding 2 con variantes de aplicación",
      "Flyers promocionales para volanteo y WhatsApp",
      "Diseño de bolsas para delivery y papel antigrasa",
      "Guía de contrastes y paleta cromática",
    ],
    year: "2024",
    clientLocation: "Colombia",
    featured: true,
  },
  {
    id: "taqueria-df-flyers",
    title: "Campaña de Flyers & Promociones Semanales para Taquería Mexicana",
    client: "Taquería DF — La Capital del Taco",
    category: "flyers",
    categoryLabel: "Flyers & Publicidad",
    summary:
      "Campaña publicitaria de 6 afiches y cartas promocionales en Bogotá: promociones de tacos al pastor, 2x1 y combos taqueros.",
    challenge:
      "Fuerte competencia en la zona gastronómica y necesidad de comunicar rápidamente sus días de promoción 2x1 y combos familiares.",
    solution:
      "Serie gráfica de alto impacto cromático (rojo picante, amarillo maíz) con textos gancho directos que aceleraron las órdenes en un 40%.",
    fullDescription:
      "Serie de afiches y flyers promocionales para Taquería DF 'La Capital del Taco' en Bogotá. La dirección de arte utiliza los vibrantes colores de la comida mexicana (rojos picantes, amarillos maíz y verdes frescos) combinados con frases directas y atractivas para detonar el antojo y aumentar las visitas entre semana y los pedidos a domicilio.",
    image: "/projects/taqueria-df/flyer-1.png",
    gallery: [
      "/projects/taqueria-df/flyer-1.png",
      "/projects/taqueria-df/flyer-2.png",
      "/projects/taqueria-df/flyer-3.png",
      "/projects/taqueria-df/flyer-4.png",
      "/projects/taqueria-df/flyer-5.png",
      "/projects/taqueria-df/flyer-6.png",
    ],
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Comida Mexicana", "Flyers de Tacos", "Promociones 2x1", "Gastronomía Bogotá"],
    palette: [
      { name: "Rojo Chile", hex: "#DC2626" },
      { name: "Amarillo Maíz", hex: "#FBBF24" },
      { name: "Verde Jalapeño", hex: "#16A34A" },
      { name: "Negro Carbón", hex: "#18181B" },
    ],
    deliverables: [
      "Colección de 6 flyers promocionales listos para imprenta y pauta",
      "Diseños para promociones de Tacos al Pastor, Gringas y Combos",
      "Adaptaciones para estados de WhatsApp y banners para delivery",
    ],
    year: "2024",
    clientLocation: "Bogotá, Colombia",
    featured: true,
  },
];

export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: "review-0",
    name: "Equipo de Creadores",
    role: "Gestión de Contenido",
    brand: "Axis Pro (USA)",
    rating: 5,
    comment:
      "Allan nos apoyó con el diseño de miniaturas, carruseles y edición de video con un tiempo de entrega impecable. La estética fue justo lo que necesitábamos para elevar el canal en el mercado estadounidense.",
    service: "Contenido Multimedia, Miniaturas & Video",
    date: "2024",
    verified: true,
  },
  {
    id: "review-1",
    name: "Carlos Mendoza",
    role: "Fundador & Propietario",
    brand: "Arepa Secreta",
    rating: 5,
    comment:
      "Allan transformó por completo la presentación de nuestro restaurante. La carta física y digital no solo se ve de nivel internacional, sino que los clientes entienden los combos al instante y aumentaron los pedidos de bebidas y postres.",
    service: "Menú Gastronómico & Branding",
    date: "Enero 2024",
    verified: true,
  },
  {
    id: "review-2",
    name: "Julián Castro",
    role: "Master Barber & Socio",
    brand: "Barbería The King",
    rating: 5,
    comment:
      "Los videos promocionales con ritmo dinámico y los flyers urbanos llenaron nuestra agenda de los días flojos. Muy puntual y profesional con los archivos de imprenta y video.",
    service: "Video Promocional & Flyers",
    date: "Febrero 2024",
    verified: true,
  },
  {
    id: "review-3",
    name: "Alejandra Rincón",
    role: "Gerente Operativa",
    brand: "Taquería DF — La Capital del Taco",
    rating: 5,
    comment:
      "Los colores y el impacto de la carta de tacos hicieron una diferencia enorme en nuestro local en Bogotá. Transmiten el auténtico sabor mexicano y los clientes siempre elogian lo ordenado y apetitoso que se ve todo.",
    service: "Menú Gastronómico & Campaña de Flyers",
    date: "Marzo 2024",
    verified: true,
  },
  {
    id: "review-4",
    name: "Paola Silva",
    role: "Directora Creativa",
    brand: "Nails Pastel",
    rating: 5,
    comment:
      "El video promocional de las sesiones y la estética del logo nos ayudaron a posicionarnos con clientas que buscan servicios prémium. Los diseños para redes nos ahorran horas de explicar precios. 100% recomendado.",
    service: "Branding Comercial & Video Promo",
    date: "Abril 2024",
    verified: true,
  },
];

export const WORK_PROCESS_STEPS = [
  {
    number: "01",
    title: "Diagnóstico & Brief",
    description:
      "Analizamos tus objetivos, formato requerido (video, piezas comerciales o miniaturas), estilo estético y plazos de entrega. Cotización clara y sin costos ocultos.",
  },
  {
    number: "02",
    title: "Producción & Rondas de Ajuste",
    description:
      "Desarrollo las propuestas conceptuales y ediciones con enfoque en retención y jerarquía visual. Rondas ágiles de feedback hasta llegar al resultado óptimo.",
  },
  {
    number: "03",
    title: "Entrega Final y Formatos",
    description:
      "Archivos optimizados listos para su uso: alta definición para imprenta (CMYK), videos en MP4 listos para pauta y redes, y formatos ligeros para WhatsApp y YouTube.",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "multimedia-video",
    iconName: "Video",
    title: "Edición de Video & Contenido Multimedia",
    subtitle: "Piezas dinámicas enfocadas en retención y alto impacto",
    description:
      "Producción de videos comerciales y demostrativos (Axis Pro, Barbería The King, Nails Pastel), miniaturas de alto CTR para YouTube y carruseles para redes sociales.",
    features: [
      "Edición de video comercial con ritmo y sincronización musical",
      "Miniaturas de YouTube con alta tasa de clic (CTR probado)",
      "Carruseles informativos y educativos para Instagram",
      "Entrega rápida y optimizada para creadores y marcas",
    ],
    badge: "Alta Retención & Video",
    popular: true,
  },
  {
    id: "diseno-de-menus",
    iconName: "MenuBook",
    title: "Diseño de Menús Gastronómicos",
    subtitle: "Cartas que seducen la vista y elevan el ticket promedio",
    description:
      "Especialista en cartas y menús para restaurantes de comida venezolana, taquerías, areperas y restobares. Diseño estratégico de combos, platos insignia y formato QR digital.",
    features: [
      "Formatos impresos de alta durabilidad y acabado mate",
      "Versión digital móvil optimizada para escaneo QR",
      "Estructuración de combos, bebidas y precios",
      "Plantillas actualizables para cambios de temporada",
    ],
    badge: "Especialidad Gastronómica",
  },
  {
    id: "flyers-publicidad",
    iconName: "Megaphone",
    title: "Flyers & Piezas Comerciales",
    subtitle: "Publicidad de alto impacto para barberías, eventos y promociones",
    description:
      "Afiches, cuponeras y volantes concebidos para capturar la atención en segundos. Diseños contundentes para barberías urbanas, taquerías, promociones 2x1 y salones de belleza.",
    features: [
      "Flyers en alta resolución listos para imprenta con sangrados",
      "Formatos verticales 9:16 para Stories de Instagram y WhatsApp",
      "Cuponeras y tarjetas de fidelización para clientes recurrentes",
      "Entrega ágil para activaciones y lanzamientos comerciales",
    ],
    badge: "Alta Conversión",
  },
  {
    id: "branding-comercial",
    iconName: "Palette",
    title: "Branding & Identidad para Negocios",
    subtitle: "Marcas con identidad única que conectan y perduran",
    description:
      "Construyo la identidad visual integral para tu negocio: logotipos, paletas de colores armónicas, diseño de empaques para delivery y manuales de marca comerciales.",
    features: [
      "Logotipo principal, secundario e isotipos de aplicación",
      "Definición cromática técnica (HEX, RGB, CMYK)",
      "Diseño de bolsas para delivery, papel antigrasa y uniformes",
      "Archivos vectoriales (AI, SVG, PDF) listos para producción",
    ],
  },
];

export const DESIGNER_INFO = {
  name: "Allan Torres",
  title: "Productor de Contenido Visual & Multimedia",
  tagline:
    "Especializado en diseño de piezas comerciales (menús, flyers, identidad para negocios) y edición de video enfocada en resultados claros y entrega ágil.",
  bio: "Productor de contenido visual y multimedia. Especializado en diseño de piezas comerciales (menús, flyers, identidad para negocios) y edición de video enfocada en resultados claros y entrega ágil.",
  phone: "+57 324 800 0501",
  rawPhone: "3248000501",
  whatsappNumber: "573248000501",
  whatsappMessage:
    "Hola Allan, vi tu portafolio y me gustaría cotizar un proyecto de contenido visual / comercial / video contigo.",
  telegramUsername: "+573248000501",
  telegramUrl: "https://t.me/+573248000501",
  email: "torresaallan534@gmail.com",
  location: "Colombia & Proyectos internacionales (USA, Colombia, México)",
  stats: [
    { value: "6", label: "Proyectos Clave Entregados" },
    { value: "100%", label: "Enfoque en Resultados y Entrega Ágil" },
    { value: "24h-48h", label: "Tiempo Promedio de Respuesta Inicial" },
    { value: "3", label: "Países con Clientes Activos" },
  ],
};
