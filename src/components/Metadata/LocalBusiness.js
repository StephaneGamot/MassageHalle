"use client";

export default function LocalBusinessJSONLD({ locale }) {
  const translations = {
    fr: {
      description:
        "Massages relaxant, bien-être, shiatsu et soins énergétiques à Halle – Bruxelles.",
      name: "La Voie du Bien-Être",
    },
    en: {
      description:
        "Well-being massages, shiatsu and energy treatments in Halle – Brussels.",
      name: "La Voie du Bien-Être",
    },
    nl: {
      description:
        "Wellnessmassages, shiatsu en energetische behandelingen in Halle – Brussel.",
      name: "La Voie du Bien-Être",
    },
  };

  const data = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://lavoiedubienetre.be/#localbusiness",
    name: translations[locale].name,
    description: translations[locale].description,
    url: `https://lavoiedubienetre.be/${locale}`,
    image: "https://lavoiedubienetre.be/Images/OpenGraph/accueil-massage-halle.webp",
    telephone: "+32477131993",

    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Bancontact, Virement bancaire",

    hasMap: "https://www.google.com/maps/place/La+Voie+du+Bien-%C3%8Atre/@50.7464695,4.2563906,17z",

    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.7464695",
      longitude: "4.2563906",
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: "Octave de Kerchove d'Exaerdestraat 193",
      addressLocality: "Halle",
      postalCode: "1501",
      addressRegion: "Vlaams-Brabant",
      addressCountry: "BE",
    },

    areaServed: [
      { "@type": "City", name: "Halle" },
      { "@type": "City", name: "Bruxelles" },
      { "@type": "City", name: "Waterloo" },
      { "@type": "City", name: "Uccle" },
      { "@type": "City", name: "Braine-l'Alleud" },
      { "@type": "City", name: "Dilbeek" },
      { "@type": "City", name: "Tubize" },
      { "@type": "City", name: "Rhode-Saint-Genèse" },
      { "@type": "City", name: "Enghien" },
      { "@type": "City", name: "Leerbeek" },
    ],

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],

    sameAs: [
      "https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/",
      "https://www.youtube.com/@lavoiedubien-etre",
    ],
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
}
