import { Search, PenTool, CheckCircle, ArrowRight } from "lucide-react";
import { WORK_PROCESS_STEPS, DESIGNER_INFO } from "@/data/portfolio-data";

export default function WorkProcess() {
  const whatsappUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hola Allan! Me gustaría iniciar un proyecto de diseño gráfico y conocer más sobre los tiempos de entrega."
  )}`;

  const stepIcons = [Search, PenTool, CheckCircle];

  return (
    <section id="proceso" className="py-20 max-w-6xl mx-auto px-5 sm:px-8">
      {/* Header */}
      <div className="max-w-2xl mb-14">
        <div className="text-xs font-mono text-[#E8A023] uppercase tracking-wider mb-2">
          Metodología de Trabajo &bull; 3 Pasos
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F5F5F7] tracking-tight">
          Cómo Trabajamos
        </h2>
        <p className="text-[#A1A1AA] text-base mt-3 leading-relaxed">
          Un proceso claro, ágil y sin complicaciones desde el primer mensaje hasta la entrega de los archivos listos para imprenta o publicación digital.
        </p>
      </div>

      {/* 3 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {WORK_PROCESS_STEPS.map((step, idx) => {
          const Icon = stepIcons[idx] || CheckCircle;
          return (
            <div
              key={step.number}
              className="relative p-7 rounded-2xl bg-[#141416] border border-[#2A2A2E] hover:border-[#E8A023]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step number & Icon header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold text-[#E8A023]">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#1C1C1F] border border-[#2A2A2E] flex items-center justify-center text-[#E8A023] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-[#F5F5F7] tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-[#2A2A2E]/70 flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>Fase {idx + 1} de 3</span>
                <span className="text-[#E8A023] opacity-0 group-hover:opacity-100 transition-opacity">
                  Garantía 100%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to start banner */}
      <div className="mt-10 p-6 rounded-2xl bg-[#1C1C1F] border border-[#2A2A2E] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-[#F5F5F7]">
            ¿Tienes un proyecto en mente y no sabes por dónde arrancar?
          </h4>
          <p className="text-xs text-[#A1A1AA] mt-0.5">
            Escríbeme por WhatsApp y hacemos el diagnóstico inicial sin ningún compromiso.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E8A023] hover:bg-[#F0B847] text-[#0A0A0B] text-xs font-semibold transition-all shrink-0 active:scale-95"
        >
          <span>Iniciar Diagnóstico</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
