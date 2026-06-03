import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { CITIES } from "@/data/cities";

/**
 * Page locale par ville (Bruxelles, Uccle, Waterloo).
 *
 * Le contenu est récupéré depuis /data/cities.js. Chaque ville a son slug
 * et au moins 500 mots uniques (sinon Google fusionne en duplicate content).
 *
 * Schema : LocalBusiness restreint à la ville + Service avec areaServed
 * spécifique = signal local très fort pour la requête « massage <ville> ».
 */
export default function LocalCityPage({ cityKey, locale }) {
  const city = CITIES[cityKey];
  if (!city) return null;
  const safeLocale = locale || "fr";
  const cityName = city.cityNames[safeLocale] || city.cityNames.fr;

  const t = {
    fr: {
      hero: city.hero.fr,
      intro: city.intro.fr,
      sectionsTitle: city.sectionsTitle.fr,
      sections: city.sections.fr,
      topServices: city.topServices?.fr,
      logistics: city.logistics?.fr,
      faqLocal: city.faqLocal?.fr,
      testimonial: city.testimonial?.fr,
      topServicesTitle: `Soins les plus demandés à ${cityName}`,
      logisticsTitle: `Trajet & logistique depuis Halle`,
      faqLocalTitle: `Questions fréquentes des habitants de ${cityName}`,
      testimonialTitle: `Ils ont reçu un massage à ${cityName}`,
      bookCta: `Réserver depuis ${cityName}`,
      callCta: "Appeler maintenant",
      priceFrom: `À domicile à ${cityName} : à partir de ${city.homePrice.fromShort}`,
      seePricing: "Voir tous les tarifs",
      seeTreatment: "Découvrir ce soin",
      ctaTitle: `Prêt(e) à réserver votre massage à ${cityName} ?`,
      ctaText: "Un message WhatsApp et nous fixons votre créneau. Réponse en général sous 4 h aux horaires d'ouverture (lundi–samedi 10h–20h).",
    },
    en: {
      hero: city.hero.en,
      intro: city.intro.en,
      sectionsTitle: city.sectionsTitle.en,
      sections: city.sections.en,
      topServices: city.topServices?.en,
      logistics: city.logistics?.en,
      faqLocal: city.faqLocal?.en,
      testimonial: city.testimonial?.en,
      topServicesTitle: `Most requested treatments in ${cityName}`,
      logisticsTitle: `Travel & logistics from Halle`,
      faqLocalTitle: `Frequently asked by ${cityName} residents`,
      testimonialTitle: `They received a massage in ${cityName}`,
      bookCta: `Book from ${cityName}`,
      callCta: "Call now",
      priceFrom: `At home in ${cityName}: from ${city.homePrice.fromShort}`,
      seePricing: "See all prices",
      seeTreatment: "See this treatment",
      ctaTitle: `Ready to book your massage in ${cityName}?`,
      ctaText: "One WhatsApp message and we set your slot. Reply usually within 4 hours during opening hours (Monday–Saturday 10am–8pm).",
    },
    nl: {
      hero: city.hero.nl,
      intro: city.intro.nl,
      sectionsTitle: city.sectionsTitle.nl,
      sections: city.sections.nl,
      topServices: city.topServices?.nl,
      logistics: city.logistics?.nl,
      faqLocal: city.faqLocal?.nl,
      testimonial: city.testimonial?.nl,
      topServicesTitle: `Meest gevraagde behandelingen in ${cityName}`,
      logisticsTitle: `Traject & logistiek vanuit Halle`,
      faqLocalTitle: `Veelgestelde vragen van bewoners van ${cityName}`,
      testimonialTitle: `Zij kregen een massage in ${cityName}`,
      bookCta: `Boek vanuit ${cityName}`,
      callCta: "Nu bellen",
      priceFrom: `Aan huis in ${cityName}: vanaf ${city.homePrice.fromShort}`,
      seePricing: "Bekijk alle tarieven",
      seeTreatment: "Bekijk deze behandeling",
      ctaTitle: `Klaar om uw massage in ${cityName} te boeken?`,
      ctaText: "Eén WhatsApp-bericht en we plannen uw slot. Meestal binnen 4 uur antwoord tijdens openingsuren (maandag–zaterdag 10u–20u).",
    },
  }[safeLocale];

  // JSON-LD : Service local pour la ville (signal local très fort)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BUSINESS.baseUrl}/${safeLocale}/${city.slug}#service`,
    name: `Massage à domicile ${cityName}`,
    serviceType: "Massage therapy at home",
    provider: { "@id": `${BUSINESS.baseUrl}/#localbusiness` },
    areaServed: {
      "@type": "City",
      name: cityName,
      address: {
        "@type": "PostalAddress",
        addressLocality: cityName,
        postalCode: city.postalCode,
        addressCountry: "BE",
      },
    },
    offers: {
      "@type": "Offer",
      price: city.homePrice.from,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${BUSINESS.baseUrl}/${safeLocale}/${city.slug}`,
    },
  };

  // FAQ schema local — Google peut afficher ces 3 Q/R en SERP sur la requête ville.
  const faqSchema = t.faqLocal && t.faqLocal.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqLocal.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="bg-[#1B3A2D] text-white">
        <div className="section-wrap max-w-5xl mx-auto px-6 py-20">
          <p className="label-or !text-[#E8D4AD] mb-4">
            {safeLocale === "en" ? "At home in" : safeLocale === "nl" ? "Aan huis in" : "À domicile à"} {cityName}
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight !text-[#F3EDE4]">
            {t.hero}
          </h1>
          <p className="mt-6 text-lg !text-white/85 leading-relaxed max-w-3xl">
            {t.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <a href={BUSINESS.whatsapp} target="_blank" rel="nofollow noopener noreferrer" className="btn-whatsapp">
              {t.bookCta}
            </a>
            <a href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#E8D4AD]/60 text-[#F3EDE4] font-semibold hover:bg-white/10 transition">
              {t.callCta}
            </a>
            <span className="ml-2 text-sm text-[#E8D4AD]">{t.priceFrom}</span>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAF7]">
        <div className="section-wrap max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1B3A2D]">
            {t.sectionsTitle}
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.sections.map((s, i) => (
              <article key={i} className="rounded-2xl bg-white border border-[#E1DBD0] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1B3A2D]">{s.h}</h3>
                <p className="mt-3 text-sm text-[#595751] leading-relaxed">{s.p}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link href={`/${safeLocale}/tarifs`} className="text-sm font-semibold text-[#1B3A2D] hover:underline">
              → {t.seePricing}
            </Link>
          </div>
        </div>
      </section>

      {/* Soins les plus demandés — grille de 4 cartes cliquables avec prix.
          Apporte du maillage interne et rassure sur les options disponibles. */}
      {t.topServices && t.topServices.length > 0 && (
        <section className="bg-white">
          <div className="section-wrap max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1B3A2D]">
              {t.topServicesTitle}
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.topServices.map((s) => (
                <Link key={s.slug} href={`/${safeLocale}/${s.slug}`}
                  className="block rounded-2xl border border-[#E1DBD0] bg-[#FAFAF7] p-5 hover:border-[#B08856] hover:bg-white transition group">
                  <p className="text-sm font-semibold text-[#1B3A2D] group-hover:text-[#B08856]">
                    {s.name}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[#1B3A2D]">{s.price}</p>
                  <p className="mt-3 text-xs text-[#6B6862]">{t.seeTreatment} →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trajet & logistique depuis Halle — concrétise, rassure sur la ponctualité.
          Critique pour la conversion : élimine la friction « il va vraiment venir ? ». */}
      {t.logistics && (
        <section className="bg-[#FAFAF7]">
          <div className="section-wrap max-w-3xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1B3A2D]">
              {t.logisticsTitle}
            </h2>
            <p className="mt-6 text-[#595751] leading-relaxed">{t.logistics}</p>
          </div>
        </section>
      )}

      {/* Témoignage spécifiquement local — preuve sociale géolocalisée. */}
      {t.testimonial && (
        <section className="bg-[#1B3A2D] text-white">
          <div className="section-wrap max-w-3xl mx-auto px-6 py-20 text-center">
            <div className="text-5xl mb-4 !text-[#E8D4AD]" aria-hidden="true">&ldquo;</div>
            <blockquote className="text-xl leading-relaxed !text-white/90 italic">
              {t.testimonial.body}
            </blockquote>
            <p className="mt-6 text-sm font-semibold !text-[#E8D4AD]">
              {t.testimonial.author}
              <span className="!text-white/55 font-normal"> · {t.testimonial.area}</span>
            </p>
          </div>
        </section>
      )}

      {/* FAQ locale (3 questions) — capte les requêtes longue traîne par ville. */}
      {t.faqLocal && t.faqLocal.length > 0 && (
        <section className="bg-white">
          <div className="section-wrap max-w-3xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1B3A2D]">
              {t.faqLocalTitle}
            </h2>
            <dl className="mt-10 divide-y divide-[#E1DBD0]">
              {t.faqLocal.map((f, i) => (
                <div key={i} className="py-6 first:pt-0 last:pb-0">
                  <dt className="text-lg font-semibold text-[#1B3A2D]">{f.q}</dt>
                  <dd className="mt-2 text-[#595751] leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="bg-[#F3EDE4]">
        <div className="section-wrap max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#1B3A2D]">
            {t.ctaTitle}
          </h2>
          <p className="mt-4 text-[#595751]">{t.ctaText}</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={BUSINESS.whatsapp} target="_blank" rel="nofollow noopener noreferrer" className="btn-whatsapp">
              {t.bookCta}
            </a>
            <a href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#1B3A2D] text-[#1B3A2D] font-semibold hover:bg-[#F3EDE4] transition">
              {t.callCta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// generateMetadata helper utilisé par chacune des 3 routes /massage-<ville>.
export function buildCityMetadata(cityKey, locale) {
  const city = CITIES[cityKey];
  if (!city) return {};
  const safeLocale = locale || "fr";
  const baseUrl = BUSINESS.baseUrl;

  return {
    title: city.meta.title[safeLocale] || city.meta.title.fr,
    description: city.meta.description[safeLocale] || city.meta.description.fr,
    alternates: {
      canonical: `${baseUrl}/${safeLocale}/${city.slug}`,
      languages: {
        fr: `${baseUrl}/fr/${city.slug}`,
        en: `${baseUrl}/en/${city.slug}`,
        nl: `${baseUrl}/nl/${city.slug}`,
        "x-default": `${baseUrl}/fr/${city.slug}`,
      },
    },
    openGraph: {
      title: city.meta.title[safeLocale] || city.meta.title.fr,
      description: city.meta.description[safeLocale] || city.meta.description.fr,
      url: `${baseUrl}/${safeLocale}/${city.slug}`,
      type: "website",
      siteName: BUSINESS.name,
      locale: { fr: "fr_BE", en: "en_BE", nl: "nl_BE" }[safeLocale],
      images: [{ url: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`, width: 1200, height: 627 }],
    },
    robots: { index: true, follow: true },
  };
}
