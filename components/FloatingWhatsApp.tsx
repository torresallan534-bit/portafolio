"use client";

import React, { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

export default function FloatingWhatsApp({ whatsappNumber }: { whatsappNumber?: string } = {}) {
  const finalWhatsappNumber = whatsappNumber || PANDA_HAUS_INFO.whatsappNumber;
  const whatsappUrl = `https://wa.me/${finalWhatsappNumber}?text=${encodeURIComponent(
    "Hola Panda Haus, quiero un diagnóstico gratuito de mi web y ecosistema digital para mi negocio."
  )}`;

  const [isTooltipDismissed, setIsTooltipDismissed] = useState(false);

  return (
    <aside
      aria-label="Diagnóstico por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-auto"
    >
      {/* Tooltip persistente / alta conversión */}
      {!isTooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#0D0D0D]/95 border border-[#3DDC97]/40 text-xs font-display font-semibold text-white shadow-2xl shadow-black/80 backdrop-blur-xl animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#3DDC97] animate-ping" />
          <span className="text-[#3DDC97] font-mono">Diagnóstico Gratis:</span>
          <span>¿Quieres saber por qué tu web no vende?</span>
          <button
            type="button"
            onClick={() => setIsTooltipDismissed(true)}
            aria-label="Cerrar sugerencia de WhatsApp"
            className="text-white/40 hover:text-white ml-1.5 p-0.5 rounded-md hover:bg-white/10 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Botón Flotante de WhatsApp con Halo Neón */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir diagnóstico gratuito por WhatsApp con Panda Haus"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#3DDC97] text-[#0D0D0D] shadow-2xl shadow-[#3DDC97]/40 hover:bg-[#34C788] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {/* Pulso exterior verde neón */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC97] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0D0D0D] border-2 border-[#3DDC97] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC97]" />
          </span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current group-hover:scale-110 transition-transform duration-200" />
      </a>
    </aside>
  );
}
