"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Eye,
  Layers,
  Sparkles,
  QrCode,
  Flame,
  Scissors,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { ProjectBlock } from "@/types/projects";
import SpecializedModal from "./SpecializedModal";
import LiveMenuDemoModal from "./LiveMenuDemoModal";

interface ProjectGalleryProps {
  initialProjects?: ProjectBlock[];
}

export default function ProjectGallery({ initialProjects }: ProjectGalleryProps = {}) {
  const [selectedProject, setSelectedProject] = useState<ProjectBlock | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoRestaurantName, setDemoRestaurantName] = useState("Arepa Secreta — Menú QR");

  // 3 Casos de Éxito Principales (Enfoque Restaurantes & Negocios Locales)
  const FEATURED_CASES = [
    {
      id: "arepa-secreta-menus",
      clientName: "Arepa Secreta",
      badge: "Menús QR & Stickers",
      icon: QrCode,
      title: "Arepa Secreta — Mock-up Menú QR + Stickers",
      summary:
        "Diseño integral de cartas físicas y digitales para lectura rápida por código QR, aumentando la rotación de mesas y los pedidos de combos por WhatsApp.",
      impactBadge: "+40% pedidos en combos",
      coverAsset: "/projects/arepa-secreta-menus/menu-fase-1-carta-1-1.webp",
      hasLiveDemo: true,
      colorPalette: [
        { name: "Maíz Dorado", hex: "#F59E0B" },
        { name: "Terracota Criollo", hex: "#DC2626" },
        { name: "Carbón Bistro", hex: "#18181B" },
      ],
      details: {
        id: "arepa-secreta-menus",
        clientId: "arepa-secreta",
        clientName: "Arepa Secreta",
        title: "Arepa Secreta — Menús Gastronómicos & Cartas Físicas / QR",
        category: "menus" as const,
        categoryLabel: "Menús Gastronómicos",
        summary:
          "Diseño y diagramación de cartas completas estructurando rellenos tradicionales, bebidas y combos.",
        challenge:
          "La carta original saturaba a los clientes y dificultaba la rotación rápida de mesas en horas pico.",
        solution:
          "Diagramación en tres niveles de lectura, fotografía apetitosa y versión digital ultraligera para lectura por código QR.",
        coverAsset: "/projects/arepa-secreta-menus/menu-fase-1-carta-1-1.webp",
        coverMediaType: "image" as const,
        assets: [
          {
            id: "arepa-1",
            title: "Arepa Secreta — Carta Fase 1",
            assetPath: "/projects/arepa-secreta-menus/menu-fase-1-carta-1-1.webp",
            mediaType: "image" as const,
            aspectRatio: "3:4" as const,
          },
          {
            id: "arepa-2",
            title: "Arepa Secreta — Carta Fase 2",
            assetPath: "/projects/arepa-secreta-menus/menu-fase-1-carta-1-2.webp",
            mediaType: "image" as const,
            aspectRatio: "3:4" as const,
          },
          {
            id: "arepa-3",
            title: "Arepa Secreta — Carta Digital",
            assetPath: "/projects/arepa-secreta-menus/menu-fase-2-carta-1-1.webp",
            mediaType: "image" as const,
            aspectRatio: "3:4" as const,
          },
        ],
        colorPalette: [
          { name: "Maíz Dorado", hex: "#F59E0B" },
          { name: "Terracota Criollo", hex: "#DC2626" },
          { name: "Carbón Bistro", hex: "#18181B" },
        ],
        year: 2025,
      },
    },
    {
      id: "taqueria-df-flyers",
      clientName: "Taquería DF — La Capital del Taco",
      badge: "Cartas Promo en Mesa",
      icon: Flame,
      title: "Taquería DF — Cartas Promo en Mesa & Campañas 2x1",
      summary:
        "Serie de cartas de mesa y afiches comerciales para promociones 2x1 de tacos al pastor, agilizando el despacho y aumentando el ticket medio.",
      impactBadge: "Despacho 30% más rápido",
      coverAsset: "/projects/taqueria-df-flyers/1.webp",
      hasLiveDemo: true,
      colorPalette: [
        { name: "Rojo Chile", hex: "#DC2626" },
        { name: "Amarillo Maíz", hex: "#FBBF24" },
        { name: "Verde Jalapeño", hex: "#16A34A" },
      ],
      details: {
        id: "taqueria-df-flyers",
        clientId: "taqueria-df",
        clientName: "Taquería DF — La Capital del Taco",
        title: "Taquería DF — Campaña Publicitaria & Cartas de Promociones",
        category: "flyers" as const,
        categoryLabel: "Cartas Promo & Flyers",
        summary:
          "Serie de afiches comerciales y cartas promocionales con las ofertas 2x1 y combos taqueros en Bogotá.",
        challenge:
          "Competir en una zona gastronómica densa comunicando precios y ofertas de tacos al pastor de forma inmediata.",
        solution:
          "Paleta viva de inspiración mexicana con textos gancho que aceleraron las órdenes.",
        coverAsset: "/projects/taqueria-df-flyers/1.webp",
        coverMediaType: "image" as const,
        assets: [
          {
            id: "taqueria-1",
            title: "Taquería DF — Carta Promo 1",
            assetPath: "/projects/taqueria-df-flyers/1.webp",
            mediaType: "image" as const,
            aspectRatio: "3:4" as const,
          },
          {
            id: "taqueria-2",
            title: "Taquería DF — Carta Promo 2",
            assetPath: "/projects/taqueria-df-flyers/2.webp",
            mediaType: "image" as const,
            aspectRatio: "3:4" as const,
          },
        ],
        colorPalette: [
          { name: "Rojo Chile", hex: "#DC2626" },
          { name: "Amarillo Maíz", hex: "#FBBF24" },
          { name: "Verde Jalapeño", hex: "#16A34A" },
        ],
        year: 2025,
      },
    },
    {
      id: "barberia-the-king-flyers",
      clientName: "Barbería The King",
      badge: "Flyers Combos",
      icon: Scissors,
      title: "Barbería The King — Flyers Combos & Cuponeras",
      summary:
        "Piezas promocionales de alto impacto para historias de WhatsApp y cartelería local, llenando la agenda los días martes y miércoles.",
      impactBadge: "Agenda llena entre semana",
      coverAsset: "/projects/barberia-the-king-flyers/1.webp",
      hasLiveDemo: false,
      colorPalette: [
        { name: "Dorado Rey", hex: "#EAB308" },
        { name: "Negro Obsidiana", hex: "#09090B" },
      ],
      details: {
        id: "barberia-the-king-flyers",
        clientId: "barberia-the-king",
        clientName: "Barbería The King",
        title: "Barbería The King — Cartelería Urbana & Cuponeras 2x1",
        category: "flyers" as const,
        categoryLabel: "Flyers Combos",
        summary:
          "Afiches de alto contraste con estética streetwear y cupones de fidelización para clientes VIP.",
        challenge:
          "Diferenciarse de barberías tradicionales con una identidad visual contundente y moderna.",
        solution:
          "Tipografía contundente, paleta negro/oro y cuponera lista para volanteo físico y estados de WhatsApp.",
        coverAsset: "/projects/barberia-the-king-flyers/1.webp",
        coverMediaType: "image" as const,
        assets: [
          {
            id: "barberia-1",
            title: "Barbería The King — Pieza 1",
            assetPath: "/projects/barberia-the-king-flyers/1.webp",
            mediaType: "image" as const,
            aspectRatio: "3:4" as const,
          },
          {
            id: "barberia-2",
            title: "Barbería The King — Pieza 2",
            assetPath: "/projects/barberia-the-king-flyers/2.webp",
            mediaType: "image" as const,
            aspectRatio: "3:4" as const,
          },
        ],
        colorPalette: [
          { name: "Dorado Rey", hex: "#EAB308" },
          { name: "Negro Obsidiana", hex: "#09090B" },
        ],
        year: 2025,
      },
    },
  ];

  const handleOpenDemo = (restaurantName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDemoRestaurantName(restaurantName);
    setIsDemoOpen(true);
  };

  return (
    <section id="portafolio" className="py-24 sm:py-32 max-w-7xl mx-auto px-5 sm:px-8 border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Casos Reales de Éxito &bull; Negocios Locales &bull; Cero SaaS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
            Resultados Visuales en{" "}
            <span className="font-serif italic font-normal text-[#3DDC97]">
              Negocios Reales
            </span>
          </h2>
          <p className="text-white/65 text-base sm:text-lg mt-3 max-w-xl font-sans font-light leading-relaxed">
            Descubre cómo restaurantes y negocios locales transformaron su imagen comercial para vender más y retener comensales.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-white/80 bg-[#141618] px-4 py-2.5 rounded-2xl border border-white/[0.08] backdrop-blur-md w-fit shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#3DDC97]" />
          <span>3 Casos de Estudio Destacados</span>
        </div>
      </div>

      {/* Grid de 3 Casos de Éxito Principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
        {FEATURED_CASES.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.id}
              onClick={() => setSelectedProject(item.details)}
              className="group flex flex-col rounded-3xl bg-[#121417] border border-white/[0.07] hover:border-[#3DDC97]/40 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/80 hover:-translate-y-1.5 transition-all duration-500 ease-out"
            >
              {/* Imagen de Portada con Smooth Zoom-In */}
              <div className="relative w-full aspect-[4/5] bg-[#0A0B0D] overflow-hidden flex items-center justify-center">
                <Image
                  src={item.coverAsset}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-all duration-500 ease-out group-hover:scale-105"
                />

                {/* Badges superiores flotantes */}
                <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] font-mono tracking-wide px-3 py-1 rounded-xl bg-[#0D0D0D]/85 border border-white/[0.1] text-[#3DDC97] font-bold backdrop-blur-md shadow-sm">
                    {item.badge}
                  </span>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-[#0D0D0D]/85 border border-white/[0.1] text-white/90 backdrop-blur-md shadow-sm">
                    {item.impactBadge}
                  </span>
                </div>

                {/* Botón flotante para Probar Demo en Vivo si aplica */}
                {item.hasLiveDemo && (
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <button
                      type="button"
                      onClick={(e) => handleOpenDemo(item.clientName, e)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#0D0D0D]/90 hover:bg-[#3DDC97] text-white hover:text-[#0D0D0D] border border-white/[0.15] hover:border-[#3DDC97] text-xs font-display font-bold flex items-center justify-center gap-2 backdrop-blur-md transition-all shadow-lg shadow-black/60"
                    >
                      <QrCode className="w-4 h-4 text-[#3DDC97] group-hover:text-[#0D0D0D]" />
                      <span>Probar Demo de Menú en Vivo</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Información de la Tarjeta */}
              <div className="p-6 flex flex-col flex-1 justify-between bg-[#121417] text-left border-t border-white/[0.06]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-[#3DDC97]" />
                    <span className="text-xs uppercase tracking-wider text-[#3DDC97] font-mono font-bold">
                      {item.clientName}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-white leading-snug group-hover:text-[#3DDC97] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/60 mt-2.5 line-clamp-3 leading-relaxed font-sans font-light">
                    {item.summary}
                  </p>
                </div>

                {/* Footer de Tarjeta con Paleta y Botón para Ver Piezas */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5" title="Paleta de color del negocio">
                    {item.colorPalette.map((c, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: c.hex }}
                        title={`${c.name} (${c.hex})`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-display font-bold text-white/80 group-hover:text-[#3DDC97] transition-colors duration-300">
                    <span>Ver Piezas</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Modal Especializado para ver los artes en HD */}
      <SpecializedModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Modal Interactivo: Demo de Menú Digital en Vivo */}
      <LiveMenuDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        restaurantName={demoRestaurantName}
      />
    </section>
  );
}
