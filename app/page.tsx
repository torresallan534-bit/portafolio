import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import Services from "@/components/Services";
import WorkProcess from "@/components/WorkProcess";
import ClientReviews from "@/components/ClientReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectGallery />
        <Services />
        <WorkProcess />
        <ClientReviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
