"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Eye,
  Play,
  Film,
  Sparkles,
  Smartphone,
  Globe,
} from "lucide-react";
import { ProjectBlock, ProjectCategory } from "@/types/projects";
import DeviceMockup from "./DeviceMockup";
import SpecializedModal from "./SpecializedModal";
import projectsData from "@/data/projects.json";

const ALL_PROJECTS = projectsData as ProjectBlock[];

// 4 Categorías Oficiales de Filtro
const CATEGORY_TABS: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "flyers-menus", label: "Flyers & Menús" },
  { key: "landing-pages", label: "Landing Pages" },
  { key: "branding", label: "Branding" },
];

const CATEGORY_COUNTS = (() => {
  const counts: Record<string, number> = { all: ALL_PROJECTS.length };
  ALL_PROJECTS.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
})();

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectBlock | null>(null);

  // Filtrado compuesto sincrónico (cero useEffect vacío, cero CLS)
  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter((p) => {
      return activeCategory === "all" || p.category === activeCategory;
    });
  }, [activeCategory]);

  return (
    <section id="portafolio" className="py-24 max-w-6xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2F33]/40 border border-[#2B2F33] text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Casos Reales con Impacto Comercial Comprobado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#FFFFFF] tracking-tight">
            Portafolio Comercial
          </h2>
          <p className="text-[#F2F4F3]/70 text-sm sm:text-base mt-2 max-w-xl font-sans">
            Explora nuestros trabajos visuales, menús interactivos, identidades de marca y páginas web diseñadas para captar clientes en minutos.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#F2F4F3]/80 bg-[#2B2F33]/40 px-4 py-2.5 rounded-xl border border-[#2B2F33] backdrop-blur-md w-fit">
          <span className="w-2 h-2 rounded-full bg-[#3DDC97]" />
          <span>
            {filteredProjects.length} {filteredProjects.length === 1 ? "proyecto comercial" : "proyectos comerciales"}
          </span>
        </div>
      </div>

      {/* Barra de Filtros SSR Oficial: Todos, Flyers & Menús, Landing Pages, Branding */}
      <div className="mb-12">
        <div
          role="tablist"
          aria-label="Filtrar portafolio comercial por categoría"
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
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-display font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isSelected
                    ? "bg-[#3DDC97] text-[#0D0D0D] shadow-lg shadow-[#3DDC97]/20 scale-100"
                    : "bg-[#2B2F33]/40 text-[#F2F4F3]/70 border border-[#2B2F33] hover:text-[#FFFFFF] hover:bg-[#2B2F33]/70 hover:border-[#3DDC97]/40"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? "bg-[#0D0D0D] text-[#3DDC97]" : "bg-[#0D0D0D]/60 text-[#F2F4F3]/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grilla de Tarjetas con Mockups CSS de Dispositivos en Vivo */}
      {filteredProjects.length === 0 ? (
        <div className="py-16 text-center rounded-2xl bg-[#141618] border border-[#2B2F33] p-8">
          <p className="text-sm text-[#F2F4F3]/70">
            No se encontraron proyectos para la categoría seleccionada.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className="mt-4 px-4 py-2 rounded-xl bg-[#3DDC97] text-[#0D0D0D] text-xs font-display font-bold shadow-md shadow-[#3DDC97]/20"
          >
            Ver Todos los Trabajos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, idx) => {
            const isVideo = project.coverMediaType === "video" || project.coverAsset.endsWith(".mp4");
            const assetCount = project.assets?.length || 0;
            const priorityLoading = idx < 3 && !isVideo;
            const deviceType = project.deviceType || (project.category === "landing-pages" ? "browser" : "smartphone");

            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col rounded-2xl bg-[#141618] border border-[#2B2F33] hover:border-[#3DDC97]/60 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#3DDC97]/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Previsualización Envuelta en Mockup de Dispositivo */}
                <div className="p-4 bg-[#0D0D0D] border-b border-[#2B2F33] flex items-center justify-center overflow-hidden">
                  <DeviceMockup
                    type={deviceType}
                    urlTitle={deviceType === "browser" ? `${project.clientId}.com` : undefined}
                    className="w-full"
                  >
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
                        deviceType === "browser"
                          ? "aspect-[16/10]"
                          : "aspect-[9/15]"
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

                      {/* Badges superiores flotantes */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between pointer-events-none">
                        <span className="text-[10px] font-mono tracking-wide px-2 py-0.5 rounded-md bg-[#0D0D0D]/90 border border-white/[0.08] text-[#3DDC97] font-bold backdrop-blur-md">
                          {project.categoryLabel}
                        </span>

                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#0D0D0D]/90 border border-white/[0.08] text-[#F2F4F3]/80 backdrop-blur-md">
                          {assetCount} {assetCount === 1 ? "pieza" : "piezas"}
                        </span>
                      </div>

                      {/* Play Overlay para Videos */}
                      {isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                          <div className="w-11 h-11 rounded-full bg-[#3DDC97] text-[#0D0D0D] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Hover Action Indicator */}
                      <div className="absolute inset-0 bg-[#0D0D0D]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#3DDC97] text-[#0D0D0D] font-display font-bold text-xs shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                          {isVideo ? <Film className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          <span>{isVideo ? "Reproducir Video" : "Ver Trabajo"}</span>
                        </span>
                      </div>
                    </div>
                  </DeviceMockup>
                </div>

                {/* Information Card Body */}
                <div className="p-5 flex flex-col flex-1 justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs uppercase tracking-wider text-[#3DDC97] font-mono font-bold">
                        {project.clientName}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-[#F2F4F3]/50">
                        {deviceType === "browser" ? (
                          <>
                            <Globe className="w-3 h-3 text-[#3DDC97]" />
                            <span>Web</span>
                          </>
                        ) : (
                          <>
                            <Smartphone className="w-3 h-3 text-[#3DDC97]" />
                            <span>Móvil</span>
                          </>
                        )}
                      </div>
                    </div>

                    <h3 className="text-base font-display font-bold text-[#FFFFFF] leading-snug group-hover:text-[#3DDC97] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#F2F4F3]/70 mt-2 line-clamp-2 leading-relaxed font-sans">
                      {project.summary}
                    </p>

                    {/* Beneficio comercial destacado */}
                    {project.businessBenefit && (
                      <div className="mt-3 p-2.5 rounded-lg bg-[#2B2F33]/40 border border-[#2B2F33] text-[11px] text-[#3DDC97] font-sans flex items-start gap-1.5">
                        <span className="font-bold shrink-0">Impacto:</span>
                        <span className="text-[#F2F4F3]/80">{project.businessBenefit}</span>
                      </div>
                    )}
                  </div>

                  {/* Footer con Paleta de Colores y CTA */}
                  <div className="mt-4 pt-3 border-t border-[#2B2F33] flex items-center justify-between">
                    {project.colorPalette && (
                      <div className="flex items-center gap-1.5" title="Paleta de color corporativa">
                        {project.colorPalette.slice(0, 4).map((c, i) => (
                          <span
                            key={i}
                            className="w-3 h-3 rounded-full border border-white/20"
                            style={{ backgroundColor: c.hex }}
                            title={`${c.name} (${c.hex})`}
                          />
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-1 text-xs font-display font-bold text-[#F2F4F3]/70 group-hover:text-[#3DDC97] ml-auto transition-colors">
                      <span>Ver Detalles</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Modal Especializado Panda Haus */}
      <SpecializedModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
