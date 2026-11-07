"use client";

import React from "react";
import {
  Utensils,
  Globe,
  Megaphone,
  Palette,
  CheckCircle2,
  ArrowUpRight,
  Zap,
  QrCode,
  Smartphone,
  Gauge,
  Sparkles,
  Layers,
  ShoppingBag,
} from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

export default function Services() {
  const getWhatsAppUrl = (serviceTitle: string) => {
    return `https://wa.me/${PANDA_HAUS_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Hola Panda Haus, me interesa cotizar el servicio de "${serviceTitle}" para mi negocio.`
    )}`;
  };

  return (
    <section id="servicios" className="py-24 sm:py-32 border-y border-white/[0.06] bg-[#0A0B0C] relative overflow-hidden">
      {/* Luz ambiental sutil en el fondo */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#3DDC97]/[0.03] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Encabezado Editorial de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B1E] border border-white/[0.08] text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Soluciones Comerciales de Alto Retorno</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
              Servicios Diseñados para{" "}
              <span className="font-serif italic font-normal text-[#3DDC97]">Multiplicar</span> Ventas
            </h2>
            <p className="text-white/60 text-base sm:text-lg mt-4 font-sans font-light leading-relaxed max-w-xl">
              Arquitectura visual y digital asimétrica concebida para restaurantes, marcas y negocios locales que buscan diferenciarse y convertir visitas en clientes reales.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-white/50 bg-[#141618] px-4 py-2.5 rounded-2xl border border-white/[0.06]">
            <span className="h-2 w-2 rounded-full bg-[#3DDC97] animate-pulse" />
            <span>Capacidad activa para nuevos proyectos</span>
          </div>
        </div>

        {/* BENTO GRID (Cuadrícula Asimétrica de 12 Columnas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
          {/* ==============================================================
              BENTO 1 (Col-span 7): Menús Gastronómicos & Cartas Digitales QR
             ============================================================== */}
          <div className="lg:col-span-7 bento-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden">
            {/* Gradiente decorativo de fondo */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-[#3DDC97]/[0.08] rounded-full blur-3xl group-hover:bg-[#3DDC97]/[0.14] transition-all duration-500" />

            <div>
              {/* Header de la tarjeta */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-[#0D0D0D] border border-white/[0.1] flex items-center justify-center text-[#3DDC97] shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#3DDC97] block font-semibold">
                      Especialidad Gastronómica
                    </span>
                    <span className="text-xs font-mono text-white/50">Entrega en 48 horas</span>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-[#3DDC97]/10 text-[#3DDC97] border border-[#3DDC97]/30">
                  Alta Demanda
                </span>
              </div>

              {/* Título y Descripción */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-[#3DDC97] transition-colors duration-300">
                Menús y Cartas Digitales Interactivos
              </h3>
              <p className="text-sm sm:text-base text-white/70 mt-3 font-sans font-light leading-relaxed max-w-xl">
                Diseños visuales apetitosos que aceleran la toma de decisión del comensal. Ideales para restaurantes, cafeterías, bares y taquerías que buscan elevar el ticket promedio con códigos QR instantáneos.
              </p>

              {/* Mockup Interactivo / Badge de Conversión Gastronómica */}
              <div className="my-7 p-4 sm:p-5 rounded-2xl bg-[#0D0E10]/80 border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#1C2024] border border-white/[0.08] flex items-center justify-center text-[#3DDC97]">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-white/90 font-medium block">
                      Escaneo Ultra-Rápido &bull; Cero Espera
                    </span>
                    <span className="text-[11px] text-white/50">Optimizado para abrir en WhatsApp y celulares</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#3DDC97]/10 border border-[#3DDC97]/25 text-[#3DDC97] text-xs font-mono font-bold">
                  <span>+40% ventas en combos</span>
                </div>
              </div>

              {/* Lista de Entregables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#3DDC97] shrink-0 mt-0.5" />
                  <span>Código QR vectorial personalizado</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#3DDC97] shrink-0 mt-0.5" />
                  <span>Estructuración de combos gancho</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#3DDC97] shrink-0 mt-0.5" />
                  <span>Versión para historias y estados</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#3DDC97] shrink-0 mt-0.5" />
                  <span>Archivos HD listos para imprimir</span>
                </div>
              </div>
            </div>

            {/* Footer de Tarjeta con CTA Directo */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-white/40">Garantía de ajustes incluida</span>
              <a
                href={getWhatsAppUrl("Menús y Cartas Digitales")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C2024] hover:bg-[#3DDC97] text-white hover:text-[#0D0D0D] font-display font-semibold text-xs tracking-tight transition-all duration-300 border border-white/[0.08] hover:border-[#3DDC97]"
              >
                <span>Cotizar Menú QR</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ==============================================================
              BENTO 2 (Col-span 5): Landing Pages de Conversión
             ============================================================== */}
          <div className="lg:col-span-5 bento-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden">
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 bg-[#38BDF8]/[0.06] rounded-full blur-3xl group-hover:bg-[#38BDF8]/[0.12] transition-all duration-500" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-[#0D0D0D] border border-white/[0.1] flex items-center justify-center text-[#38BDF8] shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#38BDF8] block font-semibold">
                      Máxima Conversión
                    </span>
                    <span className="text-xs font-mono text-white/50">Entrega en 48-72h</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-white/60">
                  <Gauge className="w-3.5 h-3.5 text-[#3DDC97]" />
                  <span>&lt; 1s</span>
                </div>
              </div>

              {/* Título & Texto */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-[#38BDF8] transition-colors duration-300">
                Landing Pages Comerciales
              </h3>
              <p className="text-sm sm:text-base text-white/70 mt-3 font-sans font-light leading-relaxed">
                Sitios web rápidos creados en Next.js para canalizar pedidos y reservas directo a WhatsApp sin intermediarios ni comisiones abusivas.
              </p>

              {/* Mockup de Navegador Minimalista */}
              <div className="my-6 p-3.5 rounded-2xl bg-[#0D0E10]/90 border border-white/[0.08]">
                <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/[0.06]">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]/60" />
                  <span className="w-2 h-2 rounded-full bg-[#EAB308]/60" />
                  <span className="w-2 h-2 rounded-full bg-[#22C55E]/60" />
                  <span className="text-[10px] font-mono text-white/40 ml-2">pandahaus.co/tu-negocio</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                  <span className="text-[#3DDC97]">● Botón WhatsApp Flotante</span>
                  <span className="text-white/50">100% Celular</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 pt-1">
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Carga instantánea en celulares</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Dominio, hosting y certificado SSL</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>Catálogo de servicios y precios claros</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-white/40">Next.js &bull; SEO Local</span>
              <a
                href={getWhatsAppUrl("Landing Pages de Conversión")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C2024] hover:bg-[#38BDF8] text-white hover:text-[#0D0D0D] font-display font-semibold text-xs tracking-tight transition-all duration-300 border border-white/[0.08] hover:border-[#38BDF8]"
              >
                <span>Cotizar Web</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ==============================================================
              BENTO 3 (Col-span 5): Flyers y Contenido Visual de Redes
             ============================================================== */}
          <div className="lg:col-span-5 bento-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden">
            <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 bg-[#EC4899]/[0.06] rounded-full blur-3xl group-hover:bg-[#EC4899]/[0.12] transition-all duration-500" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-[#0D0D0D] border border-white/[0.1] flex items-center justify-center text-[#EC4899] shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#EC4899] block font-semibold">
                      Alto Impacto Visual
                    </span>
                    <span className="text-xs font-mono text-white/50">Entrega en 24 a 48h</span>
                  </div>
                </div>

                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/70">
                  9:16 &bull; 1:1
                </span>
              </div>

              {/* Título & Texto */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-[#EC4899] transition-colors duration-300">
                Flyers y Contenido Visual
              </h3>
              <p className="text-sm sm:text-base text-white/70 mt-3 font-sans font-light leading-relaxed">
                Piezas promocionales creadas para detener el scroll en Instagram Stories, feed y WhatsApp. Perfectas para ofertas de fin de semana, combos y lanzamientos.
              </p>

              {/* Visual Tags */}
              <div className="flex flex-wrap gap-2 my-6">
                <span className="px-3 py-1 rounded-xl bg-[#141618] border border-white/[0.06] text-xs font-mono text-white/80">
                  📱 Historias 9:16
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#141618] border border-white/[0.06] text-xs font-mono text-white/80">
                  🖼️ Feed Cuadrado 1:1
                </span>
                <span className="px-3 py-1 rounded-xl bg-[#141618] border border-white/[0.06] text-xs font-mono text-white/80">
                  🖨️ Archivos para Impresión
                </span>
              </div>

              {/* Checklist */}
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#EC4899] shrink-0 mt-0.5" />
                  <span>Jerarquía de precios y promociones gancho</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#EC4899] shrink-0 mt-0.5" />
                  <span>Formatos optimizados para pauta en Meta</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-white/40">Entrega Express 24h</span>
              <a
                href={getWhatsAppUrl("Flyers y Contenido Visual")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C2024] hover:bg-[#EC4899] text-white hover:text-[#0D0D0D] font-display font-semibold text-xs tracking-tight transition-all duration-300 border border-white/[0.08] hover:border-[#EC4899]"
              >
                <span>Cotizar Flyers</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* ==============================================================
              BENTO 4 (Col-span 7): Identidad de Marca & Branding Comercial
             ============================================================== */}
          <div className="lg:col-span-7 bento-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between group relative overflow-hidden">
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-[#EAB308]/[0.06] rounded-full blur-3xl group-hover:bg-[#EAB308]/[0.12] transition-all duration-500" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-[#0D0D0D] border border-white/[0.1] flex items-center justify-center text-[#EAB308] shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#EAB308] block font-semibold">
                      Identidad Comercial
                    </span>
                    <span className="text-xs font-mono text-white/50">Entrega en 3 a 5 días</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAB308]/10 text-[#EAB308] border border-[#EAB308]/30 text-[11px] font-mono font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Sistema Completo</span>
                </div>
              </div>

              {/* Título & Texto */}
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-[#EAB308] transition-colors duration-300">
                Identidad de Marca &amp; Packaging
              </h3>
              <p className="text-sm sm:text-base text-white/70 mt-3 font-sans font-light leading-relaxed max-w-xl">
                Construimos el universo visual de tu marca para que transmita solidez: logotipo principal, secundario, isotipo, paleta cromática, bolsas de delivery y manual de aplicación.
              </p>

              {/* Mini Paleta Cromática Interactiva */}
              <div className="my-6 p-4 rounded-2xl bg-[#0D0E10]/80 border border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-2.5">
                  Paleta de Marca &bull; Archivos Vectoriales Listos
                </span>
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-10 rounded-xl bg-[#0D0D0D] border border-white/[0.1] flex items-center justify-center text-[10px] font-mono text-white/80">
                    #0D0D0D
                  </div>
                  <div className="h-10 rounded-xl bg-[#3DDC97] text-[#0D0D0D] font-bold flex items-center justify-center text-[10px] font-mono">
                    #3DDC97
                  </div>
                  <div className="h-10 rounded-xl bg-[#2B2F33] border border-white/[0.1] flex items-center justify-center text-[10px] font-mono text-white/80">
                    #2B2F33
                  </div>
                  <div className="h-10 rounded-xl bg-[#F2F4F3] text-[#0D0D0D] font-bold flex items-center justify-center text-[10px] font-mono">
                    #F2F4F3
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                  <span>Logotipo en versiones vectoriales SVG/AI/PDF</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                  <span>Diseño para bolsas de delivery y etiquetas</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                  <span>Tipografías comerciales y jerarquías</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-white/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#EAB308] shrink-0 mt-0.5" />
                  <span>Archivos editables sin restricciones</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-white/40">Identidad 100% Personalizada</span>
              <a
                href={getWhatsAppUrl("Identidad de Marca (Branding)")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C2024] hover:bg-[#EAB308] text-white hover:text-[#0D0D0D] font-display font-semibold text-xs tracking-tight transition-all duration-300 border border-white/[0.08] hover:border-[#EAB308]"
              >
                <span>Cotizar Branding</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
