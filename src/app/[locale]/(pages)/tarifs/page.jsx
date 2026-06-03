import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { BUSINESS } from "@/data/business";
import { PRICING, HOME_NOTE, CURRENCY } from "@/data/pricing";

const baseUrl = BUSINESS.baseUrl;

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  const title = {
    fr: "Tarifs massages Hal & Bruxelles — Cabinet et à domicile dès 80 €",
    en: "Massage prices Halle & Brussels — Studio and at-home from €80",
    nl: "Massage tarieven Halle & Brussel — Praktijk en aan huis vanaf 80 €",
  }[currentLocale];

  const description = {
    fr: "Tarifs clairs pour massage relaxant, shiatsu, reiki, deep-tissue — en cabinet à Hal ou à domicile. 60 min dès 80 €, paiement Bancontact, espèces ou virement.",
    en: "Clear pricing for relaxing massage, shiatsu, reiki, deep-tissue — in Halle studio or at home. 60 min from €80, payment by Bancontact, cash or transfer.",
    nl: "Duidelijke tarieven voor ontspanningsmassage, shiatsu, reiki, deep-tissue — in praktijk Halle of aan huis. 60 min vanaf 80 €, betaling Bancontact, cash of overschrijving.",
  }[currentLocale];

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/tarifs`,
      languages: {
        fr: `${baseUrl}/fr/tarifs`,
        en: `${baseUrl}/en/tarifs`,
        nl: `${baseUrl}/nl/tarifs`,
        "x-default": `${baseUrl}/fr/tarifs`,
      },
    },
    openGraph: {
      title, description,
      url: `${baseUrl}/${currentLocale}/tarifs`,
      type: "website",
      siteName: BUSINESS.name,
      locale: { fr: "fr_BE", en: "en_BE", nl: "nl_BE" }[currentLocale],
      images: [{
        url: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`,
        width: 1200, height: 627,
      }],
    },
    robots: { index: true, follow: true },
  };
}

const TXT = {
  fr: {
    h1: "Tarifs — clairs, sans surprise",
    intro: "Voici la grille complète. Pas de carte de fidélité cachée, pas de supplément invisible : ce que vous voyez est ce que vous payez. Paiement par Bancontact, virement ou espèces.",
    treatment: "Soin",
    duration: "Durée",
    cabinet: "En cabinet (Halle)",
    home: "À domicile",
    homeUnavailable: "—",
    seeService: "Voir le soin",
    bookCta: "Réserver par WhatsApp",
    callCta: "Appeler 04 77 13 19 93",
    gift: "Cartes-cadeaux disponibles à partir de 80 € — voir la page dédiée.",
    paymentTitle: "Modes de paiement",
    paymentList: "Bancontact · espèces · virement · chèques cadeaux",
    cancelTitle: "Annulation",
    cancelText: "Toute annulation 24 h à l'avance est gratuite. En deçà, la séance peut être facturée.",
  },
  en: {
    h1: "Prices — clear and upfront",
    intro: "Here's the full price grid. No hidden loyalty card, no invisible surcharge: what you see is what you pay. Payment by card, Bancontact, transfer or cash.",
    treatment: "Treatment",
    duration: "Duration",
    cabinet: "In studio (Halle)",
    home: "At your home",
    homeUnavailable: "—",
    seeService: "See the treatment",
    bookCta: "Book by WhatsApp",
    callCta: "Call +32 477 13 19 93",
    gift: "Gift cards available from €80 — see the dedicated page.",
    paymentTitle: "Payment methods",
    paymentList: "Bancontact · cash · transfer · gift vouchers",
    cancelTitle: "Cancellation",
    cancelText: "Free cancellation up to 24h before the appointment. Below that, the session may be charged.",
  },
  nl: {
    h1: "Tarieven — duidelijk en eerlijk",
    intro: "Hier is het volledige prijsoverzicht. Geen verborgen klantenkaart, geen onzichtbare toeslag: wat u ziet is wat u betaalt. Betaling met Bancontact, overschrijving of cash.",
    treatment: "Behandeling",
    duration: "Duur",
    cabinet: "In de praktijk (Halle)",
    home: "Aan huis",
    homeUnavailable: "—",
    seeService: "Bekijk de behandeling",
    bookCta: "Boek via WhatsApp",
    callCta: "Bel +32 477 13 19 93",
    gift: "Cadeaubonnen verkrijgbaar vanaf 80 € — zie de speciale pagina.",
    paymentTitle: "Betaalmethoden",
    paymentList: "Bancontact · cash · overschrijving · cadeaubonnen",
    cancelTitle: "Annulering",
    cancelText: "Gratis annulering tot 24u voor de afspraak. Daarna kan de sessie aangerekend worden.",
  },
};

// JSON-LD — Service avec PriceSpecification pour chaque ligne.
// Bénéfice SEO : Google peut afficher le prix directement dans la SERP.
function PricingJsonLd({ locale }) {
  const offers = PRICING.flatMap((svc) =>
    svc.options.map((opt) => ({
      "@type": "Offer",
      name: `${svc.name[locale] || svc.name.fr} — ${opt.duration} min`,
      priceCurrency: CURRENCY,
      price: opt.cabinet,
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/${locale}/${svc.slug}`,
    }))
  );
  const schema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "@id": `${baseUrl}/${locale}/tarifs#prices`,
    name: TXT[locale]?.h1 || TXT.fr.h1,
    priceCurrency: CURRENCY,
    priceComponent: offers,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function TarifsPage(props) {
  const { params } = props;
  const { locale } = await params;
  const tx = TXT[locale] || TXT.fr;

  return (
    <>
      <PricingJsonLd locale={locale} />

      <section className="bg-[#FAFAF7]">
        <div className="section-wrap max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1B3A2D]">
            {tx.h1}
          </h1>
          <p className="mt-6 text-lg text-[#595751] leading-relaxed max-w-3xl">
            {tx.intro}
          </p>

          {/* Tableau de prix — responsive : cartes en mobile, table en desktop */}
          <div className="mt-12">
            {/* Desktop */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-[#E1DBD0] bg-white shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-[#1B3A2D] text-white">
                  <tr>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold">{tx.treatment}</th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold w-28">{tx.duration}</th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold w-40 text-right">{tx.cabinet}</th>
                    <th scope="col" className="px-5 py-4 text-sm font-semibold w-40 text-right">{tx.home}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1DBD0]">
                  {PRICING.map((svc) =>
                    svc.options.map((opt, i) => (
                      <tr key={`${svc.slug}-${opt.duration}`} className="hover:bg-[#F3EDE4]/50">
                        <td className="px-5 py-4 text-sm">
                          {i === 0 ? (
                            <Link
                              href={`/${locale}/${svc.slug}`}
                              className="font-semibold text-[#1B3A2D] hover:underline"
                            >
                              {svc.name[locale] || svc.name.fr}
                            </Link>
                          ) : (
                            <span className="text-[#6B6862]">↳</span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-sm text-[#595751]">{opt.duration} min</td>
                        <td className="px-5 py-4 text-right font-semibold text-[#1B3A2D]">
                          {opt.cabinet} €
                        </td>
                        <td className="px-5 py-4 text-right text-[#595751]">
                          {opt.home ? `${opt.home} €` : tx.homeUnavailable}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile — empilé en cartes */}
            <ul className="md:hidden space-y-4">
              {PRICING.map((svc) => (
                <li key={svc.slug} className="rounded-2xl border border-[#E1DBD0] bg-white p-5">
                  <Link href={`/${locale}/${svc.slug}`} className="font-semibold text-[#1B3A2D] hover:underline">
                    {svc.name[locale] || svc.name.fr}
                  </Link>
                  <dl className="mt-3 divide-y divide-[#F3EDE4] text-sm">
                    {svc.options.map((opt) => (
                      <div key={opt.duration} className="flex justify-between items-center py-2">
                        <dt className="text-[#595751]">{opt.duration} min</dt>
                        <dd className="flex gap-3 font-medium">
                          <span className="text-[#1B3A2D]">{opt.cabinet} €</span>
                          {opt.home && <span className="text-[#6B6862]">/ {opt.home} € {tx.home.toLowerCase()}</span>}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-sm text-[#6B6862] italic">{HOME_NOTE[locale] || HOME_NOTE.fr}</p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a href={BUSINESS.whatsapp} target="_blank" rel="nofollow noopener noreferrer" className="btn-whatsapp">
              {tx.bookCta}
            </a>
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#1B3A2D] text-[#1B3A2D] font-semibold hover:bg-[#F3EDE4] transition">
              {tx.callCta}
            </a>
          </div>

          {/* Bloc gift + paiement + annulation */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#F3EDE4] p-6">
              <p className="text-sm font-semibold text-[#1B3A2D] mb-2">🎁</p>
              <p className="text-sm text-[#595751]">{tx.gift}</p>
              <Link href={`/${locale}/cartes-cadeaux`} className="mt-3 inline-block text-sm font-semibold text-[#1B3A2D] hover:underline">
                → {locale === "en" ? "Gift cards" : locale === "nl" ? "Cadeaubonnen" : "Cartes-cadeaux"}
              </Link>
            </div>
            <div className="rounded-2xl bg-white border border-[#E1DBD0] p-6">
              <p className="text-sm font-semibold text-[#1B3A2D] mb-2">{tx.paymentTitle}</p>
              <p className="text-sm text-[#595751]">{tx.paymentList}</p>
            </div>
            <div className="rounded-2xl bg-white border border-[#E1DBD0] p-6">
              <p className="text-sm font-semibold text-[#1B3A2D] mb-2">{tx.cancelTitle}</p>
              <p className="text-sm text-[#595751]">{tx.cancelText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
