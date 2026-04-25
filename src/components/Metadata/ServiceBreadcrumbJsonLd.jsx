"use client";

export default function ServiceBreadcrumbJsonLd({ locale, serviceName, serviceUrl }) {
  const baseUrl = "https://lavoiedubienetre.be";

  const homeLabels = {
    fr: "Accueil",
    en: "Home",
    nl: "Startpagina",
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabels[locale] || homeLabels.fr,
        item: `${baseUrl}/${locale || "fr"}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: serviceName,
        item: serviceUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}
