/**
 * Source unique de vérité pour les infos « business ».
 *
 * Tout le site (JSON-LD, footer, page contact, sticky CTA, schema sitemap, etc.)
 * doit lire ici plutôt que de dupliquer ces valeurs. Cela évite que Google détecte
 * des incohérences entre vos déclarations on-page et vos données structurées
 * (signal négatif pour le ranking local).
 *
 * Si vous modifiez une valeur ici, elle est automatiquement répercutée partout.
 */

export const BUSINESS = {
  name: "La Voie du Bien-Être",
  alternateName: "Massage Bien-Être Hal",
  baseUrl: "https://lavoiedubienetre.be",

  // Contact — UNE seule adresse mail officielle (alignée avec la page Contact).
  email: "lavoiedubienetre@outlook.com",
  phone: "+32477131993",
  phoneDisplay: "04 77 13 19 93",
  whatsapp: "https://wa.me/32477131993",

  // Adresse (NAP — Name / Address / Phone — doit matcher au caractère près
  // la fiche Google Business Profile pour booster le ranking local).
  address: {
    streetAddress: "Octave de Kerchove d'Exaerdestraat 193",
    addressLocality: "Halle",
    postalCode: "1501",
    addressRegion: "Vlaams-Brabant",
    addressCountry: "BE",
  },

  // Coordonnées géo précises du cabinet
  geo: { latitude: 50.7464695, longitude: 4.2563906 },
  googleMapsUrl: "https://www.google.com/maps?q=50.7464695,4.2563906",
  // Place ID Google de la fiche — utilisé pour lien direct vers avis Google.
  // Pour récupérer le PLACE_ID exact : https://developers.google.com/maps/documentation/places/web-service/place-id
  googleReviewsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJMQNHoIUxwkcRFWiX0Gau39s",

  // Horaires — UNE source unique pour le JSON-LD, le footer et la page Contact.
  // Si vous changez d'horaires, modifiez ici uniquement et pensez à les répercuter
  // aussi sur votre fiche Google Business Profile + Treatwell pour cohérence.
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  openingHumanFR: "Sur rendez-vous du lundi au samedi, 10h–19h",
  openingHumanEN: "By appointment from Monday to Saturday, 10am–7pm",
  openingHumanNL: "Op afspraak van maandag tot zaterdag, 10u–19u",

  // Avis — À METTRE À JOUR mensuellement avec les vrais chiffres de la fiche GMB.
  // Si reviewCount diverge de la fiche Google, risque d'action manuelle = perte des étoiles SERP.
  // Idéalement : récupérer ces valeurs au build via l'API Google Places.
  reviews: {
    ratingValue: "4.9",
    reviewCount: "50", // ⚠️ Synchroniser avec la fiche Google Business
    bestRating: "5",
    worstRating: "1",
  },

  // Villes desservies — avec codes postaux belges (signal local plus précis pour Google).
  areaServed: [
    { name: "Halle",                postalCode: "1500" },
    { name: "Buizingen",            postalCode: "1501" },
    { name: "Bruxelles",            postalCode: "1000" },
    { name: "Uccle",                postalCode: "1180" },
    { name: "Waterloo",             postalCode: "1410" },
    { name: "Braine-l'Alleud",      postalCode: "1420" },
    { name: "Dilbeek",              postalCode: "1700" },
    { name: "Tubize",               postalCode: "1480" },
    { name: "Rhode-Saint-Genèse",   postalCode: "1640" },
    { name: "Enghien",              postalCode: "7850" },
    { name: "Leerbeek",             postalCode: "1755" },
  ],

  social: {
    facebook: "https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/",
    youtube:  "https://www.youtube.com/@lavoiedubien-etre",
  },

  // Tarification de référence — affichée dans les Offer schemas + meta descriptions.
  pricing: { startingFrom: "80", currency: "EUR" },
  paymentAccepted: "Cash, Bancontact, Virement bancaire",

  // Prochaine disponibilité — affichée dans le Hero pour créer un sentiment de
  // rareté (« 3 créneaux libres cette semaine » convertit nettement mieux qu'un
  // simple « Réservez »). À METTRE À JOUR à la main 2× par semaine.
  // Si vide ou null, le bandeau ne s'affiche pas.
  nextSlot: {
    fr: "Prochaine disponibilité : cette semaine — réponse sous 2 h",
    en: "Next opening: this week — reply within 2 hours",
    nl: "Volgende beschikbaarheid: deze week — antwoord binnen 2 uur",
  },
};
