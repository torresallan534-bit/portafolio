"use client";

import { useState } from "react";
import { Star, MessageSquarePlus, X, Check, CheckCircle2, ShieldCheck, Sparkles, Building2, User } from "lucide-react";
import { CLIENT_REVIEWS } from "@/data/portfolio-data";
import { ReviewItem } from "@/types";

export default function ClientReviews({ initialReviews }: { initialReviews?: ReviewItem[] } = {}) {
  const [reviews, setReviews] = useState<ReviewItem[]>(
    initialReviews && initialReviews.length > 0 ? initialReviews : CLIENT_REVIEWS
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form State
  const [fullName, setFullName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [serviceType, setServiceType] = useState("Menús Digitales QR & Cartas");
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
      role: "Cliente Comercial",
      brand: brandName,
      rating: rating,
      comment: comment,
      service: serviceType,
      date: "Reciente",
      verified: true,
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      setReviews((prev) => [newReview, ...prev]);
      setSubmittedSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setFullName("");
        setBrandName("");
        setComment("");
        setRating(5);
        setIsModalOpen(false);
      }, 2000);
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="resenas" className="py-24 max-w-6xl mx-auto px-5 sm:px-8 border-t border-[#2B2F33]">
      {/* Header con Título y Botón Destacado */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2F33]/40 border border-[#2B2F33] text-xs font-mono text-[#3DDC97] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prueba Social &bull; Negocios que Confían en Panda Haus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#FFFFFF] tracking-tight">
            Opiniones de Nuestros Clientes
          </h2>
          <p className="text-[#F2F4F3]/70 text-sm sm:text-base mt-2 max-w-xl font-sans">
            La confianza de restaurantes, franquicias gastronómicas y marcas locales que han impulsado sus ventas y agilidad con Panda Haus.
          </p>
        </div>

        {/* Botón para Abrir Modal de Reseña */}
        <button
          type="button"
          onClick={handleOpenModal}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2B2F33] hover:bg-[#3DDC97] text-[#FFFFFF] hover:text-[#0D0D0D] font-display font-bold text-xs transition-all duration-200 shadow-md active:scale-95 shrink-0"
        >
          <MessageSquarePlus className="w-4 h-4" />
          <span>⭐ Dejar una reseña</span>
        </button>
      </div>

      {/* Grid de Reseñas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="flex flex-col justify-between p-7 rounded-2xl bg-[#141618] border border-[#2B2F33] hover:border-[#3DDC97]/40 transition-colors shadow-sm"
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
                          ? "text-[#3DDC97] fill-[#3DDC97]"
                          : "text-[#2B2F33] fill-[#2B2F33]"
                      }`}
                    />
                  ))}
                  <span className="text-xs font-mono text-[#F2F4F3] ml-1.5 font-bold">
                    {rev.rating}.0
                  </span>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-lg bg-[#2B2F33]/60 text-[#3DDC97] border border-[#2B2F33]">
                  {rev.service}
                </span>
              </div>

              {/* Comentario */}
              <p className="text-sm text-[#F2F4F3]/90 leading-relaxed italic mb-6 font-sans">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            {/* Datos del Cliente */}
            <div className="pt-4 border-t border-[#2B2F33] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-display font-bold text-[#FFFFFF]">
                    {rev.name}
                  </span>
                  {rev.verified && (
                    <span title="Cliente Verificado Panda Haus" className="inline-flex">
                      <ShieldCheck className="w-4 h-4 text-[#3DDC97]" />
                    </span>
                  )}
                </div>
                <div className="text-xs text-[#F2F4F3]/60 flex items-center gap-1.5 mt-0.5 font-mono">
                  <span className="text-[#3DDC97] font-semibold">{rev.brand}</span>
                  <span>&bull;</span>
                  <span>{rev.role}</span>
                </div>
              </div>

              <span className="text-[11px] font-mono text-[#F2F4F3]/40">
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
            className="fixed inset-0 bg-[#0D0D0D]/90 backdrop-blur-md"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <div className="relative w-full max-w-lg bg-[#141618] border border-[#2B2F33] rounded-3xl shadow-2xl z-10 text-[#F2F4F3] p-6 sm:p-8 animate-scale-in">
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 text-[#F2F4F3]/60 hover:text-[#FFFFFF] rounded-lg bg-[#2B2F33] transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#3DDC97]/15 border border-[#3DDC97]/30 flex items-center justify-center text-[#3DDC97]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#FFFFFF]">
                  ¡Gracias por tu reseña!
                </h3>
                <p className="text-xs sm:text-sm text-[#F2F4F3]/70 max-w-sm mx-auto leading-relaxed font-sans">
                  Tu valoración sobre el proyecto ha sido registrada con éxito y ya aparece reflejada en el sitio de Panda Haus.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#3DDC97] mb-1 font-semibold">
                    Comparte tu experiencia con nosotros
                  </div>
                  <h3 id="modal-review-title" className="text-2xl font-display font-extrabold text-[#FFFFFF]">
                    Dejar una Reseña
                  </h3>
                  <p className="text-xs text-[#F2F4F3]/70 mt-1 font-sans">
                    Tu opinión ayuda a otros negocios a conocer el impacto y la agilidad de trabajar con Panda Haus.
                  </p>
                </div>

                <form onSubmit={handleSubmitReview} className="space-y-4 text-xs font-sans">
                  {/* Selector de Estrellas */}
                  <div>
                    <label className="block text-[#F2F4F3]/70 mb-1.5 font-mono">
                      Calificación del servicio:
                    </label>
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] w-fit">
                      {[1, 2, 3, 4, 5].map((starVal) => {
                        const isFilled = (hoverRating || rating) >= starVal;
                        return (
                          <button
                            key={starVal}
                            type="button"
                            onClick={() => setRating(starVal)}
                            onMouseEnter={() => setHoverRating(starVal)}
                            onMouseLeave={() => setHoverRating(0)}
                            className="p-1 text-[#3DDC97] transition-transform hover:scale-110"
                            aria-label={`Calificar con ${starVal} estrellas`}
                          >
                            <Star
                              className={`w-5 h-5 ${
                                isFilled
                                  ? "text-[#3DDC97] fill-[#3DDC97]"
                                  : "text-[#2B2F33]"
                              }`}
                            />
                          </button>
                        );
                      })}
                      <span className="ml-2 font-mono text-sm font-bold text-[#FFFFFF]">
                        {rating}.0 / 5.0
                      </span>
                    </div>
                  </div>

                  {/* Nombre y Marca */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#F2F4F3]/70 mb-1 font-mono flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#3DDC97]" />
                        Tu Nombre / Cargo
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ej. Julián Castro"
                        className="w-full px-3 py-2.5 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] text-[#FFFFFF] placeholder:text-[#F2F4F3]/30 focus:outline-none focus:border-[#3DDC97] focus:ring-1 focus:ring-[#3DDC97]/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#F2F4F3]/70 mb-1 font-mono flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#3DDC97]" />
                        Nombre del Negocio
                      </label>
                      <input
                        type="text"
                        required
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="Ej. Barbería The King"
                        className="w-full px-3 py-2.5 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] text-[#FFFFFF] placeholder:text-[#F2F4F3]/30 focus:outline-none focus:border-[#3DDC97] focus:ring-1 focus:ring-[#3DDC97]/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Servicio */}
                  <div>
                    <label className="block text-[#F2F4F3]/70 mb-1 font-mono">
                      Servicio o Paquete Contratado
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] text-[#FFFFFF] focus:outline-none focus:border-[#3DDC97] focus:ring-1 focus:ring-[#3DDC97]/40 transition-colors"
                    >
                      <option value="Flyers y Contenido Visual">Flyers y Contenido Visual</option>
                      <option value="Menú Gastronómico (Impreso y QR)">Menú Gastronómico (Impreso y QR)</option>
                      <option value="Landing Page Comercial de Conversión">Landing Page Comercial de Conversión</option>
                      <option value="Identidad de Marca & Empaques">Identidad de Marca & Empaques</option>
                      <option value="Pack Arranque Visual">Pack Arranque Visual</option>
                      <option value="Pack Menú Pro">Pack Menú Pro</option>
                      <option value="Pack Web Comercial">Pack Web Comercial</option>
                    </select>
                  </div>

                  {/* Testimonio */}
                  <div>
                    <label className="block text-[#F2F4F3]/70 mb-1 font-mono">
                      Tu Testimonio Comercial
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Cuéntanos cómo fue el proceso y qué impacto tuvieron las piezas en tu negocio..."
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0D0D0D] border border-[#2B2F33] text-[#FFFFFF] placeholder:text-[#F2F4F3]/30 focus:outline-none focus:border-[#3DDC97] focus:ring-1 focus:ring-[#3DDC97]/40 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#3DDC97] hover:bg-[#34C788] text-[#0D0D0D] font-display font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 shadow-md shadow-[#3DDC97]/20"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-[#0D0D0D] border-t-transparent rounded-full animate-spin" />
                          <span>Publicando testimonio...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Publicar Reseña en Panda Haus</span>
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
