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
  Globe,
} from "lucide-react";
import { ProjectBlock, ProjectAsset } from "@/types/projects";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

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
  const isVideoMode = currentAsset?.mediaType === "video" || currentAsset?.assetPath?.endsWith(".mp4");

  const copyToClipboard = (hex: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 2000);
    }
  };

  const projectWhatsappUrl = `https://wa.me/${PANDA_HAUS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hola Panda Haus, vi su trabajo de ${project.categoryLabel} para ${project.clientName} y me interesa cotizar un proyecto similar para mi negocio.`
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
        className="fixed inset-0 bg-[#0D0D0D]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#141618] border border-[#2B2F33] rounded-2xl shadow-2xl z-10 text-[#F2F4F3] flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex justify-between items-center px-6 py-4 bg-[#141618]/95 backdrop-blur-md border-b border-[#2B2F33]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#3DDC97] bg-[#3DDC97]/10 px-2.5 py-1 rounded-lg border border-[#3DDC97]/25 font-bold">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#F2F4F3]/60 font-mono hidden sm:inline">
              &bull; {project.clientName}
            </span>
            <span className="text-xs font-mono text-[#F2F4F3]/80 bg-[#2B2F33] px-2 py-0.5 rounded-lg border border-[#2B2F33]">
              {assets.length} {assets.length === 1 ? "entregable" : "entregables"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!isVideoMode && (
              <button
                type="button"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 text-[#F2F4F3]/70 hover:text-[#FFFFFF] rounded-lg bg-[#2B2F33] hover:bg-[#3DDC97]/20 transition-colors"
                title="Alternar Pantalla Completa"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-[#F2F4F3]/70 hover:text-[#FFFFFF] rounded-lg bg-[#2B2F33] hover:bg-[#3DDC97]/20 transition-colors"
              aria-label="Cerrar modal (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-7">
          {/* Main Viewer */}
          <div className="space-y-4">
            <div
              className={`relative w-full rounded-2xl bg-[#0D0D0D] border border-[#2B2F33] flex items-center justify-center p-3 transition-all ${
                isFullscreen
                  ? "fixed inset-4 z-50 bg-[#0D0D0D] max-h-none h-auto"
                  : isVideoMode && currentAsset?.aspectRatio === "9:16"
                  ? "h-[500px] sm:h-[580px]"
                  : "h-[380px] sm:h-[520px]"
              }`}
            >
              {isVideoMode ? (
                <video
                  key={currentAsset?.assetPath}
                  src={currentAsset?.assetPath}
                  controls
                  autoPlay
                  playsInline
                  className={`max-h-full rounded-lg object-contain ${
                    currentAsset?.aspectRatio === "9:16" ? "max-w-[320px]" : "max-w-full"
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

              {/* Botones de navegación Anterior/Siguiente */}
              {assets.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveAssetIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                    disabled={activeAssetIndex === 0}
                    className="absolute left-3 p-2.5 rounded-full bg-[#0D0D0D]/85 border border-[#2B2F33] text-[#F2F4F3] disabled:opacity-20 hover:bg-[#2B2F33] hover:border-[#3DDC97] transition-all backdrop-blur-md"
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
                    className="absolute right-3 p-2.5 rounded-full bg-[#0D0D0D]/85 border border-[#2B2F33] text-[#F2F4F3] disabled:opacity-20 hover:bg-[#2B2F33] hover:border-[#3DDC97] transition-all backdrop-blur-md"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Carrusel inferior de miniaturas */}
            {assets.length > 1 && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#F2F4F3]/60">
                  <span>Piezas de este proyecto comercial:</span>
                  <span className="text-[#3DDC97] font-semibold">
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
                          a.mediaType === "video"
                            ? "w-24 h-16 bg-[#2B2F33]"
                            : "w-16 h-20 bg-[#0D0D0D]"
                        } ${
                          isSelected
                            ? "border-[#3DDC97] ring-2 ring-[#3DDC97]/40 scale-95"
                            : "border-[#2B2F33] opacity-60 hover:opacity-100"
                        }`}
                      >
                        {a.mediaType === "video" ? (
                          <div className="w-full h-full flex flex-col items-center justify-center text-[#3DDC97] p-1">
                            <Film className="w-4 h-4" />
                            <span className="text-[10px] font-mono text-[#F2F4F3] mt-1">
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
            <div className="flex items-center gap-2 text-xs text-[#F2F4F3]/60 font-mono">
              <span className="text-[#3DDC97] font-bold">{project.clientName}</span>
              <span>&bull;</span>
              <span>Entrega Verificada Panda Haus</span>
            </div>

            <h2
              id="modal-specialized-title"
              className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-[#FFFFFF]"
            >
              {project.title}
            </h2>

            <p className="text-base text-[#F2F4F3]/80 leading-relaxed font-sans">{project.summary}</p>

            {project.businessBenefit && (
              <div className="p-3.5 rounded-xl bg-[#3DDC97]/10 border border-[#3DDC97]/30 text-xs text-[#F2F4F3] font-sans flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#3DDC97] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#3DDC97]">Retorno Comercial: </strong>
                  <span>{project.businessBenefit}</span>
                </div>
              </div>
            )}
          </div>

          {/* Ficha Técnica Comercial: Reto y Solución */}
          {(project.challenge || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#2B2F33]/30 border border-[#2B2F33]">
              {project.challenge && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F2F4F3]/60 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
                    El Reto del Negocio
                  </div>
                  <p className="text-sm text-[#F2F4F3]/80 leading-relaxed font-sans">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#3DDC97] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC97]" />
                    La Solución de Panda Haus
                  </div>
                  <p className="text-sm text-[#F2F4F3]/80 leading-relaxed font-sans">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Paleta de Color */}
          {project.colorPalette && project.colorPalette.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#2B2F33]/30 border border-[#2B2F33] space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-mono text-[#F2F4F3]/60 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#3DDC97]" />
                Paleta Cromática (Clic para copiar HEX)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.colorPalette.map((color, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => copyToClipboard(color.hex)}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] hover:border-[#3DDC97] transition-colors text-left group"
                  >
                    <span
                      className="w-6 h-6 rounded-md border border-white/20 shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-medium text-[#F2F4F3] truncate group-hover:text-[#3DDC97]">
                        {color.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#F2F4F3]/50 flex items-center gap-1">
                        {copiedHex === color.hex ? (
                          <>
                            <Check className="w-3 h-3 text-[#3DDC97]" />
                            <span className="text-[#3DDC97]">Copiado</span>
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

          {/* Footer CTA directo: "Cotizar un proyecto así con Panda Haus" */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#3DDC97]/15 via-[#2B2F33]/40 to-[#2B2F33]/40 border border-[#3DDC97]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-display font-bold text-[#FFFFFF]">
                ¿Quieres un proyecto así para tu negocio?
              </h4>
              <p className="text-xs text-[#F2F4F3]/70 mt-1 font-sans">
                Escríbenos directamente por WhatsApp y coordinamos tu entrega en 24 a 48 horas.
              </p>
            </div>
            <a
              href={projectWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#3DDC97] text-[#0D0D0D] font-display font-bold text-xs hover:bg-[#34C788] transition-all duration-200 shadow-lg shadow-[#3DDC97]/20 shrink-0 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Cotizar un proyecto así con Panda Haus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
