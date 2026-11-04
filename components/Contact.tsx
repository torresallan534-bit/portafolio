"use client";

import { useState } from "react";
import { MessageCircle, Send, Mail, Clock, ShieldCheck, ArrowRight, Check, Phone, Copy } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolio-data";

export default function Contact() {
  const [formName, setFormName] = useState("");
  const [projectType, setProjectType] = useState("Edición de Video / Contenido Multimedia");
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
    const customText = `Hola Allan, soy ${formName || "un cliente"}. Me interesa cotizar: ${projectType}. ${
      formMessage ? `Detalles: ${formMessage}` : ""
    }`;
    const url = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(customText)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-20 max-w-6xl mx-auto px-5 sm:px-8">
      <div className="rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-elevated border border-border text-xs font-mono text-success">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              <span>Agenda Abierta &bull; Cotizaciones Directas</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F5F5F7] tracking-tight leading-tight">
              ¿Listo para impulsar tu contenido y piezas comerciales?
            </h2>

            <p className="text-base text-[#A1A1AA] leading-relaxed max-w-lg">
              Ya sea creación de contenido para canales digitales, miniaturas de alto CTR, edición de video o piezas comerciales (menús y flyers): hablemos directo y coordinamos tu entrega ágil.
            </p>

            {/* Direct Channels */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-brand-whatsapp text-[#0A0A0B] font-semibold text-sm hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escríbeme por WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={telegramDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-brand-telegram text-white font-semibold text-sm hover:brightness-105 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Chat en Telegram</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Quick Contact Info Strip */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs">
              <button
                type="button"
                onClick={handleCopyPhone}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-elevated border border-border text-[#A1A1AA] hover:text-[#F5F5F7] font-mono transition-colors"
                title="Copiar número"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                <span>+57 324 800 0501</span>
                {copiedPhone ? (
                  <Check className="w-3 h-3 text-success" />
                ) : (
                  <Copy className="w-3 h-3 opacity-60" />
                )}
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-elevated border border-border text-[#A1A1AA] hover:text-[#F5F5F7] font-mono transition-colors"
                title="Copiar correo"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                <span>torresaallan534@gmail.com</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-success" />
                ) : (
                  <Copy className="w-3 h-3 opacity-60" />
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border text-xs text-[#71717A]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>Respuesta rápida el mismo día</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-success shrink-0" />
                <span>Entrega ágil y enfocada en métricas</span>
              </div>
            </div>
          </div>

          {/* Right Column: Brief Form */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-xl bg-surface-elevated border border-border">
              <h3 className="text-sm font-display font-semibold text-[#F5F5F7] mb-4">
                Enviar Brief Rápido
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-[#A1A1AA] mb-1 font-mono">
                    Nombre o proyecto
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Ej. Andrés - Canal YouTube / Negocio"
                    className="w-full px-3 py-2 rounded-lg bg-[#0A0A0B] border border-border text-[#F5F5F7] placeholder:text-[#71717A] focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#A1A1AA] mb-1 font-mono">
                    Tipo de servicio requerido
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0A0A0B] border border-border text-[#F5F5F7] focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="Miniaturas de YouTube / Edición de Video">
                      Miniaturas de YouTube / Edición de Video
                    </option>
                    <option value="Creación de Contenido Multimedia & Carruseles">
                      Creación de Contenido Multimedia & Carruseles
                    </option>
                    <option value="Menú Gastronómico (Impreso y QR)">
                      Menú Gastronómico (Impreso y QR)
                    </option>
                    <option value="Flyers Promocionales & Piezas Comerciales">
                      Flyers Promocionales & Piezas Comerciales
                    </option>
                    <option value="Identidad & Branding para Negocios">
                      Identidad & Branding para Negocios
                    </option>
                    <option value="Paquete Completo Personalizado">
                      Paquete Completo Personalizado
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#A1A1AA] mb-1 font-mono">
                    Detalles breves del proyecto (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Cuéntame fechas, temática del canal o piezas necesarias..."
                    className="w-full px-3 py-2 rounded-lg bg-[#0A0A0B] border border-border text-[#F5F5F7] placeholder:text-[#71717A] focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-accent hover:bg-accent-hover text-[#0A0A0B] font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Enviar directo a WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
