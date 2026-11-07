"use client";

import React from "react";
import { CheckCircle2, MessageCircle, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

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

const DEFAULT_RESTAURANT_PACKS = [
  {
    id: "pack-carta-abierta",
    name: "PACK CARTA ABIERTA",
    price: "$160.000",
    savingsBadge: "Ahorras $25.000",
    currency: "COP",
    description: "Diseñado para renovar la carta física y digital de tu restaurante, facilitando pedidos ágiles.",
    features: [
      "Menú digital interactivo (hasta 4 páginas)",
      "Habladores / Stickers QR listos para imprenta",
      "2 Flyers promocionales para redes",
      "Entrega rápida en 48 a 72 horas",
    ],
    popular: false,
    ctaText: "Elegir Pack Carta Abierta",
    whatsappMessage:
      "Hola Panda Haus, quiero el Pack Carta Abierta (Menú QR + Habladores + Flyers).",
  },
  {
    id: "plan-mensual-flujo-continuo",
    name: "PLAN MENSUAL: FLUJO CONTINUO",
    price: "$240.000",
    period: "/mes",
    savingsBadge: "El Favorito Recurrente",
    currency: "COP",
    description: "La solución definitiva para mantener tu restaurante activo con promociones constantes y clientes nuevos.",
    features: [
      "8 Flyers de alto impacto al mes",
      "2 Videos cortos / Reels editados",
      "Actualización continua de precios y platos",
      "Soporte prioritario directo vía WhatsApp",
    ],
    popular: true,
    ctaText: "Activar Plan Mensual",
    whatsappMessage:
      "Hola Panda Haus, quiero activar el Plan Mensual de Flyers y Videos",
  },
  {
    id: "combo-sucursal-completa",
    name: "COMBO SUCURSAL COMPLETA",
    price: "$460.000",
    savingsBadge: "Ahorras $50.000",
    currency: "COP",
    description: "Presencia digital comercial completa: Tu propia plataforma de pedidos lista para vender.",
    features: [
      "Setup de Sucursal Digital completa (Catálogo web)",
      "2 Flyers comerciales de lanzamiento",
      "1 Reel / Video corto de lanzamiento",
      "Lista para facturar pedidos en 72 horas",
    ],
    popular: false,
    ctaText: "Elegir Sucursal Completa",
    whatsappMessage:
      "Hola Panda Haus, me interesa contratar el Combo Sucursal Completa ($460.000 COP) para mi restaurante.",
  },
];

export default function Pricing({ packages, whatsappNumber }: PricingProps = {}) {
  const finalWhatsappNumber = whatsappNumber || PANDA_HAUS_INFO.whatsappNumber;

  // Si hay paquetes de Payload se pueden mostrar; de lo contrario usamos los combos estratégicos
  const activePackages =
    packages && packages.length === 3
      ? packages.map((p, idx) => ({
          id: p.id || `pack-${idx}`,
          name: p.name,
          price: p.price || p.priceCOP || "$160.000",
          period: (p as any).period || "",
          savingsBadge: (p as any).savingsBadge || (p.popular || p.isPopular ? "El Favorito Recurrente" : undefined),
          currency: p.currency || "COP",
          description: p.description || "Solución comercial con revisiones y entrega ágil.",
          features: (p.features || []).map((f) => (typeof f === "string" ? f : f.text)),
          popular: !!(p.popular ?? p.isPopular),
          ctaText: p.ctaText || `Elegir ${p.name}`,
          whatsappMessage: p.whatsappMessage,
        }))
      : DEFAULT_RESTAURANT_PACKS;

  return (
    <section id="precios" className="py-24 sm:py-32 max-w-7xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B1E] border border-white/[0.08] text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Combos de Mayor Ahorro &bull; Sin Sorpresas</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
          Combos y Planes{" "}
          <span className="font-serif italic font-normal text-[#3DDC97]">
            Recurrentes
          </span>
        </h2>
        <p className="text-white/65 text-base sm:text-lg mt-3 leading-relaxed font-sans font-light">
          Paquetes estructurados para maximizar el retorno de tu inversión, ahorrar costos y mantener tus ventas activas todos los días.
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
                  ? "bg-[#141816] border-2 border-[#3DDC97] shadow-2xl shadow-[#3DDC97]/15 lg:-translate-y-2"
                  : "bg-[#121417] border border-white/[0.08] hover:border-white/[0.18]"
              }`}
            >
              {/* Badge superior en tarjeta destacada */}
              {plan.savingsBadge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span
                    className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-full font-display font-extrabold text-xs shadow-md tracking-wide uppercase ${
                      isFeatured
                        ? "bg-[#3DDC97] text-[#0D0D0D]"
                        : "bg-[#202428] text-[#3DDC97] border border-[#3DDC97]/30"
                    }`}
                  >
                    {isFeatured && <Zap className="w-3 h-3 fill-current" />}
                    <span>{plan.savingsBadge}</span>
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-white/60 mt-2 font-sans leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 pb-6 border-b border-white/[0.08]">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                    {plan.price}
                  </span>
                  {(plan as any).period ? (
                    <span className="text-sm font-mono text-[#3DDC97] font-semibold">
                      {(plan as any).period}
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-white/50">COP</span>
                  )}
                </div>

                {/* Features Checklist */}
                <div className="py-6 space-y-3.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/45 block font-semibold">
                    Lo que incluye:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/85 font-sans">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFeatured ? "text-[#3DDC97]" : "text-[#3DDC97]/80"
                        }`}
                      />
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-white/[0.08]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-bold text-xs tracking-tight transition-all duration-200 active:scale-95 shadow-md ${
                    isFeatured
                      ? "bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] shadow-[#3DDC97]/20"
                      : "bg-[#1C2024] hover:bg-[#3DDC97] text-white hover:text-[#0D0D0D] border border-white/[0.08] hover:border-[#3DDC97]"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust reassurance banner */}
      <div className="mt-12 p-5 rounded-2xl bg-[#121417] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#3DDC97]" />
          <span>Garantía de satisfacción: 2 rondas de revisiones incluidas en cada plan.</span>
        </div>
        <span className="text-white/40">Sin contratos forzosos &bull; Cancela cuando quieras</span>
      </div>
    </section>
  );
}
