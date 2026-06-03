import { BUSINESS } from "@/data/business";

export default function HomepageJsonLd({ locale }) {
  const baseUrl = BUSINESS.baseUrl;

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

  // ─── Person (praticien) — signal E-E-A-T ───
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#practitioner`,
    name: "Stéphane Gamot",
    jobTitle: {
      fr: "Praticien en massage et soins énergétiques",
      en: "Massage and energy healing practitioner",
      nl: "Masseur en energetische zorgverlener",
    }[locale] || "Praticien en massage et soins énergétiques",
    url: `${baseUrl}/${locale || "fr"}`,
    worksFor: {
      "@id": `${baseUrl}/#localbusiness`,
    },
    knowsAbout: [
      "Massage relaxant",
      "Shiatsu",
      "Reiki",
      "Réflexologie plantaire",
      "Thérapie cranio-sacrée",
      "Massage deep-tissue",
    ],
    sameAs: [
      "https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/",
    ],
  };

  // ─── Organization (standalone, distinct du publisher imbriqué) ───
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: "La Voie du Bien-Être",
    alternateName: "Massage Bien-Être Hal",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`,
      width: 1200,
      height: 627,
    },
    image: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`,
    description: siteDescriptions[locale] || siteDescriptions.fr,
    foundingDate: "2018",
    founder: { "@id": `${baseUrl}/#practitioner` },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        contactType: "reservations",
        areaServed: "BE",
        // Praticien parle français et anglais — pas couramment néerlandais.
        availableLanguage: ["French", "English"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      ...BUSINESS.address,
    },
    sameAs: [BUSINESS.social.facebook, BUSINESS.social.youtube],
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    // Double typage explicite : Google reconnaît LocalBusiness ET le sous-type métier
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": `${baseUrl}/#localbusiness`,
    name: BUSINESS.name,
    url: `${baseUrl}/${locale || "fr"}`,
    telephone: BUSINESS.phone,
    // ⚠️ Email aligné avec la page Contact (anti-incohérence schema vs on-page)
    email: BUSINESS.email,
    description: {
      fr: "Massages relaxants, bien-être, shiatsu et soins énergétiques à Halle – Bruxelles.",
      en: "Relaxing massages, wellness, shiatsu and energy treatments in Halle – Brussels.",
      nl: "Ontspannende massages, welzijn, shiatsu en energetische behandelingen in Halle – Brussel.",
    }[locale] || "Massages relaxants, bien-être, shiatsu et soins énergétiques à Halle – Bruxelles.",
    priceRange: "€€",
    currenciesAccepted: BUSINESS.pricing.currency,
    paymentAccepted: BUSINESS.paymentAccepted,
    image: [`${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`],
    logo: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`,
    parentOrganization: { "@id": `${baseUrl}/#organization` },
    address: {
      "@type": "PostalAddress",
      ...BUSINESS.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...BUSINESS.geo,
    },
    hasMap: BUSINESS.googleMapsUrl,
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      ...h,
    })),
    sameAs: [BUSINESS.social.facebook, BUSINESS.social.youtube],
    // areaServed avec codes postaux belges = signal local plus précis pour Google
    areaServed: BUSINESS.areaServed.map((city) => ({
      "@type": "City",
      name: city.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        postalCode: city.postalCode,
        addressCountry: "BE",
      },
    })),
    // hasOfferCatalog → enrichit le LocalBusiness avec un catalogue de services
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: {
        fr: "Catalogue de massages et soins",
        en: "Catalog of massages and treatments",
        nl: "Catalogus van massages en behandelingen",
      }[locale] || "Catalogue de massages et soins",
      itemListElement: items.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.name,
          description: item.desc,
          url: `${baseUrl}/${locale || "fr"}${item.path}`,
        },
        priceCurrency: BUSINESS.pricing.currency,
        price: BUSINESS.pricing.startingFrom,
        availability: "https://schema.org/InStock",
      })),
    },
    // ⚠️ ratingValue / reviewCount centralisés dans /data/business.js — penser à
    // les synchroniser chaque mois avec la fiche Google Business Profile.
    aggregateRating: {
      "@type": "AggregateRating",
      ...BUSINESS.reviews,
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

  // ─── FAQPage schema (résultat enrichi Google : questions cliquables en SERP)
  // Choisir 4-5 questions à valeur SEO réelle : "combien ça coûte", "où",
  // "à domicile ?", "première séance, comment ça se passe ?", "shiatsu vs massage".
  const faqByLocale = {
    fr: [
      { q: "Où se trouve le cabinet ?",
        a: "Le cabinet est situé Octave de Kerchove d'Exaerdestraat 193, 1501 Buizingen (Halle), à 15 min de Bruxelles-Midi en train et 5 min du ring R0. Stationnement gratuit devant le cabinet." },
      { q: "Quels sont les tarifs ?",
        a: "Les séances en cabinet démarrent à 85€ (1 h, pour le massage sportif et la douceur dorsale uniquement). Le standard est 120€ (1 h 30) ou 160€ (2 h). À domicile : à partir de 160€ pour 1 h 30 sur Bruxelles, Uccle, Waterloo et environs." },
      { q: "Comment réserver une séance ?",
        a: "Vous pouvez réserver directement par WhatsApp au 04 77 13 19 93 ou en appelant au même numéro. Vous recevez en général une confirmation en moins de 2 heures pendant les horaires d'ouverture (lundi-samedi 10h-19h)." },
      { q: "Faites-vous des massages à domicile ?",
        a: "Oui, je me déplace à Bruxelles, Uccle, Waterloo, Braine-l'Alleud, Dilbeek, Tubize, Rhode-Saint-Genèse, Enghien et environs avec tout le matériel professionnel (table, draps propres, huiles bio). Un espace calme de 2×3 m suffit." },
      { q: "Quelle est la différence entre un massage relaxant, un shiatsu et un reiki ?",
        a: "Le massage relaxant travaille les muscles à l'huile pour relâcher les tensions. Le shiatsu est une technique japonaise de pression sur les méridiens, pratiquée habillée. Le reiki est un soin énergétique sans contact appuyé, idéal pour les personnes très sensibles au toucher." },
      { q: "Faut-il être nu pendant un massage ?",
        a: "Non. Pour un massage à l'huile, vous gardez vos sous-vêtements. Pour le shiatsu, le reiki et la thérapie cranio-sacrée, vous restez habillé(e) avec des vêtements confortables." },
    ],
    en: [
      { q: "Where is the studio?",
        a: "The studio is at Octave de Kerchove d'Exaerdestraat 193, 1501 Buizingen (Halle), 15 min from Brussels-Midi by train and 5 min from the R0 ring road. Free parking in front of the studio." },
      { q: "What are the prices?",
        a: "In-studio sessions start at €85 (1h, sports massage and back relaxation only). Standard is €120 (1h30) or €160 (2h). At home: from €160 for 1h30 across Brussels, Uccle, Waterloo and surroundings." },
      { q: "How do I book a session?",
        a: "You can book directly by WhatsApp at +32 477 13 19 93 or by phone at the same number. You will usually get a confirmation in under 2 hours during opening hours (Mon-Sat, 10am-7pm)." },
      { q: "Do you offer at-home massages?",
        a: "Yes — I travel to Brussels, Uccle, Waterloo, Braine-l'Alleud, Dilbeek, Tubize, Rhode-Saint-Genèse, Enghien and surroundings with full professional equipment (table, clean linens, organic oils). A quiet 2×3 m space is enough." },
      { q: "What is the difference between a relaxing massage, shiatsu and reiki?",
        a: "A relaxing massage works the muscles with oil to release tension. Shiatsu is a Japanese technique applying pressure on meridians, practiced fully clothed. Reiki is an energy treatment with light or no touch, ideal for people very sensitive to physical contact." },
      { q: "Do I need to undress for the massage?",
        a: "No — for oil massages you keep your underwear on. For shiatsu, reiki and craniosacral therapy you stay fully clothed in comfortable clothes." },
    ],
    nl: [
      { q: "Waar bevindt de praktijk zich?",
        a: "De praktijk ligt op Octave de Kerchove d'Exaerdestraat 193, 1501 Buizingen (Halle), op 15 min van Brussel-Zuid met de trein en 5 min van de R0-ring. Gratis parking voor de deur." },
      { q: "Wat zijn de tarieven?",
        a: "Sessies in de praktijk starten vanaf 85€ (1u, enkel sportmassage en rugontspanning). Standaard is 120€ (1u30) of 160€ (2u). Aan huis: vanaf 160€ voor 1u30 in Brussel, Ukkel, Waterloo en omgeving." },
      { q: "Hoe boek ik een sessie?",
        a: "U kunt direct boeken via WhatsApp op +32 477 13 19 93 of telefonisch op hetzelfde nummer. Tijdens de openingsuren (ma-za 10u-19u) ontvangt u meestal binnen de 2 uur een bevestiging." },
      { q: "Doet u ook massages aan huis?",
        a: "Ja — ik kom aan huis in Brussel, Ukkel, Waterloo, Eigenbrakel, Dilbeek, Tubize, Sint-Genesius-Rode, Edingen en omgeving met volledige professionele uitrusting (tafel, schone lakens, biologische oliën). Een rustige ruimte van 2×3 m volstaat." },
      { q: "Wat is het verschil tussen een ontspanningsmassage, shiatsu en reiki?",
        a: "Een ontspanningsmassage werkt de spieren met olie om spanning los te laten. Shiatsu is een Japanse techniek met druk op meridianen, gekleed beoefend. Reiki is een energetische behandeling met lichte of geen aanraking, ideaal voor mensen die zeer gevoelig zijn voor fysiek contact." },
      { q: "Moet ik me uitkleden voor de massage?",
        a: "Nee — voor oliemassages houdt u uw ondergoed aan. Voor shiatsu, reiki en craniosacrale therapie blijft u volledig gekleed in comfortabele kledij." },
    ],
  };

  const faqEntries = faqByLocale[locale] || faqByLocale.fr;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
