import { Utensils, Scissors, Palette, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";
import { DESIGNER_INFO } from "@/data/portfolio-data";

export default function Services() {
  const whatsappUrl = `https://wa.me/${DESIGNER_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Hola Allan! Me interesa cotizar uno de tus servicios de diseño gráfico para mi negocio."
  )}`;

  const services = [
    {
      id: "branding",
      icon: Palette,
      title: "Branding Comercial & Identidad",
      subtitle: "Construcción de marcas con identidad única",
      description:
        "Desarrollo de logotipos, isotipos, paletas cromáticas armónicas y manuales de identidad visual preparados para destacar en medios digitales, papelería y empaques.",
      deliverables: [
        "Isotipo, logotipo y aplicaciones modulares",
        "Paleta cromática con códigos HEX, RGB y CMYK",
        "Guía tipográfica y lineamientos de marca",
        "Archivos vectoriales (AI, SVG, PDF) listos para producción",
      ],
      tag: "Fundacional",
      highlight: true,
    },
    {
      id: "menus",
      icon: Utensils,
      title: "Diseño de Menús Gastronómicos",
      subtitle: "Cartas que seducen la vista y venden más",
      description:
        "Estructuración y diagramación de cartas para restaurantes venezolanos, taquerías, cafeterías y locales de comida rápida. Jerarquía que resalta platos estrella.",
      deliverables: [
        "Formato impreso de alta durabilidad y legibilidad",
        "Menú digital móvil optimizado para código QR",
        "Iconografía y organización de categorías de platos",
        "Plantillas actualizables para cambios de precios",
      ],
      tag: "Especialidad Culinaria",
      highlight: false,
    },
    {
      id: "flyers",
      icon: Scissors,
      title: "Flyers & Piezas Promocionales",
      subtitle: "Publicidad de alto impacto para barberías y eventos",
      description:
        "Afiches, cuponeras y volantes concebidos para capturar la atención de inmediato. Diseños directos para barberías, lanzamientos, promociones 2x1 y fechas especiales.",
      deliverables: [
        "Flyers en alta resolución listos para imprenta con sangrados",
        "Formatos verticales para Stories de Instagram y TikTok",
        "Cuponeras y tarjetas de fidelización",
        "Entrega ágil para eventos y ofertas activas",
      ],
      tag: "Conversión Directa",
      highlight: false,
    },
    {
      id: "campanas",
      icon: HeartHandshake,
      title: "Campañas de Donación & Causa Social",
      subtitle: "Diseño con propósito y transparencia",
      description:
        "Piezas gráficas para iniciativas comunitarias, causas benéficas y colectas. Diseños empáticos y creíbles que transmiten confianza y movilizan a colaborar.",
      deliverables: [
        "Afiches para puntos físicos y carteleras",
        "Infografías visuales y de impacto",
        "Kits de difusión para redes sociales",
        "Banners y formatos digitales para mensajería",
      ],
      tag: "Impacto Social",
      highlight: false,
    },
  ];

  return (
    <section id="servicios" className="py-20 border-y border-border bg-surface/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section title */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono text-accent uppercase tracking-wider">
            Servicios Profesionales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F5F5F7] tracking-tight mt-2">
            Soluciones Visuales Estratégicas
          </h2>
          <p className="text-[#A1A1AA] text-base mt-3 leading-relaxed">
            Cada pieza está diseñada con un objetivo: posicionar tu marca en la mente de tus clientes y acelerar tus ventas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative rounded-xl p-7 flex flex-col justify-between transition-colors ${
                  service.highlight
                    ? "bg-surface border border-accent/40 shadow-sm"
                    : "bg-surface border border-border hover:border-[#3f3f46]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-surface-elevated text-[#A1A1AA] border border-border">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#F5F5F7] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-accent mt-1">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-[#A1A1AA] mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <div className="mt-5 pt-5 border-t border-border space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#71717A] block mb-2">
                      Incluye:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-[#71717A] font-mono">
                    Atención personalizada
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
                  >
                    <span>Cotizar servicio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
