// src/components/Metadata/MassageServiceJSONLD.jsx

const baseUrl = "https://lavoiedubienetre.be";

const SUPPORTED_LOCALES = ["fr", "en", "nl"];

// Zone desservie : réutilisée pour tous les services
const AREA_SERVED = [
  {
    "@type": "City",
    name: "Halle",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Halle",
      postalCode: "1501",
      addressCountry: "BE",
    },
  },
  {
    "@type": "City",
    name: "Bruxelles",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bruxelles",
      addressCountry: "BE",
    },
  },
  {
    "@type": "City",
    name: "Braine-l'Alleud",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Braine-l'Alleud",
      addressCountry: "BE",
    },
  },
];

// Offres génériques : 1h et 1h30, à partir de 80€ / 120€
// Le "à partir de" sera dans tes textes de page.
// Ici on met juste le prix de base.
const BASE_OFFERS = [
  {
    key: "60",
    prices: {
      fr: "80",
      en: "80",
      nl: "80",
    },
    names: {
      fr: "Séance 60 minutes",
      en: "60-minute session",
      nl: "Sessie van 60 minuten",
    },
    isoDuration: "PT60M",
  },
  {
    key: "90",
    prices: {
      fr: "120",
      en: "120",
      nl: "120",
    },
    names: {
      fr: "Séance 90 minutes",
      en: "90-minute session",
      nl: "Sessie van 90 minuten",
    },
    isoDuration: "PT90M",
  },
];

// ⚠️ IMPORTANT : les `path` doivent matcher EXACTEMENT tes routes :
// /[locale]/massage/relaxant
// /[locale]/massage/shiatsu
// /[locale]/massage/sportif
// /[locale]/massage/tao
// /[locale]/massage/deep-tissues
// /[locale]/massage/douceur-dorsale
// /[locale]/massage/a-domicile
// /[locale]/massage/reiki
const massageServices = {
  relaxant: {
    path: "relaxant",
    names: {
      fr: "Massage relaxant",
      en: "Relaxing massage",
      nl: "Ontspanningsmassage",
    },
    descriptions: {
      fr: "Un massage relaxant doux et enveloppant pour relâcher le stress et les tensions et retrouver une sensation de calme profond.",
      en: "A gentle, relaxing massage to release stress and tension and restore a deep sense of calm.",
      nl: "Een zachte, ontspannende massage om stress en spanning los te laten en weer diepe rust te vinden.",
    },
    keywords: {
      fr: [
        "massage relaxant Halle",
        "massage bien-être Halle",
        "massage détente Bruxelles",
      ],
      en: [
        "relaxing massage Halle",
        "wellbeing massage Brussels",
      ],
      nl: [
        "ontspanningsmassage Halle",
        "wellness massage Brussel",
      ],
    },
  },

  shiatsu: {
    path: "shiatsu",
    names: {
      fr: "Shiatsu",
      en: "Shiatsu",
      nl: "Shiatsu",
    },
    descriptions: {
      fr: "Un soin énergétique japonais par pressions et étirements pour harmoniser la circulation de l'énergie dans le corps.",
      en: "A Japanese energy treatment using pressure and stretching techniques to harmonize the body’s energy flow.",
      nl: "Een Japanse energetische behandeling met druk- en stretchtechnieken om de energiestroom in het lichaam te harmoniseren.",
    },
    keywords: {
      fr: [
        "shiatsu Halle",
        "shiatsu Bruxelles",
        "soin énergétique Halle",
      ],
      en: [
        "shiatsu Halle",
        "shiatsu Brussels",
      ],
      nl: [
        "shiatsu Halle",
        "shiatsu Brussel",
      ],
    },
  },

  sportif: {
    path: "sportif",
    names: {
      fr: "Massage sportif",
      en: "Sports massage",
      nl: "Sportmassage",
    },
    descriptions: {
      fr: "Un massage ciblé pour soulager les tensions musculaires liées au sport, aux efforts physiques ou au travail répétitif.",
      en: "A targeted massage to relieve muscle tension caused by sports, physical exertion or repetitive work.",
      nl: "Een gerichte massage om spierspanning door sport, fysieke inspanning of repetitief werk te verlichten.",
    },
    keywords: {
      fr: [
        "massage sportif Halle",
        "récupération musculaire massage",
      ],
      en: [
        "sports massage Halle",
        "muscle recovery massage",
      ],
      nl: [
        "sportmassage Halle",
        "spierherstel massage",
      ],
    },
  },

  tao: {
    path: "tao",
    names: {
      fr: "Massage tao",
      en: "Tao massage",
      nl: "Tao-massage",
    },
    descriptions: {
      fr: "Un massage d'inspiration taoïste, fluide et enveloppant, pour reconnecter le corps, le souffle et les sensations.",
      en: "A Tao-inspired massage with fluid and enveloping strokes to reconnect body, breath and sensations.",
      nl: "Een Tao-geïnspireerde massage met vloeiende, omhullende bewegingen om lichaam, adem en gevoel te verbinden.",
    },
    keywords: {
      fr: [
        "massage tao Halle",
        "massage énergétique tao",
      ],
      en: [
        "tao massage Halle",
      ],
      nl: [
        "tao massage Halle",
      ],
    },
  },

  deepTissue: {
    path: "deep-tissues",
    names: {
      fr: "Massage deep-tissue",
      en: "Deep tissue massage",
      nl: "Deep tissue massage",
    },
    descriptions: {
      fr: "Un massage en profondeur pour travailler les muscles et les tensions chroniques, tout en respectant vos limites.",
      en: "A deep, targeted massage to work on muscles and chronic tension while respecting your limits.",
      nl: "Een diepgaande massage om spieren en chronische spanning te behandelen, met respect voor jouw grenzen.",
    },
    keywords: {
      fr: [
        "deep tissue Halle",
        "massage en profondeur Halle",
      ],
      en: [
        "deep tissue massage Halle",
      ],
      nl: [
        "deep tissue massage Halle",
      ],
    },
  },

  douceurDorsale: {
    path: "douceur-dorsale",
    names: {
      fr: "Massage douceur dorsale",
      en: "Back relaxation massage",
      nl: "Rug ontspanningsmassage",
    },
    descriptions: {
      fr: "Un massage ciblé sur la nuque, les épaules et le dos pour relâcher les tensions accumulées au quotidien.",
      en: "A massage focused on neck, shoulders and back to release everyday built-up tension.",
      nl: "Een massage gericht op nek, schouders en rug om dagelijkse spanning los te laten.",
    },
    keywords: {
      fr: [
        "massage dos Halle",
        "massage nuque épaules Halle",
      ],
      en: [
        "back massage Halle",
      ],
      nl: [
        "rugmassage Halle",
      ],
    },
  },

  domicile: {
    path: "a-domicile",
    names: {
      fr: "Massage à domicile",
      en: "Home massage",
      nl: "Massage aan huis",
    },
    descriptions: {
      fr: "Un massage relaxant ou énergétique directement chez vous, à Halle, Bruxelles et Brabant wallon.",
      en: "A relaxing or energy-balancing massage directly at your home in Halle, Brussels and Walloon Brabant.",
      nl: "Een ontspannende of energetische massage bij jou thuis in Halle, Brussel en Waals-Brabant.",
    },
    keywords: {
      fr: [
        "massage à domicile Halle",
        "massage à domicile Bruxelles",
      ],
      en: [
        "home massage Halle",
        "home massage Brussels",
      ],
      nl: [
        "massage aan huis Halle",
        "massage aan huis Brussel",
      ],
    },
  },

  reiki: {
    path: "reiki",
    names: {
      fr: "Reiki",
      en: "Reiki",
      nl: "Reiki",
    },
    descriptions: {
      fr: "Un soin énergétique doux par appositions des mains pour favoriser la détente et l'harmonisation globale.",
      en: "A gentle energy treatment using hands-on techniques to promote relaxation and overall balance.",
      nl: "Een zachte energetische behandeling met handoplegging om ontspanning en algemene harmonie te bevorderen.",
    },
    keywords: {
      fr: [
        "reiki Halle",
        "soin énergétique reiki",
      ],
      en: [
        "reiki Halle",
        "reiki Brussels",
      ],
      nl: [
        "reiki Halle",
        "reiki Brussel",
      ],
    },
  },
};

export default function MassageServiceJSONLD({ slug, locale = "fr" }) {
  const service = massageServices[slug];

  if (!service) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[MassageServiceJSONLD] Aucun service trouvé pour le slug "${slug}"`
      );
    }
    return null;
  }

  const currentLocale = SUPPORTED_LOCALES.includes(locale) ? locale : "fr";

  const servicePath = `/${currentLocale}/massage/${service.path}`;
  const url = `${baseUrl}${servicePath}`;

  // Id du LocalBusiness (doit matcher celui que tu utilises dans LocalBusinessJsonLd)
  const localBusinessId = `${baseUrl}/${currentLocale}#local-business`;

  // Construction des offres (1h et 1h30)
  const offers = BASE_OFFERS.map((offer) => ({
    "@type": "Offer",
    name: offer.names[currentLocale],
    price: offer.prices[currentLocale],
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.names[currentLocale],
    description: service.descriptions[currentLocale],
    url,
    serviceType: "Massage therapy",
    category: "HealthAndBeauty",
    areaServed: AREA_SERVED,
    provider: {
      "@type": "LocalBusiness",
      "@id": localBusinessId,
      name: "La Voie du Bien-Être",
      url: `${baseUrl}/${currentLocale}`,
      telephone: "+32477131993",
      priceRange: "€€",
      address: BUSINESS_ADDRESS,
      image: [
        "https://lavoiedubienetre.be/Images/OpenGraph/accueil-massage-halle.webp",
      ],
    },
    keywords: service.keywords[currentLocale],
    offers,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

