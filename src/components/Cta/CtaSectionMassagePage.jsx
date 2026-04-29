"use client";

import { useTranslations } from "next-intl";

export default function CtaSectionMassagePage({ variant = "" }) {
  const t = useTranslations("ctaMassage");
  const soin = t(`soins.${variant}`);
  const waMessage = t("waMessage", { soin }) || `Bonjour, j'aimerais réserver ${soin}. Quelles sont vos disponibilités ?`;
  const waUrl = `https://wa.me/32477131993?text=${encodeURIComponent(waMessage)}`;

  return (
    <section id="reservation" className="bg-[#F3EDE4]" role="region" aria-labelledby="cta-massage-title">
      <div className="section-wrap">
        <div className="mx-auto max-w-2xl text-center">
          <h3 id="cta-massage-title" className="text-3xl sm:text-4xl tracking-tight">
            {t(`titles.${variant}`)}
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-[#595751] mx-auto">
            {t("paragraph", { soin: t(`soins.${variant}`) })}
          </p>

          <div className="mt-8 flex justify-center">
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t("ctaWhatsapp") || "Réserver ce soin"}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-sm text-[#6B6862]">
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4 text-[#B8976A]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t("note")}
            </span>
            <span className="text-[#6B6862]/40">·</span>
            <span className="flex items-center gap-1">
              <svg className="h-4 w-4 text-[#B8976A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {t("trustRating") || "4.9/5 — 50+ avis clients"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
