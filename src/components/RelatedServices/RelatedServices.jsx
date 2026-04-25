"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const allServices = [
  { key: "relaxant", path: "/massage/relaxant" },
  { key: "sportif", path: "/massage/sportif" },
  { key: "domicile", path: "/massage/a-domicile" },
  { key: "tao", path: "/massage/tao" },
  { key: "douceur", path: "/massage/douceur-dorsale" },
  { key: "anticellulite", path: "/massage/anti-cellulite" },
  { key: "deeptissue", path: "/massage/deep-tissues" },
  { key: "voyage", path: "/massage/voyage-des-sens" },
  { key: "amma", path: "/massage/massage-sur-chaise" },
  { key: "shiatsu", path: "/shiatsu" },
  { key: "reiki", path: "/reiki" },
  { key: "reflexo", path: "/reflexologie-plantaire" },
  { key: "cranio", path: "/therapie-cranio-sacree" },
];

// Related services mapping — each variant shows 3 related services
const relatedMap = {
  massage: ["domicile", "tao", "voyage"],
  sportif: ["deeptissue", "domicile", "douceur"],
  domicile: ["relaxant", "tao", "voyage"],
  tao: ["relaxant", "domicile", "voyage"],
  dos: ["sportif", "deeptissue", "domicile"],
  anticellulite: ["sportif", "deeptissue", "domicile"],
  deeptissue: ["sportif", "douceur", "domicile"],
  voyage: ["relaxant", "tao", "domicile"],
  amma: ["relaxant", "domicile", "sportif"],
  shiatsu: ["reiki", "cranio", "domicile"],
  reiki: ["shiatsu", "cranio", "domicile"],
  reflexo: ["cranio", "shiatsu", "domicile"],
  cst: ["reiki", "shiatsu", "domicile"],
};

export default function RelatedServices({ variant }) {
  const locale = useLocale();
  const t = useTranslations("nav");
  const rt = useTranslations("relatedServices");

  const relatedKeys = relatedMap[variant] || ["relaxant", "domicile", "tao"];
  const related = relatedKeys
    .map((key) => allServices.find((s) => s.key === key))
    .filter(Boolean);

  return (
    <section className="bg-[#FAFAF7]" role="region" aria-labelledby="related-services-title">
      <div className="section-wrap">
        <div className="mx-auto max-w-4xl text-center">
          <h3
            id="related-services-title"
            className="text-2xl sm:text-3xl tracking-tight"
          >
            {rt("title")}
          </h3>
          <p className="mt-3 text-base text-[#6B6862] max-w-2xl mx-auto">
            {rt("subtitle")}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((service) => (
              <Link
                key={service.key}
                href={`/${locale}${service.path}`}
                className="group block rounded-xl border border-[#E8D4AD]/40 bg-white px-6 py-5 transition-all hover:border-[#D4BA91] hover:shadow-md"
              >
                <span className="block text-lg font-medium text-[#1B3A2D] group-hover:text-[#D4BA91] transition-colors">
                  {t(service.key)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
