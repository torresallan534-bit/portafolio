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
  title: "Allan Torres | Productor de Contenido Visual & Multimedia",
  description:
    "Productor de contenido visual y multimedia. Especializado en diseño de piezas comerciales (menús, flyers, identidad para negocios) y edición de video enfocada en resultados claros y entrega ágil.",
  keywords: [
    "Allan Torres",
    "Productor de Contenido Visual",
    "Multimedia",
    "Edición de Video",
    "Miniaturas YouTube",
    "Diseño de Piezas Comerciales",
    "Menús Gastronómicos",
    "Flyers Publicitarios",
    "Identidad para Negocios",
    "Axis Pro USA",
    "Allan Zoo",
  ],
  authors: [{ name: "Allan Torres" }],
  creator: "Allan Torres",
  metadataBase: new URL("https://portafolio-mu-nine-11.vercel.app"),
  openGraph: {
    title: "Allan Torres | Productor de Contenido Visual & Multimedia",
    description:
      "Productor de contenido visual y multimedia. Especializado en diseño de piezas comerciales (menús, flyers, identidad para negocios) y edición de video enfocada en resultados claros y entrega ágil.",
    url: "https://portafolio-mu-nine-11.vercel.app",
    siteName: "Allan Torres Portfolio",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Allan Torres - Productor de Contenido Visual y Multimedia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allan Torres | Productor de Contenido Visual & Multimedia",
    description:
      "Productor de contenido visual y multimedia. Especializado en diseño de piezas comerciales (menús, flyers, identidad para negocios) y edición de video enfocada en resultados claros y entrega ágil.",
    images: ["/og-image.png"],
    creator: "@torresallan",
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
