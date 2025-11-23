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
      fr: "Massage à domicile à Halle, Bruxelles et alentours",
      en: "Massage at Home in Halle, Brussels and Nearby",
      nl: "Massage aan huis in Halle, Brussel en omgeving",
    }[currentLocale],
    description: {
      fr: "Détendez votre corps et votre esprit grâce à un massage relaxant à Halle, près de Bruxelles. Une expérience douce, personnalisée, disponible à domicile.",
      en: "Relax your body and mind with a soothing massage in Halle, near Brussels. A gentle and personalized experience, available at home.",
      nl: "Ontspan je lichaam en geest met een rustgevende massage in Halle, nabij Brussel. Een zachte, persoonlijke ervaring, beschikbaar aan huis.",
    }[currentLocale],
    alternates: {
      canonical: `https://lavoiedubienetre.be/${currentLocale}/massage/a-domicile`,
      languages: {
        fr: 'https://lavoiedubienetre.be/fr/massage/a-domicile',
        en: 'https://lavoiedubienetre.be/en/massage/a-domicile',
        nl: 'https://lavoiedubienetre.be/nl/massage/a-domicile',
        'x-default': 'https://lavoiedubienetre.be/fr/massage/a-domicile',
      }
    },
    openGraph: {
      title: {
        fr: "Massage & soin thérapeutique à domicile",
        en: "Home Massage & Therapeutic Care",
        nl: "Massage & therapeutische zorg aan huis",
      }[currentLocale],
      description: {
        fr: "Détendez votre corps et votre esprit grâce à un massage relaxant à Halle, près de Bruxelles. Disponible en cabinet ou à domicile.",
        en: "Relax your body and mind with a soothing massage in Halle, near Brussels. Available in-studio or at home.",
        nl: "Ontspan lichaam en geest met een rustgevende massage in Halle, nabij Brussel. Beschikbaar in de praktijk of aan huis.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}/massage/a-domicile`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
          width: 1200,
          height: 627,
          alt: {
            fr: "Une longue séance de massage lui permettant de tout oublier",
            en: "A long massage session helping her forget everything",
            nl: "Een lange massagesessie om alles te vergeten",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage à domicile à Halle | La Voie du Bien-Être",
        en: "Home Massage in Halle | La Voie du Bien-Être",
        nl: "Massage aan huis in Halle | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Shiatsu Reiki Massage à domicile dans le Brabant wallon | La Voie du Bien-Être",
        en: "Shiatsu Reiki Home Massage in the Brussels area | La Voie du Bien-Être",
        nl: "Shiatsu Reiki Massage aan huis in de regio Brussel | La Voie du Bien-Être",
      }[currentLocale],
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
      <MassageServiceJSONLD slug="a-domicile" locale={currentLocale} />
      <main>
        <HeroMassage variant="domicile" />
        <WhyThisCare title="domicile" />
        <Benefits ids={[1, 19, 35, 25]} title="domicile" />
        <TreatmentDescription variant="domicile" />
        <Gallery ids={[7, 12, 16]} />
        <CtaSectionMassagePage variant="domicile" />
        <Testimonials ids={[9, 17, 25, 33, 42]} />
      </main>
    </>
  );
}
