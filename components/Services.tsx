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
        "Desarrollo de logotipos, submarcas, paletas cromáticas armónicas y manuales de identidad visual preparados para destacar tanto en medios digitales como en papelería e imprenta comercial.",
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
        "Ingeniería visual y diagramación de cartas para areperas venezolanas, restobares, cafeterías y locales de comida rápida. Jerarquía que resalta platos insignia y acelera los pedidos.",
      deliverables: [
        "Formato impreso repelente al agua y de alta durabilidad",
        "Menú QR móvil ultra ligero y legible sin zoom excesivo",
        "Iconografía personalizada para ingredientes y alérgenos",
        "Plantillas actualizables para cambios de temporada",
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
        "Afiches, cuponeras y volantes concebidos para capturar la atención en segundos. Diseños contundentes para barberías, lanzamientos de productos, noches especiales y promociones por tiempo limitado.",
      deliverables: [
        "Flyers en alta resolución listos para imprenta con sangrados",
        "Formatos verticales optimizados para Stories de Instagram y TikTok",
        "Cuponeras y tarjetas de fidelización para clientes recurrentes",
        "Entrega rápida para eventos y ofertas de último minuto",
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
        "Piezas gráficas para ONGs, colectas comunitarias y campañas benéficas. Diseños empáticos y creíbles que transmiten confianza y movilizan a la comunidad a colaborar activamente.",
      deliverables: [
        "Afiches para puntos de recaudación física",
        "Infografías de impacto y rendición de cuentas",
        "Kits de difusión para redes sociales y voluntarios",
        "Banners web y formatos para mailing solidario",
      ],
      tag: "Impacto Social",
      highlight: false,
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-zinc-950/60 border-y border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
            Servicios Profesionales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-2">
            Soluciones Visuales Estratégicas
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-3 font-light">
            Cada pieza que diseño tiene un único objetivo: posicionar tu marca en la mente de tus clientes y acelerar tus ventas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-7 sm:p-9 transition-all duration-300 flex flex-col justify-between ${
                  service.highlight
                    ? "bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 border border-amber-500/30 shadow-xl shadow-amber-500/5"
                    : "glass-card"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/60">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-amber-400/90 mt-1">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-zinc-300 mt-4 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-6 border-t border-zinc-800/80 space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                      Qué incluye:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">
                    Entrega personalizada &bull; Asesoría 1 a 1
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 group transition-colors"
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
