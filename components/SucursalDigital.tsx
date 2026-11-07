"use client";

import React, { useState } from "react";
import {
  Smartphone,
  SlidersHorizontal,
  Send,
  Zap,
  CheckCircle2,
  Percent,
  MessageCircle,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Check,
  Plus,
  Minus,
} from "lucide-react";

export default function SucursalDigital() {
  const [activeTab, setActiveTab] = useState<"menu" | "admin">("menu");
  const [burgerQty, setBurgerQty] = useState(2);
  const [arepaQty, setArepaQty] = useState(1);
  const [isAgotado, setIsAgotado] = useState(false);

  const subtotal = (isAgotado ? 0 : burgerQty * 24000) + arepaQty * 16000;
  const delivery = 5000;
  const total = subtotal + delivery;

  const purchaseUrl = `https://wa.me/573248000501?text=${encodeURIComponent(
    "Hola Panda Haus, me interesa la Sucursal Digital autogestionable para recibir pedidos por WhatsApp."
  )}`;

  const advantages = [
    {
      icon: SlidersHorizontal,
      title: "Control Total en tus Manos",
      desc: "Cambia precios, agrega fotos o desactiva platos agotados desde tu celular sin depender de programadores.",
      accent: "#3DDC97",
    },
    {
      icon: Send,
      title: "Pedidos Directos al WhatsApp",
      desc: "El cliente arma su comanda, el sistema calcula el valor con domicilio y te llega el pedido limpio y sumado.",
      accent: "#25D366",
    },
    {
      icon: Percent,
      title: "Cero Comisiones por Venta",
      desc: "Tu menú es 100% tuyo. Olvídate de regalar el 20% o 30% de cada plato a aplicaciones intermediarias.",
      accent: "#EAB308",
    },
    {
      icon: Zap,
      title: "Carga en Milisegundos",
      desc: "Abre al instante en cualquier teléfono sin ralentizaciones, optimizado para conexiones móviles.",
      accent: "#38BDF8",
    },
  ];

  return (
    <section
      id="sucursal-digital"
      className="py-24 sm:py-32 border-b border-white/[0.06] bg-[#0A0B0D] relative overflow-hidden"
    >
      {/* Luz radial de ambientación */}
      <div className="pointer-events-none absolute -top-40 right-10 w-[550px] h-[550px] bg-[#3DDC97]/[0.06] rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B1E] border border-white/[0.08] text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tu Propia Plataforma de Pedidos &bull; Cero Comisiones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
            Tu Sucursal Digital{" "}
            <span className="font-serif italic font-normal text-[#3DDC97]">
              Autogestionable
            </span>
          </h2>

          <div className="mt-5 inline-block px-5 py-2.5 rounded-2xl bg-[#141618] border border-[#3DDC97]/30 text-white font-mono text-sm sm:text-base">
            <span className="text-[#3DDC97] font-bold text-lg sm:text-xl">
              $390.000 COP
            </span>{" "}
            <span className="text-white/70">
              (Pago único: 50% anticipo / 50% contra entrega).
            </span>
          </div>
        </div>

        {/* Bloque Central: Grid con Información + Mockup en Smartphone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* Lado Izquierdo: 4 Ventajas Clave (Col-span 7) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advantages.map((adv, idx) => {
                const Icon = adv.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#121417] border border-white/[0.07] hover:border-[#3DDC97]/40 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1"
                  >
                    <div
                      className="w-10 h-10 rounded-xl bg-[#0D0D0D] border border-white/[0.08] flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ color: adv.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-white text-base tracking-tight mb-2 group-hover:text-[#3DDC97] transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/65 font-sans font-light leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Botón de Compra Directo a WhatsApp */}
            <div className="pt-3">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] font-display font-bold text-sm tracking-tight shadow-xl shadow-[#3DDC97]/25 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Quiero mi Sucursal Digital ($390.000 COP)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Nota inferior sutil */}
              <p className="mt-4 text-xs font-mono text-white/45 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC97]" />
                <span>
                  Mantenimiento opcional: Soporte &amp; Alojamiento: $40.000 COP/mes (Opcional, sin ataduras).
                </span>
              </p>
            </div>
          </div>

          {/* Lado Derecho: Mockup Smartphone Interactivo (Col-span 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[360px] rounded-[2.5rem] p-3.5 bg-gradient-to-b from-[#2B2F33] to-[#121417] shadow-2xl shadow-black/80 border border-white/[0.12]">
              {/* Marco Interno del Teléfono */}
              <div className="rounded-[2.1rem] bg-[#0D0D0D] overflow-hidden border border-white/[0.08] flex flex-col text-white select-none">
                {/* Barra de Estado y Dynamic Island */}
                <div className="pt-3 px-5 pb-2 flex items-center justify-between text-[11px] font-mono text-white/60 bg-[#121416]">
                  <span>12:30</span>
                  <div className="w-20 h-4 bg-black rounded-full border border-white/[0.1] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#3DDC97]/70" />
                  </div>
                  <span>5G 100%</span>
                </div>

                {/* Switcher de Pestañas: Vista Cliente vs Modo Admin */}
                <div className="p-2.5 bg-[#121416] border-b border-white/[0.08] flex gap-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("menu")}
                    className={`flex-1 py-1.5 rounded-xl text-[11px] font-mono font-bold transition-all ${
                      activeTab === "menu"
                        ? "bg-[#3DDC97] text-[#0D0D0D]"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    📱 Vista Catálogo
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("admin")}
                    className={`flex-1 py-1.5 rounded-xl text-[11px] font-mono font-bold transition-all ${
                      activeTab === "admin"
                        ? "bg-[#38BDF8] text-[#0D0D0D]"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    ⚙️ Panel Admin
                  </button>
                </div>

                {/* Contenido según pestaña */}
                {activeTab === "menu" ? (
                  <div className="p-4 space-y-3.5 text-xs">
                    {/* Header del Restaurante */}
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                      <div>
                        <div className="font-display font-bold text-sm text-white">
                          La Brasa &amp; Burger
                        </div>
                        <div className="text-[10px] text-white/50 font-mono">
                          Domicilios &bull; 30-45 min
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#3DDC97]/15 text-[#3DDC97] font-mono font-bold">
                        ● Abierto
                      </span>
                    </div>

                    {/* Plato 1 */}
                    <div className="p-2.5 rounded-xl bg-[#17191C] border border-white/[0.06] flex items-center justify-between gap-3">
                      <div>
                        <div className="font-bold text-white text-xs">
                          Burger Especial Doble Carne
                        </div>
                        <div className="text-[#3DDC97] font-mono font-bold text-[11px] mt-0.5">
                          $24.000 COP
                        </div>
                      </div>
                      {isAgotado ? (
                        <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-[#EF4444]/20 text-[#EF4444]">
                          Agotado
                        </span>
                      ) : (
                        <div className="flex items-center gap-2 bg-[#0D0D0D] px-2 py-1 rounded-lg border border-white/[0.1]">
                          <button
                            type="button"
                            onClick={() => setBurgerQty(Math.max(1, burgerQty - 1))}
                            className="text-white/60 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono font-bold">{burgerQty}</span>
                          <button
                            type="button"
                            onClick={() => setBurgerQty(burgerQty + 1)}
                            className="text-white/60 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Plato 2 */}
                    <div className="p-2.5 rounded-xl bg-[#17191C] border border-white/[0.06] flex items-center justify-between gap-3">
                      <div>
                        <div className="font-bold text-white text-xs">
                          Arepa Rellena con Todo
                        </div>
                        <div className="text-[#3DDC97] font-mono font-bold text-[11px] mt-0.5">
                          $16.000 COP
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-[#0D0D0D] px-2 py-1 rounded-lg border border-white/[0.1]">
                        <button
                          type="button"
                          onClick={() => setArepaQty(Math.max(1, arepaQty - 1))}
                          className="text-white/60 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono font-bold">{arepaQty}</span>
                        <button
                          type="button"
                          onClick={() => setArepaQty(arepaQty + 1)}
                          className="text-white/60 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Resumen de Comanda con Total y Domicilio */}
                    <div className="p-3 rounded-xl bg-[#141618] border border-white/[0.08] space-y-1.5 font-mono text-[11px]">
                      <div className="flex justify-between text-white/60">
                        <span>Subtotal comanda:</span>
                        <span>${subtotal.toLocaleString("es-CO")}</span>
                      </div>
                      <div className="flex justify-between text-white/60">
                        <span>Domicilio estimado:</span>
                        <span>${delivery.toLocaleString("es-CO")}</span>
                      </div>
                      <div className="flex justify-between text-white font-bold pt-1 border-t border-white/[0.08] text-xs">
                        <span>Total neto:</span>
                        <span className="text-[#3DDC97]">
                          ${total.toLocaleString("es-CO")} COP
                        </span>
                      </div>
                    </div>

                    {/* Botón simulado de Enviar a WhatsApp */}
                    <div className="pt-1">
                      <div className="w-full py-2.5 rounded-xl bg-[#25D366] text-[#0D0D0D] font-bold font-mono text-center flex items-center justify-center gap-2 shadow-md">
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Enviar Pedido a WhatsApp</span>
                      </div>
                      <span className="text-[10px] text-center text-white/40 block mt-1">
                        Llega con dirección, detalle y total sumado
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Modo Admin (Demostración de facilidad desde celular) */
                  <div className="p-4 space-y-3 text-xs">
                    <div className="pb-2 border-b border-white/[0.08]">
                      <span className="text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider block font-bold">
                        Panel en tu Celular
                      </span>
                      <span className="font-display font-bold text-white text-sm">
                        Editar Carta en 3 Segundos
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#17191C] border border-white/[0.08] space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-xs">
                          Burger Especial Doble
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsAgotado(!isAgotado)}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                            isAgotado
                              ? "bg-[#EF4444] text-white"
                              : "bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/40"
                          }`}
                        >
                          {isAgotado ? "✕ Marcado Agotado" : "✓ Disponible"}
                        </button>
                      </div>
                      <p className="text-[10px] text-white/50 leading-relaxed font-sans">
                        Haz clic en el botón de arriba para probar cómo se apaga el plato en vivo en tu catálogo.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#17191C] border border-white/[0.08] space-y-1">
                      <span className="text-[11px] text-white/80 font-medium block">
                        Cambiar Precio de Plato
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[#3DDC97] font-mono font-bold">$24.000</span>
                        <span className="text-[10px] text-white/40 font-mono">
                          (Se guarda al instante sin reiniciar nada)
                        </span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-[11px] font-mono flex items-center gap-2">
                      <Check className="w-4 h-4 shrink-0" />
                      <span>100% Sin tocar código ni instalar apps</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
