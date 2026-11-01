import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import Services from "@/components/Services";
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
