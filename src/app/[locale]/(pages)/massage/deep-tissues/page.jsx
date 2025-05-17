
import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";

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
      canonical: `https://lavoiedubienetre.be/${currentLocale}/massage/deep-tissues`,
    },
    openGraph: {
      title: {
        fr: "Massage Deep Tissues à domicile",
        en: "Deep Tissue Massage at Home",
        nl: "Deep Tissue Massage aan Huis",
      }[currentLocale],
      description: {
        fr: "Libérez les tensions profondes et soulagez les douleurs chroniques grâce au massage Deep Tissues à domicile.",
        en: "Release deep tension and relieve chronic pain with a Deep Tissue massage at home.",
        nl: "Laat diepe spanningen los en verlicht chronische pijn met een Deep Tissue massage aan huis.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}/massage/deep-tissues`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
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
