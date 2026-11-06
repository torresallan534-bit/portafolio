import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-[#2B2F33] bg-[#0D0D0D] py-12 px-5 sm:px-8 text-xs text-[#F2F4F3]/60 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#2B2F33]">
          {/* Logo y Tagline */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 rounded-xl bg-[#2B2F33]/40 border border-[#2B2F33] p-1.5 overflow-hidden">
              <Image
                src="/brand/panda-haus-logo.svg"
                alt="Panda Haus Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-display font-extrabold text-[#FFFFFF] text-base tracking-tight block">
                Panda<span className="text-[#3DDC97]">Haus</span>
              </span>
              <span className="text-[11px] text-[#F2F4F3]/50 font-mono">
                Estudio de Diseño Visual &amp; Web Comercial
              </span>
            </div>
          </div>

          {/* Redes Sociales Corporativas: Instagram y TikTok */}
          <div className="flex items-center gap-4">
            <a
              href={PANDA_HAUS_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Panda Haus"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141618] border border-[#2B2F33] text-[#F2F4F3]/80 hover:text-[#3DDC97] hover:border-[#3DDC97]/40 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-medium">Instagram</span>
            </a>

            <a
              href={PANDA_HAUS_INFO.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Panda Haus"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141618] border border-[#2B2F33] text-[#F2F4F3]/80 hover:text-[#3DDC97] hover:border-[#3DDC97]/40 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.02 3.25-1.51 3.32-3.32.06-3.95.03-7.9.04-11.86v-6.61z"/>
              </svg>
              <span className="font-medium">TikTok</span>
            </a>

            <a
              href="#inicio"
              aria-label="Volver arriba"
              className="p-2 rounded-lg bg-[#141618] border border-[#2B2F33] text-[#F2F4F3]/60 hover:text-[#FFFFFF] hover:border-[#3DDC97]/40 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Acceso Privado Discreto */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {/* Texto Legal Exacto */}
          <div className="text-center sm:text-left text-[#F2F4F3]/60">
            &copy; 2026 Panda Haus. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#F2F4F3]/40 font-mono">
              {PANDA_HAUS_INFO.location}
            </span>

            {/* Acceso privado discreto a /admin */}
            <Link
              href="/admin"
              className="text-xs text-[#F2F4F3]/30 hover:text-[#3DDC97] transition-colors font-mono"
            >
              Panel Privado
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
