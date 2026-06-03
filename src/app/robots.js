export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/manifest.json", // PWA manifest, n'a rien à faire dans l'index
          // "/videos/" — retiré le 2026-06 : on autorise désormais l'indexation
          // des vidéos pour apparaître dans le carrousel vidéo Google (SERP).
          "/*.json$",       // tous fichiers JSON (manifest, etc.)
          "/:1",            // URL poubelle historique
          "/%3A1",          // version URL-encodée du même bug
        ],
      },
    ],
    sitemap: "https://lavoiedubienetre.be/sitemap.xml",
    host: "https://lavoiedubienetre.be",
  };
}
