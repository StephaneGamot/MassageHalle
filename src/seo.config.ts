// seo.config.js

/** @type {import(‘next’).Metadata} */
export const defaultMetadata = {
  metadataBase: new URL("https://lavoiedubienetre.be"),
  title: {
    default: "Massage bien-être à Hal – Bruxelles | La Voie du Bien-Être",
    template: "%s",
  },
  description:
    "Massages relaxants, shiatsu, reiki et soins thérapeutiques à Hal et Bruxelles. En cabinet ou à domicile. Réservez votre séance bien-être dès maintenant !",
  openGraph: {
    type: "website",
    url: "https://lavoiedubienetre.be",
    siteName: "La Voie du Bien-Être",
    locale: "fr_BE",
    title: "Massage bien-être à Hal – Bruxelles | La Voie du Bien-Être",
    description:
      "Massages relaxants, shiatsu et soins énergétiques à Hal. Offrez-vous une parenthèse de détente en cabinet ou à domicile.",
    images: [
      {
        url: "/Images/OpenGraph/accueil-massage-halle.webp",
        width: 1200,
        height: 627,
        alt: "Salle de massage bien-être chaleureuse à Hal — La Voie du Bien-Être",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@voiedubienetre",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
