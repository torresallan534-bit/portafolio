import { Utensils, Scissors, Palette, Video, CheckCircle2, ArrowRight } from "lucide-react";
import { DESIGNER_INFO, SERVICES_LIST } from "@/data/portfolio-data";

export default function Services() {
  const whatsappUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hola Allan! Me interesa cotizar uno de tus servicios de contenido visual / piezas comerciales para mi negocio."
  )}`;

  const iconMap: Record<string, any> = {
    Video: Video,
    MenuBook: Utensils,
    Megaphone: Scissors,
    Palette: Palette,
  };

  return (
    <section id="servicios" className="py-20 border-y border-white/[0.08] bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section title */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono text-amber-500 uppercase tracking-wider">
            Servicios Profesionales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-zinc-50 tracking-tight mt-2">
            Producción Visual & Piezas Comerciales
          </h2>
          <p className="text-zinc-400 text-base mt-3 leading-relaxed">
            Soluciones visuales y multimedia creadas para generar resultados medibles, capturar atención inmediata y acelerar conversiones con una entrega ágil.
          </p>
        </div>

        {/* Services Grid con simetría exacta en las 4 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_LIST.map((service) => {
            const Icon = iconMap[service.iconName] || Palette;
            // Garantizamos badge en las 4 tarjetas para simetría visual
            const badgeText = service.badge || (service.id === "branding-comercial" ? "Identidad Sólida" : "Garantizado");

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-colors bg-[#111114] border ${
                  service.popular
                    ? "border-amber-500/40 shadow-lg shadow-amber-500/5"
                    : "border-white/[0.08] hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-11 w-11 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center text-amber-500">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-400 border border-white/[0.08]">
                      {badgeText}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-zinc-50 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-400 mt-1 font-semibold">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <div className="mt-5 pt-5 border-t border-white/[0.08] space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      Incluye:
                    </span>
                    {service.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">
                    Entrega ágil y personalizada
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Cotizar servicio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
