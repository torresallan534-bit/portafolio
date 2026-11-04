import { ArrowDown, MessageCircle, Send } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolio-data";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    DESIGNER_INFO.whatsappMessage
  )}`;

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-5 sm:px-8 max-w-6xl mx-auto"
    >
      {/* Subtle accent glow — just one, very faint */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent/[0.04] blur-[120px]" />

      <div className="relative space-y-8 max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface border border-border text-xs font-mono text-[#A1A1AA]">
          Portafolio 2024–2025
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-[#F5F5F7] leading-[1.05]">
          Allan Torres
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-[#A1A1AA] font-sans font-light tracking-tight leading-snug max-w-2xl">
          Diseño gráfico con impacto real:{" "}
          <span className="text-accent font-medium">
            identidades visuales, menús gastronómicos
          </span>{" "}
          y piezas promocionales que atraen clientes.
        </p>

        <p className="text-base text-[#71717A] max-w-xl leading-relaxed">
          Especializado en la creación visual para el sector gastronómico,
          barberías urbanas y negocios que exigen diseño profesional.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#proyectos"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#F5F5F7] text-[#0A0A0B] font-semibold text-sm hover:bg-accent hover:text-[#0A0A0B] transition-colors duration-200"
        >
          Ver Trabajos
          <ArrowDown className="w-4 h-4" />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-surface border border-border text-[#A1A1AA] hover:text-[#F5F5F7] hover:border-[#3f3f46] font-medium text-sm transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 text-success" />
          WhatsApp
        </a>

        <a
          href={DESIGNER_INFO.telegramUrl || `https://t.me/${DESIGNER_INFO.telegramUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 text-[#71717A] hover:text-brand-telegram text-sm font-medium transition-colors"
        >
          <Send className="w-4 h-4" />
          Telegram
        </a>
      </div>

      {/* Stats */}
      <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8">
        {DESIGNER_INFO.stats.map((stat, i) => (
          <div key={i}>
            <span className="text-2xl sm:text-3xl font-display font-bold text-[#F5F5F7] tracking-tight">
              {stat.value}
            </span>
            <span className="block text-xs text-[#71717A] mt-1 font-mono">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
