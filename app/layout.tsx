import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Allan Torres — Diseño Gráfico & Branding Visual",
  description:
    "Portafolio profesional de Allan Torres. Especialista en diseño de marcas, menús gastronómicos, flyers promocionales y piezas visuales de alto impacto comercial.",
  keywords: [
    "Allan Torres",
    "Diseño Gráfico",
    "Identidad Visual",
    "Branding Comercial",
    "Diseño de Menús",
    "Flyers Publicitarios",
    "Portafolio de Diseño",
  ],
  authors: [{ name: "Allan Torres" }],
  creator: "Allan Torres",
  openGraph: {
    title: "Allan Torres — Diseño Gráfico & Branding Visual",
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
    <html
      lang="es"
      className={`dark ${inter.variable} ${sora.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-background text-[#F5F5F7] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
