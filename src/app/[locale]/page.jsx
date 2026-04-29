// app/[locale]/page.jsx

import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import MassageCardContainer from "@/components/Cards/MassageCardContainer";
import Cta from "@/components/Cta/Cta";
import { LocalBusinessJsonLd } from "next-seo";
import HomepageJsonLd from "@/components/Metadata/HomepageJsonLd";
import GoogleMap from "@/components/GoogleMap";
// import EndOfYearOfferModal from "@/components/Modals/EndOfYearOfferModal";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  const baseUrl = "https://lavoiedubienetre.be";

  return {
    // ─── TITLE TAG (50-60 car.) — mot-clé principal à gauche ───
    title: {
      fr: "Massage bien-être à Hal – Bruxelles | La Voie du Bien-Être",
      en: "Wellness Massage in Halle – Brussels | La Voie du Bien-Être",
      nl: "Wellnessmassage in Halle – Brussel | La Voie du Bien-Être",
    }[currentLocale],

    // ─── META DESCRIPTION (140-155 car.) — avec CTA + villes ───
    description: {
      fr: "Massages relaxants, shiatsu, reiki et soins thérapeutiques à Hal, Bruxelles, Waterloo, Uccle. En cabinet ou à domicile. Réservez dès maintenant !",
      en: "Relaxing massages, shiatsu, reiki and therapeutic care in Halle, Brussels, Waterloo, Uccle. In-studio or at home. Book your session today!",
      nl: "Ontspanningsmassages, shiatsu, reiki en therapeutische behandelingen in Halle, Brussel, Waterloo, Ukkel. In de praktijk of aan huis. Boek nu!",
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
        fr: "Massage bien-être à Hal – Bruxelles | La Voie du Bien-Être",
        en: "Wellness Massage in Halle – Brussels | La Voie du Bien-Être",
        nl: "Wellnessmassage in Halle – Brussel | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Massages relaxants, shiatsu et soins énergétiques à Hal. Offrez-vous une parenthèse de détente en cabinet ou à domicile.",
        en: "Relaxing massages, shiatsu and energy treatments in Halle. Treat yourself to a moment of relaxation in-studio or at home.",
        nl: "Ontspanningsmassages, shiatsu en energetische behandelingen in Halle. Gun uzelf een moment van ontspanning in de praktijk of aan huis.",
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
        fr: "Massage bien-être à Hal – Bruxelles | La Voie du Bien-Être",
        en: "Wellness Massage in Halle – Brussels | La Voie du Bien-Être",
        nl: "Wellnessmassage in Halle – Brussel | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Massages relaxants, shiatsu, reiki et soins thérapeutiques à Hal. En cabinet ou à domicile. Réservez maintenant !",
        en: "Relaxing massages, shiatsu, reiki and therapeutic treatments in Halle. In-studio or at home. Book now!",
        nl: "Ontspanningsmassages, shiatsu, reiki en therapeutische behandelingen in Halle. In de praktijk of aan huis. Boek nu!",
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
      <LocalBusinessJsonLd
        type="HealthAndBeautyBusiness"
        id={`${url}#local-business`}
        name="La Voie du Bien-Être"
        description="Massages bien-être, shiatsu, reiki et soins thérapeutiques à Hal (Halle) – un espace de détente et d’harmonie pour le corps et l’esprit."
        url={url}
        telephone="+32477131993"
        address={{
          streetAddress: "Octave de Kerchove d’Exaerdestraat 193",
          addressLocality: "Halle",
          postalCode: "1501",
          addressCountry: "BE",
        }}
        geo={{
          latitude: 50.7464695,
          longitude: 4.2563906,
        }}
        priceRange="€€"
        image={[
          "https://lavoiedubienetre.be/Images/OpenGraph/accueil-massage-halle.webp",
        ]}
        sameAs={[
          "https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/",
        ]}
        areaServed={[
          { "@type": "City", name: "Halle" },
          { "@type": "City", name: "Bruxelles" },
          { "@type": "City", name: "Waterloo" },
          { "@type": "City", name: "Uccle" },
          { "@type": "City", name: "Braine-l'Alleud" },
          { "@type": "City", name: "Dilbeek" },
          { "@type": "City", name: "Tubize" },
          { "@type": "City", name: "Rhode-Saint-Genèse" },
          { "@type": "City", name: "Enghien" },
          { "@type": "City", name: "Leerbeek" },
        ]}
        rating={{
          ratingValue: "4.9",
          ratingCount: "50",
        }}
        openingHours={[
          {
            opens: "10:00",
            closes: "19:00",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
        ]}
      />
      <HomepageJsonLd locale={locale} />
   {/* <EndOfYearOfferModal /> */}
      <main>
        <Hero />
        <MassageCardContainer />
        <Cta />
        <Testimonials ids={[1, 4, 7, 23, 35]} />
         <Contact />
        <GoogleMap />
      </main>
    </>
  );
}
