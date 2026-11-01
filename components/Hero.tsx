import { ArrowDown, MessageCircle, Sparkles, Layers, Send } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolio-data";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    DESIGNER_INFO.whatsappMessage
  )}`;

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Editorial badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 w-fit mb-6 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        <span>Portafolio Profesional &bull; 2024 - 2025</span>
      </div>

      {/* Main typography & name */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]">
          Allan Torres
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light tracking-tight max-w-3xl leading-snug">
          Diseño gráfico con impacto real:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-medium">
            identidades visuales, menús gastronómicos
          </span>{" "}
          y piezas promocionales que posicionan marcas y atraen clientes.
        </p>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
          Especializado en la creación visual para el sector gastronómico (areperas, bistrós, restobares),
          barberías urbanas, campañas sociales y negocios que exigen diseño de alto calibre estético.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#proyectos"
          className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-black/40 active:scale-95"
        >
          <Layers className="w-4 h-4" />
          <span>Ver Galería de Trabajos</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full glass-panel hover:bg-zinc-800/80 text-zinc-200 hover:text-white font-medium text-sm transition-all duration-300 border-zinc-700/60 active:scale-95"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>Cotizar por WhatsApp</span>
        </a>

        <a
          href={DESIGNER_INFO.telegramUrl || `https://t.me/${DESIGNER_INFO.telegramUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-zinc-400 hover:text-sky-400 text-sm font-medium transition-colors"
        >
          <Send className="w-4 h-4 text-sky-400" />
          <span>Telegram</span>
        </a>
      </div>

      {/* Metrics / Key highlights bar */}
      <div className="mt-16 sm:mt-24 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {DESIGNER_INFO.stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-zinc-400 font-normal mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
