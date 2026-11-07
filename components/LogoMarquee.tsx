"use client";

import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";

interface ClientItem {
  id: string;
  name: string;
  tagline: string;
  accent: string;
  badge: string;
  iconSvg: React.ReactNode;
}

const CLIENT_ITEMS: ClientItem[] = [
  {
    id: "axis-pro",
    name: "Axis Pro",
    tagline: "Software & Audiovisual • EE. UU.",
    accent: "#38BDF8",
    badge: "Videos Comerciales",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "the-king",
    name: "Barbería The King",
    tagline: "Grooming & Cuidado Masculino",
    accent: "#EAB308",
    badge: "Flyers & Campañas",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3H5a2 2 0 01-2-2h18a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: "arepa-secreta",
    name: "Arepa Secreta",
    tagline: "Gastronomía Artesanal",
    accent: "#F97316",
    badge: "Menú QR & Empaques",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12c1.5 2 6.5 2 8 0" />
        <path d="M9 9h.01M15 9h.01" />
      </svg>
    ),
  },
  {
    id: "taqueria-df",
    name: "Taquería DF",
    tagline: "La Capital del Taco",
    accent: "#EF4444",
    badge: "Cartas de Promociones",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 13c0-4.97 4.03-9 9-9s9 4.03 9 9H3z" />
        <path d="M3 13v2a4 4 0 004 4h10a4 4 0 004-4v-2" />
      </svg>
    ),
  },
  {
    id: "nails-pastel",
    name: "Nails Pastel",
    tagline: "Estética & Cuidado Personal",
    accent: "#EC4899",
    badge: "Identidad & Tarifarios",
    iconSvg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z" />
      </svg>
    ),
  },
];

export default function LogoMarquee() {
  // Duplicamos la lista para crear un loop continuo sin saltos visuales
  const marqueeList = [...CLIENT_ITEMS, ...CLIENT_ITEMS, ...CLIENT_ITEMS];

  return (
    <div className="w-full mt-20 pt-10 border-t border-white/[0.06] overflow-hidden">
      {/* Header editorial del Marquee */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 px-2 gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#3DDC97]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-white/50">
            Prueba Comercial • Marcas que confían en Panda Haus
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#3DDC97]/80">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>+80 piezas comerciales entregadas con éxito</span>
        </div>
      </div>

      {/* Track de Carrusel Infinito con Mask Gradual */}
      <div className="relative w-full marquee-mask pause-hover">
        <div className="flex items-center gap-6 w-max animate-marquee marquee-track py-2">
          {marqueeList.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="group flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#141619]/60 hover:bg-[#1C1F24] border border-white/[0.06] hover:border-[#3DDC97]/40 transition-all duration-300 backdrop-blur-md cursor-default select-none shadow-sm hover:shadow-lg hover:shadow-black/40"
            >
              {/* Monograma / Ícono estilizado con acento */}
              <div
                className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-white/[0.08] flex items-center justify-center text-white/60 group-hover:text-white transition-colors duration-300 shrink-0"
                style={{
                  boxShadow: `0 0 20px -5px ${client.accent}20`,
                }}
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {client.iconSvg}
                </div>
              </div>

              {/* Información de Marca */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm tracking-tight text-white/90 group-hover:text-white transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-white/60 group-hover:text-[#3DDC97] group-hover:border-[#3DDC97]/30 transition-colors">
                    {client.badge}
                  </span>
                </div>
                <span className="text-[11px] font-sans text-white/40 group-hover:text-white/60 transition-colors">
                  {client.tagline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
