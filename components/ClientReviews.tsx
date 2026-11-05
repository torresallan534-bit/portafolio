"use client";

import { useState } from "react";
import { Star, MessageSquarePlus, X, Check, CheckCircle2, ShieldCheck, Sparkles, Building2, User } from "lucide-react";
import { CLIENT_REVIEWS } from "@/data/portfolio-data";
import { ReviewItem } from "@/types";

export default function ClientReviews() {
  const [reviews, setReviews] = useState<ReviewItem[]>(CLIENT_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [fullName, setFullName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [serviceType, setServiceType] = useState("Edición de Video / Contenido");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setSubmittedSuccess(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newReview: ReviewItem = {
      id: `review-${Date.now()}`,
      name: fullName,
      role: "Cliente",
      brand: brandName,
      rating: rating,
      comment: comment,
      service: serviceType,
      date: "Reciente",
      verified: true,
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setReviews((prev) => [newReview, ...prev]);
      setSubmittedSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setFullName("");
        setBrandName("");
        setComment("");
        setRating(5);
        setIsModalOpen(false);
      }, 2200);
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="resenas" className="py-20 max-w-6xl mx-auto px-5 sm:px-8">
      {/* Header con Título y Botón Destacado */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-mono text-amber-500 uppercase tracking-wider mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prueba Social &bull; Experiencias Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-zinc-50 tracking-tight">
            Reseñas de Clientes
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            La confianza de creadores, canales de YouTube, negocios gastronómicos y barberías que han elevado sus métricas con nuestro trabajo.
          </p>
        </div>

        {/* Botón Destacado e Interactivo para Abrir Modal */}
        <button
          type="button"
          onClick={handleOpenModal}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-bold transition-all duration-200 shadow-lg shadow-amber-500/20 active:scale-95 shrink-0"
        >
          <MessageSquarePlus className="w-4 h-4 text-zinc-950" />
          <span>⭐ Dejar una reseña</span>
        </button>
      </div>

      {/* Grid de Reseñas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#111114] border border-white/[0.08] hover:border-white/20 transition-colors shadow-sm"
          >
            <div>
              {/* Estrellas y Badge de Servicio */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating
                          ? "text-amber-500 fill-amber-500"
                          : "text-zinc-800 fill-zinc-800"
                      }`}
                    />
                  ))}
                  <span className="text-xs font-mono text-zinc-100 ml-1.5 font-bold">
                    {rev.rating}.0
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-400 border border-white/[0.08]">
                  {rev.service}
                </span>
              </div>

              {/* Comentario */}
              <p className="text-sm text-zinc-200 leading-relaxed italic mb-6">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            {/* Datos del Cliente */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-display font-semibold text-zinc-100">
                    {rev.name}
                  </span>
                  {rev.verified && (
                    <span title="Cliente Verificado" className="inline-flex">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </span>
                  )}
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5 font-mono">
                  <span className="text-amber-400 font-semibold">{rev.brand}</span>
                  <span>&bull;</span>
                  <span>{rev.role}</span>
                </div>
              </div>

              <span className="text-[11px] font-mono text-zinc-400">
                {rev.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Interactivo para Dejar una Reseña */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-review-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#09090B]/90 backdrop-blur-md"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <div className="relative w-full max-w-lg bg-[#111114] border border-white/[0.08] rounded-2xl shadow-2xl z-10 text-zinc-50 p-6 sm:p-8 animate-scale-in">
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-zinc-50">
                  ¡Gracias por tu reseña!
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  Tu valoración sobre el proyecto ha sido registrada con éxito y ya aparece reflejada en el portafolio.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-500 mb-1">
                    Comparte tu experiencia
                  </div>
                  <h3 id="modal-review-title" className="text-2xl font-display font-extrabold text-zinc-50">
                    Dejar una Reseña
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Tu opinión ayuda a otros negocios a conocer el impacto y la agilidad de trabajar con Allan Torres.
                  </p>
                </div>

                <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
                  {/* Selector de Estrellas */}
                  <div>
                    <label className="block text-[#A1A1AA] mb-1.5 font-mono">
                      Calificación general:
                    </label>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-zinc-950/80 border border-white/10 w-fit">
                      {[1, 2, 3, 4, 5].map((starVal) => {
                        const isFilled = (hoverRating || rating) >= starVal;
                        return (
                          <button
                            key={starVal}
                            type="button"
                            onClick={() => setRating(starVal)}
                            onMouseEnter={() => setHoverRating(starVal)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 text-amber-500 transition-transform hover:scale-110"
                            aria-label={`Calificar con ${starVal} estrellas`}
                          >
                            <Star
                              className={`w-6 h-6 ${
                                isFilled
                                  ? "text-amber-500 fill-amber-500"
                                  : "text-zinc-800"
                              }`}
                            />
                          </button>
                        );
                      })}
                      <span className="ml-2 font-mono text-sm font-bold text-zinc-100">
                        {rating}.0 / 5.0
                      </span>
                    </div>
                  </div>

                  {/* Nombre y Marca */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-zinc-400 mb-1 font-mono flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-amber-500" />
                        Tu Nombre / Cargo
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ej. Julián Castro"
                        className="w-full px-3 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-zinc-400 mb-1 font-mono flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-amber-500" />
                        Nombre de la Marca
                      </label>
                      <input
                        type="text"
                        required
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="Ej. Barbería The King"
                        className="w-full px-3 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Servicio */}
                  <div>
                    <label className="block text-zinc-400 mb-1 font-mono">
                      Tipo de Servicio Contratado
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-zinc-100 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/30 transition-colors"
                    >
                      <option value="Edición de Video / Demos">Edición de Video / Demos</option>
                      <option value="Miniaturas de YouTube & Carruseles">Miniaturas de YouTube & Carruseles</option>
                      <option value="Menú Gastronómico (Impreso y QR)">Menú Gastronómico (Impreso y QR)</option>
                      <option value="Flyers & Campañas Publicitarias">Flyers & Campañas Publicitarias</option>
                      <option value="Ebooks & Diseño Editorial">Ebooks & Diseño Editorial</option>
                      <option value="Branding & Identidad para Negocios">Branding & Identidad para Negocios</option>
                    </select>
                  </div>

                  {/* Testimonio */}
                  <div>
                    <label className="block text-zinc-400 mb-1 font-mono">
                      Tu Testimonio / Reseña
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Cuéntanos cómo fue el proceso y qué impacto tuvieron las piezas en tu negocio..."
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-950/80 border border-white/10 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/30 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 shadow-md shadow-amber-500/20"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                          <span>Publicando reseña...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Enviar y Publicar Reseña</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
