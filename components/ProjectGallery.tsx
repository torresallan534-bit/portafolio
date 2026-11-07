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

interface ProjectGalleryProps {
  initialProjects?: ProjectBlock[];
}

export default function ProjectGallery({ initialProjects }: ProjectGalleryProps = {}) {
  const ALL_PROJECTS = useMemo(() => {
    return initialProjects && initialProjects.length > 0
      ? initialProjects
      : (projectsData as ProjectBlock[]);
  }, [initialProjects]);

  const STATIC_CLIENTS = useMemo(() => {
    const map = new Map<string, string>();
    ALL_PROJECTS.forEach((p) => {
      const clientId = p.clientId || p.clientName.toLowerCase().replace(/\s+/g, '-');
      map.set(clientId, p.clientName);
    });
    return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
  }, [ALL_PROJECTS]);

  const CATEGORY_COUNTS = useMemo(() => {
    const counts: Record<string, number> = { all: ALL_PROJECTS.length };
    ALL_PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, [ALL_PROJECTS]);

  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [selectedClient, setSelectedClient] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectBlock | null>(null);

  // Filtrado compuesto sincrónico (Categoría + Cliente)
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const projectClientId = p.clientId || p.clientName.toLowerCase().replace(/\s+/g, '-');
      const matchClient = selectedClient === "all" || projectClientId === selectedClient;
      return matchCat && matchClient;
    });
  }, [ALL_PROJECTS, activeCategory, selectedClient]);

  return (
    <section id="portafolio" className="py-24 sm:py-32 max-w-7xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-2.5 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Portafolio de Trabajos &bull; Formatos Especializados & Piezas Reales</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
            Portafolio de Trabajos <span className="font-serif italic font-normal text-[#3DDC97]">Seleccionados</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl font-sans font-light leading-relaxed">
            Cada tarjeta representa un trabajo comercial independiente y real. Filtra por tipo de entregable o por marca sin mezclar formatos.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-white/70 bg-[#141618] px-4 py-2.5 rounded-2xl border border-white/[0.08] backdrop-blur-md w-fit shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#3DDC97]" />
          <span>
            {filteredProjects.length} {filteredProjects.length === 1 ? "trabajo disponible" : "trabajos disponibles"}
          </span>
        </div>
      </div>

      {/* Barra de Filtros por Disciplina (SSR sincrónico, cero CLS) */}
      <div className="space-y-3.5 mb-12">
        <div
          role="tablist"
          aria-label="Filtrar proyectos por categoría"
          className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-medium whitespace-nowrap transition-all duration-300 shrink-0 ${
                  isSelected
                    ? "bg-[#3DDC97] text-[#0D0D0D] font-bold shadow-lg shadow-[#3DDC97]/20 scale-100"
                    : "bg-[#141618]/70 text-white/70 border border-white/[0.06] hover:text-white hover:bg-[#1E2227] hover:border-white/[0.12]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                    isSelected ? "bg-[#0D0D0D] text-[#3DDC97]" : "bg-[#202428] text-white/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sub-filtro discreto por Marca / Cliente (SSR sincrónico) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 mr-1 shrink-0">
            Filtrar por marca:
          </span>
          <button
            type="button"
            onClick={() => setSelectedClient("all")}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-mono transition-all duration-200 shrink-0 ${
              selectedClient === "all"
                ? "bg-[#202428] text-[#3DDC97] border border-[#3DDC97]/40 font-bold shadow-sm"
                : "text-white/50 hover:text-white hover:bg-white/[0.03]"
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
                className={`px-3 py-1.5 rounded-xl text-[11px] font-mono transition-all duration-200 shrink-0 ${
                  isSelected
                    ? "bg-[#202428] text-[#3DDC97] border border-[#3DDC97]/40 font-bold shadow-sm"
                    : "text-white/50 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                {client.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grilla de Tarjetas Especializadas con Micro-interacciones Avanzadas */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center rounded-3xl bg-[#141618] border border-white/[0.06] p-8">
          <p className="text-sm text-white/70">
            No se encontraron proyectos para la combinación de categoría y marca seleccionada.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory("all");
              setSelectedClient("all");
            }}
            className="mt-4 px-5 py-2.5 rounded-xl bg-[#3DDC97] text-[#0D0D0D] text-xs font-bold shadow-md shadow-[#3DDC97]/20"
          >
            Restablecer Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const isVideo = project.category === "videos" || project.coverMediaType === "video" || project.coverAsset.endsWith(".mp4");
            const assetCount = project.assets?.length || 0;
            const priorityLoading = idx < 3 && !isVideo;
            const projectAccent = project.colorPalette?.[0]?.hex || "#3DDC97";

            return (
              <article
                key={project.id}
                style={{ "--project-accent": projectAccent } as React.CSSProperties}
                onClick={() => setSelectedProject(project)}
                className="group project-card-glow flex flex-col rounded-3xl bg-[#121417] border border-white/[0.07] hover:border-[#3DDC97]/40 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/90 hover:-translate-y-1.5 transition-all duration-500 ease-out"
              >
                {/* Visual Cover Asset con Smooth Zoom-In en Hover */}
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
                  className={`relative w-full overflow-hidden bg-[#0A0B0D] flex items-center justify-center ${
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
                      className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={project.coverAsset}
                      alt={project.title}
                      fill
                      priority={priorityLoading}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-all duration-500 ease-out group-hover:scale-105"
                    />
                  )}

                  {/* Badges superiores con efecto cristal */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] font-mono tracking-wide px-3 py-1 rounded-xl bg-[#0D0D0D]/80 border border-white/[0.1] text-[#3DDC97] font-bold backdrop-blur-md shadow-sm">
                      {project.categoryLabel}
                    </span>

                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-[#0D0D0D]/80 border border-white/[0.1] text-white/80 backdrop-blur-md shadow-sm">
                      {assetCount} {isVideo ? (assetCount === 1 ? "video" : "videos") : (assetCount === 1 ? "pieza" : "piezas")}
                    </span>
                  </div>

                  {/* Play Overlay para Videos */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                      <div className="w-14 h-14 rounded-full bg-[#3DDC97] text-[#0D0D0D] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Hover Action Indicator con Revelación Suave */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6 z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#0D0D0D] font-display font-bold text-xs shadow-2xl backdrop-blur-md transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      {isVideo ? <Film className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{isVideo ? "Reproducir Video Comercial" : "Ver Trabajo Completo"}</span>
                    </span>
                  </div>
                </div>

                {/* Information Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-[#121417] text-left border-t border-white/[0.06]">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-wider text-[#3DDC97] font-mono font-bold">
                        {project.clientName}
                      </span>
                      <span className="text-[11px] font-mono text-white/40">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-display font-bold text-white leading-snug group-hover:text-[#3DDC97] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-xs text-white/60 mt-2 line-clamp-2 leading-relaxed font-sans font-light">
                      {project.summary}
                    </p>
                  </div>

                  {/* Footer con Paleta Cromática y Botón de Apertura */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    {project.colorPalette && (
                      <div className="flex items-center gap-1.5" title="Paleta de color del proyecto">
                        {project.colorPalette.slice(0, 4).map((c, i) => (
                          <span
                            key={i}
                            className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                            style={{ backgroundColor: c.hex }}
                            title={`${c.name} (${c.hex})`}
                          />
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 text-xs font-display font-bold text-white/70 group-hover:text-[#3DDC97] ml-auto transition-colors duration-300">
                      <span>Ver Detalles</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
