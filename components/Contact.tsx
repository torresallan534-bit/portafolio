"use client";

import { useState } from "react";
import { MessageCircle, Send, Mail, Clock, ShieldCheck, ArrowRight, Check, Sparkles, Phone, Copy } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolio-data";

export default function Contact() {
  const [formName, setFormName] = useState("");
  const [projectType, setProjectType] = useState("Menú Gastronómico");
  const [formMessage, setFormMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const whatsappDirectUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    DESIGNER_INFO.whatsappMessage
  )}`;

  const telegramDirectUrl = DESIGNER_INFO.telegramUrl || `https://t.me/${DESIGNER_INFO.telegramUsername}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.phone || "3248000501");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customText = `Hola Allan, soy ${formName || "un cliente"}. Me interesa contratar tus servicios de: ${projectType}. ${
      formMessage ? `Detalles: ${formMessage}` : ""
    }`;
    const url = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(customText)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background glow card */}
      <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-8 sm:p-12 lg:p-16 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Hiring Hook */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Agenda Abierta &bull; Cotizaciones Inmediatas</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              ¿Listo para darle a tu negocio el diseño que merece?
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-light max-w-xl leading-relaxed">
              Ya sea el menú de tu arepera, la campaña de flyers para tu barbería o el rediseño total de tu marca: hablemos directo por WhatsApp o Telegram para enviarte una propuesta a la medida.
            </p>

            {/* Direct Action Buttons - WhatsApp & Telegram */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              {/* WhatsApp Button */}
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-zinc-950 font-bold text-sm transition-all duration-300 shadow-xl shadow-[#25D366]/20 active:scale-95"
              >
                <div className="p-1 rounded-full bg-white/20">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span>Escríbeme por WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Telegram Button */}
              <a
                href={telegramDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-[#229ED9] hover:bg-[#1f8fc4] text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-[#229ED9]/20 active:scale-95"
              >
                <div className="p-1 rounded-full bg-white/20">
                  <Send className="w-5 h-5 fill-current" />
                </div>
                <span>Chat en Telegram</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick Contact Info Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <button
                type="button"
                onClick={handleCopyPhone}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-mono transition-colors"
                title="Copiar número"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+57 324 800 0501</span>
                {copiedPhone ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-zinc-500 hover:text-zinc-300" />
                )}
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-mono transition-colors"
                title="Copiar correo"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>torresaallan534@gmail.com</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-zinc-500 hover:text-zinc-300" />
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Respuesta promedio en menos de 2 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Presupuesto claro sin costos ocultos</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Brief Generator */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Enviar Brief Rápido
                </h3>
                <span className="text-[11px] font-mono text-zinc-500">1 minuto</span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-300 font-medium mb-1.5 font-mono">
                    Tu nombre o el de tu negocio
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Ej. Carlos - Arepera La Tradición"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700/60 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1.5 font-mono">
                    ¿Qué tipo de proyecto necesitas?
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700/60 text-zinc-100 focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Menú Gastronómico (Impreso y QR)">
                      Menú Gastronómico (Impreso y QR)
                    </option>
                    <option value="Flyers Promocionales para Barbería / Eventos">
                      Flyers Promocionales para Barbería / Eventos
                    </option>
                    <option value="Branding Comercial & Paleta de Colores">
                      Branding Comercial & Paleta de Colores
                    </option>
                    <option value="Campaña Social o Colecta de Donación">
                      Campaña Social o Colecta de Donación
                    </option>
                    <option value="Paquete Completo (Branding + Menú + Flyers)">
                      Paquete Completo (Branding + Menú + Flyers)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-300 font-medium mb-1.5 font-mono">
                    Detalles breves (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Cuéntame fecha estimada, cantidad de piezas o platos..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700/60 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-800" />
                  Enviar directo a WhatsApp de Allan
                </button>
              </form>

              {/* Direct email option */}
              <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  O por email tradicional:
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="font-mono text-zinc-300 hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">¡Copiado!</span>
                    </>
                  ) : (
                    <span>{DESIGNER_INFO.email}</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
