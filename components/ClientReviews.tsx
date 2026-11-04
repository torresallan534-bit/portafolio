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
  const [serviceType, setServiceType] = useState("Menú Gastronómico");
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
      // Simulación de envío o llamada a endpoint /api/reviews
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Añadimos la reseña al estado local para feedback inmediato
      setReviews((prev) => [newReview, ...prev]);
      setSubmittedSuccess(true);
      setIsSubmitting(false);

      // Limpiar formulario tras unos segundos
      setTimeout(() => {
        setFullName("");
        setBrandName("");
        setComment("");
        setRating(5);
        setIsModalOpen(false);
      }, 2400);
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="resenas" className="py-20 max-w-6xl mx-auto px-5 sm:px-8">
      {/* Header with Title and "Dejar una Reseña" CTA */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
        <div>
          <div className="text-xs font-mono text-[#E8A023] uppercase tracking-wider mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prueba Social &bull; Experiencias Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F5F5F7] tracking-tight">
            Reseñas de Clientes
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base mt-2 max-w-xl">
            La confianza de los negocios gastronómicos, marcas y barberías que han elevado su facturación e identidad visual con nuestro trabajo.
          </p>
        </div>

        {/* CTA to open review modal */}
        <button
          type="button"
          onClick={handleOpenModal}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1C1C1F] border border-[#2A2A2E] hover:border-[#E8A023]/60 text-[#F5F5F7] text-xs font-semibold transition-all duration-200 hover:bg-[#2A2A2E] active:scale-95 shrink-0"
        >
          <MessageSquarePlus className="w-4 h-4 text-[#E8A023]" />
          <span>⭐ Dejar una reseña</span>
        </button>
      </div>

      {/* Grid of Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#141416] border border-[#2A2A2E] hover:border-[#3f3f46] transition-colors"
          >
            <div>
              {/* Top Row: Stars and Service Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < rev.rating
                          ? "text-[#E8A023] fill-[#E8A023]"
                          : "text-[#2A2A2E] fill-[#2A2A2E]"
                      }`}
                    />
                  ))}
                  <span className="text-xs font-mono text-[#F5F5F7] ml-1.5 font-bold">
                    {rev.rating}.0
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#1C1C1F] text-[#A1A1AA] border border-[#2A2A2E]">
                  {rev.service}
                </span>
              </div>

              {/* Comment */}
              <p className="text-sm text-[#F5F5F7]/90 leading-relaxed italic mb-6">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            {/* Author info */}
            <div className="pt-4 border-t border-[#2A2A2E] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-display font-semibold text-[#F5F5F7]">
                    {rev.name}
                  </span>
                  {rev.verified && (
                    <span title="Cliente Verificado" className="inline-flex">
                      <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                    </span>
                  )}
                </div>
                <div className="text-xs text-[#71717A] flex items-center gap-1.5 mt-0.5">
                  <span className="text-[#E8A023] font-medium">{rev.brand}</span>
                  <span>&bull;</span>
                  <span>{rev.role}</span>
                </div>
              </div>

              <span className="text-[11px] font-mono text-[#71717A]">
                {rev.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-review-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#0A0A0B]/85 backdrop-blur-sm"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <div className="relative w-full max-w-lg bg-[#141416] border border-[#2A2A2E] rounded-2xl shadow-2xl z-10 text-[#F5F5F7] p-6 sm:p-8 animate-scale-in">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-1.5 text-[#A1A1AA] hover:text-[#F5F5F7] rounded-lg bg-[#1C1C1F] hover:bg-[#2A2A2E] transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#34D399]/10 border border-[#34D399]/20 flex items-center justify-center text-[#34D399]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#F5F5F7]">
                  ¡Gracias por tu reseña!
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm mx-auto leading-relaxed">
                  Tu valoración sobre el proyecto ha sido registrada con éxito y ya aparece reflejada en el portafolio.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#E8A023] mb-1">
                    Comparte tu experiencia
                  </div>
                  <h3 id="modal-review-title" className="text-2xl font-display font-bold text-[#F5F5F7]">
                    Dejar una Reseña
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-1">
                    Tu opinión ayuda a otros negocios a conocer el impacto de trabajar con Allan Torres.
                  </p>
                </div>

                <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
                  {/* Rating Selector */}
                  <div>
                    <label className="block text-[#A1A1AA] mb-1.5 font-mono">
                      Calificación general:
                    </label>
                    <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#0A0A0B] border border-[#2A2A2E] w-fit">
                      {[1, 2, 3, 4, 5].map((starVal) => {
                        const isFilled = (hoverRating || rating) >= starVal;
                        return (
                          <button
                            key={starVal}
                            type="button"
                            onClick={() => setRating(starVal)}
                            onMouseEnter={() => setHoverRating(starVal)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 text-[#E8A023] transition-transform hover:scale-110"
                            aria-label={`Calificar con ${starVal} estrellas`}
                          >
                            <Star
                              className={`w-6 h-6 ${
                                isFilled
                                  ? "text-[#E8A023] fill-[#E8A023]"
                                  : "text-[#2A2A2E]"
                              }`}
                            />
                          </button>
                        );
                      })}
                      <span className="ml-2 font-mono text-sm font-bold text-[#F5F5F7]">
                        {rating}.0 / 5.0
                      </span>
                    </div>
                  </div>

                  {/* Name and Brand in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#A1A1AA] mb-1 font-mono flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#E8A023]" />
                        Tu Nombre / Cargo
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ej. Julián Castro"
                        className="w-full px-3 py-2.5 rounded-lg bg-[#0A0A0B] border border-[#2A2A2E] text-[#F5F5F7] placeholder:text-[#71717A] focus:outline-none focus:border-[#E8A023] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#A1A1AA] mb-1 font-mono flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#E8A023]" />
                        Nombre de la Marca
                      </label>
                      <input
                        type="text"
                        required
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="Ej. Barbería The King"
                        className="w-full px-3 py-2.5 rounded-lg bg-[#0A0A0B] border border-[#2A2A2E] text-[#F5F5F7] placeholder:text-[#71717A] focus:outline-none focus:border-[#E8A023] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-[#A1A1AA] mb-1 font-mono">
                      Servicio Contratado
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0A0A0B] border border-[#2A2A2E] text-[#F5F5F7] focus:outline-none focus:border-[#E8A023] transition-colors"
                    >
                      <option value="Menú Gastronómico">Menú Gastronómico</option>
                      <option value="Branding Comercial & Identidad">Branding Comercial & Identidad</option>
                      <option value="Flyers & Campaña Publicitaria">Flyers & Campaña Publicitaria</option>
                      <option value="Pack Integral (Branding + Menú + Flyers)">Pack Integral (Branding + Menú + Flyers)</option>
                    </select>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-[#A1A1AA] mb-1 font-mono">
                      Tu Testimonio / Reseña
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Cuéntanos cómo fue el proceso y qué impacto tuvo el diseño en tu negocio..."
                      className="w-full px-3 py-2.5 rounded-lg bg-[#0A0A0B] border border-[#2A2A2E] text-[#F5F5F7] placeholder:text-[#71717A] focus:outline-none focus:border-[#E8A023] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 rounded-xl bg-[#E8A023] hover:bg-[#F0B847] text-[#0A0A0B] font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-[#0A0A0B] border-t-transparent rounded-full animate-spin" />
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
