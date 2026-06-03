import { BUSINESS } from "@/data/business";
import { GIFT_CARDS, CURRENCY } from "@/data/pricing";

const baseUrl = BUSINESS.baseUrl;

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  const title = {
    fr: "Cartes-cadeaux massage — Offrez un instant de bien-être à Hal & Bruxelles",
    en: "Gift cards — Offer a wellness moment in Halle & Brussels",
    nl: "Cadeaubonnen — Schenk een welzijnsmoment in Halle & Brussel",
  }[currentLocale];

  const description = {
    fr: "Cartes-cadeaux massage de 80 € à 150 €. Personnalisées, envoyées par email en PDF ou imprimées. Le cadeau parfait : anniversaire, Saint-Valentin, fête des mères.",
    en: "Massage gift cards from €80 to €150. Personalized, sent as PDF by email or printed. The perfect gift: birthday, Valentine's Day, Mother's Day.",
    nl: "Massage cadeaubonnen van 80 € tot 150 €. Gepersonaliseerd, per e-mail als PDF of gedrukt. Het perfecte cadeau: verjaardag, Valentijn, Moederdag.",
  }[currentLocale];

  return {
    title, description,
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/cartes-cadeaux`,
      languages: {
        fr: `${baseUrl}/fr/cartes-cadeaux`,
        en: `${baseUrl}/en/cartes-cadeaux`,
        nl: `${baseUrl}/nl/cartes-cadeaux`,
        "x-default": `${baseUrl}/fr/cartes-cadeaux`,
      },
    },
    openGraph: {
      title, description,
      url: `${baseUrl}/${currentLocale}/cartes-cadeaux`,
      type: "website", siteName: BUSINESS.name,
      locale: { fr: "fr_BE", en: "en_BE", nl: "nl_BE" }[currentLocale],
      images: [{ url: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`, width: 1200, height: 627 }],
    },
    robots: { index: true, follow: true },
  };
}

const TXT = {
  fr: {
    h1: "Cartes-cadeaux — un geste qui fait du bien",
    intro: "Offrir un massage, c'est offrir du temps, du calme et de l'attention. Trois formules au choix — toutes personnalisables avec un mot de votre part.",
    valid: "Valable 12 mois · Utilisable en cabinet ou à domicile",
    order: "Commander cette carte",
    chosenWa: "Bonjour, je souhaite offrir une carte-cadeau « {label} » ({amount} €). Pourriez-vous me dire comment procéder ?",
    delivery: "Livraison : PDF personnalisé par email (24 h) ou version imprimée à retirer en cabinet.",
    payment: "Paiement par virement, Bancontact, Visa ou espèces.",
    extraH2: "Vous voulez un autre montant ?",
    extra: "Je peux préparer une carte sur mesure pour le montant de votre choix. Écrivez-moi par WhatsApp ou par email.",
  },
  en: {
    h1: "Gift cards — a gesture that does good",
    intro: "Giving a massage is giving time, calm and attention. Three options to choose from — all customizable with a personal note.",
    valid: "Valid 12 months · Usable in studio or at home",
    order: "Order this card",
    chosenWa: "Hello, I would like to offer a gift card « {label} » ({amount} €). Could you tell me how to proceed?",
    delivery: "Delivery: personalized PDF by email (24h) or printed version to pick up at the studio.",
    payment: "Payment by transfer, Bancontact, Visa or cash.",
    extraH2: "Want a different amount?",
    extra: "I can prepare a custom card for the amount of your choice. Write to me via WhatsApp or email.",
  },
  nl: {
    h1: "Cadeaubonnen — een gebaar dat goed doet",
    intro: "Een massage cadeau geven is tijd, rust en aandacht schenken. Drie formules ter keuze — allemaal personaliseerbaar met een persoonlijk woord.",
    valid: "Geldig 12 maanden · Bruikbaar in praktijk of aan huis",
    order: "Deze bon bestellen",
    chosenWa: "Hallo, ik wil een cadeaubon « {label} » ({amount} €) aanbieden. Hoe gaan we verder?",
    delivery: "Levering: gepersonaliseerde PDF per e-mail (24u) of gedrukt op te halen in de praktijk.",
    payment: "Betaling via overschrijving, Bancontact, Visa of cash.",
    extraH2: "Wilt u een ander bedrag?",
    extra: "Ik kan een cadeaubon op maat maken voor het bedrag van uw keuze. Schrijf me via WhatsApp of e-mail.",
  },
};

export default async function GiftCardsPage(props) {
  const { params } = props;
  const { locale } = await params;
  const tx = TXT[locale] || TXT.fr;

  // JSON-LD : Product avec Offers pour chaque montant → résultat enrichi Google.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: { fr: "Carte-cadeau massage La Voie du Bien-Être",
            en: "La Voie du Bien-Être massage gift card",
            nl: "La Voie du Bien-Être massage cadeaubon" }[locale] || "Carte-cadeau massage",
    description: TXT[locale]?.intro || TXT.fr.intro,
    brand: { "@type": "Brand", name: BUSINESS.name },
    offers: GIFT_CARDS.map((g) => ({
      "@type": "Offer",
      name: g.label[locale] || g.label.fr,
      price: g.amount,
      priceCurrency: CURRENCY,
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/${locale}/cartes-cadeaux`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <section className="bg-[#FAFAF7]">
        <div className="section-wrap max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#1B3A2D]">
            {tx.h1}
          </h1>
          <p className="mt-6 text-lg text-[#595751] leading-relaxed max-w-3xl">
            {tx.intro}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {GIFT_CARDS.map((g) => {
              const waText = (tx.chosenWa
                .replace("{label}", g.label[locale] || g.label.fr)
                .replace("{amount}", String(g.amount)));
              const waHref = `${BUSINESS.whatsapp}?text=${encodeURIComponent(waText)}`;
              return (
                <article key={g.amount}
                  className="relative rounded-3xl bg-gradient-to-br from-[#1B3A2D] to-[#2d5a45] p-7 text-white shadow-lg overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#E8D4AD]/15" aria-hidden="true" />
                  <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#B08856]/15" aria-hidden="true" />
                  <div className="relative">
                    <p className="text-xs uppercase tracking-widest text-[#E8D4AD]">{BUSINESS.name}</p>
                    <p className="mt-2 text-5xl font-semibold">{g.amount} €</p>
                    <p className="mt-1 text-lg font-medium text-[#E8D4AD]">
                      {g.label[locale] || g.label.fr}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed !text-white/85">
                      {g.desc[locale] || g.desc.fr}
                    </p>
                    <p className="mt-6 text-xs italic !text-white/60">{tx.valid}</p>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E8D4AD] px-5 py-2.5 text-sm font-semibold text-[#1B3A2D] hover:bg-white transition"
                    >
                      {tx.order}
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white border border-[#E1DBD0] p-6">
              <p className="text-sm text-[#595751]">{tx.delivery}</p>
              <p className="mt-2 text-sm text-[#595751]">{tx.payment}</p>
            </div>
            <div className="rounded-2xl bg-[#F3EDE4] p-6">
              <p className="text-sm font-semibold text-[#1B3A2D] mb-2">{tx.extraH2}</p>
              <p className="text-sm text-[#595751]">{tx.extra}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href={BUSINESS.whatsapp} target="_blank" rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1eb558] transition">
                  WhatsApp
                </a>
                <a href={`mailto:${BUSINESS.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#1B3A2D] px-4 py-2 text-sm font-semibold text-[#1B3A2D] hover:bg-white transition">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
