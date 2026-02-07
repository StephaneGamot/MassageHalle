import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";


export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Shiatsu à Halle (Bruxelles) – Soin énergétique & rééquilibrage",
      en: "Shiatsu in Halle (Brussels) – Energy Healing & Balance",
      nl: "Shiatsu in Halle (Brussel) – Energetische zorg & Evenwicht",
    }[currentLocale],
    description: {
      fr: "Offrez-vous une séance de Shiatsu à Halle pour rééquilibrer votre énergie, libérer les tensions et retrouver un bien-être profond.",
      en: "Enjoy a Shiatsu session in Halle to rebalance your energy, release tensions and restore deep well-being.",
      nl: "Ervaar een Shiatsu-behandeling in Halle om uw energie te balanceren, spanningen los te laten en diep welzijn te herstellen.",
    }[currentLocale],
alternates: {
  canonical: `https://lavoiedubienetre.be/${currentLocale}/shiatsu`,
  languages: {
    fr: 'https://lavoiedubienetre.be/fr/shiatsu',
    en: 'https://lavoiedubienetre.be/en/shiatsu',
    nl: 'https://lavoiedubienetre.be/nl/shiatsu',
    'x-default': 'https://lavoiedubienetre.be/fr/shiatsu',
  }
},

    openGraph: {
      title: {
        fr: "Shiatsu à Halle – Équilibre et détente en profondeur",
        en: "Shiatsu in Halle – Deep Relaxation & Balance",
        nl: "Shiatsu in Halle – Diepe ontspanning en balans",
      }[currentLocale],
      description: {
        fr: "Un soin énergétique japonais par pressions douces pour revitaliser le corps et l'esprit.",
        en: "A Japanese energy treatment using gentle pressure to revitalize body and mind.",
        nl: "Een Japanse energetische behandeling met zachte druk om lichaam en geest te revitaliseren.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}/shiatsu`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://lavoiedubienetre.be/Images/hero/shiatsu-massage-halle-bruxelles.webp",
          width: 1200,
          height: 627,
          alt: {
            fr: "Séance de Shiatsu à Halle",
            en: "Shiatsu session in Halle",
            nl: "Shiatsu-sessie in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Shiatsu à Halle – Vitalité & sérénité",
        en: "Shiatsu in Halle – Vitality & Serenity",
        nl: "Shiatsu in Halle – Vitaliteit & Rust",
      }[currentLocale],
      description: {
        fr: "Soin Shiatsu pour soulager les tensions et stimuler la circulation de l’énergie vitale.",
        en: "Shiatsu treatment to relieve tension and boost vital energy flow.",
        nl: "Shiatsu-behandeling om spanningen te verlichten en de energiestroom te stimuleren.",
      }[currentLocale],
      card: "summary_large_image",
      site: "@voiedubienetre",
      images: [
        "https://lavoiedubienetre.be/Images/OpenGraph/shiatsu-therapie-halle.webp",
      ],
    },
  };
}


export default function Page({ params }) {
  const { locale } = params || {};
  const currentLocale = locale ?? "fr";

  return (
    <>
      <MassageServiceJSONLD slug="shiatsu" locale={currentLocale} />
      <main>
        <HeroMassage variant="shiatsu" />
        <WhyThisCare title="shiatsu" />
        <Benefits ids={[17, 18, 60, 11]} title="shiatsu" />
        <TreatmentDescription variant="shiatsu" />
        <Gallery ids={[29, 27, 18]} />
        <CtaSectionMassagePage variant="shiatsu" />
        <Testimonials ids={[12, 18, 27, 34, 42, 46]} />
      </main>
    </>
  );
}
