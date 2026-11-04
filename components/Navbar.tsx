"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolio-data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Reseñas", href: "#resenas" },
    { label: "Contacto", href: "#contacto" },
  ];

  const whatsappUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    DESIGNER_INFO.whatsappMessage
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "py-3 bg-[#0A0A0B]/90 backdrop-blur-sm border-b border-border"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="group flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center font-display font-bold text-[#0A0A0B] text-sm tracking-wide">
              AT
            </div>
            <span className="font-display font-semibold text-[#F5F5F7] text-[15px] tracking-tight hidden sm:inline">
              Allan Torres
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm text-[#A1A1AA] hover:text-[#F5F5F7] rounded-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-success font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Disponible
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-accent text-[#0A0A0B] hover:bg-accent-hover transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Hablemos
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
            className="md:hidden p-2 text-[#A1A1AA] hover:text-[#F5F5F7] rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-5 py-5 mt-2 mx-4 rounded-xl animate-scale-in">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 text-[15px] text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-surface-elevated rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-border">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-accent text-[#0A0A0B] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar por WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
