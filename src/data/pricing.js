/**
 * Grille tarifaire — source unique pour la page /tarifs ET le JSON-LD.
 *
 * Modèle :
 *  - 60 min : uniquement massage sportif et douceur dorsale (85€)
 *  - 90 min standard : 120€ en cabinet, 160€ à domicile
 *  - 120 min standard : 160€ en cabinet, 200€ à domicile
 *  - Massage Tao : +10€ à chaque palier
 *  - Voyage des sens : seulement 120 min, 165€ cabinet, 205€ domicile
 *  - Massage sur chaise (Amma) : seulement 15 min, 25€
 *
 * Si vous changez un prix ici, il se propage automatiquement à /tarifs,
 * /cartes-cadeaux, JSON-LD et schemas. Pensez à mettre à jour en parallèle
 * la fiche Treatwell et Google Business Profile pour rester cohérent.
 */

import { BUSINESS } from "@/data/business";

export const CURRENCY = BUSINESS.pricing.currency; // "EUR"

// Note de zone domicile — la majoration est forfaitaire selon distance.
export const HOME_NOTE = {
  fr: "À domicile : à partir de 160€ pour 1 h 30. Tarifs indicatifs pour Bruxelles, Uccle, Waterloo, Braine-l'Alleud et environs. Au-delà, devis sur demande.",
  en: "At home: from €160 for 1h30. Indicative prices for Brussels, Uccle, Waterloo, Braine-l'Alleud and nearby. Beyond, quote on request.",
  nl: "Aan huis: vanaf 160€ voor 1u30. Indicatieve prijzen voor Brussel, Ukkel, Waterloo, Eigenbrakel en omgeving. Daarbuiten op aanvraag.",
};

// Chaque soin : slug url, nom multi-langue, durées proposées avec prix.
// home: null = ce soin / cette durée n'est pas proposé(e) à domicile.
export const PRICING = [
  { slug: "massage/relaxant",
    name:    { fr: "Massage relaxant",      en: "Relaxing massage",    nl: "Ontspanningsmassage" },
    options: [
      { duration: 90,  cabinet: 120, home: 160 },
      { duration: 120, cabinet: 160, home: 200 },
    ] },
  { slug: "massage/sportif",
    name:    { fr: "Massage sportif",       en: "Sports massage",      nl: "Sportmassage" },
    options: [
      // Sportif : un des deux seuls soins disponibles en 60 min.
      { duration: 60,  cabinet: 85,  home: null },
      { duration: 90,  cabinet: 120, home: 160 },
      { duration: 120, cabinet: 160, home: 200 },
    ] },
  { slug: "massage/deep-tissues",
    name:    { fr: "Massage deep-tissue",   en: "Deep-tissue massage", nl: "Deep-tissue massage" },
    options: [
      { duration: 90,  cabinet: 120, home: 160 },
      { duration: 120, cabinet: 160, home: 200 },
    ] },
  { slug: "massage/douceur-dorsale",
    name:    { fr: "Douceur dorsale",       en: "Back relaxation",     nl: "Rugontspanning" },
    options: [
      // Douceur dorsale : second soin disponible en 60 min.
      { duration: 60, cabinet: 85,  home: null },
      { duration: 90, cabinet: 120, home: 160 },
    ] },
  { slug: "massage/tao",
    name:    { fr: "Massage Tao",           en: "Tao massage",         nl: "Tao-massage" },
    options: [
      // Tao : +10€ par rapport au standard à chaque durée.
      { duration: 90,  cabinet: 130, home: 170 },
      { duration: 120, cabinet: 170, home: 210 },
    ] },
  { slug: "massage/voyage-des-sens",
    name:    { fr: "Voyage des sens",       en: "Sensory journey",     nl: "Zintuigenreis" },
    options: [
      // Voyage des sens : exclusivement en 2 h, format signature.
      { duration: 120, cabinet: 165, home: 205 },
    ] },
  { slug: "massage/anti-cellulite",
    name:    { fr: "Massage anti-cellulite", en: "Anti-cellulite massage", nl: "Anti-cellulite massage" },
    options: [
      { duration: 90, cabinet: 120, home: 160 },
    ] },
  { slug: "massage/massage-sur-chaise",
    name:    { fr: "Massage sur chaise (Amma)", en: "Chair massage (Amma)", nl: "Stoelmassage (Amma)" },
    options: [
      // Amma : uniquement 15 min — pas de version 30 min « au rabais ».
      { duration: 15, cabinet: 25, home: null },
    ] },
  { slug: "shiatsu",
    name:    { fr: "Shiatsu",               en: "Shiatsu",             nl: "Shiatsu" },
    options: [
      { duration: 90,  cabinet: 120, home: 160 },
      { duration: 120, cabinet: 160, home: 200 },
    ] },
  { slug: "reiki",
    name:    { fr: "Reiki",                 en: "Reiki",               nl: "Reiki" },
    options: [
      { duration: 90,  cabinet: 120, home: 160 },
      { duration: 120, cabinet: 160, home: 200 },
    ] },
  { slug: "reflexologie-plantaire",
    name:    { fr: "Réflexologie plantaire", en: "Foot reflexology",   nl: "Voetreflexologie" },
    options: [
      { duration: 90, cabinet: 120, home: 160 },
    ] },
  { slug: "therapie-cranio-sacree",
    name:    { fr: "Thérapie cranio-sacrée", en: "Craniosacral therapy", nl: "Craniosacrale therapie" },
    options: [
      { duration: 90, cabinet: 120, home: 160 },
    ] },
];

// Cartes-cadeaux disponibles (montants alignés sur la nouvelle grille).
export const GIFT_CARDS = [
  { amount: 85,  label: { fr: "Découverte",  en: "Discovery",  nl: "Ontdekking" },
    desc:  { fr: "Une séance 60 min en cabinet — massage sportif ou douceur dorsale.",
             en: "One 60-min in-studio session — sports or back relaxation massage.",
             nl: "Eén sessie van 60 min in de praktijk — sport- of rugmassage." } },
  { amount: 120, label: { fr: "Détente",     en: "Relaxation", nl: "Ontspanning" },
    desc:  { fr: "Séance 1 h 30 en cabinet — au choix parmi tous les soins.",
             en: "1h30 in-studio session — choose any treatment.",
             nl: "Sessie 1u30 in de praktijk — keuze uit alle behandelingen." } },
  { amount: 165, label: { fr: "Voyage des sens", en: "Sensory journey", nl: "Zintuigenreis" },
    desc:  { fr: "2 h en cabinet — soin signature fascias, lâcher-prise total.",
             en: "2h in-studio — signature fascia treatment, complete letting go.",
             nl: "2u in de praktijk — signature fascia behandeling, volledige overgave." } },
];
