"use client";

export default function HomepageJsonLd({ locale }) {
  const baseUrl = "https://lavoiedubienetre.be";

  const breadcrumbLabels = {
    fr: "Accueil",
    en: "Home",
    nl: "Startpagina",
  };

  const siteDescriptions = {
    fr: "Massages bien-être, shiatsu, reiki et soins thérapeutiques à Hal et Bruxelles. En cabinet ou à domicile.",
    en: "Wellness massages, shiatsu, reiki and therapeutic treatments in Halle and Brussels. In-studio or at home.",
    nl: "Wellnessmassages, shiatsu, reiki en therapeutische behandelingen in Halle en Brussel. In de praktijk of aan huis.",
  };

  // ─── BreadcrumbList ───
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: breadcrumbLabels[locale] || breadcrumbLabels.fr,
        item: `${baseUrl}/${locale || "fr"}`,
      },
    ],
  };

  // ─── WebSite (avec SearchAction pour la sitelinks search box) ───
  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "La Voie du Bien-Être",
    alternateName: "Massage Bien-Être Hal",
    url: baseUrl,
    description: siteDescriptions[locale] || siteDescriptions.fr,
    inLanguage: {
      fr: "fr-BE",
      en: "en-BE",
      nl: "nl-BE",
    }[locale] || "fr-BE",
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "La Voie du Bien-Être",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`,
        width: 1200,
        height: 627,
      },
    },
  };

  // ─── WebPage ───
  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/${locale || "fr"}#webpage`,
    url: `${baseUrl}/${locale || "fr"}`,
    name: {
      fr: "Massage bien-être à Hal | La Voie du Bien-Être",
      en: "Wellness Massage in Halle | La Voie du Bien-Être",
      nl: "Wellnessmassage in Halle | La Voie du Bien-Être",
    }[locale] || "Massage bien-être à Hal | La Voie du Bien-Être",
    description: siteDescriptions[locale] || siteDescriptions.fr,
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#localbusiness` },
    inLanguage: {
      fr: "fr-BE",
      en: "en-BE",
      nl: "nl-BE",
    }[locale] || "fr-BE",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
    </>
  );
}
