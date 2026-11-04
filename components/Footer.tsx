import { ArrowUp } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#0A0A0B] py-10 px-5 sm:px-8 text-xs text-[#71717A]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 font-mono text-[#A1A1AA]">
            <span className="w-1.5 h-1.5 rounded-full bg-success" />
            <span>{DESIGNER_INFO.name} &bull; Visual Identity & Graphic Design</span>
          </div>
          <span className="hidden sm:inline text-border">|</span>
          <span>&copy; {new Date().getFullYear()} Todos los derechos reservados.</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[#71717A]">
            {DESIGNER_INFO.location}
          </span>
          <a
            href="#inicio"
            aria-label="Volver arriba"
            className="p-2 rounded-md bg-surface border border-border text-[#A1A1AA] hover:text-[#F5F5F7] transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
