"use client";

import { useTranslations } from "next-intl";
import MassageCards from "./MassageCards";
import massageCardData from "./massageCardData.json";

export default function MassageCardContainer() {
  const t = useTranslations("massages");

  return (
    <section
      id="massages"
      className="bg-[#FAFAF7]"
      aria-labelledby="massages-title"
    >
      <div className="section-wrap">
        <div className="text-center mb-12 lg:mb-16">
          <p className="label-or mb-3">{t("sectionTitle") || "Nos soins"}</p>
          <h2 id="massages-title" className="tracking-tight">
            {t("sectionSubtitle") || "Découvrez nos massages et soins thérapeutiques personnalisés"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {massageCardData.map((card, index) => (
            <MassageCards
              key={card.id}
              slug={card.slug}
              imageUrl={card.imageUrl}
              title={t(`cards.${card.id - 1}.title`)}
              description={t(`cards.${card.id - 1}.description`)}
              imageAlt={t(`cards.${card.id - 1}.imageAlt`)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
