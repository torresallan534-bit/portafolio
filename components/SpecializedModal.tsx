"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  X,
  Check,
  Copy,
  MessageCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2,
  Film,
  BookOpen,
  Layers,
} from "lucide-react";
import { ProjectBlock, ProjectAsset } from "@/types/projects";
import { DESIGNER_INFO } from "@/data/portfolio-data";

interface SpecializedModalProps {
  project: ProjectBlock | null;
  onClose: () => void;
}

export default function SpecializedModal({ project, onClose }: SpecializedModalProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setActiveAssetIndex(0);
    setIsFullscreen(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
      if (e.key === "ArrowLeft") {
        setActiveAssetIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
      if (e.key === "ArrowRight") {
        if (project?.assets) {
          setActiveAssetIndex((prev) => (prev < project.assets.length - 1 ? prev + 1 : prev));
        }
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, isFullscreen, onClose]);

  if (!project) return null;

  const assets = project.assets || [];
  const currentAsset: ProjectAsset | undefined = assets[activeAssetIndex] || assets[0];
  const isVideoMode = project.category === "videos";
  const isEbookMode = project.category === "ebooks" || project.category === "carruseles";

  const copyToClipboard = (hex: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 2000);
    }
  };

  const projectWhatsappUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hola Allan, vi tu trabajo de ${project.categoryLabel} para ${project.clientName} y quiero cotizar algo similar.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-specialized-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#09090B]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#111114] border border-white/[0.08] rounded-2xl shadow-2xl z-10 text-zinc-50 flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex justify-between items-center px-6 py-4 bg-[#111114]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
              &bull; {project.clientName}
            </span>
            <span className="text-xs font-mono text-zinc-300 bg-zinc-800/80 px-2 py-0.5 rounded-lg border border-white/[0.08]">
              {assets.length}{" "}
              {isVideoMode
                ? assets.length === 1
                  ? "video"
                  : "videos"
                : isEbookMode
                ? assets.length === 1
                  ? "página"
                  : "páginas"
                : assets.length === 1
                ? "pieza"
                : "piezas"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!isVideoMode && (
              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 transition-colors"
                title="Alternar Pantalla Completa"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 transition-colors"
              aria-label="Cerrar modal (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-7">
          {/* Main Viewer - Formato Especializado */}
          <div className="space-y-4">
            {/* Box Principal de Visualización */}
            <div
              className={`relative w-full rounded-2xl bg-[#09090B] border border-white/[0.08] flex items-center justify-center p-2 transition-all ${
                isFullscreen
                  ? "fixed inset-4 z-50 bg-[#09090B] max-h-none h-auto"
                  : isVideoMode && currentAsset?.aspectRatio === "9:16"
                  ? "h-[540px] sm:h-[620px]"
                  : "h-[400px] sm:h-[560px]"
              }`}
            >
              {currentAsset?.mediaType === "video" || currentAsset?.assetPath?.endsWith(".mp4") ? (
                <video
                  key={currentAsset?.assetPath}
                  src={currentAsset?.assetPath}
                  controls
                  autoPlay
                  playsInline
                  className={`max-h-full rounded-lg object-contain ${
                    currentAsset?.aspectRatio === "9:16" ? "max-w-[340px]" : "max-w-full"
                  }`}
                />
              ) : (
                <Image
                  src={currentAsset?.assetPath || project.coverAsset}
                  alt={currentAsset?.title || project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain"
                  priority
                />
              )}

              {/* Botones de navegación Anterior/Siguiente si hay varias piezas */}
              {assets.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveAssetIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                    disabled={activeAssetIndex === 0}
                    className="absolute left-3 p-2.5 rounded-full bg-[#09090B]/80 border border-white/[0.08] text-zinc-200 disabled:opacity-20 hover:bg-zinc-800 transition-all backdrop-blur-md"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveAssetIndex((prev) => (prev < assets.length - 1 ? prev + 1 : prev))
                    }
                    disabled={activeAssetIndex === assets.length - 1}
                    className="absolute right-3 p-2.5 rounded-full bg-[#09090B]/80 border border-white/[0.08] text-zinc-200 disabled:opacity-20 hover:bg-zinc-800 transition-all backdrop-blur-md"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Indicador de página para Ebooks / Carruseles */}
              {isEbookMode && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#09090B]/85 border border-white/[0.08] text-xs font-mono text-zinc-300 backdrop-blur-md flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    Página {activeAssetIndex + 1} de {assets.length}
                  </span>
                </div>
              )}
            </div>

            {/* Carrusel inferior de miniaturas para navegación rápida */}
            {assets.length > 1 && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  <span>
                    {isVideoMode
                      ? "Selecciona el video para reproducir:"
                      : isEbookMode
                      ? "Páginas del documento (clic para saltar):"
                      : "Todas las piezas de este trabajo:"}
                  </span>
                  <span className="text-zinc-500">
                    {activeAssetIndex + 1} / {assets.length}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 overflow-x-auto py-1 scrollbar-none">
                  {assets.map((a, idx) => {
                    const isSelected = activeAssetIndex === idx;
                    return (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => setActiveAssetIndex(idx)}
                        className={`relative rounded-xl overflow-hidden border shrink-0 transition-all ${
                          isVideoMode
                            ? "w-28 h-16 bg-zinc-900"
                            : isEbookMode
                            ? "w-14 h-20 bg-[#09090B]"
                            : "w-16 h-22 bg-[#09090B]"
                        } ${
                          isSelected
                            ? "border-amber-500 ring-2 ring-amber-500/30 scale-95"
                            : "border-white/[0.08] opacity-60 hover:opacity-100"
                        }`}
                      >
                        {a.mediaType === "video" ? (
                          <div className="w-full h-full flex flex-col items-center justify-center text-amber-400 p-1">
                            <Film className="w-4 h-4" />
                            <span className="text-[10px] font-mono text-zinc-300 mt-1">
                              Video {idx + 1}
                            </span>
                          </div>
                        ) : (
                          <Image src={a.assetPath} alt={a.title} fill className="object-cover" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Información del Proyecto */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span className="text-amber-400 font-bold">{project.clientName}</span>
              <span>&bull;</span>
              <span>Año {project.year}</span>
              <span>&bull;</span>
              <span>{assets.length} Entregables específicos</span>
            </div>

            <h2
              id="modal-specialized-title"
              className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-zinc-50"
            >
              {project.title}
            </h2>

            <p className="text-base text-zinc-400 leading-relaxed">{project.summary}</p>
          </div>

          {/* Ficha Técnica: Reto y Solución */}
          {(project.challenge || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-white/[0.08]">
              {project.challenge && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    El Reto
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    La Solución Gráfica / Audiovisual
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Paleta de Color */}
          {project.colorPalette && project.colorPalette.length > 0 && (
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/[0.08] space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-wider font-mono text-zinc-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Paleta Cromática (Clic para copiar HEX)
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.colorPalette.map((color, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => copyToClipboard(color.hex)}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-[#09090B] border border-white/[0.08] hover:border-amber-500/60 transition-colors text-left group"
                  >
                    <span
                      className="w-6 h-6 rounded-md border border-white/10 shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-medium text-zinc-200 truncate group-hover:text-amber-400">
                        {color.name}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                        {copiedHex === color.hex ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copiado</span>
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

          {/* Footer CTA contextual a WhatsApp */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900/80 to-zinc-900/80 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-zinc-100">
                ¿Quieres un trabajo similar de {project.categoryLabel}?
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Escríbeme con los detalles de tu negocio y te preparo una propuesta personalizada con entrega ágil.
              </p>
            </div>
            <a
              href={projectWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs hover:bg-amber-400 transition-all duration-200 shadow-md shadow-amber-500/20 shrink-0 active:scale-95"
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
