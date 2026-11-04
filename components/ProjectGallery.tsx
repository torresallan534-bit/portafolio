"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Eye, Film, Layers } from "lucide-react";
import { ClientCaseStudy, DisciplineCategory } from "@/types/projects";
import CaseStudyModal from "./CaseStudyModal";
import projectsData from "@/data/projects.json";

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<DisciplineCategory | "all">("all");
  const [selectedCase, setSelectedCase] = useState<ClientCaseStudy | null>(null);

  const caseStudies = projectsData as ClientCaseStudy[];

  const filterTabs: { key: DisciplineCategory | "all"; label: string }[] = [
    { key: "all", label: "Todos" },
    { key: "menus", label: "Menús Gastronómicos" },
    { key: "branding", label: "Branding Comercial" },
    { key: "flyers", label: "Flyers & Publicidad" },
    { key: "videos", label: "Videos" },
  ];

  // Filtrado: solo marcas que tengan la disciplina activa
  const filteredCases = caseStudies.filter((item) => {
    if (activeFilter === "all") return true;
    return item.categories.includes(activeFilter);
  });

  // Selector dinámico de portada según la disciplina filtrada
  const getCoverForCategory = (item: ClientCaseStudy, filter: DisciplineCategory | "all") => {
    if (filter === "all") return item.coverAsset;
    const match = item.deliverables?.find((d) => d.category === filter);
    return match ? match.assetPath : item.coverAsset;
  };

  const getBadgeLabel = (cat: DisciplineCategory) => {
    switch (cat) {
      case "menus":
        return "Menús";
      case "branding":
        return "Branding";
      case "flyers":
        return "Flyers";
      case "videos":
        return "Video";
      default:
        return cat;
    }
  };

  return (
    <section id="proyectos" className="py-20 max-w-6xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="text-xs font-mono text-[#E8A023] uppercase tracking-wider mb-2 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Casos de Estudio por Marca &bull; Entregables Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F5F5F7] tracking-tight">
            Casos de Estudio
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base mt-2 max-w-xl">
            Explora las marcas gestionadas, sus piezas comerciales, cartas gastronómicas y producciones de video. Filtra por disciplina o entra al caso completo.
          </p>
        </div>

        {/* Filter Tabs Bar */}
        <div
          role="tablist"
          aria-label="Filtrar por disciplina"
          className="flex flex-wrap items-center gap-1.5 bg-[#141416] p-1.5 rounded-xl border border-[#2A2A2E]"
        >
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-[#E8A023] text-[#0A0A0B] font-semibold shadow-sm scale-100"
                    : "text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-[#1C1C1F]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid: 1 tarjeta por cliente/marca */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredCases.map((caseStudy) => {
          const coverImage = getCoverForCategory(caseStudy, activeFilter);
          const hasVideo = caseStudy.categories.includes("videos");
          const deliverableCount = caseStudy.deliverables?.length || 0;

          return (
            <article
              key={caseStudy.id}
              onClick={() => setSelectedCase(caseStudy)}
              className="group flex flex-col rounded-xl bg-[#141416] border border-[#2A2A2E] hover:border-[#E8A023]/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#E8A023]/5"
            >
              {/* Cover Asset Box */}
              <div className="relative w-full aspect-[1/1.2] overflow-hidden bg-[#0A0A0B] flex items-center justify-center">
                <Image
                  src={coverImage}
                  alt={caseStudy.clientName}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
                />

                {/* Floating Deliverable Count Badge */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5">
                  <span className="text-[11px] font-mono tracking-wide px-2.5 py-1 rounded-md bg-[#0A0A0B]/85 border border-[#2A2A2E] text-[#F5F5F7]">
                    {deliverableCount} entregables
                  </span>
                  {hasVideo && (
                    <span className="p-1 rounded-md bg-[#E8A023] text-[#0A0A0B]" title="Incluye Video">
                      <Film className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 bg-[#0A0A0B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E8A023] text-[#0A0A0B] font-semibold text-xs shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                    Ver Caso Completo
                  </span>
                </div>
              </div>

              {/* Information Body */}
              <div className="p-5 flex flex-col flex-1 justify-between bg-[#141416] text-left border-t border-[#2A2A2E]">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs uppercase tracking-wider text-[#E8A023] font-mono font-medium">
                      Cliente
                    </span>
                    <span className="text-[11px] font-mono text-[#71717A]">
                      {caseStudy.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-[#F5F5F7] leading-snug group-hover:text-[#E8A023] transition-colors">
                    {caseStudy.clientName}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] mt-2 line-clamp-2 leading-relaxed">
                    {caseStudy.summary}
                  </p>
                </div>

                {/* Discipline Badges */}
                <div className="mt-4 pt-3 border-t border-[#2A2A2E]/60 flex flex-wrap gap-1.5">
                  {caseStudy.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#1C1C1F] text-[#A1A1AA] border border-[#2A2A2E]"
                    >
                      {getBadgeLabel(cat)}
                    </span>
                  ))}
                </div>

                {/* Footer with Color Palette Circles + CTA */}
                <div className="mt-3 pt-3 border-t border-[#2A2A2E]/60 flex items-center justify-between">
                  {caseStudy.colorPalette && (
                    <div className="flex items-center gap-1.5">
                      {caseStudy.colorPalette.slice(0, 4).map((c, i) => (
                        <span
                          key={i}
                          className="w-3.5 h-3.5 rounded-full border border-[#2A2A2E]"
                          style={{ backgroundColor: c.hex }}
                          title={`${c.name} (${c.hex})`}
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-1 text-xs font-semibold text-[#71717A] group-hover:text-[#E8A023] ml-auto transition-colors">
                    <span>Ver Caso</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Accessible Lightbox Modal */}
      <CaseStudyModal
        project={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    </section>
  );
}
