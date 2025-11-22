// seo.config.js

/** @type {import('next').Metadata} */
export const defaultMetadata = {
  metadataBase: new URL("https://lavoiedubienetre.be"), // adapte si besoin
  title: {
    default: "La Voie du Bien-Être",
    template: "%s | La Voie du Bien-Être",
  },
  description:
    "Massages, shiatsu et soins énergétiques à Halle – Bruxelles | un espace de détente et d’harmonie pour le corps et l’esprit.",
  openGraph: {
    type: "website",
    url: "https://www.lavoiedubienetre.be",
    siteName: "La Voie du Bien-Être",
    locale: "fr_BE",
    title: "La Voie du Bien-Être",
    description:
      "Massages, shiatsu et soins énergétiques à Halle – détente profonde, rééquilibrage et bien-être durable.",
    images: [
      {
        url: "/og-image-lavoiedubienetre.jpg", // mets ton vrai fichier d’OG image ici
        width: 1200,
        height: 630,
        alt: "Ambiance apaisante de massage à La Voie du Bien-Être",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};
