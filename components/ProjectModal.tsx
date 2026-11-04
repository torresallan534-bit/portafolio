"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, Copy, MessageCircle, ArrowRight, Calendar, Sparkles, CheckCircle2, Play, Film, Image as ImageIcon } from "lucide-react";
import { Project } from "@/types";
import { DESIGNER_INFO } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeMediaMode, setActiveMediaMode] = useState<"image" | "video">("image");
  const [activeImage, setActiveImage] = useState<string>("");
  const [activeVideo, setActiveVideo] = useState<string>("");

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
      if (project.videos && project.videos.length > 0) {
        setActiveVideo(project.videos[0].url);
      } else {
        setActiveVideo("");
        setActiveMediaMode("image");
      }
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentDisplayImage = activeImage || project.image;
  const allImages =
    project.gallery && project.gallery.length > 0
      ? [project.image, ...project.gallery.filter((img) => img !== project.image)]
      : [project.image];

  const copyToClipboard = (hex: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 2000);
    }
  };

  const projectWhatsappUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hola Allan! Estuve viendo el proyecto "${project.title}" (${project.client}) en tu portafolio y me gustaría cotizar un diseño / producción similar para mi negocio.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A0A0B]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#141416] border border-[#2A2A2E] rounded-2xl shadow-2xl z-10 text-[#F5F5F7] flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex justify-between items-center px-6 py-4 bg-[#141416]/95 backdrop-blur border-b border-[#2A2A2E]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#E8A023] bg-[#E8A023]/10 px-2.5 py-1 rounded">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#71717A] font-mono hidden sm:inline">
              &bull; {project.client}
            </span>
            {project.videos && project.videos.length > 0 && (
              <span className="text-xs font-mono uppercase tracking-wider text-[#34D399] bg-[#34D399]/10 px-2.5 py-1 rounded flex items-center gap-1">
                <Film className="w-3 h-3" />
                <span>Incluye Video</span>
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#A1A1AA] hover:text-[#F5F5F7] rounded-lg bg-[#1C1C1F] hover:bg-[#2A2A2E] transition-colors"
            aria-label="Cerrar modal (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Visual Showcase (Tabs if videos available) */}
          <div className="space-y-4">
            {project.videos && project.videos.length > 0 && (
              <div className="flex items-center gap-2 p-1 bg-[#0A0A0B] rounded-lg border border-[#2A2A2E] w-fit">
                <button
                  type="button"
                  onClick={() => setActiveMediaMode("image")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    activeMediaMode === "image"
                      ? "bg-[#1C1C1F] text-[#F5F5F7] border border-[#2A2A2E]"
                      : "text-[#71717A] hover:text-[#F5F5F7]"
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Galería de Imágenes</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMediaMode("video")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    activeMediaMode === "video"
                      ? "bg-[#E8A023] text-[#0A0A0B] font-semibold"
                      : "text-[#71717A] hover:text-[#F5F5F7]"
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Reproductor de Video ({project.videos.length})</span>
                </button>
              </div>
            )}

            {/* Display Box */}
            <div className="relative w-full h-[400px] sm:h-[580px] overflow-hidden rounded-xl bg-[#0A0A0B] border border-[#2A2A2E] flex items-center justify-center p-2">
              {activeMediaMode === "video" && activeVideo ? (
                <video
                  key={activeVideo}
                  src={activeVideo}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
              ) : (
                <Image
                  src={currentDisplayImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain"
                  priority
                />
              )}
            </div>

            {/* Video Selector Strip */}
            {activeMediaMode === "video" && project.videos && project.videos.length > 1 && (
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
                  Selecciona el video para reproducir:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.videos.map((vid, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveVideo(vid.url)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                        activeVideo === vid.url
                          ? "bg-[#E8A023] text-[#0A0A0B] border-[#E8A023] font-bold"
                          : "bg-[#1C1C1F] text-[#A1A1AA] border-[#2A2A2E] hover:text-[#F5F5F7]"
                      }`}
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>{vid.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Image Gallery Strip */}
            {activeMediaMode === "image" && allImages.length > 1 && (
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
                  Páginas y variaciones del proyecto ({allImages.length} vistas):
                </span>
                <div className="flex items-center gap-3 overflow-x-auto py-1">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      aria-label={`Ver página ${idx + 1}`}
                      className={`relative w-16 h-24 rounded-lg overflow-hidden border shrink-0 transition-all ${
                        currentDisplayImage === img
                          ? "border-[#E8A023] ring-2 ring-[#E8A023]/30 scale-95"
                          : "border-[#2A2A2E] opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Miniatura ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Title & Metadata */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#71717A] font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>Año {project.year}</span>
              <span>&bull;</span>
              <span>Cliente: {project.client}</span>
              {project.clientLocation && (
                <>
                  <span>&bull;</span>
                  <span>{project.clientLocation}</span>
                </>
              )}
            </div>

            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-[#F5F5F7]">
              {project.title}
            </h2>

            <p className="text-base text-[#A1A1AA] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technical Case Study Card: Challenge & Solution */}
          {(project.challenge || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-xl bg-[#1C1C1F] border border-[#2A2A2E]">
              {project.challenge && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F0B847]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8A023]" />
                    El Reto
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#34D399]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                    La Solución Gráfica & Audiovisual
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Interactive Color Palette */}
          {project.palette && project.palette.length > 0 && (
            <div className="p-4 rounded-xl bg-[#1C1C1F] border border-[#2A2A2E] space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-wider font-mono text-[#A1A1AA] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8A023]" />
                  Paleta Cromática (Clic para copiar HEX)
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.palette.map((color, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => copyToClipboard(color.hex)}
                    className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0A0A0B] border border-[#2A2A2E] hover:border-[#E8A023]/60 transition-colors text-left group"
                  >
                    <span
                      className="w-6 h-6 rounded-md border border-[#2A2A2E] shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-medium text-[#F5F5F7] truncate group-hover:text-[#E8A023]">
                        {color.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#71717A] flex items-center gap-1">
                        {copiedHex === color.hex ? (
                          <>
                            <Check className="w-3 h-3 text-[#34D399]" />
                            <span className="text-[#34D399]">Copiado</span>
                          </>
                        ) : (
                          <>
                            {color.hex}
                            <Copy className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100" />
                          </>
                        )}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables Checklist */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-mono text-[#71717A]">
                Entregables & Piezas del Proyecto
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#A1A1AA]">
                {project.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#1C1C1F]/60 border border-[#2A2A2E]/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E8A023] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2A2A2E]">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded bg-[#1C1C1F] text-[#71717A] border border-[#2A2A2E]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* High Conversion CTA */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-[#E8A023]/10 via-[#1C1C1F] to-[#1C1C1F] border border-[#E8A023]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-[#F5F5F7]">
                ¿Quieres una producción similar para tu marca?
              </h4>
              <p className="text-xs text-[#A1A1AA] mt-0.5">
                Conversemos los detalles de tu negocio y te armo una propuesta personalizada con entrega ágil.
              </p>
            </div>
            <a
              href={projectWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E8A023] text-[#0A0A0B] font-semibold text-xs hover:bg-[#F0B847] transition-all duration-200 shadow-md shrink-0 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quiero un resultado similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
