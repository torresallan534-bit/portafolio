import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allan Torres — Diseñador Gráfico & Identidad Visual",
  description:
    "Portafolio profesional de Allan Torres. Especialista en diseño de marcas, menús gastronómicos, flyers promocionales y piezas visuales de alto impacto comercial.",
  keywords: [
    "Allan Torres",
    "Diseño Gráfico",
    "Identidad Visual",
    "Branding Comercial",
    "Diseño de Menús",
    "Menús de Arepas",
    "Flyers Barbería",
    "Campañas de Donación",
    "Portafolio de Diseño",
  ],
  authors: [{ name: "Allan Torres" }],
  creator: "Allan Torres",
  openGraph: {
    title: "Allan Torres — Diseñador Gráfico & Identidad Visual",
    description:
      "Portafolio moderno y visual: creación de marcas, cartas gastronómicas y material publicitario para impulsar negocios.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-background text-zinc-100 antialiased selection:bg-amber-500/20 selection:text-amber-300">
        <div className="relative min-h-screen overflow-hidden">
          {/* Subtle background ambient glow */}
          <div className="pointer-events-none fixed -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-[140px]" />
          <div className="pointer-events-none fixed top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-orange-600/5 blur-[140px]" />
          <div className="pointer-events-none fixed -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[140px]" />
          
          {children}
        </div>
      </body>
    </html>
  );
}
