/**
 * Sitemap dynamique Next.js — génère toutes les URLs pour toutes les langues.
 * Remplace le sitemap.xml statique dans /public.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

const baseUrl = "https://lavoiedubienetre.be";
const locales = ["fr", "en", "nl"];
const defaultLocale = "fr";

// Toutes les pages du site avec leur priorité et fréquence de mise à jour
const pages = [
  // Homepage
  { path: "", priority: 1.0, changeFrequency: "weekly" },

  // Massages
  { path: "/massage/relaxant", priority: 0.9, changeFrequency: "monthly" },
  { path: "/massage/tao", priority: 0.9, changeFrequency: "monthly" },
  { path: "/massage/a-domicile", priority: 0.9, changeFrequency: "monthly" },
  { path: "/massage/sportif", priority: 0.85, changeFrequency: "monthly" },
  { path: "/massage/deep-tissues", priority: 0.85, changeFrequency: "monthly" },
  { path: "/massage/douceur-dorsale", priority: 0.85, changeFrequency: "monthly" },
  { path: "/massage/anti-cellulite", priority: 0.85, changeFrequency: "monthly" },
  { path: "/massage/voyage-des-sens", priority: 0.85, changeFrequency: "monthly" },
  { path: "/massage/massage-sur-chaise", priority: 0.8, changeFrequency: "monthly" },

  // Soins thérapeutiques
  { path: "/shiatsu", priority: 0.9, changeFrequency: "monthly" },
  { path: "/reiki", priority: 0.85, changeFrequency: "monthly" },
  { path: "/reflexologie-plantaire", priority: 0.85, changeFrequency: "monthly" },
  { path: "/therapie-cranio-sacree", priority: 0.85, changeFrequency: "monthly" },

  // Pages locales par ville — captent les requêtes "massage <ville>"
  { path: "/massage-bruxelles", priority: 0.9, changeFrequency: "monthly" },
  { path: "/massage-uccle",     priority: 0.85, changeFrequency: "monthly" },
  { path: "/massage-waterloo",  priority: 0.85, changeFrequency: "monthly" },

  // Tarifs & cartes-cadeaux — pages commerciales
  { path: "/tarifs",         priority: 0.85, changeFrequency: "monthly" },
  { path: "/cartes-cadeaux", priority: 0.85, changeFrequency: "monthly" },

  // Autres pages
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
];

// Date de dernière mise à jour : calculée au build → Google revisite plus
// fréquemment les pages. Pour figer une date par page, remplacer par un mapping
// { path: "ISO date" } et lire le fichier de données correspondant.
const LAST_UPDATED = new Date().toISOString();

export default function sitemap() {
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: LAST_UPDATED,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${page.path}`])
          ),
          "x-default": `${baseUrl}/${defaultLocale}${page.path}`,
        },
      },
    }))
  );
}
