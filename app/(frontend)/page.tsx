import { getPayload } from "payload";
import configPromise from "@payload-config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NicheAuthority from "@/components/NicheAuthority";
import SucursalDigital from "@/components/SucursalDigital";
import ServiceCatalog, { ServiceItem } from "@/components/ServiceCatalog";
import ProjectGallery from "@/components/ProjectGallery";
import Pricing from "@/components/Pricing";
import WorkProcess from "@/components/WorkProcess";
import ClientReviews from "@/components/ClientReviews";
import WorkPoliciesBanner from "@/components/WorkPoliciesBanner";
import Footer from "@/components/Footer";
import { ProjectBlock } from "@/types/projects";

// Forzar renderizado dinámico para reflejar cambios de Payload al instante
export const dynamic = "force-dynamic";

export default async function Home() {
  let settings: any = null;
  let dynamicProjects: ProjectBlock[] = [];
  let dynamicPackages: any[] = [];
  let dynamicReviews: any[] = [];
  let dynamicServices: ServiceItem[] = [];

  // Bloque robusto de extracción con try-catch y fallbacks automáticos
  try {
    const payload = await getPayload({ config: configPromise });

    // 1. Ajustes Generales del Sitio (Global)
    settings = await payload.findGlobal({ slug: "site-settings" }).catch(() => null);

    // 2. Proyectos Comerciales
    const projectsRes = await payload
      .find({
        collection: "projects",
        sort: "order",
        limit: 100,
      })
      .catch(() => null);

    if (projectsRes && projectsRes.docs?.length > 0) {
      dynamicProjects = projectsRes.docs.map((doc: any) => ({
        id: String(doc.id),
        clientId: doc.clientId || doc.clientName?.toLowerCase().replace(/\s+/g, "-") || "cliente",
        clientName: doc.clientName || "Cliente",
        title: doc.title,
        category: doc.category,
        categoryLabel: doc.categoryLabel || doc.category,
        summary: doc.summary || "",
        challenge: doc.challenge || "",
        solution: doc.solution || "",
        coverAsset: doc.coverAsset || "",
        coverMediaType: doc.coverMediaType || "image",
        previewVideoUrl: doc.previewVideoUrl || undefined,
        assets: (doc.assets || []).map((a: any, idx: number) => ({
          id: a.id || `asset-${idx}`,
          title: a.title,
          assetPath: a.assetPath,
          mediaType: a.mediaType || "image",
          aspectRatio: a.aspectRatio || "1:1",
        })),
        colorPalette: (doc.colorPalette || []).map((c: any) => ({
          name: c.name,
          hex: c.hex,
        })),
        year: doc.year || 2026,
        featured: doc.featured ?? true,
      }));
    }

    // 3. Paquetes y Precios Comerciales
    const packagesRes = await payload
      .find({
        collection: "packages",
        sort: "order",
        limit: 20,
      })
      .catch(() => null);

    if (packagesRes && packagesRes.docs?.length > 0) {
      dynamicPackages = packagesRes.docs;
    }

    // 4. Reseñas y Testimonios de Clientes (solo aprobadas)
    const reviewsRes = await payload
      .find({
        collection: "reviews",
        where: { approved: { equals: true } },
        limit: 20,
      })
      .catch(() => null);

    if (reviewsRes && reviewsRes.docs?.length > 0) {
      dynamicReviews = reviewsRes.docs.map((r: any) => ({
        id: r.id,
        name: r.authorName,
        role: r.role || "Cliente Comercial",
        brand: r.businessName,
        rating: r.rating || 5,
        comment: r.comment,
        service: r.service || "Servicio Comercial Panda Haus",
        date: r.date || "Reciente",
        verified: r.verified !== undefined ? r.verified : true,
      }));
    }

    // 5. Catálogo de Servicios A la Carta
    const servicesRes = await (payload as any)
      .find({
        collection: "services",
        where: { active: { not_equals: false } },
        sort: "order",
        limit: 100,
      })
      .catch(() => null);

    if (servicesRes && servicesRes.docs?.length > 0) {
      dynamicServices = servicesRes.docs.map((s: any) => ({
        id: String(s.id),
        name: s.name,
        deliverable: s.deliverable,
        time: s.time,
        price: s.price,
        badge: s.badge || undefined,
        highlight: Boolean(s.highlight),
        whatsappMessage: s.whatsappMessage || undefined,
      }));
    }
  } catch (error) {
    console.error("Payload CMS local fetch fallback to default values:", error);
  }

  // Textos y configuraciones dinámicas alineados con el posicionamiento agresivo de conversión
  const heroBadge =
    settings?.heroBadgeText ||
    "Ecosistemas Digitales de Alta Conversión • 2026";
  const heroTitle =
    settings?.heroTitle ||
    "Escalamos las ventas de tu negocio local con ecosistemas digitales rentables";
  const heroSubtitle =
    settings?.heroSubtitle ||
    "Diseñamos portales de alta autoridad, cartas interactivas y embudos de venta directos a tu WhatsApp para que dejes de perder clientes con páginas de los 2000s.";
  const heroPrimaryCta = settings?.heroPrimaryCtaText || "Quiero un diagnóstico de mi web";
  const heroSecondaryCta = settings?.heroSecondaryCtaText || "Ver Casos de Éxito";
  const navbarCta = settings?.navbarCtaText || "Diagnóstico Gratis ⚡";
  const whatsappNumber = settings?.whatsappNumber || "573248000501";
  const brandAccentColor = settings?.brandAccentColor || "#3DDC97";
  const socialLinks = settings?.socialLinks;

  return (
    <div
      className="flex flex-col min-h-screen bg-[#0D0D0D] text-[#F2F4F3]"
      style={{ "--brand-accent": brandAccentColor } as React.CSSProperties}
    >
      {/* 1. Barra de navegación con badge 24-72h y botón Diagnóstico Gratis */}
      <Navbar whatsappNumber={whatsappNumber} ctaText={navbarCta} />

      <main className="flex-1">
        {/* 2. Above the fold: H1 agresivo, botón de diagnóstico y 3D Mockup Nails Pastel */}
        <Hero
          badge={heroBadge}
          title={heroTitle}
          subtitle={heroSubtitle}
          primaryCtaText={heroPrimaryCta}
          secondaryCtaText={heroSecondaryCta}
          whatsappNumber={whatsappNumber}
        />

        {/* 3. Autoridad: Iconos de Nichos Dominados (Restaurantes, Spas, Barberías, Comercios) */}
        <NicheAuthority />

        {/* 4. Portafolio (Deseo): Mockups Flotantes 3D de iPhones y MacBooks */}
        <ProjectGallery initialProjects={dynamicProjects} />

        {/* 5. Solución Destacada: Sucursal Digital Autogestionable ($390.000 COP) */}
        <SucursalDigital />

        {/* 6. Catálogo de Servicios A la Carta (Tabla comparativa responsive) */}
        <ServiceCatalog
          services={dynamicServices.length > 0 ? dynamicServices : undefined}
          whatsappNumber={whatsappNumber}
          kicker={settings?.serviceCatalogKicker}
          title={settings?.serviceCatalogTitle}
          subtitle={settings?.serviceCatalogSubtitle}
          guaranteePrimary={settings?.serviceCatalogGuaranteePrimary}
          guaranteeSecondary={settings?.serviceCatalogGuaranteeSecondary}
        />

        {/* 6. Sección de Combos y Planes Recurrentes */}
        <Pricing packages={dynamicPackages} whatsappNumber={whatsappNumber} />

        {/* Proceso de Trabajo Ágil */}
        <WorkProcess />

        {/* Reseñas y Testimonios Reales */}
        <ClientReviews initialReviews={dynamicReviews} />

        {/* 7. Franja de Políticas y Condiciones de Trabajo Claras */}
        <WorkPoliciesBanner />
      </main>

      {/* Footer Institucional */}
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
