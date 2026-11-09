import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Servicio A la Carta',
    plural: 'Servicios A la Carta',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'time', 'badge', 'highlight', 'active', 'order'],
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
      label: 'Nombre del Servicio Comercial (ej. Flyer Promocional)',
      required: true,
    },
    {
      name: 'deliverable',
      type: 'text',
      label: 'Entregable Incluido (ej. 1 pieza publicitaria 1:1 o 9:16 PNG HD)',
      required: true,
    },
    {
      name: 'time',
      type: 'text',
      label: 'Tiempo de Entrega (ej. 24 horas, 48 horas)',
      defaultValue: '24 horas',
      required: true,
    },
    {
      name: 'price',
      type: 'text',
      label: 'Precio / Inversión (ej. $30.000, $120.000)',
      required: true,
    },
    {
      name: 'badge',
      type: 'text',
      label: 'Badge / Etiqueta Opcional (ej. Más Pedido, Especialidad, Alto Alcance)',
    },
    {
      name: 'highlight',
      type: 'checkbox',
      label: 'Destacar Servicio (resalta la tarjeta/fila con borde menta)',
      defaultValue: false,
    },
    {
      name: 'whatsappMessage',
      type: 'text',
      label: 'Mensaje personalizado para WhatsApp (Opcional)',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Orden numérico de aparición (1, 2, 3...)',
      defaultValue: 1,
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Activo (mostrar en la página web pública)',
      defaultValue: true,
    },
  ],
}
