"use client";

import React from "react";
import {
  Sparkles,
  MessageCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

interface ServiceItem {
  id: string;
  name: string;
  deliverable: string;
  time: string;
  price: string;
  badge?: string;
  highlight?: boolean;
}

const CATALOG_ITEMS: ServiceItem[] = [
  {
    id: "flyer-promocional",
    name: "Flyer Promocional",
    deliverable: "1 pieza publicitaria (1:1 o 9:16) PNG HD",
    time: "24 horas",
    price: "$30.000",
    badge: "Más Pedido",
  },
  {
    id: "cuna-audio-ia",
    name: "Cuña / Audio IA",
    deliverable: "Guion (20–30s) + voz IA + música sin copyright",
    time: "24 horas",
    price: "$45.000",
  },
  {
    id: "reel-video-corto",
    name: "Reel / Video Corto",
    deliverable: "Edición vertical (15–30s) + textos animados",
    time: "24 a 48 horas",
    price: "$60.000",
    badge: "Alto Alcance",
  },
  {
    id: "menu-digital-qr",
    name: "Menú Digital (PDF/QR)",
    deliverable: "Carta interactiva (hasta 4 pág) + arte QR",
    time: "48 horas",
    price: "$120.000",
    badge: "Especialidad",
    highlight: true,
  },
  {
    id: "pagina-adicional-menu",
    name: "Página Adicional Menú",
    deliverable: "Extensión para menús largos",
    time: "+24 horas",
    price: "$25.000 / pág",
  },
  {
    id: "hablador-sticker-qr",
    name: "Hablador / Sticker QR",
    deliverable: "Diseño físico para mesa listo para imprenta",
    time: "24 horas",
    price: "$35.000",
  },
  {
    id: "vectorizacion-logotipo",
    name: "Vectorización Logotipo",
    deliverable: "Limpieza a formato SVG + PNG",
    time: "24 horas",
    price: "$70.000",
  },
];

export default function ServiceCatalog() {
  const getWhatsAppLink = (service: ServiceItem) => {
    const text = `Hola Panda Haus, me interesa pedir el servicio a la carta de "${service.name}" (${service.price} COP).`;
    return `https://wa.me/${PANDA_HAUS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="servicios" className="py-24 sm:py-32 bg-[#0D0D0D] border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header de Sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B1E] border border-white/[0.08] text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparencia Total &bull; Sin Letra Pequeña</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
              Catálogo de Servicios{" "}
              <span className="font-serif italic font-normal text-[#3DDC97]">
                A la Carta
              </span>
            </h2>
            <p className="text-white/65 text-base sm:text-lg mt-3 font-sans font-light leading-relaxed">
              Paga únicamente por lo que necesitas para tu negocio. Entregas ultra-rápidas en 24 a 48 horas con archivos en alta resolución listos para publicar o imprimir.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#3DDC97] bg-[#141618] px-4 py-2.5 rounded-2xl border border-white/[0.08] w-fit">
            <Zap className="w-4 h-4 fill-current" />
            <span>Precios fijos en pesos colombianos (COP)</span>
          </div>
        </div>

        {/* Tabla Moderna para Desktop / Tablets */}
        <div className="hidden md:block rounded-3xl bg-[#121417] border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/40">
          <div className="grid grid-cols-12 bg-[#17191D] p-5 text-xs font-mono uppercase tracking-wider text-white/50 border-b border-white/[0.08]">
            <div className="col-span-3">Servicio Comercial</div>
            <div className="col-span-4">Entregable Incluido</div>
            <div className="col-span-2 text-center">Tiempo de Entrega</div>
            <div className="col-span-2 text-right">Inversión (COP)</div>
            <div className="col-span-1 text-center">Pedir</div>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {CATALOG_ITEMS.map((item) => (
              <div
                key={item.id}
                className={`grid grid-cols-12 items-center p-5 transition-colors duration-200 group ${
                  item.highlight
                    ? "bg-[#3DDC97]/[0.03] hover:bg-[#3DDC97]/[0.08]"
                    : "hover:bg-white/[0.02]"
                }`}
              >
                {/* Nombre y Badge */}
                <div className="col-span-3 flex items-center gap-2.5">
                  <span className="font-display font-bold text-white text-sm group-hover:text-[#3DDC97] transition-colors">
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#3DDC97]/15 text-[#3DDC97] border border-[#3DDC97]/30 shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Entregable */}
                <div className="col-span-4 text-xs font-sans text-white/70 pr-4 leading-relaxed">
                  {item.deliverable}
                </div>

                {/* Tiempo */}
                <div className="col-span-2 flex items-center justify-center gap-1.5 text-xs font-mono text-white/80">
                  <Clock className="w-3.5 h-3.5 text-[#3DDC97]" />
                  <span>{item.time}</span>
                </div>

                {/* Precio */}
                <div className="col-span-2 text-right">
                  <span className="font-mono font-bold text-white text-sm sm:text-base text-[#3DDC97]">
                    {item.price}
                  </span>
                </div>

                {/* Botón WhatsApp */}
                <div className="col-span-1 flex justify-center">
                  <a
                    href={getWhatsAppLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pedir ${item.name} por WhatsApp`}
                    className="w-9 h-9 rounded-xl bg-[#1A1D21] hover:bg-[#3DDC97] text-white hover:text-[#0D0D0D] border border-white/[0.08] hover:border-[#3DDC97] flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grilla de Tarjetas para Móviles (Diseño ultra-legible y táctil) */}
        <div className="md:hidden space-y-3.5">
          {CATALOG_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border transition-all ${
                item.highlight
                  ? "bg-[#141816] border-[#3DDC97]/40 shadow-lg shadow-[#3DDC97]/5"
                  : "bg-[#131518] border-white/[0.07]"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-display font-bold text-white text-base">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono text-[#3DDC97] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-[#3DDC97]/15 text-[#3DDC97] border border-[#3DDC97]/30">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-mono font-bold text-lg text-[#3DDC97] block">
                    {item.price}
                  </span>
                  <span className="text-[10px] font-mono text-white/40">COP</span>
                </div>
              </div>

              <p className="text-xs text-white/70 font-sans leading-relaxed my-3 pb-3 border-b border-white/[0.06]">
                {item.deliverable}
              </p>

              <a
                href={getWhatsAppLink(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#1C2024] hover:bg-[#3DDC97] text-white hover:text-[#0D0D0D] font-display font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-white/[0.08]"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Pedir este Servicio</span>
              </a>
            </div>
          ))}
        </div>

        {/* Garantía inferior */}
        <div className="mt-10 p-5 rounded-2xl bg-[#131518] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#3DDC97]" />
            <span>50% anticipo al iniciar &bull; 50% contra entrega final aprobada.</span>
          </div>
          <span className="text-white/40">Revisiones incluidas en cada servicio.</span>
        </div>
      </div>
    </section>
  );
}
