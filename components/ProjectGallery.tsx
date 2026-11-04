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
    { key: "all", label: "Todos los Trabajos" },
    { key: "menus", label: "Menús Gastronómicos" },
    { key: "flyers", label: "Flyers & Publicidad" },
    { key: "branding", label: "Branding & Marcas" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-20 max-w-6xl mx-auto px-5 sm:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
            Galería Seleccionada &bull; Trabajos Reales
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F5F5F7] tracking-tight">
            Diseños que Capturan Clientes
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base mt-2 max-w-xl">
            Explora cartas gastronómicas, identidades y piezas publicitarias para negocios reales. Haz clic en cualquiera para explorar el proyecto completo en alta resolución.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-surface p-1.5 rounded-xl border border-border">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeCategory === cat.key
                  ? "bg-accent text-[#0A0A0B] font-semibold"
                  : "text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-surface-elevated"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout - Clean Visual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group flex flex-col rounded-xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Visual Container */}
            <div className="relative w-full aspect-[1/1.25] overflow-hidden bg-[#0A0A0B] flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={idx < 3}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-102"
              />

              {/* Floating Category Pill */}
              <div className="absolute top-3 left-3 z-20">
                <span className="text-[11px] font-mono tracking-wide px-2.5 py-1 rounded-md bg-[#0A0A0B]/85 border border-border text-[#F5F5F7]">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Hover Indicator */}
              <div className="absolute inset-0 bg-[#0A0A0B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-20">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-accent text-[#0A0A0B] font-semibold text-xs shadow-lg">
                  <Eye className="w-3.5 h-3.5" />
                  Ver Proyecto
                </span>
              </div>
            </div>

            {/* Information Card */}
            <div className="p-5 flex flex-col flex-1 justify-between bg-surface text-left border-t border-border">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs uppercase tracking-wider text-accent font-mono font-medium">
                    {project.client}
                  </span>
                  <span className="text-[11px] font-mono text-[#71717A]">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-[15px] font-display font-bold text-[#F5F5F7] leading-snug group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-[#A1A1AA] mt-2 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Footer row */}
              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                {project.palette && (
                  <div className="flex items-center gap-1.5">
                    {project.palette.slice(0, 4).map((c, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-border"
                        style={{ backgroundColor: c.hex }}
                        title={`${c.name} (${c.hex})`}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-1 text-xs font-medium text-[#71717A] group-hover:text-accent ml-auto transition-colors">
                  <span>Detalles</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox / Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
