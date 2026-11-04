"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, Copy, MessageCircle, Send, Calendar } from "lucide-react";
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
  const allImages =
    project.gallery && project.gallery.length > 0
      ? [project.image, ...project.gallery.filter((img) => img !== project.image)]
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
        className="fixed inset-0 bg-[#0A0A0B]/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-surface border border-border rounded-xl shadow-2xl z-10 text-[#F5F5F7] flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex justify-between items-center px-6 py-4 bg-surface/95 backdrop-blur border-b border-border">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#71717A] font-mono hidden sm:inline">
              &bull; {project.client}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#A1A1AA] hover:text-[#F5F5F7] rounded-lg bg-surface-elevated hover:bg-border transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Visual Showcase */}
          <div className="space-y-4">
            <div className="relative w-full h-[420px] sm:h-[620px] overflow-hidden rounded-lg bg-[#0A0A0B] border border-border flex items-center justify-center p-2">
              <Image
                src={currentDisplayImage}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            {/* Gallery Thumbnails Strip */}
            {allImages.length > 1 && (
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#71717A]">
                  Páginas del proyecto (haz clic para ampliar):
                </span>
                <div className="flex items-center gap-3 overflow-x-auto py-2">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`relative w-16 h-24 rounded-lg overflow-hidden border shrink-0 transition-all ${
                        currentDisplayImage === img
                          ? "border-accent ring-2 ring-accent/30"
                          : "border-border opacity-60 hover:opacity-100"
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

          {/* Title & Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#71717A] font-mono">
              <Calendar className="w-3.5 h-3.5" />
              <span>Año {project.year}</span>
              <span>&bull;</span>
              <span>{project.client}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-[#F5F5F7]">
              {project.title}
            </h2>

            <p className="text-base text-[#A1A1AA] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Palette */}
          {project.palette && project.palette.length > 0 && (
            <div className="p-4 rounded-lg bg-surface-elevated border border-border space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-mono text-[#A1A1AA]">
                Paleta Cromática (Clic para copiar HEX)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.palette.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => copyToClipboard(color.hex)}
                    className="flex items-center gap-2.5 p-2 rounded-md bg-[#0A0A0B] border border-border hover:border-accent/40 transition-colors text-left group"
                  >
                    <span
                      className="w-6 h-6 rounded border border-border shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-medium text-[#F5F5F7] truncate">
                        {color.name}
                      </span>
                      <span className="text-[11px] font-mono text-[#71717A] flex items-center gap-1">
                        {copiedHex === color.hex ? (
                          <>
                            <Check className="w-3 h-3 text-success" />
                            <span className="text-success">Copiado</span>
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

          {/* Deliverables */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-mono text-[#71717A]">
              Entregables del Proyecto
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#A1A1AA]">
              {project.deliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-surface-elevated/60 border border-border/80"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded bg-surface-elevated text-[#71717A] border border-border"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Modal CTA */}
          <div className="p-5 rounded-xl bg-surface-elevated border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-[#F5F5F7]">
                ¿Quieres un resultado similar para tu marca?
              </h4>
              <p className="text-xs text-[#A1A1AA] mt-0.5">
                Conversemos sobre tu negocio y te armo una propuesta a medida.
              </p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={projectWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-[#0A0A0B] font-semibold text-xs hover:bg-accent-hover transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Cotizar por WhatsApp
              </a>
              <a
                href={DESIGNER_INFO.telegramUrl || `https://t.me/${DESIGNER_INFO.telegramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2.5 rounded-lg bg-surface hover:bg-border text-brand-telegram transition-colors"
                title="Consultar por Telegram"
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
