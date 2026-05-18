export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/manifest.json", // PWA manifest, n'a rien à faire dans l'index
          "/videos/",       // anciennes URLs vidéo legacy
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
