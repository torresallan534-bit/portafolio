"use client";

import React from "react";
import {
  MessageCircle,
  Zap,
  Smartphone,
  Coins,
  Sparkles,
  MoveRight,
  ShieldCheck,
  Flame,
} from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";
import LogoMarquee from "./LogoMarquee";

interface HeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  whatsappNumber?: string;
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
    "Hola Panda Haus, quiero mejorar la imagen y ventas de mi negocio. ¿Cómo empezamos?"
  )}`;

  const finalBadge = badge || "Soluciones Visuales & Digitales para Restaurantes y Negocios Locales";
  const finalTitle = title || "Hacemos que tu restaurante se vea profesional y venda más en digital.";
  const finalSubtitle =
    subtitle ||
    "Flyers de alto impacto entregados en 24 horas, menús interactivos con código QR y sucursales web para recibir pedidos directos a tu WhatsApp sin pagar comisiones.";
  const finalPrimaryCta = primaryCtaText || "Ver Catálogo y Precios Oficiales";
  const finalSecondaryCta = secondaryCtaText || "Cotizar por WhatsApp";

  // Badges de confianza destacados para restaurantes y negocios locales
  const trustBadges = [
    {
      icon: Zap,
      text: "Entregas récord en 24 a 72 horas.",
      accent: "#3DDC97",
    },
    {
      icon: Smartphone,
      text: "100% autogestionable desde tu celular.",
      accent: "#38BDF8",
    },
    {
      icon: Coins,
      text: "Precios claros desde $30.000 COP.",
      accent: "#EAB308",
    },
  ];

  // Renderizado tipográfico del H1
  const renderHeroHeadline = (rawTitle: string) => {
    if (rawTitle.toLowerCase().includes("hacemos que tu restaurante")) {
      return (
        <>
          Hacemos que tu{" "}
          <span className="font-serif italic font-normal text-[#3DDC97]">
            restaurante
          </span>{" "}
          se vea{" "}
          <span className="font-serif italic font-normal text-white/95">
            profesional
          </span>{" "}
          y{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-white">venda más</span>
            <span className="absolute bottom-1.5 left-0 right-0 h-2.5 sm:h-3.5 bg-[#3DDC97]/25 -rotate-1 rounded-sm -z-0" />
          </span>{" "}
          en digital.
        </>
      );
    }

    const words = rawTitle.split(" ");
    return words.map((word, i) => {
      const clean = word.toLowerCase().replace(/[^a-záéíóúñ]/g, "");
      const isSerif = ["restaurante", "profesional", "venda", "digital", "comercial"].includes(clean);
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
      className="relative pt-36 pb-16 md:pt-48 md:pb-24 lg:pt-52 lg:pb-28 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Luz radial cenital ultra-suave */}
      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3DDC97]/[0.09] via-[#2B2F33]/25 to-transparent blur-3xl -z-10" />

      {/* Grid de textura de fondo sutil */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="relative space-y-7 max-w-5xl">
        {/* Kicker / Badge superior */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181B1E]/90 border border-white/[0.08] text-xs font-mono text-white/90 backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC97] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3DDC97]"></span>
          </span>
          <span className="font-semibold tracking-wide uppercase text-[11px] sm:text-xs text-[#3DDC97]">
            {finalBadge}
          </span>
        </div>

        {/* H1 "Oversized" con Jerarquía Extrema & Contraste Serif/Sans */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.4rem] 2xl:text-[6rem] font-display font-extrabold tracking-[-0.038em] text-white leading-[1.0] max-w-5xl">
          {renderHeroHeadline(finalTitle)}
        </h1>

        {/* Subtítulo enfocado en gastronomía y comercios */}
        <p className="text-base sm:text-lg md:text-xl text-white/75 font-sans font-light tracking-tight leading-relaxed max-w-3xl">
          {finalSubtitle}
        </p>

        {/* Badges de Confianza Clave (Diseño en fila o cuadrícula pequeña) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-3xl">
          {trustBadges.map((badgeItem, idx) => {
            const Icon = badgeItem.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#141619]/80 border border-white/[0.07] backdrop-blur-sm"
              >
                <div
                  className="w-7 h-7 rounded-lg bg-[#0D0D0D] border border-white/[0.08] flex items-center justify-center shrink-0"
                  style={{ color: badgeItem.accent }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-sans font-medium text-white/90 leading-tight">
                  {badgeItem.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Botones de acción CTA */}
        <div className="pt-3 flex flex-wrap items-center gap-4">
          {/* CTA Primario: Ver Catálogo y Precios Oficiales */}
          <a
            href="#precios"
            className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] font-display font-bold text-sm tracking-tight shadow-xl shadow-[#3DDC97]/20 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <span>{finalPrimaryCta}</span>
            <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* CTA Secundario: Cotizar por WhatsApp */}
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

      {/* Prueba Social Temprana: Infinite Logo Marquee */}
      <LogoMarquee />
    </section>
  );
}
