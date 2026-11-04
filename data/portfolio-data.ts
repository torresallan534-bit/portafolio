import { Project, ServiceItem, ReviewItem } from "@/types";

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "axis-pro-usa",
    title: "Creación de Contenido Multimedia & Miniaturas para Axis Pro",
    client: "Axis Pro",
    category: "multimedia",
    categoryLabel: "Contenido & Multimedia",
    summary:
      "Desarrollo de piezas visuales estratégicas, carruseles de Instagram y portadas de YouTube optimizadas para retención y CTR en Estados Unidos.",
    challenge:
      "La marca requería profesionalizar sus canales digitales en USA con contenido educativo y dinámico que generara alto engagement y autoridad.",
    solution:
      "Diseño de miniaturas con alta tasa de clic (CTR), diagramación de carruseles informativos de alto valor y activos visuales adaptados a audiencias anglosajonas.",
    fullDescription:
      "Participación integral en la producción de contenido visual y multimedia para Axis Pro (USA). El proyecto abarcó el diseño de miniaturas de YouTube orientadas a captar tráfico orgánico calificado, carruseles educativos modulares para Instagram y piezas de soporte gráfico para lanzamientos digitales con una entrega ágil orientada a métricas.",
    image: "/projects/axis-pro/miniaturas/1.png",
    gallery: [
      "/projects/axis-pro/miniaturas/1.png",
      "/projects/axis-pro/miniaturas/2.png",
      "/projects/axis-pro/miniaturas/3.png",
      "/projects/axis-pro/carrusel-1/1.png",
      "/projects/axis-pro/carrusel-1/2.png",
      "/projects/axis-pro/carrusel-1/3.png",
      "/projects/axis-pro/carrusel-2/1.png",
      "/projects/axis-pro/carrusel-2/2.png",
    ],
    aspectRatioClass: "aspect-video",
    tags: ["Contenido Multimedia", "Miniaturas YouTube", "Carruseles Instagram", "Mercado USA"],
    palette: [
      { name: "Azul Pro", hex: "#0284C7" },
      { name: "Cian Eléctrico", hex: "#38BDF8" },
      { name: "Grafito Oscuro", hex: "#0F172A" },
      { name: "Blanco Puro", hex: "#FFFFFF" },
    ],
    deliverables: [
      "Miniaturas de YouTube con alta tasa de clics (CTR)",
      "Carruseles educativos de múltiples diapositivas para Instagram",
      "Diagramación de activos visuales para plataformas digitales",
      "Plantillas dinámicas para optimizar tiempos de producción",
    ],
    year: "2024",
    clientLocation: "Estados Unidos (USA)",
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
      "Vídeos documentales y educativos sobre fauna que necesitaban destacar en la página de inicio de YouTube frente a canales de millones de suscriptores.",
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
    title: "Menú Gastronómico & Carta Editorial para Arepera Venezolana",
    client: "Arepa Secreta",
    category: "menus",
    categoryLabel: "Menús Gastronómicos",
    summary:
      "Diseño de carta física desplegable y versión digital optimizada para comensales, estructurando rellenos tradicionales, combos y bebidas típicas.",
    challenge:
      "La carta original presentaba saturación de texto, dificultaba la lectura en horas pico y no destacaba los combos con mayor margen de ganancia.",
    solution:
      "Diagramación editorial limpia con jerarquía en tres niveles, fotografía de producto apetitosa y código QR ligero adaptado para lectura en smartphones.",
    fullDescription:
      "Diseño y diagramación completa de la carta para Arepa Secreta, restaurante especializado en gastronomía venezolana tradicional. Se organizó la oferta culinaria mediante una jerarquía tipográfica limpia y apetitosa que resalta los rellenos icónicos (reina pepiada, carne mechada, pernil, queso guayanés), entradas, cachapas y bebidas típicas. Diseñado para maximizar la legibilidad en mesas y acelerar los pedidos.",
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
      "Carta completa de platos de 6 cuerpos con fotografías y precios",
      "Diagramación de rellenos típicos, desayunos y bebidas",
      "Formato optimizado para impresión en alta definición",
      "Versión digital móvil para visualización por código QR",
    ],
    year: "2024",
    clientLocation: "Colombia",
    featured: true,
  },
  {
    id: "arepa-secreta-branding",
    title: "Identidad Visual, Concepto de Marca & Packaging Comercial",
    client: "Arepa Secreta",
    category: "branding",
    categoryLabel: "Branding Comercial",
    summary:
      "Sistema de identidad visual que honra las raíces de la arepa artesanal con una estética moderna, limpia y memorable.",
    challenge:
      "El negocio operaba sin un identificador gráfico unificado, lo que debilitaba el reconocimiento en pedidos a domicilio frente a competidores directos.",
    solution:
      "Creación de isotipo minimalista basado en el maíz y fogón, paleta cálida apetitosa y sistema de empaques para delivery en papel kraft.",
    fullDescription:
      "Construcción integral de identidad visual para Arepa Secreta. Se diseñó el sistema gráfico, isotipos, paleta de colores corporativos y su aplicación sobre empaques de delivery, bolsas térmicas, uniformes y papelería. El objetivo fue consolidar una personalidad de marca acogedora y reconocible en el competitivo sector gastronómico.",
    image: "/projects/arepa-secreta/branding-1.png",
    gallery: [
      "/projects/arepa-secreta/branding-1.png",
      "/projects/arepa-secreta/branding-2.png",
    ],
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Identidad Visual", "Manual de Marca", "Food Branding", "Packaging"],
    palette: [
      { name: "Ámbar Tostado", hex: "#D97706" },
      { name: "Rojo Pasión", hex: "#B91C1C" },
      { name: "Negro Premium", hex: "#0F172A" },
      { name: "Papel Kraft", hex: "#E7E5E4" },
    ],
    deliverables: [
      "Isotipo y logotipo principal con variantes de color",
      "Diseño de bolsas para delivery y papel antigrasa para envolver",
      "Mockups de presentación y aplicaciones en punto de venta",
      "Guía de contrastes y paleta cromática",
    ],
    year: "2024",
    clientLocation: "Colombia",
    featured: true,
  },
  {
    id: "barberia-the-king-flyers",
    title: "Flyers Publicitarios & Piezas Visuales para Barbería Urbana",
    client: "Barbería The King",
    category: "flyers",
    categoryLabel: "Flyers & Publicidad",
    summary:
      "Cartelería urbana de alto contraste con estética premium, tipografía bold y cupones promocionales de corte y barba.",
    challenge:
      "Baja captación de nuevos clientes en días de baja afluencia (martes y miércoles) y promociones que pasaban desapercibidas en redes.",
    solution:
      "Campaña de alto impacto visual inspirada en streetwear, tipografía contundente, llamadas directas con cuponera 2x1 y formatos listos para Stories.",
    fullDescription:
      "Diseño de piezas publicitarias para Barbería The King. La dirección artística combina tonos dorados, negros profundos y una diagramación estilizada inspirada en el movimiento streetwear contemporáneo. Desarrolladas para promocionar cortes clásicos, desvanecidos (fade), perfilado de barba y membresías de clientes VIP.",
    image: "/projects/barberia-the-king/flyer-1.png",
    gallery: [
      "/projects/barberia-the-king/flyer-1.png",
      "/projects/barberia-the-king/flyer-2.png",
    ],
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Barbería", "Flyer Promocional", "Streetwear", "Tipografía Bold"],
    palette: [
      { name: "Dorado Rey", hex: "#EAB308" },
      { name: "Negro Obsidiana", hex: "#09090B" },
      { name: "Plata Cromo", hex: "#E4E4E7" },
      { name: "Gris Plomo", hex: "#52525B" },
    ],
    deliverables: [
      "Flyers promocionales para volanteo y exhibición en vitrina",
      "Pósteres para redes sociales con precios y combos de corte",
      "Formatos listos para impresión con perfil CMYK y sangrados",
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
      "Campaña publicitaria visualmente explosiva para taquería en Bogotá: promociones de tacos al pastor, 2x1 y combos taqueros.",
    challenge:
      "Fuerte competencia en la zona gastronómica y necesidad de comunicar rápidamente sus días de promoción 2x1 y combos familiares.",
    solution:
      "Serie gráfica de alto impacto cromático (rojo picante, amarillo maíz) con textos gancho directos que aceleraron las órdenes en un 40%.",
    fullDescription:
      "Serie de 6 afiches y flyers promocionales para Taquería DF 'La Capital del Taco' en Bogotá. La dirección de arte utiliza los vibrantes colores de la comida mexicana (rojos picantes, amarillos maíz y verdes frescos) combinados con frases directas y atractivas para detonar el antojo y aumentar las visitas entre semana y los pedidos a domicilio.",
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
  {
    id: "nails-pastel-branding",
    title: "Identidad de Marca & Sistema Gráfico para Salón de Uñas",
    client: "Nails Pastel",
    category: "branding",
    categoryLabel: "Branding Comercial",
    summary:
      "Creación de logotipo e identidad visual suave, elegante y moderna para emprendimiento de manicura, pedicura y spa.",
    challenge:
      "Emprendimiento nuevo sin diferenciación gráfica en un mercado saturado de estética genérica.",
    solution:
      "Desarrollo de branding en tonos pasteles refinados con tipografía sans serif suave y piezas para catálogo de citas en Instagram.",
    fullDescription:
      "Diseño de marca para Nails Pastel, emprendimiento enfocado en embellecimiento y cuidado estético de uñas. Se desarrolló una estética delicada en tonos pastel con tipografía elegante y formas armoniosas que transmiten higiene, pulcritud y sofisticación, perfecta para atraer clientela joven y profesional.",
    image: "/projects/nails-pastel/logo.png",
    gallery: [
      "/projects/nails-pastel/logo.png",
      "/projects/nails-pastel/flyer-1.png",
      "/projects/nails-pastel/flyer-2.png",
      "/projects/nails-pastel/flyer-3.png",
      "/projects/nails-pastel/flyer-4.png",
    ],
    aspectRatioClass: "aspect-square",
    tags: ["Identidad de Marca", "Nails Spa", "Estética Pastel", "Belleza"],
    palette: [
      { name: "Rosa Pastel", hex: "#F472B6" },
      { name: "Lavanda Suave", hex: "#C084FC" },
      { name: "Blanco Nácar", hex: "#FDF4FF" },
      { name: "Dorado Champagne", hex: "#FDE047" },
    ],
    deliverables: [
      "Logotipo principal e isotipo para perfiles sociales",
      "Definición de paleta cromática pastel y armonías visuales",
      "Plantillas editables para catálogo de servicios y citas",
    ],
    year: "2024",
    clientLocation: "Colombia",
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
      "Allan nos apoyó con el diseño de miniaturas y carruseles con un tiempo de entrega impecable. La estética fue justo lo que necesitábamos para elevar el canal en el mercado estadounidense.",
    service: "Contenido Multimedia & Miniaturas",
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
      "Buscábamos una estética urbana pero elegante y Allan captó la vibra de inmediato. Los flyers de promoción para días martes y miércoles nos llenaron la agenda. Muy puntual y profesional con los archivos de imprenta.",
    service: "Flyers & Publicidad",
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
      "La delicadeza y elegancia que Allan le dio a la marca nos ayudó a posicionarnos con clientas que buscan servicios premium. Los diseños para redes nos ahorran horas de explicar precios. 100% recomendado.",
    service: "Branding Comercial & Catálogo",
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
      "Archivos optimizados listos para su uso: alta definición para imprenta (CMYK), formatos adaptados para YouTube, Reels, TikTok o plataformas publicitarias.",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "multimedia-video",
    iconName: "Video",
    title: "Contenido Visual, Miniaturas & Video",
    subtitle: "Piezas dinámicas enfocadas en retención y alto CTR",
    description:
      "Producción de miniaturas de alto impacto para canales de YouTube, edición de video para formatos cortos (Reels, TikTok) y carruseles informativos para maximizar alcance.",
    features: [
      "Miniaturas de YouTube con alta tasa de clic (CTR probado)",
      "Edición de video ágil orientada a retención y dinamismo",
      "Carruseles educativos y promocionales para Instagram",
      "Entrega rápida y optimizada para creadores y marcas",
    ],
    badge: "Alta Retención & CTR",
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
    "Hola Allan, vi tu portafolio y me gustaría cotizar un proyecto de contenido visual / comercial contigo.",
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
