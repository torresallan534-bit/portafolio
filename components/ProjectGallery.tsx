"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Eye } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio-data";
import { Project, ProjectCategory } from "@/types";
import ProjectModal from "./ProjectModal";

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: "all", label: "Todos" },
    { key: "multimedia", label: "Contenido & Multimedia" },
    { key: "menus", label: "Menús Gastronómicos" },
    { key: "flyers", label: "Flyers & Publicidad" },
    { key: "branding", label: "Branding Comercial" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-20 max-w-6xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="text-xs font-mono text-[#E8A023] uppercase tracking-wider mb-2">
            Galería Seleccionada &bull; Trabajos Reales
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F5F5F7] tracking-tight">
            Piezas & Contenido con Resultados Claros
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base mt-2 max-w-xl">
            Explora proyectos de creación de contenido en USA, miniaturas para YouTube, cartas gastronómicas y piezas comerciales para marcas.
          </p>
        </div>

        {/* Filter Tabs Bar */}
        <div
          role="tablist"
          aria-label="Filtrar proyectos por categoría"
          className="flex flex-wrap items-center gap-1.5 bg-[#141416] p-1.5 rounded-xl border border-[#2A2A2E]"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-[#E8A023] text-[#0A0A0B] font-semibold shadow-sm scale-100"
                    : "text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-[#1C1C1F]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group flex flex-col rounded-xl bg-[#141416] border border-[#2A2A2E] hover:border-[#E8A023]/50 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#E8A023]/5"
          >
            {/* Visual Container */}
            <div
              className={`relative w-full overflow-hidden bg-[#0A0A0B] flex items-center justify-center ${
                project.category === "multimedia" ? "aspect-video" : "aspect-[1/1.25]"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={idx < 3}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-102"
              />

              {/* Floating Category Pill */}
              <div className="absolute top-3 left-3 z-20">
                <span className="text-[11px] font-mono tracking-wide px-2.5 py-1 rounded-md bg-[#0A0A0B]/85 border border-[#2A2A2E] text-[#F5F5F7]">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Hover Indicator */}
              <div className="absolute inset-0 bg-[#0A0A0B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E8A023] text-[#0A0A0B] font-semibold text-xs shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <Eye className="w-3.5 h-3.5" />
                  Ver Proyecto
                </span>
              </div>
            </div>

            {/* Information Card */}
            <div className="p-5 flex flex-col flex-1 justify-between bg-[#141416] text-left border-t border-[#2A2A2E]">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs uppercase tracking-wider text-[#E8A023] font-mono font-medium">
                    {project.client}
                  </span>
                  <span className="text-[11px] font-mono text-[#71717A]">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-[15px] font-display font-bold text-[#F5F5F7] leading-snug group-hover:text-[#E8A023] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#A1A1AA] mt-2 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Footer row */}
              <div className="mt-4 pt-3 border-t border-[#2A2A2E]/60 flex items-center justify-between">
                {project.palette && (
                  <div className="flex items-center gap-1.5" title="Paleta de color del proyecto">
                    {project.palette.slice(0, 4).map((c, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-[#2A2A2E]"
                        style={{ backgroundColor: c.hex }}
                        title={`${c.name} (${c.hex})`}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-1 text-xs font-medium text-[#71717A] group-hover:text-[#E8A023] ml-auto transition-colors">
                  <span>Detalles</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Accessible Lightbox / Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
