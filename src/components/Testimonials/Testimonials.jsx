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

  return (
    <section
      className="bg-[#1B3A2D]"
      role="region"
      aria-labelledby="testimonials-title"
    >
      <div className="section-wrap">
        {/* En-tête */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="label-or !text-[#E8D4AD] mb-3">{t("title")}</p>
          <h2
            id="testimonials-title"
            className="text-3xl sm:text-4xl tracking-tight !text-[#F3EDE4]"
          >
            {t("subtitle")}
          </h2>
        </div>

        {/* Grille */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {selectedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="break-inside-avoid">
              <figure className="rounded-2xl bg-white/[0.07] p-6 sm:p-7 border border-white/[0.06] hover:bg-white/[0.1] transition-colors duration-300">
                {/* Badge service — contextualise immédiatement le témoignage
                    (« ah ok c'est pour le même soin que je cherche »). */}
                {testimonial.service && (
                  <span className="inline-block mb-3 rounded-full bg-[#E8D4AD]/15 border border-[#E8D4AD]/30 px-3 py-0.5 text-xs font-medium text-[#E8D4AD]">
                    {testimonial.service}
                  </span>
                )}
                <blockquote>
                  <p className="text-[0.9375rem] leading-relaxed !text-white/90">
                    &ldquo;{testimonial.body}&rdquo;
                  </p>
                </blockquote>
                {/* Résultat ressenti — bénéfice concret pour le lecteur. */}
                {testimonial.result && (
                  <p className="mt-3 text-sm italic !text-[#E8D4AD]/90">
                    {testimonial.result}
                  </p>
                )}
                <figcaption className="mt-5 flex items-center gap-x-3">
                  <Image
                    alt={testimonial.alt}
                    src={testimonial.author.imageUrl}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-[#B8976A]/30"
                    width={36}
                    height={36}
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold !text-[#D4BA91]">
                      {testimonial.author.name}
                    </span>
                    {testimonial.context && (
                      <span className="text-xs !text-white/55">
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
