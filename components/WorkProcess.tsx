"use client";

import { Search, PenTool, CheckCircle, ArrowRight } from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

export default function WorkProcess() {
  const whatsappUrl = `https://wa.me/${PANDA_HAUS_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hola Panda Haus, me interesa conocer los tiempos de entrega para iniciar un proyecto visual con mi negocio."
  )}`;

  const steps = [
    {
      number: "01",
      title: "Diagnóstico Comercial & Brief",
      description:
        "Analizamos tu negocio, tus objetivos de venta y el formato requerido (flyers, carta QR, identidad o landing page). Cotización transparente y sin costos ocultos.",
    },
    {
      number: "02",
      title: "Diseño Visual & Rondas de Ajuste",
      description:
        "Desarrollamos propuestas visuales de alto impacto con enfoque en conversión y retención visual. Rondas ágiles de feedback garantizadas antes de la entrega final.",
    },
    {
      number: "03",
      title: "Entrega Rápida en 24-48h",
      description:
        "Archivos optimizados listos para su uso: alta definición para imprenta (CMYK), formatos ligeros para WhatsApp, códigos QR vectoriales y landing pages activas en línea.",
    },
  ];

  const stepIcons = [Search, PenTool, CheckCircle];

  return (
    <section id="proceso" className="py-24 max-w-6xl mx-auto px-5 sm:px-8 border-t border-[#2B2F33]">
      {/* Header */}
      <div className="max-w-2xl mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2F33]/40 border border-[#2B2F33] text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-3">
          Metodología de Trabajo &bull; 3 Pasos
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#FFFFFF] tracking-tight">
          Cómo Trabajamos en Panda Haus
        </h2>
        <p className="text-[#F2F4F3]/70 text-base mt-3 leading-relaxed font-sans">
          Un proceso ágil, claro y sin complicaciones desde el primer mensaje en WhatsApp hasta la entrega de los archivos listos para usar en tu negocio.
        </p>
      </div>

      {/* 3 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = stepIcons[idx] || CheckCircle;
          return (
            <div
              key={step.number}
              className="relative p-8 rounded-2xl bg-[#141618] border border-[#2B2F33] hover:border-[#3DDC97]/60 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-[#3DDC97]/5 hover:-translate-y-1"
            >
              <div>
                {/* Step number & Icon header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold text-[#3DDC97]">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] flex items-center justify-center text-[#3DDC97] group-hover:scale-110 transition-transform shadow-inner">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-[#FFFFFF] tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#F2F4F3]/70 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-[#2B2F33] flex items-center justify-between text-xs font-mono text-[#F2F4F3]/50">
                <span>Fase {idx + 1} de 3</span>
                <span className="text-[#3DDC97] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Garantía de Ajustes
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to start banner */}
      <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-[#2B2F33]/30 border border-[#2B2F33] flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
        <div>
          <h4 className="text-sm font-display font-bold text-[#FFFFFF]">
            ¿Tienes un negocio o restaurante y no sabes qué formato te conviene más?
          </h4>
          <p className="text-xs text-[#F2F4F3]/70 mt-0.5 font-sans">
            Escríbenos por WhatsApp y te orientamos con el diagnóstico inicial sin costo.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] text-xs font-display font-bold transition-all shrink-0 active:scale-95 shadow-md shadow-[#3DDC97]/20"
        >
          <span>Iniciar Diagnóstico</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
