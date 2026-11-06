"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone, Clock, ShieldCheck, ArrowRight, Check, Copy } from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

export default function Contact({ whatsappNumber }: { whatsappNumber?: string } = {}) {
  const [businessName, setBusinessName] = useState("");
  const [serviceRequired, setServiceRequired] = useState("Pack Web Comercial ($390.000 COP)");
  const [projectBrief, setProjectBrief] = useState("");
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const finalWhatsappNumber = whatsappNumber || PANDA_HAUS_INFO.whatsappNumber;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PANDA_HAUS_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PANDA_HAUS_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customText = `Hola Panda Haus, soy ${businessName || "un cliente"}. Me interesa cotizar: ${serviceRequired}.${
      projectBrief ? ` Detalles de mi negocio: ${projectBrief}` : ""
    }`;
    const url = `https://wa.me/${finalWhatsappNumber}?text=${encodeURIComponent(customText)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contacto" className="py-24 max-w-6xl mx-auto px-5 sm:px-8">
      <div className="rounded-3xl border border-[#2B2F33] bg-[#141618] p-8 sm:p-12 lg:p-14 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Commercial Pitch & Channels */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B2F33]/40 border border-[#2B2F33] text-xs font-mono text-[#3DDC97]">
              <span className="w-2 h-2 rounded-full bg-[#3DDC97] animate-pulse" />
              <span>Cotizaciones Inmediatas &bull; Atención Comercial</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
              ¿Listo para hacer destacar tu negocio con Panda Haus?
            </h2>

            <p className="text-base text-[#F2F4F3]/70 leading-relaxed max-w-lg font-sans">
              Cuéntanos sobre tu restaurante, marca o negocio local. Te asesoramos con la solución visual y web más efectiva para empezar a captar clientes de inmediato.
            </p>

            {/* Direct Channel Button */}
            <div className="pt-2">
              <a
                href={PANDA_HAUS_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] font-display font-bold text-sm shadow-lg shadow-[#3DDC97]/20 transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Escríbenos por WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Quick Contact Info Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              <button
                type="button"
                onClick={handleCopyPhone}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] hover:border-[#3DDC97] text-[#F2F4F3] font-mono transition-colors"
                title="Copiar número"
              >
                <Phone className="w-3.5 h-3.5 text-[#3DDC97]" />
                <span>{PANDA_HAUS_INFO.phone}</span>
                {copiedPhone ? (
                  <Check className="w-3 h-3 text-[#3DDC97]" />
                ) : (
                  <Copy className="w-3 h-3 opacity-50" />
                )}
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] hover:border-[#3DDC97] text-[#F2F4F3] font-mono transition-colors"
                title="Copiar correo"
              >
                <Mail className="w-3.5 h-3.5 text-[#3DDC97]" />
                <span>{PANDA_HAUS_INFO.email}</span>
                {copiedEmail ? (
                  <Check className="w-3 h-3 text-[#3DDC97]" />
                ) : (
                  <Copy className="w-3 h-3 opacity-50" />
                )}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#2B2F33] text-xs text-[#F2F4F3]/60 font-sans">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#3DDC97] shrink-0" />
                <span>Respuesta en menos de 2 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3DDC97] shrink-0" />
                <span>Entregas visuales en 24-48 horas</span>
              </div>
            </div>
          </div>

          {/* Right Column: Brief Form Direct to WhatsApp */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0D0D0D] border border-[#2B2F33] shadow-inner">
              <h3 className="text-lg font-display font-bold text-[#FFFFFF] mb-1">
                Enviar Brief Rápido
              </h3>
              <p className="text-xs text-[#F2F4F3]/60 mb-5 font-sans">
                Estructura tu pedido y lo enviamos directo a WhatsApp:
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                <div>
                  <label className="block text-[#F2F4F3]/70 mb-1.5 font-mono">
                    Nombre de tu negocio o restaurante *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Ej. Taquería El Sol / Café Central"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141618] border border-[#2B2F33] text-[#FFFFFF] placeholder:text-[#F2F4F3]/30 focus:outline-none focus:border-[#3DDC97] focus:ring-1 focus:ring-[#3DDC97]/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#F2F4F3]/70 mb-1.5 font-mono">
                    Servicio o paquete requerido *
                  </label>
                  <select
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141618] border border-[#2B2F33] text-[#FFFFFF] focus:outline-none focus:border-[#3DDC97] focus:ring-1 focus:ring-[#3DDC97]/40 transition-colors"
                  >
                    <option value="Pack Arranque Visual ($120.000 COP)">
                      Pack Arranque Visual ($120.000 COP)
                    </option>
                    <option value="Pack Menú Pro ($180.000 COP)">
                      Pack Menú Pro ($180.000 COP)
                    </option>
                    <option value="Pack Web Comercial ($390.000 COP)">
                      Pack Web Comercial ($390.000 COP)
                    </option>
                    <option value="Flyers y Contenido Visual">
                      Flyers y Contenido Visual
                    </option>
                    <option value="Menú o Carta Digital QR">
                      Menú o Carta Digital QR
                    </option>
                    <option value="Identidad de Marca (Branding)">
                      Identidad de Marca (Branding)
                    </option>
                    <option value="Proyecto Personalizado / Múltiples Sedes">
                      Proyecto Personalizado / Múltiples Sedes
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#F2F4F3]/70 mb-1.5 font-mono">
                    Detalles breves de lo que necesitas (opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="Platos principales, fecha de apertura o requerimientos especiales..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141618] border border-[#2B2F33] text-[#FFFFFF] placeholder:text-[#F2F4F3]/30 focus:outline-none focus:border-[#3DDC97] focus:ring-1 focus:ring-[#3DDC97]/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] font-display font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#3DDC97]/20 transition-all duration-200 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Enviar directo a WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
