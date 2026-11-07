import type { Metadata } from "next";
import { Inter, Space_Grotesk, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Panda Haus | Soluciones Visuales & Digitales para Restaurantes y Negocios Locales",
  description:
    "Flyers de alto impacto entregados en 24 horas, menús interactivos con código QR y sucursales web para recibir pedidos directos a tu WhatsApp sin pagar comisiones.",
  keywords: [
    "Panda Haus",
    "Menús Digitales QR",
    "Sucursal Web WhatsApp",
    "Flyers para Restaurantes",
    "Restaurantes Bogotá",
    "Catálogo de Pedidos WhatsApp",
    "Branding Gastronómico",
    "Habladores QR Restaurante",
    "Colombia",
  ],
  authors: [{ name: "Panda Haus" }],
  creator: "Panda Haus",
  metadataBase: new URL("https://pandahaus.co"),
  openGraph: {
    title: "Panda Haus | Soluciones Visuales & Digitales para Restaurantes",
    description:
      "Hacemos que tu restaurante se vea profesional y venda más en digital. Flyers en 24h, menús QR y pedidos a WhatsApp sin comisiones.",
    url: "https://pandahaus.co",
    siteName: "Panda Haus",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Panda Haus - Soluciones Visuales & Digitales para Restaurantes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panda Haus | Soluciones Visuales & Digitales para Restaurantes",
    description:
      "Flyers en 24h, menús interactivos QR y sucursales web para recibir pedidos directos a tu WhatsApp sin comisiones.",
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
        {/* Botón flotante de WhatsApp persistente con tooltip en esquina inferior derecha */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
