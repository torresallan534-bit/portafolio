"use client";

import React from "react";
import { ArrowDown, MessageCircle, Zap, Smartphone, RefreshCw, CheckCircle2, Sparkles, MoveRight } from "lucide-react";
import { PANDA_HAUS_INFO, TRUST_GUARANTEES } from "@/data/portfolio-data";
import LogoMarquee from "./LogoMarquee";

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

  // Helper para renderizar tipografía editorial combinada (Sans moderna + Serif elegante)
  const renderHeroTitle = (rawTitle: string) => {
    if (
      rawTitle === "Diseño visual y páginas web que hacen destacar tu negocio." ||
      rawTitle.toLowerCase().includes("diseño visual y páginas web")
    ) {
      return (
        <>
          Diseño <span className="font-serif italic font-normal text-[#3DDC97]">visual</span> &amp; páginas{" "}
          <span className="font-serif italic font-normal text-white/95">web</span> que hacen{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-white">destacar</span>
            <span className="absolute bottom-1.5 left-0 right-0 h-2.5 sm:h-3.5 bg-[#3DDC97]/25 -rotate-1 rounded-sm -z-0" />
          </span>{" "}
          tu negocio.
        </>
      );
    }

    const words = rawTitle.split(" ");
    return words.map((word, i) => {
      const clean = word.toLowerCase().replace(/[^a-záéíóúñ]/g, "");
      const isSerif = ["visual", "web", "destacar", "diseño", "marca", "negocio"].includes(clean);
      if (isSerif) {
        return (
          <span key={i} className="font-serif italic font-normal text-[#3DDC97]">
            {word}{" "}
          </span>
        );
      }
      return <span key={i}>{word} </span>;
    });
  };

  return (
    <section
      id="inicio"
      className="relative pt-36 pb-20 md:pt-48 md:pb-28 lg:pt-56 lg:pb-36 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Luz radial cenital ultra-suave inspirada en Godly/Awwwards */}
      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3DDC97]/[0.09] via-[#2B2F33]/25 to-transparent blur-3xl -z-10" />

      {/* Grid de fondo ultra sutil para textura de estudio */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      {/* Contenido Principal con Whitespace Generoso */}
      <div className="relative space-y-8 max-w-5xl">
        {/* Metadatos superiores de estudio boutique */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181B1E]/80 border border-white/[0.08] text-xs font-mono text-white/90 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC97] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3DDC97]"></span>
            </span>
            <span className="font-semibold tracking-wide uppercase text-[11px]">{finalBadge}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-white/50">
            <Sparkles className="w-3 h-3 text-[#3DDC97]" />
            <span>Entregas ágiles 24-48h</span>
          </div>
        </div>

        {/* Titular H1 "Oversized" con Jerarquía Extrema & Contraste Serif/Sans */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.8rem] 2xl:text-[6.4rem] font-display font-extrabold tracking-[-0.04em] text-white leading-[0.96] max-w-5xl">
          {renderHeroTitle(finalTitle)}
        </h1>

        {/* Subtítulo H2 con respiración y peso visual equilibrado */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/70 font-sans font-light tracking-tight leading-relaxed max-w-2xl">
          {finalSubtitle}
        </p>

        {/* Micro-puntos de valor de alta conversión */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs sm:text-sm text-white/75 font-sans">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#3DDC97]" />
            <span>Restaurantes &amp; Gastronomía</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#3DDC97]" />
            <span>Barberías &amp; Negocios Locales</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#3DDC97]" />
            <span>Marcas de Consumo &amp; Delivery</span>
          </div>
        </div>

        {/* Botones de acción CTA de alta conversión */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          {/* CTA Primario */}
          <a
            href="#precios"
            className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] font-display font-bold text-sm tracking-tight shadow-xl shadow-[#3DDC97]/20 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <span>{finalPrimaryCta}</span>
            <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* CTA Secundario WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#181B1E]/70 hover:bg-[#202429] border border-white/[0.08] hover:border-[#3DDC97]/40 text-white hover:text-[#3DDC97] font-display font-semibold text-sm tracking-tight transition-all duration-300 backdrop-blur-md active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#3DDC97] transition-transform duration-300 group-hover:scale-110" />
            <span>{finalSecondaryCta}</span>
          </a>
        </div>
      </div>

      {/* 2. Prueba Social Temprana: Infinite Logo Marquee */}
      <LogoMarquee />

      {/* Franja de Garantías de Entrega (Sellos de Confianza Institucional) */}
      <div className="mt-14 pt-10 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-5">
        {TRUST_GUARANTEES.map((item, idx) => {
          const Icon = guaranteeIcons[item.icon] || Zap;
          return (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#141619]/40 border border-white/[0.06] hover:border-[#3DDC97]/30 flex items-start gap-4 transition-all duration-300 backdrop-blur-sm group hover:-translate-y-0.5"
            >
              <div className="h-10 w-10 rounded-xl bg-[#0D0D0D] border border-white/[0.08] flex items-center justify-center text-[#3DDC97] shrink-0 mt-0.5 group-hover:border-[#3DDC97]/40 transition-colors shadow-inner">
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-white text-sm sm:text-base tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#3DDC97]/10 text-[#3DDC97] border border-[#3DDC97]/20">
                    {item.highlight}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/60 mt-1 font-sans leading-relaxed">
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
