import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";


const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage sportif à Halle | La Voie du Bien-Être",
      en: "Sports massage in Halle | La Voie du Bien-Être",
      nl: "Sportmassage in Halle | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Un massage sportif ciblé pour soulager les tensions musculaires et optimiser la récupération après l’effort.",
      en: "A targeted sports massage to relieve muscle tension and support recovery after exercise.",
      nl: "Een gerichte sportmassage om spierspanning te verlichten en het herstel na inspanning te ondersteunen.",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/sportif`,
      languages: {
        fr: `${baseUrl}/fr/massage/sportif`,
        en: `${baseUrl}/en/massage/sportif`,
        nl: `${baseUrl}/nl/massage/sportif`,
        "x-default": `${baseUrl}/fr/massage/sportif`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage sportif à Halle | La Voie du Bien-Être",
        en: "Sports massage in Halle | La Voie du Bien-Être",
        nl: "Sportmassage in Halle | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Un massage sportif pour relâcher les tensions musculaires, prévenir les blessures et améliorer la récupération.",
        en: "A sports massage to release muscle tension, prevent injury and enhance recovery.",
        nl: "Een sportmassage om spierspanning los te laten, blessures te voorkomen en herstel te verbeteren.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/sportif`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: `${baseUrl}/Images/hero/massage-sportif-halle-bruxelles.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Massage sportif ciblé sur les muscles",
            en: "Targeted sports massage on muscles",
            nl: "Gerichte sportmassage op de spieren",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
    },
  };
}

export default async function Page(props) {
  const { params } = props;
  const { locale } = await params;
  const currentLocale = locale ?? "fr";

  const localBusinessId = `${baseUrl}/${currentLocale}#local-business`;

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

      <MassageServiceJSONLD slug="sportif" locale={currentLocale} />

      <main>
        <HeroMassage variant="sportif" />
        <WhyThisCare title="sportif" />
        <Benefits ids={[2, 7, 52, 53]} title="sportif" />
        <TreatmentDescription variant="sportif" />
        <Gallery ids={[7, 21, 24]} />
        <CtaSectionMassagePage variant="sportif" />
        <Testimonials ids={[6, 10, 19, 28, 42]} />
      </main>
    </>
  );
}
