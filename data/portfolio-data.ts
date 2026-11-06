import { ReviewItem } from "@/types";

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  currency: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface ServiceCommercial {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "Megaphone" | "Utensils" | "Palette" | "Globe";
  features: string[];
  badge: string;
  deliveryTime: string;
}

export const PANDA_HAUS_INFO = {
  name: "Panda Haus",
  tagline: "Estudio de Diseño Visual & Web Comercial",
  headline: "Diseño visual y páginas web que hacen destacar tu negocio.",
  subheadline:
    "Ayudamos a restaurantes, marcas y negocios locales a captar clientes con flyers de alto impacto, menús digitales y landing pages ultra-rápidas.",
  phone: "+57 324 800 0501",
  rawPhone: "3248000501",
  whatsappNumber: "573248000501",
  whatsappMessage:
    "Hola Panda Haus, me interesa cotizar un servicio para mi negocio",
  whatsappDirectUrl:
    "https://wa.me/573248000501?text=Hola%20Panda%20Haus%2C%20me%20interesa%20cotizar%20un%20servicio%20para%20mi%20negocio",
  email: "contacto@pandahaus.co",
  location: "Colombia & Proyectos Remotos",
  socials: {
    instagram: "https://instagram.com/pandahaus.co",
    tiktok: "https://tiktok.com/@pandahaus.co",
  },
  stats: [
    { value: "24-48h", label: "Tiempo de Entrega Ágil" },
    { value: "+80", label: "Piezas Comerciales Activas" },
    { value: "100%", label: "Optimizado Celular & WhatsApp" },
    { value: "5.0 ★", label: "Satisfacción de Negocios" },
  ],
};

// Aliases para compatibilidad
export const DESIGNER_INFO = PANDA_HAUS_INFO;

export const TRUST_GUARANTEES = [
  {
    icon: "Zap",
    title: "Entrega rápida",
    description: "Entregas visuales en 24-48 horas para no frenar tus ventas.",
    highlight: "24-48h",
  },
  {
    icon: "Smartphone",
    title: "100% Optimizado",
    description: "Todo adaptado para celulares, escaneo QR y pedidos por WhatsApp.",
    highlight: "Móvil & QR",
  },
  {
    icon: "RefreshCw",
    title: "Revisiones incluidas",
    description: "Ajustes garantizados antes de la entrega final sin sobrecostos.",
    highlight: "Garantizado",
  },
];

export const COMMERCIAL_SERVICES: ServiceCommercial[] = [
  {
    id: "flyers-visuales",
    title: "Flyers y Contenido Visual",
    subtitle: "Piezas promocionales de alto impacto para redes",
    description:
      "Diseños llamativos concebidos para detener el scroll en Instagram Stories, feed y estados de WhatsApp. Ideales para promociones semanales, combos y eventos.",
    iconName: "Megaphone",
    badge: "Alto Impacto",
    deliveryTime: "24 a 48 horas",
    features: [
      "Formatos verticales 9:16 para historias y estados",
      "Formatos cuadrados y portrait para feed",
      "Archivos en alta resolución listos para imprimir",
      "Jerarquía visual que resalta ofertas y precios gancho",
    ],
  },
  {
    id: "menus-digitales",
    title: "Menús y Cartas Digitales",
    subtitle: "Cartas gastronómicas optimizadas para QR y WhatsApp",
    description:
      "Diseños interactivos que seducen la vista y facilitan la elección del comensal. Ideales para restaurantes, cafeterías, taquerías y bares.",
    iconName: "Utensils",
    badge: "Especialidad Gastronómica",
    deliveryTime: "48 horas",
    features: [
      "Diseño ultraligero optimizado para abrir sin demoras en celular",
      "Código QR personalizado de alta legibilidad",
      "Estructuración estratégica de combos y platos estrella",
      "Versión imprimible en alta definición con sangrado",
    ],
  },
  {
    id: "branding-identidad",
    title: "Identidad de Marca (Branding)",
    subtitle: "Sistemas de identidad que transmiten solidez",
    description:
      "Construimos el universo visual de tu marca desde cero: logotipo, paleta de colores, tipografías y plantillas editables listas para usar.",
    iconName: "Palette",
    badge: "Identidad Comercial",
    deliveryTime: "3 a 5 días",
    features: [
      "Logotipo principal, secundario y versiones de isotipo",
      "Paleta cromática con códigos HEX, RGB y CMYK",
      "Diseño de bolsas para delivery, empaques y etiquetas",
      "Archivos vectoriales (SVG, AI, PDF) editables",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Pages de Conversión",
    subtitle: "Páginas web comerciales para captar clientes en 48 horas",
    description:
      "Sitios web ultra-rápidos concebidos para vender, presentar tus servicios y canalizar pedidos o reservas directamente a tu WhatsApp.",
    iconName: "Globe",
    badge: "Máxima Conversión",
    deliveryTime: "48 a 72 horas",
    features: [
      "Carga instantánea en menos de 1 segundo en celulares",
      "Botones de WhatsApp estratégicamente ubicados",
      "Sección de catálogo, menú o servicios con precios claros",
      "Dominio, hosting y certificados SSL configurados",
    ],
  },
];

export const PRICING_PACKS: PricingPlan[] = [
  {
    id: "pack-arranque",
    name: "Pack Arranque Visual",
    price: "$120.000",
    currency: "COP",
    description:
      "La solución ideal para dinamizar tus redes sociales con promociones y ofertas que activan ventas de inmediato.",
    features: [
      "4 flyers/posts de alto impacto para redes sociales",
      "Formatos adaptados para feed e historias (9:16 y 1:1)",
      "Revisiones incluidas antes de la entrega",
      "Entrega rápida en 24-48 horas",
      "Archivos listos para WhatsApp y pauta digital",
    ],
    ctaText: "Elegir Pack Arranque",
    whatsappMessage:
      "Hola Panda Haus, me interesa contratar el Pack Arranque Visual ($120.000 COP) para mi negocio.",
  },
  {
    id: "pack-menu-pro",
    name: "Pack Menú Pro",
    price: "$180.000",
    currency: "COP",
    description:
      "Diseñado para restaurantes y negocios gastronómicos que buscan renovar su carta y facilitar pedidos rápidos.",
    popular: false,
    features: [
      "Carta digital interactiva optimizada para QR y WhatsApp",
      "Código QR vectorial personalizado listo para imprimir",
      "2 flyers promocionales para impulsar platos estrella",
      "Estructuración de combos para elevar el ticket promedio",
      "Versión imprimible en alta definición incluida",
    ],
    ctaText: "Elegir Pack Menú Pro",
    whatsappMessage:
      "Hola Panda Haus, me interesa contratar el Pack Menú Pro ($180.000 COP) para mi negocio gastronómico.",
  },
  {
    id: "pack-web-comercial",
    name: "Pack Web Comercial",
    price: "$390.000",
    currency: "COP",
    description:
      "Presencia digital profesional completa diseñada para capturar clientes y cerrar ventas directo por WhatsApp.",
    popular: true,
    features: [
      "Landing page ultra-rápida y adaptable a celulares",
      "Integración directa de reservas y ventas a WhatsApp",
      "2 banners promocionales de alto impacto incluidos",
      "Dominio, certificado de seguridad y hosting optimizado",
      "Soporte y acompañamiento en el lanzamiento",
    ],
    ctaText: "Elegir Pack Web Comercial",
    whatsappMessage:
      "Hola Panda Haus, me interesa contratar el Pack Web Comercial ($390.000 COP) para mi negocio.",
  },
];

export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: "review-arepa-secreta",
    name: "Carlos Mendoza",
    role: "Propietario",
    brand: "Arepa Secreta",
    rating: 5,
    comment:
      "Panda Haus transformó la presentación de nuestro restaurante. La carta física y el menú QR aumentaron de inmediato los pedidos de combos y postres por WhatsApp. Trabajo impecable y veloz.",
    service: "Menús Digitales & Packaging",
    date: "Enero 2026",
    verified: true,
  },
  {
    id: "review-barberia",
    name: "Julián Castro",
    role: "Socio Fundador",
    brand: "Barbería The King",
    rating: 5,
    comment:
      "Los flyers promocionales y piezas para historias llenaron nuestra agenda los días entre semana. La entrega fue en menos de 48 horas y la calidad gráfica nos diferenció por completo en la zona.",
    service: "Flyers & Campañas Promocionales",
    date: "Febrero 2026",
    verified: true,
  },
  {
    id: "review-taqueria",
    name: "Alejandra Rincón",
    role: "Gerente de Operaciones",
    brand: "Taquería DF — La Capital del Taco",
    rating: 5,
    comment:
      "Los colores y el impacto de la carta de promociones aceleraron las órdenes un 40%. Los clientes siempre elogian lo ordenado y apetitoso que se ve todo. 100% recomendados en Panda Haus.",
    service: "Cartas de Promociones & Flyers",
    date: "Marzo 2026",
    verified: true,
  },
  {
    id: "review-nails",
    name: "Paola Silva",
    role: "Directora Comercial",
    brand: "Nails Pastel",
    rating: 5,
    comment:
      "El catálogo comercial de tarifas y la identidad visual nos ahorran horas de responder precios en WhatsApp. Las clientas entienden los servicios al instante y agendan solas.",
    service: "Catálogo de Tarifas & Identidad",
    date: "Abril 2026",
    verified: true,
  },
];
