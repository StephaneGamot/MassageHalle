"use client";

import { useTranslations } from "next-intl";

export default function TreatmentDescription({ variant = "" }) {
  const t = useTranslations("treatmentDescription");
  const min = t.raw(`${variant}.durationMin`);
  const max = t.raw(`${variant}.durationMax`);

  return (
    <section className="bg-[#F3EDE4]" role="region" aria-labelledby="treatment-title">
      <div className="section-wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-or mb-3">Votre soin</p>
          <h2 id="treatment-title" className="tracking-tight">
            {t(`${variant}.title`)}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#595751] mx-auto">
            {t(`${variant}.hero`)}
          </p>

          {/* Infos pratiques */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3 text-[#595751]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <svg className="h-5 w-5 text-[#B8976A]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <span className="text-sm">{t("common.location")}</span>
            </div>

            <div className="flex items-center gap-3 text-[#595751]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <svg className="h-5 w-5 text-[#B8976A]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className="text-sm">
                {t("common.duration.prefix")} <strong className="text-[#2A2A2A]">{min}</strong> {t("common.duration.to")} <strong className="text-[#2A2A2A]">{max}</strong> {t("common.duration.unit")}
              </span>
            </div>
          </div>

          {/* Prix */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-sm">
            <span className="text-sm text-[#595751]">{t(`${variant}.text`)}</span>
            <span className="text-lg font-bold text-[#7B6139]">{t(`${variant}.price`)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
