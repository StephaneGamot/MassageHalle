export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: "https://lavoiedubienetre.be/sitemap.xml",
    host: "https://lavoiedubienetre.be",
  };
}
