import { ArrowUp, Heart } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{DESIGNER_INFO.name} &bull; Visual Identity & Graphic Design</span>
          </div>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span>&copy; {new Date().getFullYear()} Todos los derechos reservados.</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-zinc-400">
            {DESIGNER_INFO.location}
          </span>
          <a
            href="#inicio"
            aria-label="Volver arriba"
            className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
