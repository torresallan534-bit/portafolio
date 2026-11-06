"use client";

import { CheckCircle2, MessageCircle, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { PRICING_PACKS, PANDA_HAUS_INFO } from "@/data/portfolio-data";

export default function Pricing() {
  return (
    <section id="precios" className="py-24 max-w-6xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2F33]/40 border border-[#2B2F33] text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Precios Transparentes &bull; Sin Costos Ocultos</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#FFFFFF] tracking-tight">
          Paquetes Comerciales de Entrada
        </h2>
        <p className="text-[#F2F4F3]/70 text-base mt-3 leading-relaxed font-sans">
          Elige el plan que tu negocio necesita hoy. Todos los paquetes incluyen revisiones garantizadas, entrega ágil y archivos listos para usar.
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
        {PRICING_PACKS.map((plan) => {
          const isFeatured = plan.popular;
          const whatsappUrl = `https://wa.me/${PANDA_HAUS_INFO.whatsappNumber}?text=${encodeURIComponent(
            plan.whatsappMessage
          )}`;

          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                isFeatured
                  ? "bg-[#16191C] border-2 border-[#3DDC97] shadow-2xl shadow-[#3DDC97]/10 lg:-translate-y-2"
                  : "bg-[#141618] border border-[#2B2F33] hover:border-[#2B2F33]/80"
              }`}
            >
              {/* Badge "Más Solicitado" en la tarjeta destacada */}
              {isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#3DDC97] text-[#0D0D0D] font-display font-extrabold text-xs shadow-md tracking-wide uppercase">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    Más Solicitado
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#FFFFFF] tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#F2F4F3]/70 mt-2 leading-relaxed font-sans min-h-[36px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-8 pb-6 border-b border-[#2B2F33] flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-display font-extrabold text-[#FFFFFF] tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#3DDC97] font-semibold">
                    {plan.currency}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#F2F4F3]/50 block font-semibold">
                    Incluye exactamente:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F2F4F3]/90 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#3DDC97] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-display font-bold text-sm transition-all duration-200 active:scale-95 shadow-md ${
                    isFeatured
                      ? "bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] shadow-[#3DDC97]/25"
                      : "bg-[#2B2F33] hover:bg-[#3DDC97] hover:text-[#0D0D0D] text-[#FFFFFF]"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#F2F4F3]/50">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3DDC97]" />
                  <span>Revisiones y garantía incluidas</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust banner below pricing */}
      <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-[#2B2F33]/30 border border-[#2B2F33] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-display font-bold text-[#FFFFFF]">
            ¿Tu negocio requiere un requerimiento personalizado o volumen mensual?
          </h4>
          <p className="text-xs text-[#F2F4F3]/70 mt-0.5 font-sans">
            Preparamos cotizaciones a la medida para cadenas, múltiples sedes y activaciones comerciales continuas.
          </p>
        </div>
        <a
          href={PANDA_HAUS_INFO.whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2B2F33] hover:bg-[#3DDC97] hover:text-[#0D0D0D] text-[#FFFFFF] text-xs font-display font-bold transition-all duration-200 shrink-0"
        >
          <span>Cotizar plan a la medida</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
