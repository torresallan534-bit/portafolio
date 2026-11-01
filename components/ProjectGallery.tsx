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
    { key: "branding", label: "Branding & Color" },
    { key: "campanas", label: "Campañas de Donación" },
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
            Galería Seleccionada
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Diseños que Capturan Clientes
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Una muestra de identidades visuales, cartas para areperas y restobares, afiches para barberías y campañas con propósito.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-zinc-900/60 p-1.5 rounded-2xl border border-zinc-800">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.key
                  ? "bg-amber-400 text-zinc-950 font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="masonry-item group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/90 hover:border-amber-500/40 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-500/5"
          >
            {/* Visual Container */}
            <div className={`relative w-full ${project.aspectRatioClass} overflow-hidden bg-zinc-950`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Top badges */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                <span className="text-[11px] font-mono tracking-wide px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-zinc-200">
                  {project.categoryLabel}
                </span>

                <div className="h-8 w-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </div>
              </div>

              {/* Color swatches peek on card */}
              {project.palette && (
                <div className="absolute top-3.5 right-14 z-10 hidden group-hover:flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                  {project.palette.slice(0, 3).map((c, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full border border-white/20"
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              )}

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end text-left z-10">
                <div className="text-[11px] uppercase tracking-wider text-amber-400/90 font-mono mb-1">
                  {project.client}
                </div>

                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-amber-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-zinc-300 mt-2 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {project.summary}
                </p>

                {/* Tags on bottom */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-zinc-800/80">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-[10px] font-mono text-zinc-500 ml-auto flex items-center gap-1 self-center">
                    <Eye className="w-3 h-3" /> Ver proyecto
                  </span>
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
