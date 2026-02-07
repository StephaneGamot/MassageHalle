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
    telephone: "+32 488 98 51 13",

    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Bancontact",

    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.7464695",
      longitude: "4.2563906",
    },

    address: {
      "@type": "PostalAddress",
      streetAddress: "Oct de kerchove d'exaerdestraat 193",
      addressLocality: "Halle",
      postalCode: "1501",
      addressCountry: "BE",
    },

    areaServed: ["Halle", "Bruxelles", "Tubize", "Braine-l'Alleud", "Dilbeek"],

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
        closes: "18:00",
      },
    ],

    sameAs: [
      "https://www.facebook.com/lavoiedubienetre",
      "https://www.instagram.com/lavoiedubienetre",
      "https://lavoiedubienetre.be",
    ],
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(data)}
    </script>
  );
}
