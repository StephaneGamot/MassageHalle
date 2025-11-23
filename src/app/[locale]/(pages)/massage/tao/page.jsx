import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";
import { LocalBusinessJsonLd } from "next-seo";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage tao à Halle - Bruxelles | Harmonie & Énergie",
      en: "Tao Massage in Halle - Brussels | Harmony & Vital Energy",
      nl: "Tao massage in Halle - Brussel | Harmonie & Energie",
    }[currentLocale],
    description: {
      fr: "Reconnectez-vous à votre énergie vitale avec le massage tao à Halle. Une expérience unique alliant douceur, lenteur et conscience du corps.",
      en: "Reconnect with your vital energy through Tao massage in Halle. A unique experience combining gentleness, slowness, and body awareness.",
      nl: "Herontdek je vitale energie met een Tao-massage in Halle. Een unieke ervaring van zachtheid, traagheid en lichaamsbewustzijn.",
    }[currentLocale],
 alternates: {
  canonical: `https://lavoiedubienetre.be/${currentLocale}/massage/tao`,
  languages: {
    fr: 'https://lavoiedubienetre.be/fr/massage/tao',
    en: 'https://lavoiedubienetre.be/en/massage/tao',
    nl: 'https://lavoiedubienetre.be/nl/massage/tao',
    'x-default': 'https://lavoiedubienetre.be/fr/massage/tao',
  }
},

    openGraph: {
      title: {
        fr: "Massage tao à Halle - Harmonie & Énergie | La Voie du Bien-Être",
        en: "Tao Massage in Halle - Harmony & Vital Energy | La Voie du Bien-Être",
        nl: "Tao massage in Halle - Harmonie & Energie | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Reconnectez-vous à votre énergie vitale avec le massage tao à Halle. Une expérience unique alliant douceur, lenteur et conscience du corps.",
        en: "Reconnect with your vital energy through Tao massage in Halle. A unique experience combining gentleness, slowness, and body awareness.",
        nl: "Herontdek je vitale energie met een Tao-massage in Halle. Een unieke ervaring van zachtheid, traagheid en lichaamsbewustzijn.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}/massage/tao`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
          width: 1200,
          height: 627,
          alt: {
            fr: "Massage tao à domicile ou en cabinet à Halle",
            en: "Tao massage at home or in practice in Halle",
            nl: "Tao massage aan huis of in de praktijk in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Massage Tao à Halle | Harmonie & Énergie",
        en: "Tao Massage in Halle | Harmony & Energy",
        nl: "Tao Massage in Halle | Harmonie & Energie",
      }[currentLocale],
      description: {
        fr: "Massage tao relaxant à Halle. Une invitation à ralentir, respirer et retrouver l’équilibre.",
        en: "Tao relaxing massage in Halle. An invitation to slow down, breathe, and restore balance.",
        nl: "Tao ontspanningsmassage in Halle. Een uitnodiging om te vertragen, te ademen en in balans te komen.",
      }[currentLocale],
      card: "summary_large_image",
      site: "@voiedubienetre",
      images: [
        "https://lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg",
      ],
    },
  };
}


export default function Page({ params }) {
  const { locale } = params || {};
  const currentLocale = locale ?? "fr";

  return (
    <>
    <LocalBusinessJsonLd
        type="HealthAndBeautyBusiness"
        id={localBusinessId}
        name="La Voie du Bien-Être"
        description="Massages, shiatsu, reiki et soins énergétiques à Halle – un espace de détente et d’harmonie pour le corps et l’esprit."
        url={`${baseUrl}/${currentLocale}`}
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
        image={[`${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`]}
        sameAs={[
          "https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/",
        ]}
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
      <MassageServiceJSONLD slug="tao" locale={currentLocale} />
      <main>
        <HeroMassage variant="tao" />
        <WhyThisCare title="tao" />
        <Benefits ids={[9, 11, 32, 46]} title="tao" />
        <TreatmentDescription variant="tao" />
        <Gallery ids={[7, 8, 9]} />
        <CtaSectionMassagePage variant="tao" />
        <Testimonials ids={[9, 18, 22, 27, 33, 21]} />
      </main>
    </>
  );
}
