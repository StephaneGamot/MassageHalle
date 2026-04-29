"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

/**
 * ServiceFaq — mini-FAQ spécifique à chaque service.
 * Génère aussi le JSON-LD FAQPage pour les rich snippets Google.
 *
 * Usage: <ServiceFaq variant="relaxant" />
 */
export default function ServiceFaq({ variant }) {
  const t = useTranslations("serviceFaq");
  const [openIndex, setOpenIndex] = useState(null);

  // Récupère les questions pour ce variant
  let questions = [];
  try {
    const raw = t.raw(variant);
    if (Array.isArray(raw)) {
      questions = raw;
    }
  } catch {
    return null; // Pas de FAQ pour ce variant
  }

  if (questions.length === 0) return null;

  // Schema FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="bg-[#FAFAF7]" role="region" aria-labelledby="service-faq-title">
        <div className="section-wrap">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <p className="label-or mb-3">{t("label")}</p>
              <h2 id="service-faq-title" className="text-2xl sm:text-3xl tracking-tight">
                {t("title")}
              </h2>
            </div>

            <dl className="space-y-3">
              {questions.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className="rounded-xl border border-[#E8D4AD]/30 bg-white overflow-hidden transition-all"
                  >
                    <dt>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between px-6 py-4 text-left text-[#2A2A2A] hover:bg-[#F3EDE4]/30 transition-colors min-h-[44px]"
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                      >
                        <span className="text-base font-medium pr-4">{item.q}</span>
                        <svg
                          className={`h-5 w-5 flex-none text-[#B8976A] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                    </dt>
                    {isOpen && (
                      <dd className="px-6 pb-5 text-sm leading-relaxed text-[#595751]">
                        {item.a}
                      </dd>
                    )}
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
