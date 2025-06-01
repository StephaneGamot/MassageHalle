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

  if (selectedBenefits.length === 0) {
    return null;
  }

  return (
    <section
      className="py-16 bg-white"
      role="region"
      aria-labelledby="benefits-title"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2
          id="benefits-title"
          className="text-3xl font-serif font-semibold text-gray-900 mb-10"
        >
          {t("why")} {t(`titles.${title}`)} ?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {selectedBenefits.map((benefit) => (
            <div
              key={benefit.id}
              className="rounded-xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-lg text-gray-700">{benefit.translatedText}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
