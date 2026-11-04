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
  title: "Allan Torres | Identidad Visual & Menús Gastronómicos",
  description:
    "Diseño gráfico estratégico para gastronomía, barberías y marcas comerciales. Bogotá y proyectos remotos internacionales.",
  keywords: [
    "Allan Torres",
    "Diseño Gráfico",
    "Identidad Visual",
    "Menús Gastronómicos",
    "Branding Comercial",
    "Flyers Publicitarios",
    "Diseñador Gráfico Bogotá",
    "Cartas Restaurantes",
    "Portafolio de Diseño",
  ],
  authors: [{ name: "Allan Torres" }],
  creator: "Allan Torres",
  metadataBase: new URL("https://portafolio-mu-nine-11.vercel.app"),
  openGraph: {
    title: "Allan Torres | Identidad Visual & Menús Gastronómicos",
    description:
      "Diseño gráfico estratégico para gastronomía, barberías y marcas comerciales. Bogotá y proyectos remotos internacionales.",
    url: "https://portafolio-mu-nine-11.vercel.app",
    siteName: "Allan Torres Portfolio",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Allan Torres - Identidad Visual y Menús Gastronómicos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allan Torres | Identidad Visual & Menús Gastronómicos",
    description:
      "Diseño gráfico estratégico para gastronomía, barberías y marcas comerciales. Bogotá y proyectos remotos internacionales.",
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
