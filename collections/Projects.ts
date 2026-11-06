import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Proyecto Comercial',
    plural: 'Proyectos Comerciales',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'clientName', 'category', 'deviceMockup', 'featured'],
  },
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
    afterDelete: [
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
      name: 'title',
      type: 'text',
      label: 'Título Comercial (ej. Menú digital interactivo)',
      required: true,
    },
    {
      name: 'clientName',
      type: 'text',
      label: 'Nombre del Negocio (ej. Barbería The King)',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Categoría',
      required: true,
      defaultValue: 'flyers-menus',
      options: [
        { label: 'Flyers & Menús', value: 'flyers-menus' },
        { label: 'Landing Pages', value: 'landing-pages' },
        { label: 'Branding', value: 'branding' },
      ],
    },
    {
      name: 'deviceMockup',
      type: 'select',
      label: 'Marco de Dispositivo',
      defaultValue: 'mobile',
      options: [
        { label: 'Celular (Mobile 9:16 / 4:5)', value: 'mobile' },
        { label: 'Computador / Navegador (Desktop 16:9)', value: 'desktop' },
      ],
    },
    {
      name: 'businessResult',
      type: 'textarea',
      label: 'Impacto Comercial / Retorno',
    },
    {
      name: 'coverMedia',
      type: 'upload',
      relationTo: 'media',
      label: 'Archivo de Portada (Media)',
    },
    {
      name: 'coverUrl',
      type: 'text',
      label: 'URL de Portada Directa (opcional, ej. /projects/...)',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Destacado en Portafolio',
      defaultValue: true,
    },
  ],
}
