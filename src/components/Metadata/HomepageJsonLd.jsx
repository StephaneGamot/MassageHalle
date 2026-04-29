"use client";

export default function HomepageJsonLd({ locale }) {
  const baseUrl = "https://lavoiedubienetre.be";

  const breadcrumbLabels = {
    fr: "Accueil",
    en: "Home",
    nl: "Startpagina",
  };

  const siteDescriptions = {
    fr: "Massages bien-être, shiatsu, reiki et soins thérapeutiques à Hal et Bruxelles. En cabinet ou à domicile.",
    en: "Wellness massages, shiatsu, reiki and therapeutic treatments in Halle and Brussels. In-studio or at home.",
    nl: "Wellnessmassages, shiatsu, reiki en therapeutische behandelingen in Halle en Brussel. In de praktijk of aan huis.",
  };

  // ─── BreadcrumbList ───
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: breadcrumbLabels[locale] || breadcrumbLabels.fr,
        item: `${baseUrl}/${locale || "fr"}`,
      },
    ],
  };

  // ─── WebSite (avec SearchAction pour la sitelinks search box) ───
  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "La Voie du Bien-Être",
    alternateName: "Massage Bien-Être Hal",
    url: baseUrl,
    description: siteDescriptions[locale] || siteDescriptions.fr,
    inLanguage: {
      fr: "fr-BE",
      en: "en-BE",
      nl: "nl-BE",
    }[locale] || "fr-BE",
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "La Voie du Bien-Être",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`,
        width: 1200,
        height: 627,
      },
    },
  };

  // ─── WebPage ───
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/${locale || "fr"}#webpage`,
    url: `${baseUrl}/${locale || "fr"}`,
    name: {
      fr: "Massage bien-être à Hal | La Voie du Bien-Être",
      en: "Wellness Massage in Halle | La Voie du Bien-Être",
      nl: "Wellnessmassage in Halle | La Voie du Bien-Être",
    }[locale] || "Massage bien-être à Hal | La Voie du Bien-Être",
    description: siteDescriptions[locale] || siteDescriptions.fr,
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#localbusiness` },
    inLanguage: {
      fr: "fr-BE",
      en: "en-BE",
      nl: "nl-BE",
    }[locale] || "fr-BE",
  };

  // ─── ItemList (catalogue de services → carousel Google) ───
  const serviceItems = {
    fr: [
      { name: "Massage relaxant", path: "/massage/relaxant", desc: "Détente profonde et relâchement du stress" },
      { name: "Massage sportif", path: "/massage/sportif", desc: "Récupération musculaire et performance" },
      { name: "Shiatsu", path: "/shiatsu", desc: "Équilibre énergétique japonais" },
      { name: "Reiki", path: "/reiki", desc: "Harmonisation par l'énergie universelle" },
      { name: "Massage Tao", path: "/massage/tao", desc: "Reconnexion corps, souffle et sensations" },
      { name: "Massage à domicile", path: "/massage/a-domicile", desc: "Le bien-être directement chez vous" },
      { name: "Réflexologie plantaire", path: "/reflexologie-plantaire", desc: "Rééquilibrage par les zones réflexes" },
      { name: "Massage deep-tissue", path: "/massage/deep-tissues", desc: "Travail en profondeur des tensions chroniques" },
      { name: "Douceur dorsale", path: "/massage/douceur-dorsale", desc: "Soulagement nuque, dos et épaules" },
      { name: "Massage anti-cellulite", path: "/massage/anti-cellulite", desc: "Raffermissement et silhouette harmonieuse" },
      { name: "Voyage des sens", path: "/massage/voyage-des-sens", desc: "Lâcher-prise sensoriel total" },
      { name: "Thérapie cranio-sacrée", path: "/therapie-cranio-sacree", desc: "Libération des tensions du système nerveux" },
    ],
    en: [
      { name: "Relaxing massage", path: "/massage/relaxant", desc: "Deep relaxation and stress relief" },
      { name: "Sports massage", path: "/massage/sportif", desc: "Muscle recovery and performance" },
      { name: "Shiatsu", path: "/shiatsu", desc: "Japanese energy balancing" },
      { name: "Reiki", path: "/reiki", desc: "Universal energy harmonization" },
      { name: "Tao massage", path: "/massage/tao", desc: "Body, breath and sensation reconnection" },
      { name: "Home massage", path: "/massage/a-domicile", desc: "Wellness right at your doorstep" },
      { name: "Foot reflexology", path: "/reflexologie-plantaire", desc: "Rebalancing through reflex zones" },
      { name: "Deep tissue massage", path: "/massage/deep-tissues", desc: "Deep work on chronic tensions" },
      { name: "Back relaxation", path: "/massage/douceur-dorsale", desc: "Neck, back and shoulder relief" },
      { name: "Anti-cellulite massage", path: "/massage/anti-cellulite", desc: "Firming and harmonious silhouette" },
      { name: "Sensory journey", path: "/massage/voyage-des-sens", desc: "Total sensory letting go" },
      { name: "Craniosacral therapy", path: "/therapie-cranio-sacree", desc: "Nervous system tension release" },
    ],
    nl: [
      { name: "Ontspanningsmassage", path: "/massage/relaxant", desc: "Diepe ontspanning en stressverlichting" },
      { name: "Sportmassage", path: "/massage/sportif", desc: "Spierherstel en prestaties" },
      { name: "Shiatsu", path: "/shiatsu", desc: "Japanse energiebalancering" },
      { name: "Reiki", path: "/reiki", desc: "Universele energieharmonisatie" },
      { name: "Tao-massage", path: "/massage/tao", desc: "Lichaam, adem en gevoel herverbinden" },
      { name: "Thuismassage", path: "/massage/a-domicile", desc: "Welzijn direct bij u thuis" },
      { name: "Voetreflexologie", path: "/reflexologie-plantaire", desc: "Herbalancering via reflexzones" },
      { name: "Deep tissue massage", path: "/massage/deep-tissues", desc: "Diep werk op chronische spanningen" },
      { name: "Rugontspanning", path: "/massage/douceur-dorsale", desc: "Verlichting nek, rug en schouders" },
      { name: "Anti-cellulite massage", path: "/massage/anti-cellulite", desc: "Versteviging en harmonieus silhouet" },
      { name: "Zintuigenreis", path: "/massage/voyage-des-sens", desc: "Totaal zintuiglijk loslaten" },
      { name: "Craniosacrale therapie", path: "/therapie-cranio-sacree", desc: "Loslaten van zenuwspanning" },
    ],
  };

  const items = serviceItems[locale] || serviceItems.fr;
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: {
      fr: "Nos massages et soins thérapeutiques",
      en: "Our massages and therapeutic treatments",
      nl: "Onze massages en therapeutische behandelingen",
    }[locale] || "Nos massages et soins thérapeutiques",
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      description: item.desc,
      url: `${baseUrl}/${locale || "fr"}${item.path}`,
    })),
  };

  // ─── Reviews (individuels + agrégé) ───
  const reviews = {
    fr: [
      { author: "Sophie WB", body: "Un pur moment de calme et de chaleur humaine. Merci pour cette bulle de bien-être." },
      { author: "Alexandre Jansens", body: "J'ai rarement connu un massage aussi réconfortant. Chaque geste semblait venir du cœur." },
      { author: "Karine Renard", body: "Dès que je suis allongée sur la table, je sens que je peux lâcher prise. J'ai ressenti un vrai relâchement du stress." },
      { author: "Thierry Bierze", body: "Ma tension musculaire s'est envolée. À refaire très vite ! J'ai rarement été aussi bien accueilli et massé." },
      { author: "Chloé Peters", body: "C'était bien plus qu'un massage, c'était un soin de l'âme. Un vrai moment de réconfort." },
    ],
    en: [
      { author: "Sophie WB", body: "A pure moment of calm and human warmth. Thank you for this wellness bubble." },
      { author: "Alexandre Jansens", body: "I have rarely experienced such a comforting massage. Every gesture seemed to come from the heart." },
      { author: "Karine Renard", body: "As soon as I lay on the table, I felt I could let go. Real stress relief from the first minutes." },
      { author: "Thierry Bierze", body: "My muscle tension vanished. A must-do again! I have rarely been so well welcomed and massaged." },
      { author: "Chloé Peters", body: "It was much more than a massage, it was a soul treatment. A true moment of comfort." },
    ],
    nl: [
      { author: "Sophie WB", body: "Een puur moment van rust en menselijke warmte. Bedankt voor deze wellness-bubbel." },
      { author: "Alexandre Jansens", body: "Ik heb zelden zo'n troostende massage meegemaakt. Elk gebaar leek uit het hart te komen." },
      { author: "Karine Renard", body: "Zodra ik op de tafel lag, voelde ik dat ik kon loslaten. Echte stressverlichting." },
      { author: "Thierry Bierze", body: "Mijn spierspanning verdween. Zeker opnieuw doen! Zelden zo goed ontvangen en gemasseerd." },
      { author: "Chloé Peters", body: "Het was veel meer dan een massage, het was een zorg voor de ziel. Een waar moment van troost." },
    ],
  };

  const localReviews = reviews[locale] || reviews.fr;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: "La Voie du Bien-Être",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
    review: localReviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewBody: r.body,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  );
}
