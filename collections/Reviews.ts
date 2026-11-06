import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  labels: {
    singular: 'Reseña de Cliente',
    plural: 'Reseñas y Testimonios',
  },
  admin: {
    useAsTitle: 'authorName',
    defaultColumns: ['authorName', 'businessName', 'rating', 'approved'],
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
      name: 'authorName',
      type: 'text',
      label: 'Nombre del Cliente',
      required: true,
    },
    {
      name: 'businessName',
      type: 'text',
      label: 'Nombre del Negocio / Marca',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Calificación (1 a 5 estrellas)',
      min: 1,
      max: 5,
      defaultValue: 5,
      required: true,
    },
    {
      name: 'comment',
      type: 'textarea',
      label: 'Comentario / Reseña',
      required: true,
    },
    {
      name: 'approved',
      type: 'checkbox',
      label: 'Aprobado para mostrar en la web pública',
      defaultValue: true,
    },
  ],
}
