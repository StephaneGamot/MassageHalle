"use client";

import { useTranslations } from "next-intl";

export default function TreatmentDescription({ variant = "" }) {
  const t = useTranslations("treatmentDescription");

  const min = t.raw(`${variant}.durationMin`);
  const max = t.raw(`${variant}.durationMax`);

  return (
    <section
      className="py-20 bg-gray-50"
      role="region"
      aria-labelledby="treatment-title"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2
          id="treatment-title"
          className="text-3xl font-serif font-semibold text-gray-900"
        >
          {t(`${variant}.title`)}
        </h2>
        <p className="mt-6 text-lg text-gray-700">
          {t(`${variant}.hero`)}
        </p>
        <p className="mt-6 text-base text-gray-600">
          {t("common.location")} <br />
          {t("common.duration.prefix")} <strong>{min}</strong> {t("common.duration.to")}{" "}
          <strong>{max}</strong> {t("common.duration.unit")}.
        </p>
        <p className="mt-4 text-base text-gray-600">
          {t(`${variant}.text`)}{" "}
          <span className="ml-1 text-[#556B2F] font-semibold">{t(`${variant}.price`)}</span>.
        </p>
      </div>
    </section>
  );
}
