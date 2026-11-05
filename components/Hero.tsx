import { ArrowDown, MessageCircle, Send } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolio-data";
import statsData from "@/data/stats.json";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    DESIGNER_INFO.whatsappMessage
  )}`;

  // Métricas dinámicas calculadas desde stats.json
  const totalProjectsCount = statsData?.totalProjects || 12;
  const totalDeliverablesCount = statsData?.totalDeliverables || 71;
  const totalClientsCount = statsData?.totalClients || 6;

  const heroStats = [
    { value: `${totalProjectsCount}`, label: "Proyectos Especializados" },
    { value: `${totalDeliverablesCount}`, label: "Entregables & Piezas Creadas" },
    { value: `${totalClientsCount}`, label: "Marcas Gestionadas" },
    { value: "3", label: "Países con Clientes Activos" },
  ];

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-5 sm:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Luz radial cenital suave en el Hero */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[520px] rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/[0.06] via-zinc-900/20 to-transparent blur-3xl -z-10" />

      <div className="relative space-y-6 max-w-3xl">
        {/* Badge actualizado */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/70 border border-white/[0.08] text-xs font-mono text-zinc-300 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span>Productor de Contenido Visual & Multimedia &bull; Portafolio 2025–2026</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-zinc-50 leading-[1.05]">
          Allan Torres
        </h1>

        {/* Tagline con definición exacta del usuario */}
        <p className="text-xl sm:text-2xl md:text-3xl text-zinc-400 font-sans font-light tracking-tight leading-snug max-w-2xl">
          <span className="text-zinc-100 font-medium">Productor de contenido visual y multimedia.</span> Especializado en diseño de piezas comerciales (menús, flyers, identidad para negocios) y{" "}
          <span className="text-amber-400 font-medium">edición de video enfocada en resultados claros y entrega ágil.</span>
        </p>

        <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed">
          Experiencia colaborando con creadores y marcas en Estados Unidos y Colombia (Axis Pro, Allan Zoo, gastronomía y negocios urbanos).
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#proyectos"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all duration-200 active:scale-95"
        >
          <span>Ver Trabajos</span>
          <ArrowDown className="w-4 h-4" />
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/70 border border-white/[0.08] text-zinc-300 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-800/80 font-medium text-sm transition-all duration-200 backdrop-blur-md"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        <a
          href={DESIGNER_INFO.telegramUrl || `https://t.me/${DESIGNER_INFO.telegramUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 text-zinc-400 hover:text-[#229ED9] text-sm font-medium transition-colors"
        >
          <Send className="w-4 h-4" />
          <span>Telegram</span>
        </a>
      </div>

      {/* Stats dinámicas alimentadas desde data/stats.json */}
      <div className="mt-16 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-8">
        {heroStats.map((stat, i) => (
          <div key={i}>
            <span className="text-2xl sm:text-3xl font-display font-bold text-zinc-50 tracking-tight">
              {stat.value}
            </span>
            <span className="block text-xs text-zinc-400 mt-1 font-mono">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
