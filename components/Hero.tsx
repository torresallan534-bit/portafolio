"use client";

import { ArrowDown, MessageCircle, Zap, Smartphone, RefreshCw, CheckCircle2 } from "lucide-react";
import { PANDA_HAUS_INFO, TRUST_GUARANTEES } from "@/data/portfolio-data";

interface HeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  whatsappNumber?: string;
  accentColor?: string;
}

export default function Hero({
  badge,
  title,
  subtitle,
  primaryCtaText,
  secondaryCtaText,
  whatsappNumber,
}: HeroProps = {}) {
  const finalWhatsappNumber = whatsappNumber || PANDA_HAUS_INFO.whatsappNumber;
  const whatsappUrl = `https://wa.me/${finalWhatsappNumber}?text=${encodeURIComponent(
    PANDA_HAUS_INFO.whatsappMessage
  )}`;
  const finalBadge = badge || "Estudio de Diseño Visual & Web Comercial";
  const finalTitle = title || "Diseño visual y páginas web que hacen destacar tu negocio.";
  const finalSubtitle =
    subtitle ||
    "Ayudamos a restaurantes, marcas y negocios locales a captar clientes con flyers de alto impacto, menús digitales y landing pages ultra-rápidas.";
  const finalPrimaryCta = primaryCtaText || "Ver Servicios y Precios";
  const finalSecondaryCta = secondaryCtaText || "Cotizar por WhatsApp";

  const guaranteeIcons: Record<string, any> = {
    Zap: Zap,
    Smartphone: Smartphone,
    RefreshCw: RefreshCw,
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-5 sm:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Luz radial cenital suave en verde menta */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[520px] rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3DDC97]/[0.08] via-[#2B2F33]/20 to-transparent blur-3xl -z-10" />

      <div className="relative space-y-6 max-w-3xl">
        {/* Badge superior sutil con punto pulsante */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#2B2F33]/40 border border-[#2B2F33] text-xs font-mono text-[#F2F4F3]/90 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC97] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3DDC97]"></span>
          </span>
          <span className="font-medium">{finalBadge}</span>
        </div>

        {/* Titular comercial H1 en Space Grotesk */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[#FFFFFF] leading-[1.08]">
          {finalTitle}
        </h1>

        {/* Subtítulo H2 en Inter, color #F2F4F3/80 */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-[#F2F4F3]/80 font-sans font-normal tracking-tight leading-relaxed max-w-2xl">
          {finalSubtitle}
        </h2>

        {/* Micro-puntos de valor */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-2 text-xs sm:text-sm text-[#F2F4F3]/70 font-sans">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#3DDC97]" />
            <span>Restaurantes &amp; Cafés</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#3DDC97]" />
            <span>Barberías &amp; Negocios Locales</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#3DDC97]" />
            <span>Marcas de Productos &amp; Delivery</span>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        {/* Primario: fondo #3DDC97, texto #0D0D0D -> scroll suave a #precios */}
        <a
          href="#precios"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] font-display font-bold text-sm shadow-lg shadow-[#3DDC97]/20 transition-all duration-200 active:scale-95"
        >
          <span>{finalPrimaryCta}</span>
          <ArrowDown className="w-4 h-4" />
        </a>

        {/* Secundario: borde #2B2F33, fondo cristalino, texto #FFFFFF con hover #3DDC97 */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#2B2F33]/30 border border-[#2B2F33] text-[#FFFFFF] hover:text-[#3DDC97] hover:border-[#3DDC97]/50 hover:bg-[#2B2F33]/60 font-display font-semibold text-sm transition-all duration-200 backdrop-blur-md active:scale-95"
        >
          <MessageCircle className="w-4 h-4 text-[#3DDC97]" />
          <span>{finalSecondaryCta}</span>
        </a>
      </div>

      {/* Franja de Garantías de Entrega (Sellos de Confianza) */}
      <div className="mt-16 pt-8 border-t border-[#2B2F33] grid grid-cols-1 sm:grid-cols-3 gap-5">
        {TRUST_GUARANTEES.map((item, idx) => {
          const Icon = guaranteeIcons[item.icon] || Zap;
          return (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#2B2F33]/40 border border-[#2B2F33] flex items-start gap-4 transition-all duration-200 hover:border-[#3DDC97]/40 backdrop-blur-sm"
            >
              <div className="h-10 w-10 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] flex items-center justify-center text-[#3DDC97] shrink-0 mt-0.5">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-sm text-[#FFFFFF] tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#3DDC97]/15 text-[#3DDC97] font-semibold border border-[#3DDC97]/25">
                    {item.highlight}
                  </span>
                </div>
                <p className="text-xs text-[#F2F4F3]/70 mt-1 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
