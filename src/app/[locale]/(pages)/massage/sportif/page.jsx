import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import Head from "next/head";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? 'fr';

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
  canonical: `https://lavoiedubienetre.be/${currentLocale}/massage/sportif`,
  languages: {
    fr: 'https://lavoiedubienetre.be/fr/massage/sportif',
    en: 'https://lavoiedubienetre.be/en/massage/sportif',
    nl: 'https://lavoiedubienetre.be/nl/massage/sportif',
    'x-default': 'https://lavoiedubienetre.be/fr/massage/sportif',
  }
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
      url: `https://lavoiedubienetre.be/${currentLocale}/massage/sportif`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
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
      images: [
        "https://lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg",
      ],
    },
  };
}


export default function page() {
  return (
    <>
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
