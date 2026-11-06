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
      name: 'whatsappNumber',
      type: 'text',
      label: 'Número de WhatsApp (con código de país, ej. 573248000501)',
      defaultValue: '573248000501',
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
  ],
}
