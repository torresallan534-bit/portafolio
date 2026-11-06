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
    defaultColumns: ['name', 'priceCOP', 'isPopular'],
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
      name: 'priceCOP',
      type: 'text',
      label: 'Precio en COP (ej. $180.000 COP)',
      required: true,
    },
    {
      name: 'features',
      type: 'array',
      label: 'Lo que Incluye (Beneficios)',
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
      name: 'isPopular',
      type: 'checkbox',
      label: 'Destacar como "Más Solicitado" (Borde Verde Menta)',
      defaultValue: false,
    },
    {
      name: 'whatsappMessage',
      type: 'text',
      label: 'Mensaje Prellenado para WhatsApp',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Orden de Visualización',
      defaultValue: 0,
    },
  ],
}
