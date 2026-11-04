import { Project, ServiceItem, ReviewItem } from "@/types";

export const PORTFOLIO_PROJECTS: Project[] = [
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
    title: "Flyers Publicitarios & Campaña Visual para Barbería Urbana",
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
  {
    id: "arepa-secreta-flyers",
    title: "Campaña de Flyers Promocionales & Piezas para Redes Sociales",
    client: "Arepa Secreta",
    category: "flyers",
    categoryLabel: "Flyers & Publicidad",
    summary:
      "Piezas publicitarias de alto apetito visual para promociones semanales, combos familiares y lanzamientos especiales.",
    challenge:
      "La comunidad local desconocía los combos familiares nocturnos y la línea de desayunos típicos.",
    solution:
      "Diseño modular de flyers promocionales para WhatsApp Status e impresos tipo mantel de mesa que dispararon las ventas cruzadas.",
    fullDescription:
      "Serie de 6 flyers promocionales diseñados tanto para impresión publicitaria como para difusión en Instagram Stories y pauta digital. Composiciones con fotografías de producto en primer plano, llamados a la acción claros y cupones de descuento pensados para generar tráfico al local y órdenes por delivery.",
    image: "/projects/arepa-secreta/flyer-1.png",
    gallery: [
      "/projects/arepa-secreta/flyer-1.png",
      "/projects/arepa-secreta/flyer-2.png",
      "/projects/arepa-secreta/flyer-3.png",
      "/projects/arepa-secreta/flyer-4.png",
      "/projects/arepa-secreta/flyer-5.png",
      "/projects/arepa-secreta/flyer-6.png",
    ],
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Flyers Promocionales", "Combos 2x1", "Social Media", "Publicidad"],
    palette: [
      { name: "Amarillo Arepa", hex: "#FBBF24" },
      { name: "Rojo Carmesí", hex: "#EF4444" },
      { name: "Gris Asfalto", hex: "#27272A" },
    ],
    deliverables: [
      "Pack de 6 flyers promocionales en alta resolución",
      "Formatos verticales 9:16 para Stories y pauta en Instagram",
      "Adaptaciones con códigos QR y teléfonos de delivery",
    ],
    year: "2024",
    clientLocation: "Colombia",
    featured: false,
  },
  {
    id: "taqueria-df-menu",
    title: "Carta de Especialidades & Menú Promocional de Tacos y Bebidas",
    client: "Taquería DF — La Capital del Taco",
    category: "menus",
    categoryLabel: "Menús Gastronómicos",
    summary:
      "Estructuración visual de tacos individuales, órdenes por kilo y bebidas tradicionales con precios destacados.",
    challenge:
      "Los comensales tardaban demasiado en ordenar debido a un menú disperso y precios difíciles de contrastar.",
    solution:
      "Estructura en dos columnas con iconografía de salsas y especialidades recomendadas para acelerar la rotación de mesas.",
    fullDescription:
      "Diseño de la carta de especialidades para la taquería en Bogotá. Presentación clara de las variedades de tacos (pastor, suadero, birria, carnitas), guarniciones y aguas frescas con una paleta cálida que despierta el apetito y facilita la elección rápida del cliente tanto en salón como en delivery.",
    image: "/projects/taqueria-df/flyer-2.png",
    gallery: [
      "/projects/taqueria-df/flyer-2.png",
      "/projects/taqueria-df/flyer-3.png",
      "/projects/taqueria-df/flyer-4.png",
      "/projects/taqueria-df/flyer-5.png",
    ],
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Carta de Tacos", "Taquería Mexicana", "Menú Promocional"],
    palette: [
      { name: "Rojo Salsa", hex: "#B91C1C" },
      { name: "Naranja Fuego", hex: "#EA580C" },
      { name: "Blanco Tortilla", hex: "#FDFBF7" },
    ],
    deliverables: [
      "Diagramación de precios y combos de especialidades",
      "Iconografía de nivel de picante y salsas de la casa",
      "Versión digital de alta resolución para consulta móvil",
    ],
    year: "2024",
    clientLocation: "Bogotá, Colombia",
    featured: false,
  },
  {
    id: "nails-pastel-flyers",
    title: "Flyers Promocionales & Catálogo de Tratamientos de Manicura",
    client: "Nails Pastel",
    category: "flyers",
    categoryLabel: "Flyers & Publicidad",
    summary:
      "Serie de piezas para difusión en redes sociales con listas de precios, combos de spa y promociones de temporada.",
    challenge:
      "Dificultad para explicar el desglose de tarifas de tratamientos semipermanentes y citas de spa por mensaje.",
    solution:
      "Plantillas verticales claras con paquetes cerrados y botón directo a WhatsApp que triplicó las reservas de fines de semana.",
    fullDescription:
      "Diseño de piezas promocionales orientadas a captación de citas por WhatsApp y difusión en Instagram. Estructuración clara de servicios (semipermanente, acrílicas, spa de pies) con fotografía de alta definición y estética refinada que eleva el valor del servicio.",
    image: "/projects/nails-pastel/flyer-1.png",
    gallery: [
      "/projects/nails-pastel/flyer-1.png",
      "/projects/nails-pastel/flyer-2.png",
      "/projects/nails-pastel/flyer-3.png",
      "/projects/nails-pastel/flyer-4.png",
    ],
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Catálogo de Servicios", "Promociones Spa", "Instagram Stories"],
    palette: [
      { name: "Fucsia Dulce", hex: "#EC4899" },
      { name: "Púrpura Seda", hex: "#A855F7" },
      { name: "Crema Suave", hex: "#FAF5FF" },
    ],
    deliverables: [
      "Flyers promocionales para campañas de agendamiento",
      "Tarjetas de precios y servicios para estados de WhatsApp",
      "Gráficos para promociones de fin de semana",
    ],
    year: "2024",
    clientLocation: "Colombia",
    featured: false,
  },
];

export const CLIENT_REVIEWS: ReviewItem[] = [
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
      "Analizamos a fondo tu negocio, tu cliente ideal, la oferta comercial y el estilo estético deseado. Definimos entregables y una cotización transparente sin sorpresas.",
  },
  {
    number: "02",
    title: "Diseño & Rondas de Ajuste",
    description:
      "Desarrollo las propuestas conceptuales con jerarquía visual y psicología del color. Revisamos juntos en rondas ordenadas de ajustes hasta que el resultado sea impecable.",
  },
  {
    number: "03",
    title: "Entrega Final para Producción",
    description:
      "Recibes todos los archivos listos: artes en alta resolución con sangrados y perfil CMYK para imprenta, más formatos ligeros (RGB/Web) para WhatsApp, redes y QR.",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
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
    popular: true,
  },
  {
    id: "flyers-publicidad",
    iconName: "Megaphone",
    title: "Flyers & Piezas Publicitarias",
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
    title: "Branding Comercial & Identidad Visual",
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
  {
    id: "campanas-sociales",
    iconName: "FileSpreadsheet",
    title: "Campañas & Material Promocional para Redes",
    subtitle: "Contenido visual estratégico para captar clientes",
    description:
      "Packs de piezas promocionales para estados de WhatsApp, posts y reels de Instagram. Gráficos dinámicos pensados para agendar citas y cerrar ventas.",
    features: [
      "Kits de plantillas promocionales coherentes con tu marca",
      "Diseños de combos del día y días especiales",
      "Infografías visuales de impacto",
      "Llamados a la acción directos hacia WhatsApp",
    ],
  },
];

export const DESIGNER_INFO = {
  name: "Allan Torres",
  title: "Diseñador Gráfico & Estratega Visual",
  tagline:
    "Especializado en identidad de marca, menús para negocios gastronómicos y material publicitario de alta conversión.",
  bio: "Con más de 6 años transformando marcas independientes, restaurantes, barberías y proyectos sociales en referentes visuales. Mi enfoque combina estética minimalista, jerarquía tipográfica impecable y diseño estratégico pensado para vender y conectar.",
  phone: "+57 324 800 0501",
  rawPhone: "3248000501",
  whatsappNumber: "573248000501",
  whatsappMessage:
    "Hola Allan, vi tu portafolio y me gustaría cotizar un proyecto de diseño gráfico contigo.",
  telegramUsername: "+573248000501",
  telegramUrl: "https://t.me/+573248000501",
  email: "torresaallan534@gmail.com",
  location: "Bogotá, Colombia & Disponible en remoto a nivel internacional",
  stats: [
    { value: "+120", label: "Proyectos Entregados" },
    { value: "99%", label: "Clientes Satisfechos" },
    { value: "48h", label: "Tiempo Promedio de Respuesta Inicial" },
    { value: "8+", label: "Países con Clientes Activos" },
  ],
};
