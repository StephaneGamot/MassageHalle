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
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage Sportif à Halle – Récupération & Performance",
      en: "Sports Massage in Halle – Recovery & Performance",
      nl: "Sportmassage in Halle – Herstel & Prestatie",
    }[currentLocale],
    description: {
      fr: "Offrez à votre corps une récupération optimale après l’effort. Le massage sportif soulage les tensions musculaires et améliore la performance.",
      en: "Give your body optimal recovery after effort. Sports massage relieves muscle tension and boosts performance.",
      nl: "Gun je lichaam optimaal herstel na inspanning. Sportmassage verlicht spierpijn en verbetert prestaties.",
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
        fr: "Massage Sportif à Halle – Récupération & Performance",
        en: "Sports Massage in Halle – Recovery & Performance",
        nl: "Sportmassage in Halle – Herstel & Prestatie",
      }[currentLocale],
      description: {
        fr: "Le massage sportif soulage les tensions musculaires, favorise la récupération et améliore la souplesse.",
        en: "Sports massage eases muscle tension, promotes recovery and enhances flexibility.",
        nl: "Sportmassage verlicht spierspanning, bevordert herstel en verbetert de soepelheid.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/sportif`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: `${baseUrl}/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Une longue séance de massage lui permet de tout oublier",
            en: "A long massage session helping to forget everything",
            nl: "Een lange massagesessie om alles te vergeten",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage sportif à Halle – Bruxelles | La voie du bien-être",
        en: "Sports Massage in Halle – Brussels | La Voie du Bien-Être",
        nl: "Sportmassage in Halle – Brussel | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Shiatsu Reiki Massage Sportif et relaxant à Halle – Bruxelles. Pour votre bien-être physique et mental.",
        en: "Shiatsu Reiki Sports & Relaxing Massage in Halle – Brussels. For your physical and mental well-being.",
        nl: "Shiatsu Reiki Sport- en Ontspanningsmassage in Halle – Brussel. Voor je lichamelijk en geestelijk welzijn.",
      }[currentLocale],
      images: [`${baseUrl}/Images/OpenGraph/masseur-massage.jpg`],
    },
  };
}

export default function Page({ params }) {
  const { locale } = params || {};
  const currentLocale = locale ?? "fr";

  const localBusinessId = `${baseUrl}/${currentLocale}#local-business`;

  return (
    <>
      {/* ✅ LocalBusiness JSON-LD complet, pour le SEO local */}
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

      {/* ✅ JSON-LD du service spécifique */}
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
