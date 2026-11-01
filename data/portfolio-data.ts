import { Project, ServiceItem } from "@/types";

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: "arepa-brava-menu",
    title: "Menú Editorial & Sistema Gráfico para Arepera Venezolana",
    client: "Arepa Brava Gastrobar",
    category: "menus",
    categoryLabel: "Menú Gastronómico",
    summary:
      "Diseño de carta física desplegable y formato QR digital optimizado para alta rotación, resaltando ingredientes autóctonos y fotografía de producto.",
    fullDescription:
      "Desarrollo integral de la carta de platos y bebidas para Arepa Brava. Se concibió una jerarquía tipográfica limpia con diagramación modular que agiliza la toma de pedidos y estimula el apetito. Incluye iconografía personalizada para rellenos típicos (reina pepiada, carne mechada, pernil), señalética de alérgenos y versión digital adaptada para teléfonos móviles.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Menú Físico & QR", "Diseño Editorial", "Gastronomía Venezolana"],
    palette: [
      { name: "Maíz Criollo", hex: "#EAB308" },
      { name: "Terracota Brasa", hex: "#C2410C" },
      { name: "Carbón Grill", hex: "#18181B" },
      { name: "Blanco Crema", hex: "#FDFCF7" },
    ],
    deliverables: [
      "Carta principal 3 cuerpos (impresión mate con barniz UV)",
      "Menú digital optimizado para escaneo QR móvil",
      "Set de 16 iconos vectoriales de rellenos e ingredientes",
      "Plantilla editable para cambios de precios de temporada",
    ],
    year: "2024",
    clientLocation: "Caracas & Madrid",
    featured: true,
  },
  {
    id: "barber-club-flyers",
    title: "Flyers Promocionales & Campaña de Apertura para Barbería Urbana",
    client: "The Gentleman's Blade Barber Club",
    category: "flyers",
    categoryLabel: "Flyers & Publicidad",
    summary:
      "Piezas publicitarias de alto contraste inspiradas en el cartelismo vintage y estética streetwear para captar clientes en la semana inaugural.",
    fullDescription:
      "Campaña de material impreso y digital para inauguración de sucursal. El diseño combina tipografía bold condensada, acabados dorados y un código promocional troquelado con cuponera de descuento para cortes y cuidado de barba. La campaña incrementó las citas previas en un 180% en su primera semana.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    aspectRatioClass: "aspect-[4/5]",
    tags: ["Flyer Promocional", "Cuponera", "Tipografía Bold", "Streetwear"],
    palette: [
      { name: "Oro Vintage", hex: "#D4AF37" },
      { name: "Negro Obsidiana", hex: "#0A0A0A" },
      { name: "Gris Acero", hex: "#71717A" },
      { name: "Blanco Hueso", hex: "#FAFAFA" },
    ],
    deliverables: [
      "Flyer impreso formato media carta (2 caras) con cupón desprendible",
      "Adaptaciones para Stories de Instagram y banners de pauta",
      "Póster de vitrina en gran formato (A2)",
      "Tarjeta de fidelización con sellos de corte",
    ],
    year: "2024",
    clientLocation: "Bogotá, Colombia",
    featured: true,
  },
  {
    id: "fuego-lento-branding",
    title: "Identidad Visual & Paleta de Color para Restaurante Fusión",
    client: "Fuego & Brasa Gastro-Grill",
    category: "branding",
    categoryLabel: "Branding Comercial",
    summary:
      "Creación de sistema de identidad completo, selección cromática basada en fuego y carbón, empaques y manual de aplicaciones de marca.",
    fullDescription:
      "Construcción de marca desde cero para un concepto culinario centrado en cocción a la leña y cortes premium. Se definió una paleta cromática intensa que transmite calidez, apetito y sofisticación. El sistema incluyó la marca gráfica principal, submarcas para delivery y diseño de packaging ecológico con tintas al agua.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    aspectRatioClass: "aspect-[16/10]",
    tags: ["Manual de Marca", "Paleta de Color", "Packaging", "Restobar"],
    palette: [
      { name: "Rojo Brasa", hex: "#DC2626" },
      { name: "Ámbar Fuego", hex: "#F59E0B" },
      { name: "Madera Quemada", hex: "#292524" },
      { name: "Papel Kraft", hex: "#D6C7B2" },
    ],
    deliverables: [
      "Isologo principal, isotipo y variantes de reducción",
      "Manual de identidad de 42 páginas con normas de uso",
      "Definición cromática CMYK, RGB, Pantone y HEX",
      "Diseño de bolsas para delivery y papel antigrasa para alimentos",
    ],
    year: "2024",
    clientLocation: "Miami, FL",
    featured: true,
  },
  {
    id: "cada-plato-cuenta-campana",
    title: "Campaña Visual & Material de Recaudación para Causa Social",
    client: "Campaña Solidaria 'Cada Plato Cuenta'",
    category: "campanas",
    categoryLabel: "Campaña de Donación",
    summary:
      "Estrategia gráfica orientada a la empatía y la acción inmediata para colecta de fondos y distribución de alimentos en comunidades vulnerables.",
    fullDescription:
      "Diseño de piezas visuales para recaudar fondos y voluntariado. El enfoque visual huye del dramatismo sensacionalista y resalta la dignidad comunitaria mediante colores vivos pero balanceados, infografías directas de impacto ('1 Donación = 3 Raciones') y llamados a la acción de alta conversión mediante códigos QR de aporte directo.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    aspectRatioClass: "aspect-[4/5]",
    tags: ["Campaña Social", "Afiche de Donación", "Infografía de Impacto"],
    palette: [
      { name: "Naranja Solidario", hex: "#EA580C" },
      { name: "Verde Esperanza", hex: "#059669" },
      { name: "Azul Transparencia", hex: "#2563EB" },
      { name: "Blanco Cálido", hex: "#FDFBF7" },
    ],
    deliverables: [
      "Kit de 12 banners para redes sociales (Instagram, LinkedIn, X)",
      "Afiche central para puntos de acopio y centros culturales",
      "Díptico informativo para donantes corporativos",
      "Gráficos de metas alcanzadas para actualización en vivo",
    ],
    year: "2023",
    clientLocation: "Latinoamérica",
    featured: true,
  },
  {
    id: "la-areperia-color-identity",
    title: "Paleta Cromática & Branding Comercial para Franquicia de Arepas",
    client: "La Arepería Urbana",
    category: "branding",
    categoryLabel: "Identidad & Color",
    summary:
      "Sistema cromático contemporáneo que moderniza el patrimonio gastronómico tradicional con un toque pop y desenfadado.",
    fullDescription:
      "Estudio de color y rediseño de identidad para cadena de comida rápida artesanal. Desarrollamos un balance visual armónico entre el amarillo maíz tostado, el verde aguacate fresco y un azul profundo para contraste que asegura alta visibilidad tanto en aplicaciones físicas (fachada, delantales) como en pantallas de delivery.",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Estudio Cromático", "Franquicia", "Food Branding"],
    palette: [
      { name: "Amarillo Arepa", hex: "#FACC15" },
      { name: "Verde Guasacaca", hex: "#16A34A" },
      { name: "Azul Petróleo", hex: "#0F172A" },
      { name: "Púrpura Ciruela", hex: "#7E22CE" },
    ],
    deliverables: [
      "Guía de armonía cromática y contrastes accesibles WCAG AAA",
      "Kit de tipografías complementarias para rotulación",
      "Mockups de uniformes, servilletas y papel para envolver",
      "Guía para arquitectos de interiores con códigos de pintura",
    ],
    year: "2023",
    clientLocation: "Santiago, Chile",
    featured: false,
  },
  {
    id: "barber-nights-event",
    title: "Flyers & Cartelería para Torneo de Barberos 'Barber Clash'",
    client: "Asociación de Barberos Profesionales",
    category: "flyers",
    categoryLabel: "Flyers & Publicidad",
    summary:
      "Composición visual vibrante en formato afiche con estética de batalla urbana, patrocinadores y cronograma de competencia.",
    fullDescription:
      "Dirección de arte y diseño de cartelería para evento de freestyle de corte de cabello y barbería profesional. La composición utiliza contrastes neón, fotografía en blanco y negro de los jueces y una diagramación nítida de premios y categorías para garantizar lecturabilidad instantánea.",
    image:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
    aspectRatioClass: "aspect-[16/10]",
    tags: ["Evento Urbano", "Póster de Competición", "Diseño Promocional"],
    palette: [
      { name: "Cian Eléctrico", hex: "#06B6D4" },
      { name: "Magenta Neón", hex: "#F43F5E" },
      { name: "Negro Humo", hex: "#111827" },
      { name: "Plata Cromo", hex: "#E2E8F0" },
    ],
    deliverables: [
      "Cartel oficial para vía pública (formato 70x100 cm)",
      "Flyers de mano con registro de participantes vía link QR",
      "Cabeceras para canales digitales y boletos con holograma",
    ],
    year: "2024",
    clientLocation: "Buenos Aires, Argentina",
    featured: false,
  },
  {
    id: "donar-es-crear-social",
    title: "Campaña de Donación de Útiles Escolares 'Mochilas Llenas'",
    client: "Red de Voluntarios por la Educación",
    category: "campanas",
    categoryLabel: "Campaña de Donación",
    summary:
      "Material promocional emotivo y claro para recaudación de útiles y becas estudiantiles para el ciclo lectivo.",
    fullDescription:
      "Campaña visual para activar donaciones ciudadanas antes del inicio de clases. Incluyó ilustraciones didácticas, desglose de costos por kit de útiles y formatos adaptados para impresión en parroquias, colegios y empresas aliadas.",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    aspectRatioClass: "aspect-[4/5]",
    tags: ["Solidaridad", "Educación", "Flyers de Colecta"],
    palette: [
      { name: "Azul Escolar", hex: "#3B82F6" },
      { name: "Amarillo Sol", hex: "#F59E0B" },
      { name: "Verde Menta", hex: "#34D399" },
      { name: "Blanco Papel", hex: "#FFFFFF" },
    ],
    deliverables: [
      "Afiche informativo de puntos de donación de útiles",
      "Infografía para recaudación de aportes en dinero por kit",
      "Historias interactivas para Instagram con stickers de donación",
    ],
    year: "2023",
    clientLocation: "Medellín, Colombia",
    featured: false,
  },
  {
    id: "cocktail-menu-lounge",
    title: "Menú de Autor & Carta de Coctelería de Alta Gama",
    client: "Nómada Rooftop Bar",
    category: "menus",
    categoryLabel: "Menú Gastronómico",
    summary:
      "Diagramación de lujo para carta de cócteles con notas de cata botánicas, maridajes sugeridos y acabado mate repelente al agua.",
    fullDescription:
      "Diseño de la experiencia gastronómica impresa para un bar de mixología en terraza. Se estructuró por perfiles de sabor (Ahumados, Cítricos, Dulces, Especiados) con un diseño minimalista donde cada trago cuenta una historia visual con tintas metálicas y tipografía serif editorial.",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    aspectRatioClass: "aspect-[3/4]",
    tags: ["Mixología", "Carta de Lujo", "Editorial Gastronómico"],
    palette: [
      { name: "Cobre Pulido", hex: "#B45309" },
      { name: "Verde Olivo Oscuro", hex: "#14532D" },
      { name: "Negro Noche", hex: "#09090B" },
      { name: "Perla Satinado", hex: "#F8FAFC" },
    ],
    deliverables: [
      "Menú de madera con fijación de latón y hojas intercambiables",
      "Menú rápido de 'Happy Hour' plastificado mate",
      "Posavasos personalizados con datos curiosos de cada cóctel",
    ],
    year: "2024",
    clientLocation: "Puebla, México",
    featured: false,
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "branding-comercial",
    iconName: "Palette",
    title: "Branding Comercial & Identidad Visual",
    subtitle: "Marcas memorables con personalidad sólida",
    description:
      "Construyo la identidad visual integral para tu negocio: desde el logotipo y variantes de marca hasta paletas cromáticas armoniosas, manual de aplicaciones y guías tipográficas que te hacen destacar de la competencia.",
    features: [
      "Logotipo principal, secundario e isotipos de aplicación",
      "Definición cromática técnica (HEX, RGB, CMYK, Pantone)",
      "Selección y jerarquía tipográfica para web e imprenta",
      "Manual de marca completo y fichas de aplicación",
    ],
    badge: "Más Solicitado",
    popular: true,
  },
  {
    id: "diseno-de-menus",
    iconName: "MenuBook",
    title: "Diseño de Menús Gastronómicos",
    subtitle: "Ingeniería de menús que vende y abre el apetito",
    description:
      "Cartas gastronómicas estratégicamente diagramadas para areperas, restaurantes, cafeterías y bares. Estructuro precios, platos estrella y categorías para guiar la vista del comensal y elevar el ticket promedio.",
    features: [
      "Formatos impresos (trípticos, dípticos, cartas rígidas repelentes)",
      "Versión digital responsive para escaneo por código QR",
      "Iconografía gastronómica personalizada y señalética de alérgenos",
      "Plantillas editables para actualización rápida de precios",
    ],
    badge: "Especialidad Culinaria",
  },
  {
    id: "flyers-publicidad",
    iconName: "Megaphone",
    title: "Flyers & Piezas Promocionales",
    subtitle: "Material publicitario de alto impacto que genera clientes",
    description:
      "Afiches, cuponeras y volantes impresos o digitales para barberías, inauguraciones comerciales, fiestas y promociones de temporada. Diseños concebidos para capturar la atención en segundos y activar la compra.",
    features: [
      "Flyers promocionales listos para imprenta con sangrados y perfiles",
      "Adaptación a formatos para Stories, reels y pauta digital",
      "Inclusión de códigos QR dinámicos y cupones de descuento",
      "Tiempos de entrega ágiles para lanzamientos urgentes",
    ],
  },
  {
    id: "campanas-sociales",
    iconName: "FileSpreadsheet",
    title: "Campañas de Donación & Material Social",
    subtitle: "Comunicación visual transparente con causa",
    description:
      "Material visual para fundaciones, ONGs y causas comunitarias. Infografías de impacto, afiches para acopio y kits para redes sociales que generan empatía, confianza y movilizan a la comunidad a donar.",
    features: [
      "Infografías visuales de recaudación y transparencia",
      "Afiches para centros comunitarios y vía pública",
      "Kits de difusión para redes sociales de voluntarios",
      "Banners y material de soporte para eventos benéficos",
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
  whatsappNumber: "573248000501", // Prefijo Colombia (57) + 3248000501
  whatsappMessage:
    "Hola Allan, vi tu portafolio y me gustaría cotizar un proyecto de diseño gráfico contigo.",
  telegramUsername: "+573248000501",
  telegramUrl: "https://t.me/+573248000501",
  email: "torresaallan534@gmail.com",
  location: "Disponible en remoto a nivel internacional & Colombia",
  stats: [
    { value: "+120", label: "Proyectos Entregados" },
    { value: "99%", label: "Clientes Satisfechos" },
    { value: "48h", label: "Tiempo Promedio de Respuesta Inicial" },
    { value: "8+", label: "Países con Clientes Activos" },
  ],
};
