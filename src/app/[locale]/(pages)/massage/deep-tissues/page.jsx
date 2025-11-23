import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";
import { LocalBusinessJsonLd } from "next-seo";

const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage Deep Tissues à Halle – Détente musculaire profonde",
      en: "Deep Tissue Massage in Halle – Deep Muscular Relaxation",
      nl: "Deep Tissue Massage in Halle – Diepe Spierontspanning",
    }[currentLocale],
    description: {
      fr: "Libérez les tensions profondes et soulagez les douleurs chroniques grâce au massage Deep Tissues à Halle. Un soin puissant et ciblé pour un bien-être durable.",
      en: "Release deep tension and relieve chronic pain with a Deep Tissue massage in Halle. A powerful and focused treatment for lasting well-being.",
      nl: "Laat diepe spanningen los en verlicht chronische pijn met een Deep Tissue massage in Halle. Een krachtige en gerichte behandeling voor langdurig welzijn.",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/deep-tissues`,
      languages: {
        fr: `${baseUrl}/fr/massage/deep-tissues`,
        en: `${baseUrl}/en/massage/deep-tissues`,
        nl: `${baseUrl}/nl/massage/deep-tissues`,
        "x-default": `${baseUrl}/fr/massage/deep-tissues`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage Deep Tissues à Halle – Détente musculaire profonde",
        en: "Deep Tissue Massage in Halle – Deep Muscular Relaxation",
        nl: "Deep Tissue Massage in Halle – Diepe Spierontspanning",
      }[currentLocale],
      description: {
        fr: "Libérez les tensions profondes et soulagez les douleurs chroniques grâce au massage Deep Tissues à Halle.",
        en: "Release deep tension and relieve chronic pain with a Deep Tissue massage in Halle.",
        nl: "Laat diepe spanningen los en verlicht chronische pijn met een Deep Tissue massage in Halle.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/deep-tissues`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: `${baseUrl}/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Massage profond pour soulager les tensions",
            en: "Deep massage to relieve tension",
            nl: "Diepe massage om spanningen te verlichten",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Massage Deep Tissues à Halle – La Voie du Bien-Être",
        en: "Deep Tissue Massage in Halle – La Voie du Bien-Être",
        nl: "Deep Tissue Massage in Halle – La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Centre de massage à Halle | Deep Tissues, Shiatsu, Reiki | La Voie du Bien-Être",
        en: "Massage center in Halle | Deep Tissue, Shiatsu, Reiki | La Voie du Bien-Être",
        nl: "Massagecentrum in Halle | Deep Tissue, Shiatsu, Reiki | La Voie du Bien-Être",
      }[currentLocale],
      card: "summary_large_image",
      site: "@voiedubienetre",
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
      {/* ✅ LocalBusiness pour le SEO local */}
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

      {/* ✅ JSON-LD du service spécifique Deep Tissue */}
      <MassageServiceJSONLD slug="deepTissue" locale={currentLocale} />

      <main>
        <HeroMassage variant="deeptissue" />
        <WhyThisCare title="deeptissue" />
        <Benefits ids={[57, 27, 58, 59]} title="deeptissue" />
        <TreatmentDescription variant="deeptissue" />
        <Gallery ids={[7, 13, 24]} />
        <CtaSectionMassagePage variant="deeptissue" />
        <Testimonials ids={[5, 15, 30, 35, 43, 13]} />
      </main>
    </>
  );
}
