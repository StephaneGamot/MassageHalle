"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Testimonials({ ids = [] }) {
  const t = useTranslations("testimonials");

  // Helper : retourne la valeur si la clé existe, sinon null. Cela permet
  // d'ajouter progressivement des champs `context`, `result`, `service`
  // aux témoignages sans avoir à les remplir pour tous les 50 d'un coup.
  const safe = (key) => {
    try {
      const v = t(key);
      return v && !v.includes(".") ? v : null;
    } catch {
      return null;
    }
  };

  const selectedTestimonials = ids.map((id) => ({
    id,
    body: t(`list.${id}.body`),
    alt: t(`list.${id}.alt`),
    context: safe(`list.${id}.context`),
    result: safe(`list.${id}.result`),
    service: safe(`list.${id}.service`),
    author: {
      name: t(`list.${id}.author`),
      imageUrl: `/Images/testimonials/${id}.webp`,
    },
  }));

  if (selectedTestimonials.length === 0) {
    return (
      <div className="bg-[#FAFAF7] py-24 text-center" role="region" aria-label={t("title")}>
        <p className="text-[#595751]">{t("none")}</p>
      </div>
    );
  }

  // Bg ivory chaud + cartes blanches : résout deux problèmes d'un coup.
  // (1) sur les pages services, le Testimonials ne se fond plus dans le Footer
  //     vert sombre — contraste fort, séparation immédiate.
  // (2) la lecture des témoignages est plus confortable sur fond clair.
  // La home garde son contraste : Cta (blanc pur) → Testimonials (ivory) →
  // Contact (blanc) crée une transition visuelle douce mais lisible.
  return (
    <section
      className="bg-[#F3EDE4]"
      role="region"
      aria-labelledby="testimonials-title"
    >
      <div className="section-wrap">
        {/* En-tête */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="label-or !text-[#B08856] mb-3">{t("title")}</p>
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl tracking-tight !text-[#1B3A2D]"
          >
            {t("subtitle")}
          </h2>
        </div>

        {/* Grille */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {selectedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="break-inside-avoid">
              <figure className="rounded-2xl bg-white p-6 sm:p-7 border border-[#E1DBD0] shadow-sm hover:shadow-md hover:border-[#B08856]/40 transition-all duration-300">
                {/* Badge service — contextualise immédiatement le témoignage
                    (« ah ok c'est pour le même soin que je cherche »). */}
                {testimonial.service && (
                  <span className="inline-block mb-3 rounded-full bg-[#1B3A2D]/8 border border-[#1B3A2D]/15 px-3 py-0.5 text-xs font-medium text-[#1B3A2D]">
                    {testimonial.service}
                  </span>
                )}
                <blockquote>
                  <p className="text-[0.9375rem] leading-relaxed text-[#1A1A1A]">
                    &ldquo;{testimonial.body}&rdquo;
                  </p>
                </blockquote>
                {/* Résultat ressenti — bénéfice concret pour le lecteur. */}
                {testimonial.result && (
                  <p className="mt-3 text-sm italic text-[#B08856]">
                    {testimonial.result}
                  </p>
                )}
                <figcaption className="mt-5 flex items-center gap-x-3">
                  <Image
                    alt={testimonial.alt}
                    src={testimonial.author.imageUrl}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-[#B08856]/30"
                    width={36}
                    height={36}
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#1B3A2D]">
                      {testimonial.author.name}
                    </span>
                    {testimonial.context && (
                      <span className="text-xs text-[#6B6862]">
                        {testimonial.context}
                      </span>
                    )}
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
