"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, Copy, MessageCircle, ArrowRight, Calendar, Sparkles, CheckCircle2, Play, Film, Image as ImageIcon } from "lucide-react";
import { ClientCaseStudy, ProjectDeliverable } from "@/types/projects";
import { DESIGNER_INFO } from "@/data/portfolio-data";

interface CaseStudyModalProps {
  project: ClientCaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeMediaMode, setActiveMediaMode] = useState<"image" | "video">("image");
  const [selectedDeliverable, setSelectedDeliverable] = useState<ProjectDeliverable | null>(null);

  useEffect(() => {
    if (project && project.deliverables && project.deliverables.length > 0) {
      const firstImage = project.deliverables.find((d) => d.mediaType === "image");
      const firstVideo = project.deliverables.find((d) => d.mediaType === "video");

      if (firstImage) {
        setSelectedDeliverable(firstImage);
        setActiveMediaMode("image");
      } else if (firstVideo) {
        setSelectedDeliverable(firstVideo);
        setActiveMediaMode("video");
      } else {
        setSelectedDeliverable(project.deliverables[0]);
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

  const deliverables = project.deliverables || [];
  const imageDeliverables = deliverables.filter((d) => d.mediaType === "image");
  const videoDeliverables = deliverables.filter((d) => d.mediaType === "video");

  const copyToClipboard = (hex: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 2000);
    }
  };

  const projectWhatsappUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hola Allan, me interesa cotizar un trabajo similar al de ${project.clientName} para mi negocio.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-case-title"
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
            <span className="text-xs font-display font-bold text-[#E8A023] bg-[#E8A023]/10 px-2.5 py-1 rounded">
              {project.clientName}
            </span>
            <span className="text-xs text-[#71717A] font-mono hidden sm:inline">
              &bull; Caso de Estudio
            </span>
            {videoDeliverables.length > 0 && (
              <span className="text-xs font-mono uppercase tracking-wider text-[#34D399] bg-[#34D399]/10 px-2.5 py-1 rounded flex items-center gap-1">
                <Film className="w-3 h-3" />
                <span>{videoDeliverables.length} Videos</span>
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
          {/* Main Visual Display */}
          <div className="space-y-4">
            {videoDeliverables.length > 0 && (
              <div className="flex items-center gap-2 p-1 bg-[#0A0A0B] rounded-lg border border-[#2A2A2E] w-fit">
                <button
                  type="button"
                  onClick={() => {
                    setActiveMediaMode("image");
                    if (imageDeliverables.length > 0) setSelectedDeliverable(imageDeliverables[0]);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    activeMediaMode === "image"
                      ? "bg-[#1C1C1F] text-[#F5F5F7] border border-[#2A2A2E]"
                      : "text-[#71717A] hover:text-[#F5F5F7]"
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Imágenes ({imageDeliverables.length})</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveMediaMode("video");
                    if (videoDeliverables.length > 0) setSelectedDeliverable(videoDeliverables[0]);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    activeMediaMode === "video"
                      ? "bg-[#E8A023] text-[#0A0A0B] font-semibold"
                      : "text-[#71717A] hover:text-[#F5F5F7]"
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Videos ({videoDeliverables.length})</span>
                </button>
              </div>
            )}

            {/* Display Box */}
            <div className="relative w-full h-[400px] sm:h-[580px] overflow-hidden rounded-xl bg-[#0A0A0B] border border-[#2A2A2E] flex items-center justify-center p-2">
              {selectedDeliverable?.mediaType === "video" ? (
                <video
                  key={selectedDeliverable.assetPath}
                  src={selectedDeliverable.assetPath}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-full max-w-full rounded-lg object-contain"
                />
              ) : (
                <Image
                  src={selectedDeliverable?.assetPath || project.coverAsset}
                  alt={selectedDeliverable?.title || project.clientName}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain"
                  priority
                />
              )}
            </div>

            {/* Deliverables Thumbnails Strip */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
                Entregables del cliente ({deliverables.length} activos disponibles):
              </span>
              <div className="flex items-center gap-3 overflow-x-auto py-1">
                {deliverables.map((d) => {
                  const isSelected = selectedDeliverable?.id === d.id;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => {
                        setSelectedDeliverable(d);
                        setActiveMediaMode(d.mediaType);
                      }}
                      className={`relative w-16 h-24 rounded-lg overflow-hidden border shrink-0 transition-all ${
                        isSelected
                          ? "border-[#E8A023] ring-2 ring-[#E8A023]/30 scale-95"
                          : "border-[#2A2A2E] opacity-60 hover:opacity-100"
                      }`}
                    >
                      {d.mediaType === "video" ? (
                        <div className="w-full h-full bg-[#1C1C1F] flex flex-col items-center justify-center text-[#E8A023] p-1">
                          <Play className="w-5 h-5 fill-current" />
                          <span className="text-[9px] font-mono text-[#F5F5F7] mt-1">MP4</span>
                        </div>
                      ) : (
                        <Image
                          src={d.assetPath}
                          alt={d.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#71717A] font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>Año {project.year}</span>
              <span>&bull;</span>
              <span>{project.clientName}</span>
              <span>&bull;</span>
              <span>{deliverables.length} Entregables</span>
            </div>

            <h2 id="modal-case-title" className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-[#F5F5F7]">
              {project.clientName}
            </h2>

            <p className="text-base text-[#A1A1AA] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Technical Case Study: Challenge & Solution */}
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

          {/* Color Palette */}
          {project.colorPalette && project.colorPalette.length > 0 && (
            <div className="p-4 rounded-xl bg-[#1C1C1F] border border-[#2A2A2E] space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-wider font-mono text-[#A1A1AA] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8A023]" />
                  Paleta Cromática (Clic para copiar HEX)
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.colorPalette.map((color, idx) => (
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

          {/* Badges of Disciplines */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2A2A2E]">
            {project.categories.map((cat, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded bg-[#1C1C1F] text-[#E8A023] border border-[#2A2A2E] uppercase font-mono"
              >
                #{cat}
              </span>
            ))}
          </div>

          {/* Conversion CTA to WhatsApp */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-[#E8A023]/10 via-[#1C1C1F] to-[#1C1C1F] border border-[#E8A023]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-[#F5F5F7]">
                ¿Quieres un resultado similar al de {project.clientName}?
              </h4>
              <p className="text-xs text-[#A1A1AA] mt-0.5">
                Conversemos los detalles de tu negocio y te armo una propuesta con entrega ágil.
              </p>
            </div>
            <a
              href={projectWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E8A023] text-[#0A0A0B] font-semibold text-xs hover:bg-[#F0B847] transition-all duration-200 shadow-md shrink-0 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotizar proyecto similar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
