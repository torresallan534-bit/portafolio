import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { PANDA_HAUS_INFO } from "@/data/portfolio-data";

interface SocialLinkItem {
  name: string;
  url: string;
}

interface FooterProps {
  socialLinks?: SocialLinkItem[];
}

export default function Footer({ socialLinks }: FooterProps = {}) {
  const finalSocials =
    socialLinks && socialLinks.length > 0
      ? socialLinks
      : [
          { name: "Instagram", url: PANDA_HAUS_INFO.socials.instagram },
          { name: "TikTok", url: PANDA_HAUS_INFO.socials.tiktok },
        ];

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

          {/* Redes Sociales Corporativas */}
          <div className="flex items-center gap-4">
            {finalSocials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.name} Panda Haus`}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141618] border border-[#2B2F33] text-[#F2F4F3]/80 hover:text-[#3DDC97] hover:border-[#3DDC97]/40 transition-colors"
              >
                <span className="font-medium">{s.name}</span>
              </a>
            ))}

            <a
              href="#inicio"
              aria-label="Volver arriba"
              className="p-2 rounded-lg bg-[#141618] border border-[#2B2F33] text-[#F2F4F3]/60 hover:text-[#FFFFFF] hover:border-[#3DDC97]/40 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Legal & Admin Access */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#F2F4F3]/40">
          <div>
            &copy; 2026 Panda Haus. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-xs text-[#F2F4F3]/30 hover:text-[#3DDC97] transition-colors"
              title="Panel Administrativo Panda Haus"
            >
              Acceso Privado CMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
