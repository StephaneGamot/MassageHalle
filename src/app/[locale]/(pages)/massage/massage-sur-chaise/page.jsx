import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";
import { LocalBusinessJsonLd } from "next-seo";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage Amma assis en entreprise – Halle & Bruxelles",
      en: "Seated Amma Massage at Work – Halle & Brussels",
      nl: "Amma stoelmassage op het werk – Halle & Brussel",
    }[currentLocale],
    description: {
      fr: "Offrez un moment de détente à vos collaborateurs grâce au massage assis. Idéal pour réduire le stress, améliorer la concentration & le bien-être en entreprise.",
      en: "Offer your employees a moment of relaxation with seated Amma massage. Ideal to reduce stress, improve focus, and boost well-being at work.",
      nl: "Geef uw medewerkers een ontspanningsmoment met Amma stoelmassage. Ideaal om stress te verminderen, focus te verbeteren en welzijn op het werk te bevorderen.",
    }[currentLocale],
alternates: {
  canonical: `https://lavoiedubienetre.be/${currentLocale}/massage/massage-sur-chaise`,
  languages: {
    fr: 'https://lavoiedubienetre.be/fr/massage/massage-sur-chaise',
    en: 'https://lavoiedubienetre.be/en/massage/massage-sur-chaise',
    nl: 'https://lavoiedubienetre.be/nl/massage/massage-sur-chaise',
    'x-default': 'https://lavoiedubienetre.be/fr/massage/massage-sur-chaise',
  }
},

    openGraph: {
      title: {
        fr: "Massage Amma assis en entreprise – Halle & Bruxelles",
        en: "Seated Amma Massage at Work – Halle & Brussels",
        nl: "Amma stoelmassage op het werk – Halle & Brussel",
      }[currentLocale],
      description: {
        fr: "Offrez un moment de détente à vos collaborateurs grâce au massage Amma assis. Idéal pour réduire le stress, améliorer la concentration et booster le bien-être en entreprise.",
        en: "Give your team a relaxing break with seated Amma massage. Great to reduce stress and increase well-being at work.",
        nl: "Gun je team een ontspanningsmoment met Amma stoelmassage. Perfect om stress te verlagen en welzijn te verhogen op het werk.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}/massage/massage-sur-chaise`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
          width: 1200,
          height: 627,
          alt: {
            fr: "Massage Amma assis en entreprise",
            en: "Seated Amma massage at work",
            nl: "Amma stoelmassage op de werkvloer",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Massage Amma assis en entreprise – Détente et efficacité",
        en: "Seated Amma Massage at Work – Relaxation & Focus",
        nl: "Amma stoelmassage op het werk – Ontspanning en productiviteit",
      }[currentLocale],
      description: {
        fr: "Massage Amma assis à Halle et à domicile – bien-être et efficacité pour vos équipes.",
        en: "Seated Amma massage in Halle and at work – well-being and efficiency for your teams.",
        nl: "Amma stoelmassage in Halle of op locatie – welzijn en prestaties voor uw team.",
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
      <MassageServiceJSONLD slug="relaxant" locale={currentLocale} />
      <main>
        <HeroMassage variant="amma" />
        <WhyThisCare title="amma" />
        <Benefits ids={[42, 44, 49, 51]} title="amma" />
        <TreatmentDescription variant="amma" />
        <Gallery ids={[4, 33, 34]} />
        <CtaSectionMassagePage variant="amma" />
        <Testimonials ids={[6, 17, 22, 36, 47]} />
      </main>
    </>
  );
}
