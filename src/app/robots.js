export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://lavoiedubienetre.be/sitemap.xml",
    host: "https://lavoiedubienetre.be",
  };
}
