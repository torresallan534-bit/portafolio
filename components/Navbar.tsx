"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X, Zap } from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

interface NavbarProps {
  whatsappNumber?: string;
  ctaText?: string;
}

export default function Navbar({ whatsappNumber, ctaText }: NavbarProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Precios", href: "#precios" },
  ];

  const finalWhatsappNumber = whatsappNumber || PANDA_HAUS_INFO.whatsappNumber;
  const whatsappUrl = `https://wa.me/${finalWhatsappNumber}?text=${encodeURIComponent(
    "Hola Panda Haus, quiero un diagnóstico gratuito de mi web y ecosistema digital para mi negocio."
  )}`;
  const finalCtaText = ctaText || "Diagnóstico Gratis ⚡";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#0D0D0D]/92 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Panda Haus */}
          <a
            href="#inicio"
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Panda Haus Inicio"
          >
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 flex items-center justify-center rounded-xl bg-[#2B2F33]/40 border border-[#2B2F33] p-1.5 overflow-hidden group-hover:border-[#3DDC97]/50 transition-colors">
              <Image
                src="/brand/panda-haus-logo.svg"
                alt="Panda Haus Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-[#FFFFFF] text-lg tracking-tight leading-none">
                Panda<span className="text-[#3DDC97]">Haus</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#F2F4F3]/60 leading-tight mt-0.5">
                Ecosistemas Digitales &bull; 2026
              </span>
            </div>
          </a>

          {/* Badge central estilizado: Entregas en 24-72h ⚡ */}
          <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B1E] border border-white/[0.08] text-xs font-mono text-[#F2F4F3]/90 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC97] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3DDC97]"></span>
            </span>
            <span className="font-semibold text-white">Entregas en 24-72h</span>
            <span className="text-[#3DDC97]">⚡</span>
          </div>

          {/* Desktop Nav - 3 Enlaces Exactos */}
          <nav className="hidden md:flex items-center gap-1 bg-[#1C1F23]/80 p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-xs lg:text-sm font-display font-medium text-[#F2F4F3]/80 hover:text-[#FFFFFF] hover:bg-[#2B2F33]/80 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Derecha: Pedir por WhatsApp */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl font-display font-bold text-xs bg-[#3DDC97] text-[#0D0D0D] hover:bg-[#34C788] shadow-lg shadow-[#3DDC97]/20 transition-all duration-200 active:scale-95 hover:scale-[1.02]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{finalCtaText}</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
            className="md:hidden p-2 text-[#F2F4F3]/80 hover:text-[#FFFFFF] rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-2xl bg-[#141619] border border-white/[0.08] shadow-2xl backdrop-blur-xl animate-fade-in-up">
            {/* Mobile Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E2227] border border-white/[0.08] text-xs font-mono text-[#3DDC97] mb-4">
              <span>Entregas en 24-72h ⚡</span>
            </div>

            <nav className="flex flex-col gap-2.5 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-display font-medium text-[#F2F4F3]/90 hover:text-[#3DDC97] hover:bg-white/[0.04] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#3DDC97] text-[#0D0D0D] font-display font-bold text-xs shadow-md shadow-[#3DDC97]/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{finalCtaText}</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
