"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  MoveRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  MessageCircle,
  Smartphone,
  CheckCircle2,
  Lock,
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
  const whatsappDiagnosticUrl = `https://wa.me/${finalWhatsappNumber}?text=${encodeURIComponent(
    "Hola Panda Haus, quiero un diagnóstico gratuito de mi web y ecosistema digital para mi negocio."
  )}`;

  const finalBadge = badge || "Ecosistemas Digitales de Alta Conversión • 2026";
  const finalTitle =
    title || "Escalamos las ventas de tu negocio local con ecosistemas digitales rentables";
  const finalSubtitle =
    subtitle ||
    "Diseñamos portales de alta autoridad, cartas interactivas y embudos de venta directos a tu WhatsApp para que dejes de perder clientes con páginas de los 2000s.";
  const finalPrimaryCta = primaryCtaText || "Quiero un diagnóstico de mi web";
  const finalSecondaryCta = secondaryCtaText || "Ver Casos de Éxito";

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 px-5 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Luz radial cenital ultra-vibrante en verde neón */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[950px] h-[650px] rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3DDC97]/[0.14] via-[#0F172A]/40 to-transparent blur-3xl -z-10" />

      {/* Grid de textura de ingeniería moderna */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      {/* Grid 2 Columnas en Desktop: Copy Agresivo + Mockup 3D Nails Pastel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Columna Izquierda: Copy de Alta Conversión */}
        <div className="lg:col-span-7 space-y-6 text-left">
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

          {/* H1 Oversized & Directo al Grano */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.2rem] font-display font-extrabold tracking-[-0.038em] text-white leading-[1.05]">
            Escalamos las ventas de tu negocio local con{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#3DDC97] font-serif italic font-normal">
                ecosistemas digitales
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#3DDC97]/20 -rotate-1 rounded-sm -z-0" />
            </span>{" "}
            rentables.
          </h1>

          {/* Subtítulo Breve */}
          <p className="text-base sm:text-lg md:text-xl text-white/75 font-sans font-light tracking-tight leading-relaxed max-w-2xl">
            {finalSubtitle}
          </p>

          {/* CTAs Principales con Botón Gigante de Acento */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Botón Gigante en Color de Acento Neón */}
            <a
              href={whatsappDiagnosticUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] font-display font-black text-base sm:text-lg tracking-tight shadow-2xl shadow-[#3DDC97]/30 hover:shadow-[#3DDC97]/50 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <Sparkles className="w-5 h-5 text-[#0D0D0D] fill-current animate-pulse" />
              <span>{finalPrimaryCta}</span>
              <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>

            {/* CTA Secundario: Ver Portafolio */}
            <a
              href="#portafolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-4.5 rounded-2xl bg-[#181B1E]/80 hover:bg-[#23272D] border border-white/[0.1] text-white hover:text-[#3DDC97] font-display font-semibold text-sm tracking-tight transition-all backdrop-blur-md"
            >
              <span>{finalSecondaryCta}</span>
            </a>
          </div>

          {/* Badges de Autoridad Rápidos */}
          <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-white/70">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#3DDC97]" />
              <span>Entregas récord en 24 a 72h</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#3DDC97]" />
              <span>Cero comisiones intermediarias</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#3DDC97]" />
              <span>100% autogestionable</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Mockup 3D Flotante de Nails Pastel */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
            {/* Halo de resplandor verde menta */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#3DDC97]/25 via-[#3DDC97]/10 to-transparent rounded-full blur-3xl -z-10" />

            {/* Chip Flotante Superior: Nails Pastel Brand */}
            <div className="absolute -top-4 -left-4 sm:-left-6 z-30 inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#0D0D0D]/95 border border-white/[0.12] text-xs font-display font-bold text-white shadow-2xl backdrop-blur-xl animate-bounce-slow">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899]" />
              <span>Nails Pastel — Spa &amp; Nails</span>
            </div>

            {/* Chip Flotante Inferior: Métrica de Conversión */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 z-30 inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0D0D0D]/95 border border-[#3DDC97]/40 text-xs font-mono font-bold text-[#3DDC97] shadow-2xl backdrop-blur-xl">
              <Sparkles className="w-4 h-4 fill-current text-[#3DDC97]" />
              <span>+65% Citas Agendadas ⚡</span>
            </div>

            {/* Mockup 3D de iPhone Flotante */}
            <div className="relative rounded-[46px] p-3 bg-gradient-to-b from-[#2B3037] via-[#1A1D21] to-[#0F1114] border border-white/[0.18] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] transition-transform duration-700 ease-out hover:rotate-1 hover:scale-[1.02]">
              {/* Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center pointer-events-none">
                <div className="h-6 w-24 rounded-full bg-black border border-white/[0.08] flex items-center justify-between px-2.5 shadow-md">
                  <span className="h-2 w-2 rounded-full bg-[#1A1C1E]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3DDC97] animate-pulse" />
                </div>
              </div>

              {/* Pantalla con Arte de Nails Pastel */}
              <div className="relative rounded-[38px] overflow-hidden bg-[#0A0B0D] aspect-[9/19] w-full border border-black/80 flex flex-col justify-between">
                {/* Reflejo de cristal */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent z-20" />

                {/* Imagen del Ecosistema Nails Pastel */}
                <div className="relative w-full h-full overflow-hidden bg-[#12151A]">
                  <Image
                    src="/projects/nails-pastel-branding/flyers-1.webp"
                    alt="Ecosistema Digital de Nails Pastel — Catálogo y Tarifas"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                    priority
                  />

                  {/* Overlay inferior con llamado de acción rápido */}
                  <div className="absolute bottom-6 left-3 right-3 p-3 rounded-2xl bg-[#0D0D0D]/90 border border-white/[0.12] backdrop-blur-md text-left z-20">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#3DDC97] mb-1">
                      <span>TARIFARIO DIGITAL QR</span>
                      <span>SIN INTERMEDIARIOS</span>
                    </div>
                    <p className="text-xs font-display font-bold text-white truncate">
                      Catálogo interactivo de uñas &amp; spa
                    </p>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                  <div className="h-1 w-28 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Logo Marquee de Prueba Social Temprana */}
      <LogoMarquee />
    </section>
  );
}
