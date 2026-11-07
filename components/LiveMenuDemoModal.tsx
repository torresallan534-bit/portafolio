"use client";

import React, { useState } from "react";
import { X, QrCode, ShoppingBag, Plus, Minus, MessageCircle, Sparkles, Check } from "lucide-react";
import Image from "next/image";

interface LiveMenuDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurantName?: string;
}

interface MenuItem {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: string;
  image: string;
}

const DEMO_ITEMS: MenuItem[] = [
  {
    id: "item-1",
    name: "Arepa Especial Mixta Secreta",
    desc: "Carne desmechada en cocción lenta, pollo al gratín, queso campesino derretido y aguacate.",
    price: 18000,
    category: "Arepas Especiales",
    image: "/projects/arepa-secreta-menus/menu-fase-1-carta-1-1.webp",
  },
  {
    id: "item-2",
    name: "Arepa Reina Criolla",
    desc: "Pollo jugoso con crema de aguacate fresco, mayonesa artesanal y especias de la casa.",
    price: 16000,
    category: "Arepas Especiales",
    image: "/projects/arepa-secreta-menus/menu-fase-1-carta-1-2.webp",
  },
  {
    id: "item-3",
    name: "Combo Taquero 2x1 Pastor",
    desc: "6 tacos al pastor marinados al trompo con piña asada, cebolla, cilantro y salsas artesanales.",
    price: 24000,
    category: "Combos & Promos",
    image: "/projects/taqueria-df-flyers/1.webp",
  },
];

export default function LiveMenuDemoModal({
  isOpen,
  onClose,
  restaurantName = "Arepa Secreta — Menú QR Oficial",
}: LiveMenuDemoModalProps) {
  const [cart, setCart] = useState<Record<string, number>>({ "item-1": 1 });

  if (!isOpen) return null;

  const updateQty = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = DEMO_ITEMS.find((d) => d.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const itemCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in-up">
      <div className="relative w-full max-w-md bg-[#121417] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header del Modal */}
        <div className="p-4 bg-[#181B1F] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#0D0D0D] border border-[#3DDC97]/40 flex items-center justify-center text-[#3DDC97]">
              <QrCode className="w-4 h-4" />
            </div>
            <div>
              <span className="font-display font-bold text-white text-sm block leading-tight">
                {restaurantName}
              </span>
              <span className="text-[10px] font-mono text-[#3DDC97] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC97] animate-pulse" />
                <span>Demo en Vivo &bull; Escaneo QR Simulado</span>
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Contenido del Menú / Catálogo */}
        <div className="p-4 space-y-4 overflow-y-auto flex-1 scrollbar-none">
          <div className="p-3 rounded-2xl bg-[#3DDC97]/10 border border-[#3DDC97]/20 text-[11px] font-mono text-white/90">
            👋 <strong>Así lo ve el comensal:</strong> Tu cliente escanea el QR en la mesa o entra por WhatsApp, elige sus platos favoritos y te envía la orden sumada en un clic.
          </div>

          <div className="space-y-3">
            {DEMO_ITEMS.map((item) => {
              const qty = cart[item.id] || 0;
              return (
                <div
                  key={item.id}
                  className="p-3 rounded-2xl bg-[#17191D] border border-white/[0.06] flex gap-3 items-center justify-between hover:border-white/[0.12] transition-colors"
                >
                  <div className="flex-1 pr-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#3DDC97] font-semibold block">
                      {item.category}
                    </span>
                    <h4 className="font-display font-bold text-white text-xs sm:text-sm mt-0.5">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-white/60 font-sans line-clamp-2 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                    <span className="font-mono font-bold text-white text-xs sm:text-sm mt-1.5 block text-[#3DDC97]">
                      ${item.price.toLocaleString("es-CO")} COP
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="flex items-center gap-2 bg-[#0D0D0D] px-2.5 py-1.5 rounded-xl border border-white/[0.1]">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        className="text-white/60 hover:text-white"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-mono font-bold text-xs w-4 text-center">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        className="text-white/60 hover:text-white"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer con Resumen y Botón de Envío */}
        <div className="p-4 bg-[#181B1F] border-t border-white/[0.08] space-y-3">
          <div className="flex items-center justify-between font-mono text-xs text-white">
            <span className="text-white/60">
              Total orden ({itemCount} {itemCount === 1 ? "ítem" : "ítems"}):
            </span>
            <span className="font-bold text-base text-[#3DDC97]">
              ${total.toLocaleString("es-CO")} COP
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-[#0D0D0D] font-display font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Simular Envío de Comanda a WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
