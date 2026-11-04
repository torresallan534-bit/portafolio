"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, Copy, MessageCircle, Send, MapPin, Calendar, Sparkles } from "lucide-react";
import { Project } from "@/types";
import { DESIGNER_INFO } from "@/data/portfolio-data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
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
  const allImages = project.gallery && project.gallery.length > 0 
    ? [project.image, ...project.gallery.filter(img => img !== project.image)]
    : [project.image];

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const projectWhatsappUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hola Allan! Estuve viendo el proyecto "${project.title}" de tu portafolio y me gustaría cotizar algo similar para mi negocio.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl z-10 text-zinc-100 flex flex-col">
        {/* Sticky close button */}
        <div className="sticky top-0 z-20 flex justify-between items-center px-6 py-4 bg-zinc-950/90 backdrop-blur border-b border-zinc-800/80">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-mono text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
              &bull; Proyecto ID: {project.id}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Visual Showcase */}
          <div className="space-y-3">
            <div className="relative w-full overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/80 shadow-inner group">
              <div className="relative w-full h-[340px] sm:h-[480px]">
                <Image
                  src={currentDisplayImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-contain sm:object-cover transition-transform duration-500"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-300">
                <span className="bg-black/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
                  Cliente: {project.client}
                </span>
                {project.clientLocation && (
                  <span className="flex items-center gap-1 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {project.clientLocation}
                  </span>
                )}
              </div>
            </div>

            {/* Gallery Thumbnails Strip */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto py-2 px-1">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      currentDisplayImage === img
                        ? "border-amber-400 ring-2 ring-amber-400/30 scale-95"
                        : "border-zinc-800 opacity-60 hover:opacity-100"
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
            )}
          </div>

          {/* Title & Metadata */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                Año: {project.year}
              </span>
              <span>&bull;</span>
              <span>Sector: Gastronomía & Comercial</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {project.title}
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
              {project.fullDescription}
            </p>
          </div>

          {/* Color Palette Section (Highlighted for Branding/Gastronomy!) */}
          {project.palette && project.palette.length > 0 && (
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs uppercase tracking-wider font-mono text-zinc-300 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Paleta Cromática del Proyecto (Click para copiar HEX)
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.palette.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => copyToClipboard(color.hex)}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-950/60 border border-zinc-800 hover:border-zinc-700 transition-all text-left group"
                  >
                    <span
                      className="w-7 h-7 rounded-md shadow-sm border border-white/20 shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-medium text-zinc-200 truncate group-hover:text-amber-400">
                        {color.name}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500 uppercase flex items-center gap-1">
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

          {/* Deliverables / Entregables */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-mono text-zinc-400">
              Piezas Gráficas y Entregables Incluidos
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-zinc-300">
              {project.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Direct CTA within modal */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900 to-zinc-900 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-white">
                ¿Necesitas un resultado similar para tu marca?
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Escríbeme con los detalles de tu negocio y te preparo una propuesta personalizada.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={projectWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 text-zinc-950 font-semibold text-xs hover:bg-amber-300 transition-colors shadow-md shadow-amber-500/10"
              >
                <MessageCircle className="w-4 h-4 text-emerald-800" />
                Cotizar por WhatsApp
              </a>
              <a
                href={DESIGNER_INFO.telegramUrl || `https://t.me/${DESIGNER_INFO.telegramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-sky-400 transition-colors"
                title="Consultar en Telegram (+57 324 800 0501)"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
