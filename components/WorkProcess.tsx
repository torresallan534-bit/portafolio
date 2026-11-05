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
        <div className="text-xs font-mono text-amber-500 uppercase tracking-wider mb-2">
          Metodología de Trabajo &bull; 3 Pasos
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-zinc-50 tracking-tight">
          Cómo Trabajamos
        </h2>
        <p className="text-zinc-400 text-base mt-3 leading-relaxed">
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
              className="relative p-7 sm:p-8 rounded-2xl bg-[#111114] border border-white/[0.08] hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-amber-500/5 hover:scale-[1.01]"
            >
              <div>
                {/* Step number & Icon header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold text-amber-500">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/[0.08] flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-zinc-50 tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Fase {idx + 1} de 3</span>
                <span className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  Garantía 100%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to start banner */}
      <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
        <div>
          <h4 className="text-sm font-semibold text-zinc-100">
            ¿Tienes un proyecto en mente y no sabes por dónde arrancar?
          </h4>
          <p className="text-xs text-zinc-400 mt-0.5">
            Escríbeme por WhatsApp y hacemos el diagnóstico inicial sin ningún compromiso.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold transition-all shrink-0 active:scale-95 shadow-md shadow-amber-500/20"
        >
          <span>Iniciar Diagnóstico</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
