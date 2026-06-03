// app/[locale]/page.jsx

import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import MassageCardContainer from "@/components/Cards/MassageCardContainer";
import Cta from "@/components/Cta/Cta";
import HomepageJsonLd from "@/components/Metadata/HomepageJsonLd";
import GoogleMap from "@/components/GoogleMap";
import LocalContextStrip from "@/components/LocalContextStrip";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  const baseUrl = "https://lavoiedubienetre.be";

  return {
    // ─── TITLE TAG (50-60 car.) — mot-clé principal à gauche ───
    title: {
      fr: "Massage bien-être à Hal & Bruxelles – Cabinet ou à domicile",
      en: "Wellness Massage in Halle & Brussels – Studio or At-Home",
      nl: "Massage in Halle & Brussel – Praktijk of bij u thuis",
    }[currentLocale],

    // ─── META DESCRIPTION (140-155 car.) — avec CTA + villes ───
    description: {
      fr: "Massages, shiatsu, reiki à Hal, Bruxelles, Uccle, Waterloo. Cabinet dès 85 € (1 h), à domicile dès 160 € (1 h 30). Réservation WhatsApp — 4.9★.",
      en: "Massage, shiatsu, reiki in Halle, Brussels, Uccle, Waterloo. Studio from €85 (1h), at-home from €160 (1h30). Book by WhatsApp — 4.9★.",
      nl: "Massage, shiatsu, reiki in Halle, Brussel, Ukkel, Waterloo. Praktijk vanaf 85 € (1u), aan huis vanaf 160 € (1u30). Boek via WhatsApp — 4.9★.",
    }[currentLocale],

    // ─── ROBOTS ───
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

    // ─── ALTERNATES & CANONICAL ───
    alternates: {
      canonical: `${baseUrl}/${currentLocale}`,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        nl: `${baseUrl}/nl`,
        "x-default": `${baseUrl}/fr`,
      },
    },

    // ─── OPEN GRAPH ───
    openGraph: {
      title: {
        fr: "Massage bien-être à Hal & Bruxelles – Cabinet ou à domicile",
        en: "Wellness Massage in Halle & Brussels – Studio or At-Home",
        nl: "Massage in Halle & Brussel – Praktijk of bij u thuis",
      }[currentLocale],
      description: {
        fr: "Massages, shiatsu, reiki à Hal, Bruxelles, Uccle, Waterloo. Cabinet dès 85 € (1 h), à domicile dès 160 € (1 h 30). Réservation WhatsApp.",
        en: "Massage, shiatsu, reiki in Halle, Brussels, Uccle, Waterloo. Studio from €85 (1h), at-home from €160 (1h30). Book by WhatsApp.",
        nl: "Massage, shiatsu, reiki in Halle, Brussel, Ukkel, Waterloo. Praktijk vanaf 85 € (1u), aan huis vanaf 160 € (1u30). Boek via WhatsApp.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}`,
      siteName: "La Voie du Bien-Être",
      locale: {
        fr: "fr_BE",
        en: "en_BE",
        nl: "nl_BE",
      }[currentLocale],
      type: "website",
      images: [
        {
          url: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`,
          secureUrl: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Salle de massage bien-être chaleureuse à Hal — La Voie du Bien-Être",
            en: "Warm wellness massage studio in Halle — La Voie du Bien-Être",
            nl: "Warme wellnessmassagepraktijk in Halle — La Voie du Bien-Être",
          }[currentLocale],
          type: "image/webp",
        },
      ],
    },

    // ─── TWITTER CARD ───
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage bien-être à Hal & Bruxelles – Cabinet ou à domicile",
        en: "Wellness Massage in Halle & Brussels – Studio or At-Home",
        nl: "Massage in Halle & Brussel – Praktijk of bij u thuis",
      }[currentLocale],
      description: {
        fr: "Massages, shiatsu, reiki à Hal, Bruxelles, Uccle, Waterloo. Cabinet dès 85 € (1 h), à domicile dès 160 € (1 h 30). Réservation WhatsApp.",
        en: "Massage, shiatsu, reiki in Halle, Brussels, Uccle, Waterloo. Studio from €85 (1h), at-home from €160 (1h30). Book by WhatsApp.",
        nl: "Massage, shiatsu, reiki in Halle, Brussel, Ukkel, Waterloo. Praktijk vanaf 85 € (1u), aan huis vanaf 160 € (1u30). Boek via WhatsApp.",
      }[currentLocale],
      images: [
        `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`,
      ],
    },
  };
}

export default async function HomePage(props) {
  const { params } = props;

  // ✅ même pattern : on await params
  const { locale } = await params;

  const baseUrl = "https://lavoiedubienetre.be";
  const url = locale ? `${baseUrl}/${locale}` : baseUrl;

  return (
    <>
      <HomepageJsonLd locale={locale} />
      <Hero />
      <LocalContextStrip />
      <MassageCardContainer />
      <Cta />
      <Testimonials ids={[1, 4, 7, 23, 35]} />
      <Contact />
      <GoogleMap />
    </>
  );
}
