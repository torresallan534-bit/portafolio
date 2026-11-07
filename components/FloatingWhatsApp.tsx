"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

export default function FloatingWhatsApp({ whatsappNumber }: { whatsappNumber?: string } = {}) {
  const finalWhatsappNumber = whatsappNumber || PANDA_HAUS_INFO.whatsappNumber;
  const whatsappUrl = `https://wa.me/${finalWhatsappNumber}?text=${encodeURIComponent(
    "Hola Panda Haus, tengo una consulta sobre los servicios para mi negocio."
  )}`;

  const [isTooltipDismissed, setIsTooltipDismissed] = useState(false);

  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip persistente / hover */}
      {!isTooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#141618] border border-white/[0.12] text-xs font-display font-medium text-white shadow-2xl backdrop-blur-xl animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-[#3DDC97] animate-pulse" />
          <span>¿Tienes dudas? Escríbenos directamente</span>
          <button
            type="button"
            onClick={() => setIsTooltipDismissed(true)}
            aria-label="Cerrar sugerencia de WhatsApp"
            className="text-white/40 hover:text-white ml-1 p-0.5"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Botón Flotante de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp con Panda Haus"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-[#0D0D0D] shadow-2xl shadow-[#25D366]/40 hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all duration-300 group"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC97] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#3DDC97] border-2 border-[#0D0D0D]"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current group-hover:scale-110 transition-transform duration-200" />
      </a>
    </aside>
  );
}
