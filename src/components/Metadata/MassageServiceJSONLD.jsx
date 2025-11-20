"use client";

import { massagePagesSeo } from "@/seo/massagePages";

export default function MassageServiceJSONLD({ slug, locale }) {
  const fallbackLocale = "fr";
  const bySlug = massagePagesSeo[slug] || massagePagesSeo["relaxant"];
  const meta = bySlug[locale] || bySlug[fallbackLocale];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://lavoiedubienetre.be/${locale}/massage/${meta.slug}#service`,
    name: meta.title,
    description: meta.description,
    provider: {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://lavoiedubienetre.be/#localbusiness",
      name: "La Voie du Bien-Être",
    },
    areaServed: [
      "Halle",
      "Bruxelles",
      "Uccle",
      "Tubize",
      "Braine-l'Alleud",
      "Dilbeek",
    ],
    serviceType: "Massage",
    url: `https://lavoiedubienetre.be/${locale}/massage/${meta.slug}`,
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
}
