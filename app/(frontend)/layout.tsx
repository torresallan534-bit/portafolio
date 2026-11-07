import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Panda Haus | Diseño Visual, Menús Digitales y Landing Pages",
  description:
    "Estudio de diseño visual y desarrollo de páginas web comerciales para restaurantes, marcas y negocios locales. Ayudamos a captar clientes con flyers de alto impacto, menús digitales y landing pages ultra-rápidas.",
  keywords: [
    "Panda Haus",
    "Estudio de Diseño Visual",
    "Desarrollo Web Comercial",
    "Menús Digitales QR",
    "Flyers para Restaurantes",
    "Landing Pages de Conversión",
    "Identidad de Marca",
    "Branding para Negocios",
    "Diseño Gastronómico",
    "Bogotá",
    "Colombia",
  ],
  authors: [{ name: "Panda Haus" }],
  creator: "Panda Haus",
  metadataBase: new URL("https://pandahaus.co"),
  openGraph: {
    title: "Panda Haus | Diseño Visual, Menús Digitales y Landing Pages",
    description:
      "Ayudamos a restaurantes, marcas y negocios locales a captar clientes con flyers de alto impacto, menús digitales y landing pages ultra-rápidas.",
    url: "https://pandahaus.co",
    siteName: "Panda Haus",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Panda Haus - Estudio de Diseño Visual y Web Comercial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panda Haus | Diseño Visual, Menús Digitales y Landing Pages",
    description:
      "Ayudamos a restaurantes, marcas y negocios locales a captar clientes con flyers de alto impacto, menús digitales y landing pages ultra-rápidas.",
    images: ["/og-image.png"],
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
      className={`dark ${inter.variable} ${spaceGrotesk.variable} ${playfair.variable}`}
    >
      <body className="min-h-screen bg-[#0D0D0D] text-[#F2F4F3] antialiased font-sans selection:bg-[#3DDC97] selection:text-[#0D0D0D]">
        {children}
      </body>
    </html>
  );
}
