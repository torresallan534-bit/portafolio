"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Eye, Sparkles } from "lucide-react";
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
    <section id="proyectos" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Galería Seleccionada &bull; Trabajos Reales
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Diseños que Capturan Clientes
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Explora las identidades visuales, cartas gastronómicas y flyers publicitarios para negocios en Colombia. Haz clic en cualquiera para ver todas las páginas en alta resolución.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-zinc-900/80 p-1.5 rounded-2xl border border-zinc-800">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.key
                  ? "bg-amber-400 text-zinc-950 font-bold shadow-md"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout - Clean Visual Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group flex flex-col rounded-2xl bg-zinc-950 border border-zinc-800/90 hover:border-amber-500/50 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 overflow-hidden"
          >
            {/* Visual Container - 100% Unobstructed Art */}
            <div className="relative w-full aspect-[1/1.3] overflow-hidden bg-zinc-900 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority={idx < 3}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Floating Category Pill */}
              <div className="absolute top-3 left-3 z-20">
                <span className="text-[11px] font-mono tracking-wide px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-zinc-200 shadow-md">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Hover Indicator */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 text-zinc-950 font-bold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <Eye className="w-3.5 h-3.5" />
                  Ver Proyecto Completo
                </span>
              </div>
            </div>

            {/* Information Card - Below Image */}
            <div className="p-5 flex flex-col flex-1 justify-between bg-zinc-950 text-left border-t border-zinc-850">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-mono font-semibold">
                    {project.client}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Color Swatches and Action Footer */}
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                {/* Palette Preview */}
                {project.palette && (
                  <div className="flex items-center gap-1.5">
                    {project.palette.slice(0, 4).map((c, i) => (
                      <span
                        key={i}
                        className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: c.hex }}
                        title={`${c.name} (${c.hex})`}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-amber-400 ml-auto transition-colors">
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
