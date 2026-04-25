"use client";

import { useTranslations } from "next-intl";

export default function WhyThisCare({ ids = [], title = "" }) {
  const t = useTranslations("whyThisCare");
  const questions = t.raw("list");
  const selectedQuestions = questions.filter((q) => ids.includes(q.id));

  if (selectedQuestions.length === 0) return null;

  return (
    <section className="bg-[#FAFAF7]" role="region" aria-labelledby="why-this-care-title">
      <div className="section-wrap">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10 lg:mb-12">
            <p className="label-or mb-3">Pourquoi ce soin</p>
            <h2 id="why-this-care-title" className="tracking-tight">
              {t(`titles.${title}`)}
            </h2>
          </div>

          <ul className="space-y-3">
            {selectedQuestions.map((q, index) => (
              <li
                key={q.id}
                className="flex items-start gap-4 rounded-2xl bg-white p-5 card-lift"
              >
                <span className="flex-none flex h-8 w-8 items-center justify-center rounded-full bg-[#F3EDE4] text-sm font-bold text-[#7B6139]">
                  {index + 1}
                </span>
                <p className="text-[0.9375rem] leading-relaxed text-[#595751] pt-0.5">
                  {q.question}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
