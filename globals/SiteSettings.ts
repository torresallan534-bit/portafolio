import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Ajustes Generales del Sitio',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      () => {
        try {
          revalidatePath('/')
        } catch (e) {
          console.error('Revalidation error:', e)
        }
      },
    ],
  },
  fields: [
    {
      name: 'heroBadgeText',
      type: 'text',
      label: 'Texto del Badge Superior (Hero)',
      defaultValue: 'Estudio de Diseño Visual & Web Comercial',
      required: true,
    },
    {
      name: 'heroTitle',
      type: 'text',
      label: 'Título Principal (H1)',
      defaultValue: 'Diseño visual y páginas web que hacen destacar tu negocio.',
      required: true,
    },
    {
      name: 'heroSubtitle',
      type: 'textarea',
      label: 'Subtítulo Principal (H2)',
      defaultValue:
        'Ayudamos a restaurantes, marcas y negocios locales a captar clientes con flyers de alto impacto, menús digitales y landing pages ultra-rápidas.',
      required: true,
    },
    {
      name: 'heroPrimaryCtaText',
      type: 'text',
      label: 'Texto del Botón Primario (Hero)',
      defaultValue: 'Ver Servicios y Precios',
      required: true,
    },
    {
      name: 'heroSecondaryCtaText',
      type: 'text',
      label: 'Texto del Botón Secundario (Hero - WhatsApp)',
      defaultValue: 'Cotizar por WhatsApp',
      required: true,
    },
    {
      name: 'navbarCtaText',
      type: 'text',
      label: 'Texto del Botón en Navbar (WhatsApp)',
      defaultValue: 'Escríbenos por WhatsApp',
      required: true,
    },
    {
      name: 'whatsappNumber',
      type: 'text',
      label: 'Número de WhatsApp (con código de país, ej. 573248000501)',
      defaultValue: '573248000501',
      required: true,
    },
    {
      name: 'brandAccentColor',
      type: 'text',
      label: 'Color de Acento de Marca (HEX)',
      defaultValue: '#3DDC97',
      required: true,
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Redes Sociales Corporativas',
      defaultValue: [
        { name: 'Instagram', url: 'https://instagram.com/pandahaus' },
        { name: 'TikTok', url: 'https://tiktok.com/@pandahaus' },
      ],
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Nombre de la Red (ej. Instagram, TikTok)',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Enlace / URL',
          required: true,
        },
      ],
    },
    {
      name: 'serviceCatalogKicker',
      type: 'text',
      label: 'Badge / Kicker del Catálogo de Servicios',
      defaultValue: 'Transparencia Total • Sin Letra Pequeña',
    },
    {
      name: 'serviceCatalogTitle',
      type: 'text',
      label: 'Título de la Sección de Servicios',
      defaultValue: 'Catálogo de Servicios A la Carta',
    },
    {
      name: 'serviceCatalogSubtitle',
      type: 'textarea',
      label: 'Descripción / Subtítulo del Catálogo',
      defaultValue:
        'Paga únicamente por lo que necesitas para tu negocio. Entregas ultra-rápidas en 24 a 48 horas con archivos en alta resolución listos para publicar o imprimir.',
    },
    {
      name: 'serviceCatalogGuaranteePrimary',
      type: 'text',
      label: 'Texto de Garantía Principal',
      defaultValue: '50% anticipo al iniciar • 50% contra entrega final aprobada.',
    },
    {
      name: 'serviceCatalogGuaranteeSecondary',
      type: 'text',
      label: 'Texto de Garantía Secundaria',
      defaultValue: 'Revisiones incluidas en cada servicio.',
    },
  ],
}
