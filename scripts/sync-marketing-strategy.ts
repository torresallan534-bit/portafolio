import { getPayload } from 'payload'
import config from '../payload.config'

async function sync() {
  console.log('--- Actualizando MongoDB Atlas con la Nueva Estrategia Gastronómica ---')
  const payload = await getPayload({ config })

  // 1. Actualizar SiteSettings en MongoDB Atlas
  console.log('1. Actualizando SiteSettings...')
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      heroBadgeText: 'Soluciones Visuales & Digitales para Restaurantes y Negocios Locales',
      heroTitle: 'Hacemos que tu restaurante se vea profesional y venda más en digital.',
      heroSubtitle:
        'Flyers de alto impacto entregados en 24 horas, menús interactivos con código QR y sucursales web para recibir pedidos directos a tu WhatsApp sin pagar comisiones.',
      heroPrimaryCtaText: 'Ver Catálogo y Precios Oficiales',
      heroSecondaryCtaText: 'Cotizar por WhatsApp',
      navbarCtaText: 'Pedir por WhatsApp',
      whatsappNumber: '573248000501',
      brandAccentColor: '#3DDC97',
      socialLinks: [
        { name: 'Instagram', url: 'https://instagram.com/pandahaus.co' },
        { name: 'TikTok', url: 'https://tiktok.com/@pandahaus.co' },
      ],
    },
  })
  console.log('  [OK] SiteSettings actualizado con éxito.')

  // 2. Actualizar Paquetes a los 3 Nuevos Combos
  console.log('2. Actualizando Colección Packages...')
  const currentPacks = await payload.find({ collection: 'packages', limit: 100 })
  for (const doc of currentPacks.docs) {
    await payload.delete({ collection: 'packages', id: doc.id })
  }

  const newPacks = [
    {
      name: 'PACK CARTA ABIERTA',
      price: '$160.000',
      currency: 'COP',
      period: 'Ahorras $25.000',
      description: 'Diseñado para renovar la carta física y digital de tu restaurante, facilitando pedidos ágiles.',
      features: [
        { text: 'Menú digital interactivo (hasta 4 páginas)' },
        { text: 'Habladores / Stickers QR listos para imprenta' },
        { text: '2 Flyers promocionales para redes' },
        { text: 'Entrega rápida en 48 a 72 horas' },
      ],
      popular: false,
      ctaText: 'Elegir Pack Carta Abierta',
      whatsappMessage: 'Hola Panda Haus, quiero el Pack Carta Abierta (Menú QR + Habladores + Flyers).',
      order: 1,
    },
    {
      name: 'PLAN MENSUAL: FLUJO CONTINUO',
      price: '$240.000',
      currency: 'COP',
      period: '/mes (El favorito recurrente)',
      description: 'La solución definitiva para mantener tu restaurante activo con promociones constantes y clientes nuevos.',
      features: [
        { text: '8 Flyers de alto impacto al mes' },
        { text: '2 Videos cortos / Reels editados' },
        { text: 'Actualización continua de precios y platos' },
        { text: 'Soporte prioritario directo vía WhatsApp' },
      ],
      popular: true,
      ctaText: 'Activar Plan Mensual',
      whatsappMessage: 'Hola Panda Haus, quiero activar el Plan Mensual de Flyers y Videos',
      order: 2,
    },
    {
      name: 'COMBO SUCURSAL COMPLETA',
      price: '$460.000',
      currency: 'COP',
      period: 'Ahorras $50.000',
      description: 'Presencia digital comercial completa: Tu propia plataforma de pedidos lista para facturar.',
      features: [
        { text: 'Setup de Sucursal Digital completa (Catálogo web)' },
        { text: '2 Flyers comerciales de lanzamiento' },
        { text: '1 Reel / Video corto de lanzamiento' },
        { text: 'Lista para facturar pedidos en 72 horas' },
      ],
      popular: false,
      ctaText: 'Elegir Sucursal Completa',
      whatsappMessage: 'Hola Panda Haus, quiero el Combo Sucursal Completa ($460.000 COP) para mi restaurante.',
      order: 3,
    },
  ]

  for (const pack of newPacks) {
    await payload.create({
      collection: 'packages',
      data: pack,
    })
    console.log(`  [OK] Creado paquete: ${pack.name}`)
  }

  console.log('--- ¡Sincronización en MongoDB Atlas terminada! ---')
  process.exit(0)
}

sync().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
