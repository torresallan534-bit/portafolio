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
    defaultColumns: ['title', 'clientName', 'category', 'year', 'featured'],
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
      label: 'Título Comercial',
      required: true,
    },
    {
      name: 'clientName',
      type: 'text',
      label: 'Nombre del Cliente / Negocio',
      required: true,
    },
    {
      name: 'clientId',
      type: 'text',
      label: 'Identificador del Cliente (ej. axis-pro, the-king)',
    },
    {
      name: 'category',
      type: 'select',
      label: 'Categoría',
      required: true,
      options: [
        { label: 'Videos Comerciales & Demo', value: 'videos' },
        { label: 'Menús Gastronómicos & QR', value: 'menus' },
        { label: 'Flyers & Promociones', value: 'flyers' },
        { label: 'Carruseles para Redes', value: 'carruseles' },
        { label: 'Ebooks & Guías Editoriales', value: 'ebooks' },
        { label: 'Miniaturas YouTube', value: 'miniaturas' },
        { label: 'Branding & Identidad', value: 'branding' },
        { label: 'Landing Pages de Conversión', value: 'landing-pages' },
      ],
    },
    {
      name: 'categoryLabel',
      type: 'text',
      label: 'Etiqueta de Categoría (Badge Visible)',
    },
    {
      name: 'summary',
      type: 'textarea',
      label: 'Resumen Comercial',
    },
    {
      name: 'challenge',
      type: 'textarea',
      label: 'El Reto',
    },
    {
      name: 'solution',
      type: 'textarea',
      label: 'La Solución Gráfica / Audiovisual',
    },
    {
      name: 'coverAsset',
      type: 'text',
      label: 'Ruta o URL de Portada (ej. /projects/...)',
      required: true,
    },
    {
      name: 'coverMediaType',
      type: 'select',
      label: 'Tipo de Multimedia de Portada',
      defaultValue: 'image',
      options: [
        { label: 'Imagen', value: 'image' },
        { label: 'Video', value: 'video' },
      ],
    },
    {
      name: 'previewVideoUrl',
      type: 'text',
      label: 'URL de Video para Hover Preview (opcional)',
    },
    {
      name: 'assets',
      type: 'array',
      label: 'Piezas / Entregables del Trabajo',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título de la Pieza',
          required: true,
        },
        {
          name: 'assetPath',
          type: 'text',
          label: 'Ruta del Archivo (ej. /projects/...)',
          required: true,
        },
        {
          name: 'mediaType',
          type: 'select',
          label: 'Tipo de Archivo',
          defaultValue: 'image',
          options: [
            { label: 'Imagen', value: 'image' },
            { label: 'Video', value: 'video' },
          ],
        },
        {
          name: 'aspectRatio',
          type: 'select',
          label: 'Proporción de Aspecto',
          defaultValue: '1:1',
          options: [
            { label: '16:9 (Panorámico / Horizontal)', value: '16:9' },
            { label: '9:16 (Vertical / Reels / Historias)', value: '9:16' },
            { label: '1:1 (Cuadrado / Carrusel)', value: '1:1' },
            { label: '3:4 (Flyer Vertical)', value: '3:4' },
          ],
        },
      ],
    },
    {
      name: 'colorPalette',
      type: 'array',
      label: 'Paleta Cromática (Clic para Copiar en Modal)',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Nombre del Color',
          required: true,
        },
        {
          name: 'hex',
          type: 'text',
          label: 'Código HEX (ej. #3DDC97)',
          required: true,
        },
      ],
    },
    {
      name: 'year',
      type: 'number',
      label: 'Año',
      defaultValue: 2026,
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Destacado en Portafolio',
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
