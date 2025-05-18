"use client";

import { useTranslations } from "next-intl";
import MassageCards from "./MassageCards";
import massageCardData from "./massageCardData.json";


export default function MassageCardContainer() {
  const t = useTranslations("massages");

  return (
    <section id="massages" className="w-full bg-gray-700 custom-3d-effect z-10 relative">
      <div className="bg-grey-800 text-white p-4">
        <div className="container max-w-[1000px] mx-auto px-4 my-12">
          <div className="flex flex-wrap -mx-4">
            {massageCardData.map((card) => (
              <MassageCards
                key={card.id}
                slug={card.slug}      
                imageUrl={card.imageUrl}
                title={t(`cards.${card.id - 1}.title`)}
                description={t(`cards.${card.id - 1}.description`)}
                imageAlt={t(`cards.${card.id - 1}.imageAlt`)}
                titleImg={t(`cards.${card.id - 1}.titleImg`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
