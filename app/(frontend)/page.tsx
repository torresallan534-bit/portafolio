import { getPayload } from "payload";
import configPromise from "@payload-config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProjectGallery from "@/components/ProjectGallery";
import Pricing from "@/components/Pricing";
import WorkProcess from "@/components/WorkProcess";
import ClientReviews from "@/components/ClientReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ProjectBlock } from "@/types/projects";

// Forzar renderizado dinámico para reflejar cambios de Payload al instante
export const dynamic = "force-dynamic";

export default async function Home() {
  let settings: any = null;
  let dynamicProjects: ProjectBlock[] = [];
  let dynamicPackages: any[] = [];
  let dynamicReviews: any[] = [];

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
  } catch (error) {
    // Si la BD está vacía o hay latencia en conexión, no se rompe la web pública
    console.error("Payload CMS local fetch fallback to default values:", error);
  }

  // Textos y configuraciones dinámicas con respaldo 100% garantizado
  const heroBadge = settings?.heroBadgeText || "Estudio de Diseño Visual & Web Comercial";
  const heroTitle = settings?.heroTitle || "Diseño visual y páginas web que hacen destacar tu negocio.";
  const heroSubtitle =
    settings?.heroSubtitle ||
    "Ayudamos a restaurantes, marcas y negocios locales a captar clientes con flyers de alto impacto, menús digitales y landing pages ultra-rápidas.";
  const heroPrimaryCta = settings?.heroPrimaryCtaText || "Ver Servicios y Precios";
  const heroSecondaryCta = settings?.heroSecondaryCtaText || "Cotizar por WhatsApp";
  const navbarCta = settings?.navbarCtaText || "Escríbenos por WhatsApp";
  const whatsappNumber = settings?.whatsappNumber || "573248000501";
  const brandAccentColor = settings?.brandAccentColor || "#3DDC97";
  const socialLinks = settings?.socialLinks;

  return (
    <div
      className="flex flex-col min-h-screen bg-[#0D0D0D] text-[#F2F4F3]"
      style={{ "--brand-accent": brandAccentColor } as React.CSSProperties}
    >
      <Navbar whatsappNumber={whatsappNumber} ctaText={navbarCta} />
      <main className="flex-1">
        <Hero
          badge={heroBadge}
          title={heroTitle}
          subtitle={heroSubtitle}
          primaryCtaText={heroPrimaryCta}
          secondaryCtaText={heroSecondaryCta}
          whatsappNumber={whatsappNumber}
        />
        <Services />
        <ProjectGallery initialProjects={dynamicProjects} />
        <Pricing packages={dynamicPackages} whatsappNumber={whatsappNumber} />
        <WorkProcess />
        <ClientReviews initialReviews={dynamicReviews} />
        <Contact whatsappNumber={whatsappNumber} />
      </main>
      <Footer socialLinks={socialLinks} />
      <FloatingWhatsApp whatsappNumber={whatsappNumber} />
    </div>
  );
}
