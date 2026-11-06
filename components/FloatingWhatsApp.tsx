"use client";

import { MessageCircle } from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

export default function FloatingWhatsApp() {
  const whatsappUrl = PANDA_HAUS_INFO.whatsappDirectUrl;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
      {/* Tooltip sutil */}
      <div className="hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-[#141618] border border-[#2B2F33] text-xs font-display font-semibold text-[#FFFFFF] shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <span>¿Cotizamos tu proyecto?</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp con Panda Haus"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#3DDC97] text-[#0D0D0D] shadow-2xl shadow-[#3DDC97]/40 hover:bg-[#34C788] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC97] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#3DDC97] border-2 border-[#0D0D0D]"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
