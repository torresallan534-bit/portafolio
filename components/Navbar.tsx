"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

export default function Navbar() {
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
    { label: "Contacto", href: "#contacto" },
  ];

  const whatsappUrl = PANDA_HAUS_INFO.whatsappDirectUrl;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#2B2F33]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
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
                Estudio Visual &amp; Web
              </span>
            </div>
          </a>

          {/* Desktop Nav - 4 Enlaces Exactos */}
          <nav className="hidden md:flex items-center gap-1 bg-[#2B2F33]/40 p-1.5 rounded-full border border-[#2B2F33] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 text-xs lg:text-sm font-display font-medium text-[#F2F4F3]/80 hover:text-[#FFFFFF] hover:bg-[#2B2F33]/70 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Derecha: WhatsApp */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-[#3DDC97] font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3DDC97] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3DDC97]"></span>
              </span>
              <span>Cupos Abiertos</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-display font-semibold text-xs bg-[#3DDC97] text-[#0D0D0D] hover:bg-[#34C788] shadow-lg shadow-[#3DDC97]/20 transition-all duration-200 active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Escríbenos por WhatsApp</span>
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
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#141618]/95 border border-[#2B2F33] px-5 py-5 mt-2 mx-4 rounded-2xl backdrop-blur-md animate-scale-in">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-display font-medium text-[#F2F4F3]/80 hover:text-[#FFFFFF] rounded-lg hover:bg-[#2B2F33]/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#2B2F33] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#3DDC97] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#3DDC97] animate-pulse" />
                <span>Cupos Abiertos</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-display font-semibold bg-[#3DDC97] text-[#0D0D0D]"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Escríbenos por WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
