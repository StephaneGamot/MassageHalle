import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";
import { LocalBusinessJsonLd } from "next-seo";

const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await params; // Next 15-friendly
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage relaxant à Halle | La Voie du Bien-Être",
      en: "Relaxing massage in Halle | La Voie du Bien-Être",
      nl: "Ontspanningsmassage in Halle | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Un massage relaxant doux et enveloppant pour relâcher le stress et les tensions. Détente totale à Halle et alentours.",
      en: "A gentle, soothing massage to relieve stress and tension. Total relaxation in Halle and surrounding areas.",
      nl: "Een zachte, ontspannende massage om stress en spanning los te laten. Totale ontspanning in Halle en omgeving.",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/relaxant`,
      languages: {
        fr: `${baseUrl}/fr/massage/relaxant`,
        en: `${baseUrl}/en/massage/relaxant`,
        nl: `${baseUrl}/nl/massage/relaxant`,
        "x-default": `${baseUrl}/fr/massage/relaxant`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage relaxant à Halle | La Voie du Bien-Être",
        en: "Relaxing massage in Halle | La Voie du Bien-Être",
        nl: "Ontspanningsmassage in Halle | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Un massage relaxant pour relâcher les tensions et retrouver une sensation de bien-être profond.",
        en: "A relaxing massage to release tension and regain deep well-being.",
        nl: "Een ontspanningsmassage om spanningen los te laten en diep welzijn te hervinden.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/relaxant`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          // j’enlève "www." pour rester cohérent
          url: `${baseUrl}/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Femme détendue recevant un massage relaxant",
            en: "Relaxed woman receiving a relaxing massage",
            nl: "Ontspannen vrouw krijgt een ontspanningsmassage",
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
      {/* ✅ LocalBusiness complet, avec le même @id que dans MassageServiceJSONLD */}
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

      {/* ✅ JSON-LD du service spécifique “massage relaxant” */}
      <MassageServiceJSONLD slug="relaxant" locale={currentLocale} />

      <main>
        <HeroMassage variant="massage" />
        <Benefits ids={[1, 6, 19, 4]} title="relaxant" />
        <WhyThisCare ids={[2, 6, 13, 21, 31]} title="relaxant" />
        <TreatmentDescription variant="relaxant" />
        <Gallery ids={[1, 2, 3]} />
        <CtaSectionMassagePage variant="relaxant" />
        <Testimonials ids={[1, 4, 11, 23, 35]} />
      </main>
    </>
  );
}
