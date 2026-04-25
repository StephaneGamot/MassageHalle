// src/components/Metadata/MassageServiceJSONLD.jsx

const baseUrl = "https://lavoiedubienetre.be";

const SUPPORTED_LOCALES = ["fr", "en", "nl"];

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

const BASE_OFFERS = [
  {
    key: "60",
    prices: { fr: "80", en: "80", nl: "80" },
    names: {
      fr: "Seance 60 minutes",
      en: "60-minute session",
      nl: "Sessie van 60 minuten",
    },
  },
  {
    key: "90",
    prices: { fr: "120", en: "120", nl: "120" },
    names: {
      fr: "Seance 90 minutes",
      en: "90-minute session",
      nl: "Sessie van 90 minuten",
    },
  },
];

const massageServices = {
  relaxant: {
    path: "relaxant",
    names: {
      fr: "Massage relaxant",
      en: "Relaxing massage",
      nl: "Ontspanningsmassage",
    },
    descriptions: {
      fr: "Un massage relaxant doux et enveloppant pour relacher le stress et les tensions et retrouver une sensation de calme profond.",
      en: "A gentle, relaxing massage to release stress and tension and restore a deep sense of calm.",
      nl: "Een zachte, ontspannende massage om stress en spanning los te laten en weer diepe rust te vinden.",
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
      fr: "Un soin energetique japonais par pressions et etirements pour harmoniser la circulation de l'energie dans le corps.",
      en: "A Japanese energy treatment using pressure and stretching techniques to harmonize the body's energy flow.",
      nl: "Een Japanse energetische behandeling met druk- en stretchtechnieken om de energiestroom in het lichaam te harmoniseren.",
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
      fr: "Un massage cible pour soulager les tensions musculaires liees au sport, aux efforts physiques ou au travail repetitif.",
      en: "A targeted massage to relieve muscle tension caused by sports, physical exertion or repetitive work.",
      nl: "Een gerichte massage om spierspanning door sport, fysieke inspanning of repetitief werk te verlichten.",
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
      fr: "Un massage d'inspiration taoiste, fluide et enveloppant, pour reconnecter le corps, le souffle et les sensations.",
      en: "A Tao-inspired massage with fluid and enveloping strokes to reconnect body, breath and sensations.",
      nl: "Een Tao-geinspireerde massage met vloeiende, omhullende bewegingen om lichaam, adem en gevoel te verbinden.",
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
  },

  douceurDorsale: {
    path: "douceur-dorsale",
    names: {
      fr: "Massage douceur dorsale",
      en: "Back relaxation massage",
      nl: "Rug ontspanningsmassage",
    },
    descriptions: {
      fr: "Un massage cible sur la nuque, les epaules et le dos pour relacher les tensions accumulees au quotidien.",
      en: "A massage focused on neck, shoulders and back to release everyday built-up tension.",
      nl: "Een massage gericht op nek, schouders en rug om dagelijkse spanning los te laten.",
    },
  },

  domicile: {
    path: "a-domicile",
    names: {
      fr: "Massage a domicile",
      en: "Home massage",
      nl: "Massage aan huis",
    },
    descriptions: {
      fr: "Un massage relaxant ou energetique directement chez vous, a Halle, Bruxelles et Brabant wallon.",
      en: "A relaxing or energy-balancing massage directly at your home in Halle, Brussels and Walloon Brabant.",
      nl: "Een ontspannende of energetische massage bij jou thuis in Halle, Brussel en Waals-Brabant.",
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
      fr: "Un soin energetique doux par appositions des mains pour favoriser la detente et l'harmonisation globale.",
      en: "A gentle energy treatment using hands-on techniques to promote relaxation and overall balance.",
      nl: "Een zachte energetische behandeling met handoplegging om ontspanning en algemene harmonie te bevorderen.",
    },
  },

  antiCellulite: {
    path: "anti-cellulite",
    names: {
      fr: "Massage anti-cellulite",
      en: "Anti-cellulite massage",
      nl: "Anti-cellulite massage",
    },
    descriptions: {
      fr: "Un massage tonique et cible pour raffermir la peau, lisser la cellulite et retrouver une silhouette harmonieuse.",
      en: "A toning, targeted massage to firm the skin, smooth cellulite and restore a harmonious silhouette.",
      nl: "Een tonische, gerichte massage om de huid te verstevigen, cellulitis te verminderen en een harmonieus silhouet te herstellen.",
    },
  },

  voyage: {
    path: "voyage-des-sens",
    names: {
      fr: "Massage voyage des sens",
      en: "Sensory journey massage",
      nl: "Zintuigenreis massage",
    },
    descriptions: {
      fr: "Un massage enveloppant qui agit sur les fascias pour un lacher-prise profond et une detente sensorielle totale.",
      en: "An enveloping massage working on fascia for deep letting go and total sensory relaxation.",
      nl: "Een omhullende massage die inwerkt op de fascia voor diep loslaten en totale zintuiglijke ontspanning.",
    },
  },

  amma: {
    path: "massage-sur-chaise",
    names: {
      fr: "Massage Amma assis",
      en: "Seated Amma massage",
      nl: "Amma stoelmassage",
    },
    descriptions: {
      fr: "Un massage assis rapide et efficace en entreprise pour relacher les tensions du dos, de la nuque et des epaules.",
      en: "A quick and effective seated massage at work to relieve tension in the back, neck and shoulders.",
      nl: "Een snelle en effectieve stoelmassage op het werk om spanning in rug, nek en schouders te verlichten.",
    },
  },

  reflexologie: {
    path: "reflexologie-plantaire",
    names: {
      fr: "Reflexologie plantaire",
      en: "Foot reflexology",
      nl: "Voetreflexologie",
    },
    descriptions: {
      fr: "Un soin des pieds qui stimule les zones reflexes pour reequilibrer le corps et apaiser l'esprit naturellement.",
      en: "A foot treatment that stimulates reflex zones to rebalance the body and soothe the mind naturally.",
      nl: "Een voetbehandeling die reflexzones stimuleert om het lichaam in balans te brengen en de geest op natuurlijke wijze te kalmeren.",
    },
  },

  cranioSacree: {
    path: "therapie-cranio-sacree",
    names: {
      fr: "Therapie cranio-sacree",
      en: "Craniosacral therapy",
      nl: "Craniosacrale therapie",
    },
    descriptions: {
      fr: "Une approche subtile et puissante qui libere les tensions profondes du systeme nerveux et favorise l'auto-guerison.",
      en: "A subtle yet powerful approach that releases deep nervous system tensions and promotes self-healing.",
      nl: "Een subtiele maar krachtige aanpak die diepe spanningen in het zenuwstelsel loslaat en zelfgenezing bevordert.",
    },
  },
};

export default function MassageServiceJSONLD({ slug, locale = "fr" }) {
  const service = massageServices[slug];

  if (!service) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[MassageServiceJSONLD] Aucun service trouve pour le slug "${slug}"`
      );
    }
    return null;
  }

  const currentLocale = SUPPORTED_LOCALES.includes(locale) ? locale : "fr";

  const isTherapy = ["shiatsu", "reiki", "reflexologie-plantaire", "therapie-cranio-sacree"].includes(service.path);
  const servicePath = isTherapy
    ? `/${currentLocale}/${service.path}`
    : `/${currentLocale}/massage/${service.path}`;
  const url = `${baseUrl}${servicePath}`;

  const localBusinessId = `${baseUrl}/${currentLocale}#local-business`;

  const offers = BASE_OFFERS.map((offer) => ({
    "@type": "Offer",
    name: offer.names[currentLocale],
    price: offer.prices[currentLocale],
    priceCurrency: "EUR",
    url,
    availability: "https://schema.org/InStock",
  }));

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.names[currentLocale],
    description: service.descriptions[currentLocale],
    url,
    image: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`,
    serviceType: "Massage therapy",
    category: "HealthAndBeauty",
    areaServed: AREA_SERVED,
    provider: {
      "@type": "HealthAndBeautyBusiness",
      "@id": localBusinessId,
      name: "La Voie du Bien-Etre",
      url: `${baseUrl}/${currentLocale}`,
      telephone: "+32477131993",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Octave de Kerchove d'Exaerdestraat 193",
        addressLocality: "Halle",
        postalCode: "1501",
        addressCountry: "BE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 50.7464695,
        longitude: 4.2563906,
      },
      image: [`${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`],
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: "+32477131993",
        contactType: "reservations",
        availableLanguage: ["French", "English", "Dutch"],
      },
    },
    offers,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
