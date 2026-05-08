export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/_next/static/", "/_next/image/"],
        disallow: ["/api/", "/_next/data/"],
      },
    ],
    sitemap: "https://lavoiedubienetre.be/sitemap.xml",
    host: "https://lavoiedubienetre.be",
  };
}
