"use client";

import { useTranslations } from "next-intl";

/**
 * Bloc différencié par culture, pour donner à Google une vraie raison
 * d'indexer les versions FR / EN / NL distinctement.
 *
 * FR  → public local francophone (proximité Bruxelles, Brabant, Pajottenland fr)
 * EN  → expatriés à Bruxelles (Brussels-South train, fluent practitioner, vouchers)
 * NL  → public flamand (Halle Pajottenland, Beersel, Lennik, Gooik...)
 *
 * Chaque langue raconte une histoire différente, ancrée localement.
 */
export default function LocalContextStrip() {
  const t = useTranslations("localContext");

  // Récupère le tableau de bullets. next-intl impose une clé statique → on
  // récupère via t.raw pour obtenir l'array brut.
  let bullets = [];
  try {
    bullets = t.raw("bullets");
  } catch (e) {
    bullets = [];
  }

  return (
    <section
      aria-labelledby="local-context-title"
      className="bg-[#FAFAF7] py-16 px-6"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-[#1B3A2D] mb-3 text-center font-semibold">
          {t("kicker")}
        </p>
        <h2
          id="local-context-title"
          className="font-serif text-3xl sm:text-4xl text-[#1B3A2D] text-center mb-8"
        >
          {t("title")}
        </h2>
        <div className="prose prose-lg max-w-none text-[#2F2F2F]">
          <p className="mb-5 leading-relaxed">{t("p1")}</p>
          <p className="mb-8 leading-relaxed">{t("p2")}</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          {Array.isArray(bullets) &&
            bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-[#1B3A2D]"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#D4BA91] flex-shrink-0"
                />
                <span>{b}</span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
