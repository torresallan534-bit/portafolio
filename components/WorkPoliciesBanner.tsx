import React from "react";
import { ShieldCheck, CreditCard, RefreshCw } from "lucide-react";

export default function WorkPoliciesBanner() {
  return (
    <section className="w-full bg-[#111316] border-t border-white/[0.08] py-6 px-5 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/80">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#0D0D0D] border border-white/[0.1] flex items-center justify-center text-[#3DDC97]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="font-bold text-white uppercase tracking-wider text-[11px]">
            Condiciones de Trabajo:
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2 text-center md:text-right text-xs text-white/75">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-[#3DDC97] font-bold">50%</span> anticipo y <span className="text-[#3DDC97] font-bold">50%</span> contra entrega
          </span>
          <span className="hidden sm:inline text-white/25">&bull;</span>
          <span className="flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5 text-[#3DDC97]" /> 2 rondas de revisiones incluidas
          </span>
          <span className="hidden sm:inline text-white/25">&bull;</span>
          <span className="flex items-center gap-1.5">
            <CreditCard className="w-3.5 h-3.5 text-[#3DDC97]" /> Pagos rápidos vía Nequi, Daviplata o Bancolombia.
          </span>
        </div>
      </div>
    </section>
  );
}
