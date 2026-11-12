"use client";

import React from "react";
import { Utensils, Sparkles, Scissors, Store, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface NicheItem {
  id: string;
  title: string;
  subtitle: string;
  stat: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  accentColor: string;
  clientExample: string;
}

const NICHES: NicheItem[] = [
  {
    id: "restaurantes",
    title: "Restaurantes & Bares",
    subtitle: "Menús QR interactivos y cartas de mesa para pedidos directos sin regalar 30% en comisiones.",
    stat: "+40% pedidos en combos",
    icon: Utensils,
    tags: ["Cartas QR", "Pedidos WhatsApp", "Promos 2x1"],
    accentColor: "#F59E0B",
    clientExample: "Arepa Secreta & Taquería DF",
  },
  {
    id: "spas",
    title: "Spas & Centros de Belleza",
    subtitle: "Catálogos visuales de tarifas y tratamientos que ahorran horas de WhatsApp y agendan solas.",
    stat: "+65% citas agendadas",
    icon: Sparkles,
    tags: ["Catálogos de Tarifas", "Agendamiento", "Branding"],
    accentColor: "#EC4899",
    clientExample: "Nails Pastel Studio",
  },
  {
    id: "barberias",
    title: "Barberías & Grooming",
    subtitle: "Campañas de impacto visual, cuponeras y combos VIP para llenar los martes y miércoles muertos.",
    stat: "Agenda llena entre semana",
    icon: Scissors,
    tags: ["Combos VIP", "Cuponeras 2x1", "Flyers 24h"],
    accentColor: "#EAB308",
    clientExample: "Barbería The King",
  },
  {
    id: "comercios",
    title: "Comercios & Negocios Locales",
    subtitle: "Ecosistemas web de alta conversión y flyers de alta rotación para vender más en tu zona.",
    stat: "Entregas en 24 a 72h",
    icon: Store,
    tags: ["Landing Pages", "Catálogos", "Pauta Meta"],
    accentColor: "#3DDC97",
    clientExample: "Comercios & Marcas VIP",
  },
];

export default function NicheAuthority() {
  return (
    <section className="py-12 border-b border-white/[0.06] bg-[#0A0D12] relative overflow-hidden">
      {/* Resplandor ambiental de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#3DDC970d,transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181B1E] border border-white/[0.08] text-[11px] font-mono text-[#3DDC97] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC97] animate-pulse" />
              <span>Autoridad Sectorial Comprobada</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              Nichos que dominamos con{" "}
              <span className="font-serif italic font-normal text-[#3DDC97]">
                ecosistemas rentables
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/60 font-sans max-w-md">
            No hacemos páginas genéricas. Diseñamos máquinas de venta ajustadas al comportamiento exacto del cliente de tu negocio.
          </p>
        </div>

        {/* Grid de 4 Nichos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {NICHES.map((niche) => {
            const Icon = niche.icon;
            return (
              <div
                key={niche.id}
                className="group relative rounded-2xl bg-[#12161B]/90 border border-white/[0.08] hover:border-[#3DDC97]/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
              >
                <div>
                  {/* Icono + Stat */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl bg-[#181D24] border border-white/[0.08] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ color: niche.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#181D24] border border-white/[0.08] text-[#3DDC97]">
                      {niche.stat}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white group-hover:text-[#3DDC97] transition-colors mb-1.5">
                    {niche.title}
                  </h3>

                  <p className="text-xs text-white/65 font-sans leading-relaxed mb-4">
                    {niche.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
                  <span className="text-[#3DDC97]/80 truncate">Ej. {niche.clientExample}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#3DDC97] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
