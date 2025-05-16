import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Reiki à Halle (Bruxelles) - Soin énergétique & Équilibre",
      en: "Reiki in Halle (Brussels) – Energy Healing & Balance",
      nl: "Reiki in Halle (Brussel) – Energetische zorg & Evenwicht",
    }[currentLocale],
    description: {
      fr: "Profitez d’un soin Reiki à Halle pour réharmoniser vos énergies et retrouver l’équilibre intérieur. Un accompagnement doux, profond et bienveillant.",
      en: "Enjoy a Reiki session in Halle to rebalance your energy and restore inner harmony. A gentle, deep, and compassionate care.",
      nl: "Ervaar een Reiki-behandeling in Halle om uw energieën te harmoniseren en uw innerlijk evenwicht te herstellen. Een zachte, diepe en zorgzame begeleiding.",
    }[currentLocale],
    alternates: {
      canonical: `https://lavoiedubienetre.be/${currentLocale}/reiki`,
    },
    openGraph: {
      title: {
        fr: "Reiki à Halle (Bruxelles) - Soin énergétique & Équilibre",
        en: "Reiki in Halle (Brussels) – Energy Healing & Balance",
        nl: "Reiki in Halle (Brussel) – Energetische zorg & Evenwicht",
      }[currentLocale],
      description: {
        fr: "Un soin énergétique doux pour apaiser, revitaliser et équilibrer vos centres énergétiques.",
        en: "A gentle energy healing treatment to soothe, revitalize, and balance your chakras.",
        nl: "Een zachte energetische behandeling om uw energiecentra te kalmeren, revitaliseren en in balans te brengen.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}/reiki`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
          width: 1200,
          height: 627,
          alt: {
            fr: "Soin Reiki à Halle",
            en: "Reiki treatment in Halle",
            nl: "Reiki-behandeling in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Soin Reiki à Halle – Énergie & Sérénité",
        en: "Reiki in Halle – Energy & Serenity",
        nl: "Reiki in Halle – Energie & Rust",
      }[currentLocale],
      description: {
        fr: "Un soin énergétique à Halle pour vous reconnecter à votre essence vitale.",
        en: "An energy healing session in Halle to reconnect with your vital essence.",
        nl: "Een energetische behandeling in Halle om opnieuw verbinding te maken met uw vitale energie.",
      }[currentLocale],
      card: "summary_large_image",
      site: "@voiedubienetre",
      images: [
        "https://lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg",
      ],
    },
  };
}

export default function Page() {
  return (
    <>
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
