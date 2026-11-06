import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const Packages: CollectionConfig = {
  slug: 'packages',
  labels: {
    singular: 'Paquete de Precio',
    plural: 'Paquetes y Precios',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'popular', 'order'],
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
      name: 'name',
      type: 'text',
      label: 'Nombre del Pack (ej. Pack Menú Pro)',
      required: true,
    },
    {
      name: 'price',
      type: 'text',
      label: 'Precio (ej. $180.000)',
      required: true,
    },
    {
      name: 'currency',
      type: 'text',
      label: 'Moneda (ej. COP)',
      defaultValue: 'COP',
    },
    {
      name: 'period',
      type: 'text',
      label: 'Período / Plazo (ej. entrega ágil)',
      defaultValue: 'entrega ágil',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción Corta del Paquete',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Características y Beneficios Incluidos',
      required: true,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Característica / Entregable',
          required: true,
        },
      ],
    },
    {
      name: 'popular',
      type: 'checkbox',
      label: 'Destacar como "Más Solicitado" (Borde Verde Menta)',
      defaultValue: false,
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'Texto del Botón (ej. Elegir Pack Menú Pro)',
      defaultValue: 'Elegir Plan',
    },
    {
      name: 'whatsappMessage',
      type: 'textarea',
      label: 'Mensaje Prellenado para WhatsApp',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Orden de Aparición',
      defaultValue: 0,
    },
  ],
}
