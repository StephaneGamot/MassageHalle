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
    </>
  );
}
