import { ArrowUp } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#09090B] py-10 px-5 sm:px-8 text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 font-mono text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{DESIGNER_INFO.name} &bull; Productor de Contenido Visual & Multimedia</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>&copy; {new Date().getFullYear()} Todos los derechos reservados.</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-zinc-400">
            {DESIGNER_INFO.location}
          </span>
          <a
            href="#inicio"
            aria-label="Volver arriba"
            className="p-2 rounded-lg bg-zinc-900 border border-white/[0.08] text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
