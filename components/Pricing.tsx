"use client";

import { CheckCircle2, MessageCircle, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { PRICING_PACKS, PANDA_HAUS_INFO } from "@/data/portfolio-data";

export interface DynamicPackage {
  id?: string;
  name: string;
  price?: string;
  priceCOP?: string;
  currency?: string;
  description?: string;
  features: Array<{ text: string } | string>;
  popular?: boolean;
  isPopular?: boolean;
  ctaText?: string;
  whatsappMessage: string;
}

interface PricingProps {
  packages?: DynamicPackage[];
  whatsappNumber?: string;
}

export default function Pricing({ packages, whatsappNumber }: PricingProps = {}) {
  const finalWhatsappNumber = whatsappNumber || PANDA_HAUS_INFO.whatsappNumber;

  // Use dynamic packages from Payload CMS if available, else static defaults
  const activePackages =
    packages && packages.length > 0
      ? packages.map((p, idx) => ({
          id: p.id || `pack-${idx}`,
          name: p.name,
          price: p.price || p.priceCOP || "$120.000",
          currency: p.currency || "COP",
          description: p.description || "Paquete comercial autogestionado con entrega ágil y revisiones incluidas.",
          features: (p.features || []).map((f) => (typeof f === "string" ? f : f.text)),
          popular: !!(p.popular ?? p.isPopular),
          ctaText: p.ctaText || `Elegir ${p.name}`,
          whatsappMessage: p.whatsappMessage,
        }))
      : PRICING_PACKS;

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

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
        {activePackages.map((plan) => {
          const isFeatured = plan.popular;
          const whatsappUrl = `https://wa.me/${finalWhatsappNumber}?text=${encodeURIComponent(
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
                {/* Header Card */}
                <div className="mb-6">
                  <h3 className="text-xl font-display font-bold text-[#FFFFFF]">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-[#FFFFFF] tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-[#F2F4F3]/50 font-mono">
                      /entrega ágil
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#2B2F33] mb-6" />

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#F2F4F3]/80 font-sans">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFeatured ? "text-[#3DDC97]" : "text-[#3DDC97]/80"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-5 rounded-2xl font-display font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                    isFeatured
                      ? "bg-[#3DDC97] text-[#0D0D0D] hover:bg-[#34C788] shadow-[#3DDC97]/25 hover:shadow-[#3DDC97]/40 active:scale-95"
                      : "bg-[#2B2F33]/50 text-[#FFFFFF] hover:bg-[#2B2F33] border border-[#2B2F33] hover:border-[#3DDC97]/40 active:scale-95"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </a>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-mono text-[#F2F4F3]/40">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3DDC97]" />
                  <span>Garantía de satisfacción y soporte ágil</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
