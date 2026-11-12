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
  Laptop,
  Smartphone,
} from "lucide-react";
import { ProjectBlock } from "@/types/projects";
import { IphoneMockup, MacbookMockup } from "./DeviceMockup";
import SpecializedModal from "./SpecializedModal";
import LiveMenuDemoModal from "./LiveMenuDemoModal";

interface ProjectGalleryProps {
  initialProjects?: ProjectBlock[];
}

export default function ProjectGallery({ initialProjects }: ProjectGalleryProps = {}) {
  const [selectedProject, setSelectedProject] = useState<ProjectBlock | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoRestaurantName, setDemoRestaurantName] = useState("Arepa Secreta — Menú QR");

  // 4 Casos de Estudio Emblemáticos montados en Mockups 3D de iPhone & MacBook
  const FEATURED_CASES = [
    {
      id: "nails-pastel-branding",
      clientName: "Nails Pastel — Spa & Nails",
      badge: "Spa & Belleza",
      icon: Sparkles,
      deviceType: "iphone" as const,
      title: "Nails Pastel — Ecosistema de Tarifas & Agendamiento",
      summary:
        "Catálogo interactivo de servicios y tarifas que eliminó las preguntas repetitivas de precios por WhatsApp, logrando que las clientas elijan y agenden de inmediato.",
      impactBadge: "+65% citas agendadas",
      coverAsset: "/projects/nails-pastel-branding/flyers-1.webp",
      hasLiveDemo: false,
      colorPalette: [
        { name: "Rosa Pastel", hex: "#EC4899" },
        { name: "Lavanda Soft", hex: "#A855F7" },
        { name: "Negro Seda", hex: "#111827" },
      ],
      details: {
        id: "nails-pastel-branding",
        clientId: "nails-pastel",
        clientName: "Nails Pastel — Spa & Nails",
        title: "Nails Pastel — Identidad de Marca, Catálogo de Tarifas & Video Promocional",
        category: "branding" as const,
        categoryLabel: "Catálogo de Tarifas & Branding",
        summary:
          "Diseño integral del tarifario digital interactivo y piezas promocionales para estados de WhatsApp e Instagram.",
        challenge:
          "El personal perdía más de 3 horas al día respondiendo cotizaciones manuales y enviando fotos desordenadas.",
        solution:
          "Estructuramos un catálogo visual elegante con precios transparentes y enlaces directos para apartar cita con abono.",
        coverAsset: "/projects/nails-pastel-branding/flyers-1.webp",
        coverMediaType: "image" as const,
        assets: [
          {
            id: "nails-1",
            title: "Nails Pastel — Catálogo de Tratamientos",
            assetPath: "/projects/nails-pastel-branding/flyers-1.webp",
            mediaType: "image" as const,
            aspectRatio: "3:4" as const,
          },
          {
            id: "nails-2",
            title: "Nails Pastel — Tarifario de Uñas & Spa",
            assetPath: "/projects/nails-pastel-branding/flyers-2.webp",
            mediaType: "image" as const,
            aspectRatio: "3:4" as const,
          },
          {
            id: "nails-3",
            title: "Nails Pastel — Identidad de Marca Oficial",
            assetPath: "/projects/nails-pastel-branding/logo-nails-pastel.webp",
            mediaType: "image" as const,
            aspectRatio: "1:1" as const,
          },
        ],
        colorPalette: [
          { name: "Rosa Pastel", hex: "#EC4899" },
          { name: "Lavanda Soft", hex: "#A855F7" },
          { name: "Negro Seda", hex: "#111827" },
        ],
        year: 2026,
      },
    },
    {
      id: "arepa-secreta-menus",
      clientName: "Arepa Secreta",
      badge: "Restaurantes & Bares",
      icon: QrCode,
      deviceType: "iphone" as const,
      title: "Arepa Secreta — Menú QR Interactivo & Pedidos",
      summary:
        "Digitalización total de la carta física y digital con QR para lectura ultrarrápida, reduciendo tiempos de espera y aumentando la venta de combos sin pagar comisiones.",
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
      id: "barberia-the-king-flyers",
      clientName: "Barbería The King",
      badge: "Barberías & Grooming",
      icon: Scissors,
      deviceType: "macbook" as const,
      title: "Barbería The King — Campaña VIP & Cuponeras 2x1",
      summary:
        "Piezas promocionales y cuponeras digitales de fidelización diseñadas para llenar la agenda los martes y miércoles con planes recurrentes de alto ticket.",
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
    {
      id: "taqueria-df-flyers",
      clientName: "Taquería DF — La Capital del Taco",
      badge: "Restaurantes & Taquerías",
      icon: Flame,
      deviceType: "iphone" as const,
      title: "Taquería DF — Cartas Promo de Mesa & Combos",
      summary:
        "Cartas de mesa y material promocional 2x1 para agilizar la rotación en horas pico y multiplicar el ticket promedio de consumo en local y domicilios.",
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
  ];

  const handleOpenDemo = (restaurantName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDemoRestaurantName(restaurantName);
    setIsDemoOpen(true);
  };

  return (
    <section id="portafolio" className="py-24 sm:py-32 max-w-7xl mx-auto px-5 sm:px-8 border-b border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
        <div>
          <div className="text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Portafolio de Autoridad &bull; Mockups 3D &bull; Cero Capturas Planas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
            Así se ve un negocio local{" "}
            <span className="font-serif italic font-normal text-[#3DDC97]">
              facturando en 2026
            </span>
          </h2>
          <p className="text-white/65 text-base sm:text-lg mt-3 max-w-2xl font-sans font-light leading-relaxed">
            Nuestros ecosistemas presentados en dispositivos reales. Elimina la fricción visual y transmite el valor premium que justifica precios más altos.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-white/80 bg-[#141618] px-4 py-2.5 rounded-2xl border border-white/[0.08] backdrop-blur-md w-fit shadow-sm shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-[#3DDC97]" />
          <span>4 Ecosistemas de Alta Conversión</span>
        </div>
      </div>

      {/* Grid de Casos de Éxito en Mockups Flotantes 3D */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {FEATURED_CASES.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.id}
              onClick={() => setSelectedProject(item.details)}
              className="group flex flex-col rounded-3xl bg-[#111418] border border-white/[0.08] hover:border-[#3DDC97]/40 cursor-pointer overflow-hidden shadow-xl shadow-black/60 hover:shadow-2xl hover:shadow-black/90 transition-all duration-500 ease-out text-left"
            >
              {/* Contenedor del Mockup 3D Flotante (Prohibidas capturas planas) */}
              <div className="relative w-full py-10 px-6 sm:px-10 bg-gradient-to-b from-[#0A0D11] via-[#0E1116] to-[#12161B] overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
                {/* Iluminación ambiental cenital */}
                <div className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#3DDC97]/10 blur-3xl -z-0" />

                {/* Badges superiores flotantes */}
                <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
                  <span className="text-[11px] font-mono tracking-wide px-3 py-1 rounded-xl bg-[#0D0D0D]/90 border border-white/[0.1] text-[#3DDC97] font-bold backdrop-blur-md shadow-sm">
                    {item.badge}
                  </span>

                  <span className="text-[11px] font-mono px-3 py-1 rounded-xl bg-[#0D0D0D]/90 border border-[#3DDC97]/30 text-white font-bold backdrop-blur-md shadow-sm">
                    {item.impactBadge}
                  </span>
                </div>

                {/* Renderizado de Mockup 3D de iPhone o MacBook */}
                <div className="relative z-10 w-full flex items-center justify-center pt-6">
                  {item.deviceType === "macbook" ? (
                    <MacbookMockup
                      imageSrc={item.coverAsset}
                      imageAlt={item.title}
                      urlTitle={`pandahaus.co/${item.id}`}
                      className="max-w-[340px] sm:max-w-[420px]"
                    />
                  ) : (
                    <IphoneMockup
                      imageSrc={item.coverAsset}
                      imageAlt={item.title}
                      className="max-w-[210px] sm:max-w-[230px]"
                    />
                  )}
                </div>

                {/* Botón flotante para Probar Demo si aplica */}
                {item.hasLiveDemo && (
                  <div className="absolute bottom-4 left-4 right-4 z-30">
                    <button
                      type="button"
                      onClick={(e) => handleOpenDemo(item.clientName, e)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#0D0D0D]/90 hover:bg-[#3DDC97] text-white hover:text-[#0D0D0D] border border-white/[0.15] hover:border-[#3DDC97] text-xs font-display font-bold flex items-center justify-center gap-2 backdrop-blur-md transition-all shadow-lg"
                    >
                      <QrCode className="w-4 h-4 text-[#3DDC97] group-hover:text-[#0D0D0D]" />
                      <span>Probar Demo Interactiva en Vivo</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Información de la Tarjeta */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-[#121519] border-t border-white/[0.06]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-[#3DDC97]" />
                    <span className="text-xs uppercase tracking-wider text-[#3DDC97] font-mono font-bold">
                      {item.clientName}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug group-hover:text-[#3DDC97] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/65 mt-2.5 line-clamp-3 leading-relaxed font-sans font-light">
                    {item.summary}
                  </p>
                </div>

                {/* Footer de Tarjeta con CTA para Ver Piezas */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {item.colorPalette.map((color, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-black/40 shadow-sm"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>

                  <span className="text-xs font-display font-bold text-white/80 group-hover:text-[#3DDC97] flex items-center gap-1 transition-colors">
                    <span>Ver Ecosistema Completo</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Modal para Ver Casos Detallados */}
      <SpecializedModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Modal de Demo de Menú QR en Vivo */}
      <LiveMenuDemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        restaurantName={demoRestaurantName}
      />
    </section>
  );
}
