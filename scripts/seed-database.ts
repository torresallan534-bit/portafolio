import { getPayload } from 'payload'
import config from '../payload.config'
import projectsData from '../data/projects.json'
import { PRICING_PACKS, CLIENT_REVIEWS, PANDA_HAUS_INFO } from '../data/portfolio-data'

async function seed() {
  console.log('--- Iniciando Sincronización y Siembra de Base de Datos Panda Haus ---')

  const payload = await getPayload({ config })

  // 1. Sembrar o Actualizar SiteSettings (Global)
  console.log('1. Sincronizando Ajustes Generales del Sitio (SiteSettings)...')
  try {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        heroBadgeText: PANDA_HAUS_INFO.tagline || 'Estudio de Diseño Visual & Web Comercial',
        heroTitle: PANDA_HAUS_INFO.headline || 'Diseño visual y páginas web que hacen destacar tu negocio.',
        heroSubtitle:
          PANDA_HAUS_INFO.subheadline ||
          'Ayudamos a restaurantes, marcas y negocios locales a captar clientes con flyers de alto impacto, menús digitales y landing pages ultra-rápidas.',
        heroPrimaryCtaText: 'Ver Servicios y Precios',
        heroSecondaryCtaText: 'Cotizar por WhatsApp',
        navbarCtaText: 'Escríbenos por WhatsApp',
        whatsappNumber: PANDA_HAUS_INFO.whatsappNumber || '573248000501',
        brandAccentColor: '#3DDC97',
        socialLinks: [
          { name: 'Instagram', url: PANDA_HAUS_INFO.socials.instagram },
          { name: 'TikTok', url: PANDA_HAUS_INFO.socials.tiktok },
        ],
      },
    })
    console.log('  [OK] SiteSettings guardado con éxito.')
  } catch (err) {
    console.error('  [ERROR] al guardar SiteSettings:', err)
  }

  // 2. Sembrar Paquetes y Precios (Packages)
  console.log('2. Sincronizando Paquetes Comerciales (Packages)...')
  const existingPackages = await payload.find({
    collection: 'packages',
    limit: 100,
  })

  if (existingPackages.docs.length === 0) {
    for (let i = 0; i < PRICING_PACKS.length; i++) {
      const pack = PRICING_PACKS[i]
      const period =
        pack.id === 'pack-arranque'
          ? 'entrega 24-48h'
          : pack.id === 'pack-menu-pro'
          ? 'entrega 48h'
          : 'entrega 48-72h'

      await payload.create({
        collection: 'packages',
        data: {
          name: pack.name,
          price: pack.price,
          currency: pack.currency || 'COP',
          period,
          description: pack.description,
          features: pack.features.map((f) => ({ text: f })),
          popular: Boolean(pack.popular),
          ctaText: pack.ctaText,
          whatsappMessage: pack.whatsappMessage,
          order: i + 1,
        },
      })
      console.log(`  [OK] Paquete creado: ${pack.name}`)
    }
  } else {
    console.log(`  [INFO] Ya existen ${existingPackages.docs.length} paquetes. Omitiendo creación inicial.`)
  }

  // 3. Sembrar Reseñas de Clientes (Reviews)
  console.log('3. Sincronizando Reseñas y Testimonios (Reviews)...')
  const existingReviews = await payload.find({
    collection: 'reviews',
    limit: 100,
  })

  if (existingReviews.docs.length === 0) {
    for (let i = 0; i < CLIENT_REVIEWS.length; i++) {
      const rev = CLIENT_REVIEWS[i]
      await payload.create({
        collection: 'reviews',
        data: {
          authorName: rev.name,
          role: rev.role || 'Cliente Comercial',
          businessName: rev.brand,
          service: rev.service || 'Servicio Comercial Panda Haus',
          rating: rev.rating || 5,
          comment: rev.comment,
          date: rev.date || 'Reciente',
          verified: rev.verified !== undefined ? rev.verified : true,
          approved: true,
          order: i + 1,
        },
      })
      console.log(`  [OK] Reseña creada: ${rev.name} (${rev.brand})`)
    }
  } else {
    console.log(`  [INFO] Ya existen ${existingReviews.docs.length} reseñas. Omitiendo creación inicial.`)
  }

  // 4. Sembrar Trabajos y Proyectos Comerciales (Projects)
  console.log('4. Sincronizando Portafolio de Trabajos (Projects)...')
  const existingProjects = await payload.find({
    collection: 'projects',
    limit: 100,
  })

  if (existingProjects.docs.length === 0) {
    for (let i = 0; i < projectsData.length; i++) {
      const p: any = projectsData[i]
      await payload.create({
        collection: 'projects',
        data: {
          title: p.title,
          clientName: p.clientName,
          clientId: p.clientId,
          category: p.category,
          categoryLabel: p.categoryLabel,
          summary: p.summary || '',
          challenge: p.challenge || '',
          solution: p.solution || '',
          coverAsset: p.coverAsset,
          coverMediaType: p.coverMediaType || 'image',
          previewVideoUrl: p.previewVideoUrl || '',
          assets: (p.assets || []).map((a: any) => ({
            title: a.title,
            assetPath: a.assetPath,
            mediaType: a.mediaType || 'image',
            aspectRatio: a.aspectRatio || '1:1',
          })),
          colorPalette: (p.colorPalette || []).map((c: any) => ({
            name: c.name,
            hex: c.hex,
          })),
          year: p.year || 2026,
          featured: p.featured !== undefined ? p.featured : true,
          order: i + 1,
        },
      })
      console.log(`  [OK] Proyecto creado: ${p.title} (${p.category})`)
    }
  } else {
    console.log(`  [INFO] Ya existen ${existingProjects.docs.length} proyectos. Omitiendo creación inicial.`)
  }

  console.log('--- ¡Sincronización completada con éxito! ---')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Error fatal durante la siembra:', err)
  process.exit(1)
})
