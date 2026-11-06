"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Eye,
  Play,
  Film,
  Layers,
  Sparkles,
} from "lucide-react";
import { ProjectBlock, ProjectCategory } from "@/types/projects";
import SpecializedModal from "./SpecializedModal";
import projectsData from "@/data/projects.json";

const ALL_PROJECTS = projectsData as ProjectBlock[];

const CATEGORY_TABS: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "videos", label: "Videos" },
  { key: "menus", label: "Menús Gastronómicos" },
  { key: "flyers", label: "Flyers & Promos" },
  { key: "carruseles", label: "Carruseles" },
  { key: "ebooks", label: "Ebooks & Editorial" },
  { key: "miniaturas", label: "Miniaturas YouTube" },
  { key: "branding", label: "Branding" },
];

const STATIC_CLIENTS = (() => {
  const map = new Map<string, string>();
  ALL_PROJECTS.forEach((p) => {
    map.set(p.clientId, p.clientName);
  });
  return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
})();

const CATEGORY_COUNTS = (() => {
  const counts: Record<string, number> = { all: ALL_PROJECTS.length };
  ALL_PROJECTS.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
})();

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [selectedClient, setSelectedClient] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectBlock | null>(null);

  // Filtrado compuesto sincrónico (Categoría + Cliente)
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const matchClient = selectedClient === "all" || p.clientId === selectedClient;
      return matchCat && matchClient;
    });
  }, [activeCategory, selectedClient]);

  return (
    <section id="portafolio" className="py-24 max-w-6xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <div className="text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-2 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Portafolio de Trabajos Seleccionados &bull; Formatos Especializados & Piezas Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#FFFFFF] tracking-tight">
            Portafolio de Trabajos
          </h2>
          <p className="text-[#F2F4F3]/80 text-sm sm:text-base mt-2 max-w-xl">
            Cada tarjeta representa un trabajo especializado e independiente. Filtra por tipo de entregable o por marca sin mezclar formatos.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#F2F4F3]/70 bg-[#2B2F33]/40 px-3.5 py-2 rounded-xl border border-[#2B2F33] backdrop-blur-md w-fit">
          <Sparkles className="w-3.5 h-3.5 text-[#3DDC97]" />
          <span>
            {filteredProjects.length} {filteredProjects.length === 1 ? "trabajo" : "trabajos"} encontrados
          </span>
        </div>
      </div>

      {/* Barra de Filtros por Disciplina (SSR sincrónico, cero CLS) */}
      <div className="space-y-3 mb-10">
        <div
          role="tablist"
          aria-label="Filtrar proyectos por categoría"
          className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none"
        >
          {CATEGORY_TABS.map((tab) => {
            const isSelected = activeCategory === tab.key;
            const count = CATEGORY_COUNTS[tab.key] || 0;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(tab.key)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isSelected
                    ? "bg-[#3DDC97] text-[#0D0D0D] font-bold shadow-md shadow-[#3DDC97]/20 scale-100"
                    : "bg-[#2B2F33]/35 text-[#F2F4F3]/70 border border-[#2B2F33] hover:text-[#FFFFFF] hover:bg-[#2B2F33]/60"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? "bg-[#0D0D0D] text-[#3DDC97]" : "bg-[#2B2F33] text-[#F2F4F3]/70"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sub-filtro discreto por Marca / Cliente (SSR sincrónico) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-mono uppercase text-[#F2F4F3]/50 mr-1 shrink-0">
            Filtrar por marca:
          </span>
          <button
            type="button"
            onClick={() => setSelectedClient("all")}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors shrink-0 ${
              selectedClient === "all"
                ? "bg-[#2B2F33] text-[#3DDC97] border border-[#3DDC97]/40 font-bold"
                : "text-[#F2F4F3]/60 hover:text-[#FFFFFF]"
            }`}
          >
            Todas
          </button>
          {STATIC_CLIENTS.map((client) => {
            const isSelected = selectedClient === client.id;
            return (
              <button
                key={client.id}
                type="button"
                onClick={() => setSelectedClient(client.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors shrink-0 ${
                  isSelected
                    ? "bg-[#2B2F33] text-[#3DDC97] border border-[#3DDC97]/40 font-bold"
                    : "text-[#F2F4F3]/60 hover:text-[#FFFFFF]"
                }`}
              >
                {client.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grilla de Tarjetas Especializadas con Ambient Glow */}
      {filteredProjects.length === 0 ? (
        <div className="py-16 text-center rounded-2xl bg-[#181B1E] border border-[#2B2F33] p-8">
          <p className="text-sm text-[#F2F4F3]/70">
            No se encontraron proyectos para la combinación de categoría y marca seleccionada.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSelectedClient("all");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-[#3DDC97] text-[#0D0D0D] text-xs font-bold shadow-md shadow-[#3DDC97]/20"
          >
            Restablecer Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project, idx) => {
            const isVideo = project.category === "videos" || project.coverMediaType === "video" || project.coverAsset.endsWith(".mp4");
            const assetCount = project.assets?.length || 0;
            const priorityLoading = idx < 3 && !isVideo; // LCP optimization (no videos en Image preload)
            const projectAccent = project.colorPalette?.[0]?.hex || "#3DDC97";

            return (
              <article
                key={project.id}
                style={{ "--project-accent": projectAccent } as React.CSSProperties}
                onClick={() => setSelectedProject(project)}
                className="group project-card-glow flex flex-col rounded-2xl bg-[#181B1E] border border-[#2B2F33] cursor-pointer overflow-hidden shadow-sm hover:scale-[1.01] hover:border-[#3DDC97]/40 transition-all duration-300"
              >
                {/* Visual Cover Asset */}
                <div
                  onMouseEnter={(e) => {
                    const vid = e.currentTarget.querySelector("video");
                    if (vid) vid.play().catch(() => {});
                  }}
                  onMouseLeave={(e) => {
                    const vid = e.currentTarget.querySelector("video");
                    if (vid) {
                      vid.pause();
                      vid.currentTime = 0.1;
                    }
                  }}
                  className={`relative w-full overflow-hidden bg-[#0D0D0D] flex items-center justify-center ${
                    isVideo && project.assets[0]?.aspectRatio === "9:16"
                      ? "aspect-[9/14]"
                      : isVideo || project.category === "miniaturas"
                      ? "aspect-video"
                      : "aspect-[1/1.25]"
                  }`}
                >
                  {isVideo ? (
                    <video
                      src={`${project.coverAsset}#t=0.1`}
                      muted
                      playsInline
                      preload="metadata"
                      loop
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
                    />
                  ) : (
                    <Image
                      src={project.coverAsset}
                      alt={project.title}
                      fill
                      priority={priorityLoading}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
                    />
                  )}

                  {/* Badges superiores */}
                  <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] font-mono tracking-wide px-2.5 py-1 rounded-lg bg-[#0D0D0D]/85 border border-[#2B2F33] text-[#3DDC97] font-bold backdrop-blur-md">
                      {project.categoryLabel}
                    </span>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-[#0D0D0D]/85 border border-[#2B2F33] text-[#F2F4F3]/80 backdrop-blur-md">
                      {assetCount} {isVideo ? (assetCount === 1 ? "video" : "videos") : (assetCount === 1 ? "pieza" : "piezas")}
                    </span>
                  </div>

                  {/* Play Overlay para Videos */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                      <div className="w-12 h-12 rounded-full bg-[#3DDC97] text-[#0D0D0D] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Hover Action Indicator */}
                  <div className="absolute inset-0 bg-[#0D0D0D]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3DDC97] text-[#0D0D0D] font-bold text-xs shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                      {isVideo ? <Film className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{isVideo ? "Reproducir Video" : "Ver Trabajo Completo"}</span>
                    </span>
                  </div>
                </div>

                {/* Information Card Body */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-[#181B1E] text-left border-t border-[#2B2F33]">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs uppercase tracking-wider text-[#3DDC97] font-mono font-bold">
                        {project.clientName}
                      </span>
                      <span className="text-[11px] font-mono text-[#F2F4F3]/50">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-base font-display font-bold text-[#FFFFFF] leading-snug group-hover:text-[#3DDC97] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#F2F4F3]/70 mt-2 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Footer con Paleta y CTA */}
                  <div className="mt-4 pt-3 border-t border-[#2B2F33]/60 flex items-center justify-between">
                    {project.colorPalette && (
                      <div className="flex items-center gap-1.5" title="Paleta de color">
                        {project.colorPalette.slice(0, 4).map((c, i) => (
                          <span
                            key={i}
                            className="w-3 h-3 rounded-full border border-white/10"
                            style={{ backgroundColor: c.hex }}
                            title={`${c.name} (${c.hex})`}
                          />
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-1 text-xs font-semibold text-[#F2F4F3]/60 group-hover:text-[#3DDC97] ml-auto transition-colors">
                      <span>Explorar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Modal Especializado */}
      <SpecializedModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
