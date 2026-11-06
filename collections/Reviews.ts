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
    defaultColumns: ['authorName', 'businessName', 'rating', 'approved', 'date'],
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
      name: 'role',
      type: 'text',
      label: 'Cargo / Rol (ej. Propietario, Gerente, Fundador)',
      defaultValue: 'Cliente Comercial',
    },
    {
      name: 'businessName',
      type: 'text',
      label: 'Nombre del Negocio o Marca',
      required: true,
    },
    {
      name: 'service',
      type: 'text',
      label: 'Servicio Contratado (ej. Menús Digitales QR & Cartas)',
      defaultValue: 'Servicio Comercial Panda Haus',
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
      label: 'Testimonio / Comentario',
      required: true,
    },
    {
      name: 'date',
      type: 'text',
      label: 'Fecha Visible (ej. Enero 2026)',
      defaultValue: 'Reciente',
    },
    {
      name: 'verified',
      type: 'checkbox',
      label: 'Cliente Verificado (Insignia Verde)',
      defaultValue: true,
    },
    {
      name: 'approved',
      type: 'checkbox',
      label: 'Aprobado para mostrar en la web pública',
      defaultValue: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Orden de Aparición',
      defaultValue: 0,
    },
  ],
}
