"use client";

import benefitsData from "./BenefitsData.json";
import { useTranslations } from "next-intl";

export default function Benefits({ ids = [], title = "" }) {
  const t = useTranslations("benefits");
  const translations = t.raw("list");

  const selectedBenefits = benefitsData
    .filter((b) => ids.includes(b.id))
    .map((benefit) => ({
      ...benefit,
      translatedText:
        translations.find((item) => item.id === benefit.id)?.text ||
        benefit.text,
    }));

  if (selectedBenefits.length === 0) return null;

  return (
    <section className="bg-white" role="region" aria-labelledby="benefits-title">
      <div className="section-wrap text-center">
        <p className="label-or mb-3">Bienfaits</p>
        <h2 id="benefits-title" className="tracking-tight">
          {t("why")} {t(`titles.${title}`)} ?
        </h2>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {selectedBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="card-lift group rounded-2xl bg-[#FAFAF7] p-6 lg:p-7 text-center"
            >
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F3EDE4] group-hover:bg-[#E8E0D4] transition-colors">
                <svg className="h-4.5 w-4.5 text-[#B8976A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[0.9375rem] leading-relaxed text-[#595751] mx-auto">
                {benefit.translatedText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
