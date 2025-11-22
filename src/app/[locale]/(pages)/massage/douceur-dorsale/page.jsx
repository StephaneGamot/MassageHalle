import Head from "next/head";
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
      fr: "Massage du dos à Halle – Soin exclusif “Douceur Dorsale”",
      en: "Back Massage in Halle – Exclusive “Douceur Dorsale” Treatment",
      nl: "Rugmassage in Halle – Exclusieve ‘Douceur Dorsale’ behandeling",
    }[currentLocale],
    description: {
      fr: "Découvrez notre massage exclusif du dos à Halle. Une méthode douce, ciblée, pour libérer les tensions et retrouver un dos détendu et léger.",
      en: "Discover our exclusive back massage in Halle. A gentle and targeted method to relieve tension and restore lightness and comfort.",
      nl: "Ontdek onze exclusieve rugmassage in Halle. Een zachte, gerichte methode om spanningen los te laten en een ontspannen rug te hervinden.",
    }[currentLocale],
alternates: {
  canonical: `https://lavoiedubienetre.be/${currentLocale}/massage/douceur-dorsale`,
  languages: {
    fr: 'https://lavoiedubienetre.be/fr/massage/douceur-dorsale',
    en: 'https://lavoiedubienetre.be/en/massage/douceur-dorsale',
    nl: 'https://lavoiedubienetre.be/nl/massage/douceur-dorsale',
    'x-default': 'https://lavoiedubienetre.be/fr/massage/douceur-dorsale',
  }
},

    openGraph: {
      title: {
        fr: "Massage du dos à Halle – Soin exclusif “Douceur Dorsale”",
        en: "Back Massage in Halle – Exclusive “Douceur Dorsale” Treatment",
        nl: "Rugmassage in Halle – Exclusieve ‘Douceur Dorsale’ behandeling",
      }[currentLocale],
      description: {
        fr: "Une méthode douce, ciblée, pour libérer les tensions et retrouver un dos détendu.",
        en: "A gentle and focused method to ease back tension and bring deep relief.",
        nl: "Een zachte en gerichte methode om rugspanningen te verlichten.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}/massage/douceur-dorsale`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
          width: 1200,
          height: 627,
          alt: {
            fr: "Massage doux pour le dos à Halle",
            en: "Gentle back massage in Halle",
            nl: "Zachte rugmassage in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Massage du dos à Halle | La Voie du Bien-Être",
        en: "Back Massage in Halle | La Voie du Bien-Être",
        nl: "Rugmassage in Halle | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Soin exclusif du dos pour libérer les tensions et retrouver une sensation de bien-être.",
        en: "Exclusive back care to relieve tension and restore a sense of well-being.",
        nl: "Exclusieve rugbehandeling om spanningen los te laten en welzijn te herstellen.",
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
      <MassageServiceJSONLD slug="douceurDorsale" locale={currentLocale} />
      <main>
        <HeroMassage variant="dos" />
        <WhyThisCare title="dos" />
        <Benefits ids={[6, 54, 35, 52]} title="dos" />
        <TreatmentDescription variant="dos" />
        <Gallery ids={[25, 8, 9]} />
        <CtaSectionMassagePage variant="dos" />
        <Testimonials ids={[5, 14, 18, 22, 29]} />
      </main>
    </>
  );
}
