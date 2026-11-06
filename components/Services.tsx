"use client";

import { Megaphone, Utensils, Palette, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { COMMERCIAL_SERVICES, PANDA_HAUS_INFO } from "@/data/portfolio-data";

export default function Services() {
  const iconMap: Record<string, any> = {
    Megaphone: Megaphone,
    Utensils: Utensils,
    Palette: Palette,
    Globe: Globe,
  };

  return (
    <section id="servicios" className="py-20 border-y border-[#2B2F33] bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2F33]/50 border border-[#2B2F33] text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-3">
            <span>Soluciones Comerciales de Alto Impacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#FFFFFF] tracking-tight">
            Servicios Diseñados para Vender
          </h2>
          <p className="text-[#F2F4F3]/70 text-base mt-3 leading-relaxed font-sans">
            Soluciones visuales y web creadas específicamente para restaurantes, marcas y negocios locales que buscan captar clientes y cerrar ventas con agilidad.
          </p>
        </div>

        {/* Services Grid con 4 Tarjetas Simétricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {COMMERCIAL_SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Palette;
            const whatsappCustomUrl = `https://wa.me/${PANDA_HAUS_INFO.whatsappNumber}?text=${encodeURIComponent(
              `Hola Panda Haus, me interesa cotizar el servicio de "${service.title}" para mi negocio.`
            )}`;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-[#2B2F33]/35 border border-[#2B2F33] hover:border-[#3DDC97] hover:shadow-xl hover:shadow-[#3DDC97]/5 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] group-hover:border-[#3DDC97]/40 flex items-center justify-center text-[#3DDC97] transition-colors shadow-inner">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-[#0D0D0D]/80 text-[#3DDC97] border border-[#3DDC97]/30 font-semibold">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#FFFFFF] tracking-tight group-hover:text-[#3DDC97] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-[#F2F4F3]/70 mt-1.5 font-medium">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-[#F2F4F3]/80 mt-3 leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <div className="mt-6 pt-5 border-t border-[#2B2F33] space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#F2F4F3]/50 block mb-2 font-semibold">
                      Qué incluye:
                    </span>
                    {service.features.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F2F4F3]/90 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#3DDC97] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Delivery Time and WhatsApp CTA */}
                <div className="mt-8 pt-5 border-t border-[#2B2F33] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#F2F4F3]/60 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3DDC97]" />
                    <span>Entrega: {service.deliveryTime}</span>
                  </div>
                  <a
                    href={whatsappCustomUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-[#3DDC97] group-hover:text-[#FFFFFF] transition-colors"
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
