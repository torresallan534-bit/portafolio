"use client";

import React from "react";
import { Utensils, ShieldCheck, Flame, Scissors, Sparkles } from "lucide-react";

interface ClientItem {
  id: string;
  name: string;
  tagline: string;
  accent: string;
  badge: string;
  iconSvg: React.ReactNode;
}

const GASTRONOMY_CLIENTS: ClientItem[] = [
  {
    id: "arepa-secreta",
    name: "Arepa Secreta",
    tagline: "Gastronomía Artesanal",
    accent: "#F97316",
    badge: "Menú QR & Stickers",
    iconSvg: <Utensils className="w-5 h-5" />,
  },
  {
    id: "taqueria-df",
    name: "Taquería DF",
    tagline: "La Capital del Taco",
    accent: "#EF4444",
    badge: "Cartas Promo en Mesa",
    iconSvg: <Flame className="w-5 h-5" />,
  },
  {
    id: "the-king",
    name: "Barbería The King",
    tagline: "Grooming & Cuidado Masculino",
    accent: "#EAB308",
    badge: "Flyers Combos",
    iconSvg: <Scissors className="w-5 h-5" />,
  },
  {
    id: "nails-pastel",
    name: "Nails Pastel",
    tagline: "Estética & Cuidado Personal",
    accent: "#EC4899",
    badge: "Tarifario Digital",
    iconSvg: <Sparkles className="w-5 h-5" />,
  },
  {
    id: "parrilla-bistro",
    name: "Café & Bistró Urbano",
    tagline: "Cocina & Domicilios",
    accent: "#3DDC97",
    badge: "Sucursal WhatsApp",
    iconSvg: <Utensils className="w-5 h-5" />,
  },
];

export default function LogoMarquee() {
  const marqueeList = [...GASTRONOMY_CLIENTS, ...GASTRONOMY_CLIENTS, ...GASTRONOMY_CLIENTS];

  return (
    <div className="w-full mt-16 pt-8 border-t border-white/[0.06] overflow-hidden">
      {/* Header editorial del Marquee */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 px-2 gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#3DDC97]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-white/50">
            Socios Operativos • Restaurantes y Negocios que ya venden más
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#3DDC97]/80">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Cero comisiones a plataformas intermediarias</span>
        </div>
      </div>

      {/* Track de Carrusel Infinito con Mask Gradual */}
      <div className="relative w-full marquee-mask pause-hover">
        <div className="flex items-center gap-6 w-max animate-marquee marquee-track py-2">
          {marqueeList.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="group flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-[#141619]/60 hover:bg-[#1C1F24] border border-white/[0.06] hover:border-[#3DDC97]/40 transition-all duration-300 backdrop-blur-md cursor-default select-none shadow-sm hover:shadow-lg hover:shadow-black/40"
            >
              {/* Monograma / Ícono estilizado con acento */}
              <div
                className="w-9 h-9 rounded-xl bg-[#0D0D0D] border border-white/[0.08] flex items-center justify-center text-white/60 group-hover:text-white transition-colors duration-300 shrink-0"
                style={{
                  boxShadow: `0 0 18px -4px ${client.accent}20`,
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
