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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] text-[#F2F4F3]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <ProjectGallery />
        <Pricing />
        <WorkProcess />
        <ClientReviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
