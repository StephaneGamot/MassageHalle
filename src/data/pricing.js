/**
 * Grille tarifaire — source unique pour la page /tarifs ET le JSON-LD.
 *
 * Si vous changez un prix ici, il se propage automatiquement partout.
 * Modifier également la fiche Treatwell + Google Business Profile en parallèle
 * pour rester cohérent (Google détecte les divergences de prix).
 */

import { BUSINESS } from "@/data/business";

export const CURRENCY = BUSINESS.pricing.currency; // "EUR"

// Note de zone domicile — la majoration est forfaitaire selon distance.
export const HOME_NOTE = {
  fr: "Tarifs « domicile » indicatifs pour Bruxelles, Uccle, Waterloo, Braine-l'Alleud et environs. Au-delà, devis sur demande.",
  en: "Indicative at-home prices for Brussels, Uccle, Waterloo, Braine-l'Alleud and nearby. Beyond, quote on request.",
  nl: "Indicatieve thuisprijzen voor Brussel, Ukkel, Waterloo, Eigenbrakel en omgeving. Daarbuiten op aanvraag.",
};

// Chaque soin : id (slug url), nom multi-langue, durées proposées, prix.
export const PRICING = [
  { slug: "massage/relaxant",
    name:    { fr: "Massage relaxant",      en: "Relaxing massage",    nl: "Ontspanningsmassage" },
    options: [
      { duration: 60, cabinet: 80,  home: 110 },
      { duration: 90, cabinet: 110, home: 140 },
    ] },
  { slug: "massage/sportif",
    name:    { fr: "Massage sportif",       en: "Sports massage",      nl: "Sportmassage" },
    options: [
      { duration: 60, cabinet: 85,  home: 115 },
      { duration: 90, cabinet: 115, home: 145 },
    ] },
  { slug: "massage/deep-tissues",
    name:    { fr: "Massage deep-tissue",   en: "Deep-tissue massage", nl: "Deep-tissue massage" },
    options: [
      { duration: 60, cabinet: 90,  home: 120 },
      { duration: 90, cabinet: 120, home: 150 },
    ] },
  { slug: "massage/douceur-dorsale",
    name:    { fr: "Douceur dorsale",       en: "Back relaxation",     nl: "Rugontspanning" },
    options: [
      { duration: 45, cabinet: 70,  home: 100 },
    ] },
  { slug: "massage/tao",
    name:    { fr: "Massage Tao",           en: "Tao massage",         nl: "Tao-massage" },
    options: [
      { duration: 90, cabinet: 110, home: 140 },
    ] },
  { slug: "massage/voyage-des-sens",
    name:    { fr: "Voyage des sens",       en: "Sensory journey",     nl: "Zintuigenreis" },
    options: [
      { duration: 90, cabinet: 120, home: 150 },
    ] },
  { slug: "massage/anti-cellulite",
    name:    { fr: "Massage anti-cellulite", en: "Anti-cellulite massage", nl: "Anti-cellulite massage" },
    options: [
      { duration: 60, cabinet: 85,  home: 115 },
    ] },
  { slug: "massage/massage-sur-chaise",
    name:    { fr: "Massage sur chaise (Amma)", en: "Chair massage (Amma)", nl: "Stoelmassage (Amma)" },
    options: [
      { duration: 15, cabinet: 25, home: null },
      { duration: 30, cabinet: 45, home: null },
    ] },
  { slug: "shiatsu",
    name:    { fr: "Shiatsu",               en: "Shiatsu",             nl: "Shiatsu" },
    options: [
      { duration: 60, cabinet: 80,  home: 110 },
      { duration: 90, cabinet: 110, home: 140 },
    ] },
  { slug: "reiki",
    name:    { fr: "Reiki",                 en: "Reiki",               nl: "Reiki" },
    options: [
      { duration: 60, cabinet: 80,  home: 110 },
    ] },
  { slug: "reflexologie-plantaire",
    name:    { fr: "Réflexologie plantaire", en: "Foot reflexology",   nl: "Voetreflexologie" },
    options: [
      { duration: 60, cabinet: 80,  home: 110 },
    ] },
  { slug: "therapie-cranio-sacree",
    name:    { fr: "Thérapie cranio-sacrée", en: "Craniosacral therapy", nl: "Craniosacrale therapie" },
    options: [
      { duration: 60, cabinet: 85,  home: 115 },
    ] },
];

// Cartes-cadeaux disponibles (montants pré-définis pour faciliter l'achat).
export const GIFT_CARDS = [
  { amount: 80,  label: { fr: "Découverte",  en: "Discovery",  nl: "Ontdekking" },
    desc:  { fr: "Une séance 60 min en cabinet — idéal premier cadeau.",
             en: "One 60-min in-studio session — perfect first gift.",
             nl: "Eén sessie van 60 min in de praktijk — ideaal eerste cadeau." } },
  { amount: 110, label: { fr: "Détente",     en: "Relaxation", nl: "Ontspanning" },
    desc:  { fr: "Séance 90 min en cabinet OU 60 min à domicile.",
             en: "90-min in-studio OR 60-min at home session.",
             nl: "Sessie 90 min in de praktijk OF 60 min aan huis." } },
  { amount: 150, label: { fr: "Voyage des sens", en: "Sensory journey", nl: "Zintuigenreis" },
    desc:  { fr: "90 min à domicile, soin signature au choix.",
             en: "90-min at-home, signature treatment of your choice.",
             nl: "90 min aan huis, signature behandeling naar keuze." } },
];
