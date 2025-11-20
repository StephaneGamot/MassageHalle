import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";
import { massagePagesSeo } from "@/seo/massagePages";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params); // ✅ Trick pour forcer l’attente si besoin

  const currentLocale = locale ?? 'fr';

  return {
    title: {
      fr: "Massage relaxant à Halle | La Voie du Bien-Être",
      en: "Relaxing massage in Halle | La Voie du Bien-Être",
      nl: "Ontspanningsmassage in Halle | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      "fr": "Un massage relaxant doux et enveloppant pour relâcher le stress et les tensions. Détente totale à Halle et alentours.",
      "en": "A gentle, soothing massage to relieve stress and tension. Total relaxation in Halle and surrounding areas.",
      "nl": "Een zachte, ontspannende massage om stress en spanning los te laten. Totale ontspanning in Halle en omgeving."
    }[currentLocale],
 alternates: {
  canonical: `https://lavoiedubienetre.be/${currentLocale}/massage/relaxant`,
  languages: {
    fr: 'https://lavoiedubienetre.be/fr/massage/relaxant',
    en: 'https://lavoiedubienetre.be/en/massage/relaxant',
    nl: 'https://lavoiedubienetre.be/nl/massage/relaxant',
    'x-default': 'https://lavoiedubienetre.be/fr/massage/relaxant',
  }
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
      url: `https://lavoiedubienetre.be/${currentLocale}/massage/relaxant`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
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


// ✅ Page React
export default function Page() {
  return (
    <><MassageServiceJSONLD slug="relaxant" locale={locale} />
    <main>
      <HeroMassage variant="massage" />
      <Benefits ids={[1, 6, 19, 4]} title="relaxant" />
      <WhyThisCare ids={[2, 6, 13, 21, 31]} title="relaxant" />
      <TreatmentDescription variant="relaxant" />
      <Gallery ids={[1, 2, 3]} />
      <CtaSectionMassagePage variant="relaxant" />
      <Testimonials ids={[1, 4, 11, 23, 35]} />
    </main></>
  );
}
