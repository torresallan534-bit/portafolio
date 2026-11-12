"use client";

import React from "react";
import Image from "next/image";
import { Lock, Sparkles } from "lucide-react";

interface DeviceMockupProps {
  type?: "smartphone" | "iphone" | "macbook" | "browser";
  children?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  urlTitle?: string;
  className?: string;
  floatingBadge?: string;
}

/**
 * Mockup flotante 3D de iPhone 16 Pro con Dynamic Island, biseles ultra-finos y reflejos
 */
export function IphoneMockup({
  children,
  imageSrc,
  imageAlt = "Mockup de Pantalla en iPhone",
  className = "",
  floatingBadge,
}: {
  children?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  floatingBadge?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[290px] sm:max-w-[320px] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02] ${className}`}
      style={{ perspective: 1200 }}
    >
      {/* Resplandor ambiental de fondo */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#3DDC97]/20 via-[#3DDC97]/5 to-transparent rounded-[48px] blur-2xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Chasis exterior de titanio negro */}
      <div className="relative rounded-[46px] p-3 bg-gradient-to-b from-[#2B3037] via-[#1A1D21] to-[#0F1114] border border-white/[0.18] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
        {/* Antena / botones sutiles simulados en el borde */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-9 bg-white/20 rounded-l-sm" />
        <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-white/20 rounded-l-sm" />
        <div className="absolute -right-[3px] top-28 w-[3px] h-14 bg-white/20 rounded-r-sm" />

        {/* Borde interior oscuro de la pantalla */}
        <div className="relative rounded-[38px] overflow-hidden bg-[#0A0B0D] aspect-[9/19.5] w-full border border-black/80 flex flex-col justify-between">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center pointer-events-none">
            <div className="h-6 w-24 rounded-full bg-black border border-white/[0.08] flex items-center justify-between px-2.5 shadow-md">
              <span className="h-2.5 w-2.5 rounded-full bg-[#1A1C1E] border border-white/[0.05]" />
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3DDC97] animate-pulse" />
                <span className="h-2 w-2 rounded-full bg-[#1A1C1E]" />
              </div>
            </div>
          </div>

          {/* Reflejo de cristal en diagonal */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent z-20" />

          {/* Contenido de la Pantalla */}
          <div className="relative w-full h-full overflow-hidden">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
            ) : (
              children
            )}
          </div>

          {/* Home Bar Indicator de iOS */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
            <div className="h-1 w-28 rounded-full bg-white/40 backdrop-blur-md" />
          </div>
        </div>
      </div>

      {/* Badge flotante opcional */}
      {floatingBadge && (
        <div className="absolute -bottom-3 -right-3 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0D0D0D]/95 border border-[#3DDC97]/40 text-[11px] font-mono text-[#3DDC97] font-bold shadow-xl shadow-black/80 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-[#3DDC97]" />
          <span>{floatingBadge}</span>
        </div>
      )}
    </div>
  );
}

/**
 * Mockup flotante 3D de MacBook Pro con biseles finos, notch y chasis de aluminio
 */
export function MacbookMockup({
  children,
  imageSrc,
  imageAlt = "Mockup de Pantalla en MacBook",
  className = "",
  urlTitle = "pandahaus.co/ecosistema",
  floatingBadge,
}: {
  children?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  urlTitle?: string;
  floatingBadge?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full transition-all duration-500 ease-out group-hover:-translate-y-2 ${className}`}
      style={{ perspective: 1400 }}
    >
      {/* Resplandor ambiental de fondo */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#3DDC97]/15 via-transparent to-[#3DDC97]/5 rounded-3xl blur-3xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />

      {/* Pantalla Superior del MacBook */}
      <div className="relative rounded-t-2xl p-2.5 sm:p-3 bg-[#1C1F23] border border-white/[0.14] shadow-2xl">
        {/* Notch con cámara */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 h-3.5 w-16 bg-[#0D0D0D] rounded-b-md flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2B2F33] border border-white/10" />
        </div>

        {/* Bisel de la pantalla */}
        <div className="relative rounded-lg overflow-hidden bg-[#0A0B0D] aspect-[16/10] w-full border border-black/80">
          {/* Minimalist Browser Header bar */}
          <div className="relative z-20 flex items-center justify-between px-3 py-1.5 bg-[#121417]/95 border-b border-white/[0.06] text-[10px] font-mono text-white/50 backdrop-blur-md">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
              <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
              <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex items-center gap-1 px-3 py-0.5 rounded-md bg-black/50 border border-white/[0.05] text-white/70 max-w-[200px] truncate">
              <Lock className="w-2.5 h-2.5 text-[#3DDC97]" />
              <span className="truncate">{urlTitle}</span>
            </div>
            <div className="w-8" />
          </div>

          {/* Screen Content */}
          <div className="relative w-full h-[calc(100%-26px)] overflow-hidden">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              children
            )}
          </div>
        </div>
      </div>

      {/* Base inferior del teclado y bisagra */}
      <div className="relative w-[104%] -left-[2%] h-3.5 bg-gradient-to-b from-[#2B2F33] to-[#17191C] rounded-b-xl border-t border-white/20 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.8)]">
        {/* Muesca para abrir con el dedo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#0D0D0D] rounded-b-sm" />
      </div>

      {/* Badge flotante opcional */}
      {floatingBadge && (
        <div className="absolute -bottom-3 right-4 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0D0D0D]/95 border border-[#3DDC97]/40 text-[11px] font-mono text-[#3DDC97] font-bold shadow-xl shadow-black/80 backdrop-blur-md">
          <Sparkles className="w-3 h-3 text-[#3DDC97]" />
          <span>{floatingBadge}</span>
        </div>
      )}
    </div>
  );
}

/**
 * Componente unificado para mantener compatibilidad
 */
export default function DeviceMockup({
  type = "smartphone",
  children,
  imageSrc,
  imageAlt,
  urlTitle = "pandahaus.co",
  className = "",
  floatingBadge,
}: DeviceMockupProps) {
  if (type === "macbook" || type === "browser") {
    return (
      <MacbookMockup
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        urlTitle={urlTitle}
        className={className}
        floatingBadge={floatingBadge}
      >
        {children}
      </MacbookMockup>
    );
  }

  return (
    <IphoneMockup
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      className={className}
      floatingBadge={floatingBadge}
    >
      {children}
    </IphoneMockup>
  );
}
