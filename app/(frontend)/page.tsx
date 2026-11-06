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

export default async function Home() {
  let settings: any = null;
  let dynamicPackages: any[] = [];
  let dynamicReviews: any[] = [];

  try {
    const payload = await getPayload({ config: configPromise });

    // 1. Ajustes Generales
    settings = await payload.findGlobal({ slug: "site-settings" }).catch(() => null);

    // 2. Paquetes y Precios
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

    // 3. Reseñas y Testimonios (solo aprobados)
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
        role: "Cliente Comercial",
        brand: r.businessName,
        rating: r.rating || 5,
        comment: r.comment,
        service: "Servicio Comercial Panda Haus",
        date: "Reciente",
        verified: true,
      }));
    }
  } catch (error) {
    console.error("Payload CMS local fetch fallback:", error);
  }

  const whatsappNumber = settings?.whatsappNumber;
  const heroTitle = settings?.heroTitle;
  const heroSubtitle = settings?.heroSubtitle;
  const socialLinks = settings?.socialLinks;

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] text-[#F2F4F3]">
      <Navbar whatsappNumber={whatsappNumber} />
      <main className="flex-1">
        <Hero
          title={heroTitle}
          subtitle={heroSubtitle}
          whatsappNumber={whatsappNumber}
        />
        <Services />
        <ProjectGallery />
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
