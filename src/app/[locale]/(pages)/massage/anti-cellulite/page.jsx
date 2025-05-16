import Head from "next/head";
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
      fr: "Massage anti-cellulite à Halle | La Voie du Bien-Être",
      en: "Anti-cellulite massage in Halle | La Voie du Bien-Être",
      nl: "Anti-cellulitis massage in Halle | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Tonifiez, lissez et activez la circulation grâce à un massage anti-cellulite personnalisé à Halle. Pour une silhouette redessinée et une peau plus ferme.",
      en: "Tone, smooth and boost circulation with a personalized anti-cellulite massage in Halle. For a reshaped silhouette and firmer skin.",
      nl: "Verstevig, egaliseer en stimuleer de circulatie met een anti-cellulitis massage op maat in Halle. Voor een hertekend silhouet en stevigere huid.",
    }[currentLocale],
    alternates: {
      canonical: `https://lavoiedubienetre.be/${currentLocale}/massage/anti-cellulite`,
    },
    openGraph: {
      title: {
        fr: "Massage anti-cellulite à domicile",
        en: "Anti-cellulite massage at home",
        nl: "Anti-cellulitis massage aan huis",
      }[currentLocale],
      description: {
        fr: "Tonifiez, lissez et activez la circulation grâce à un massage anti-cellulite personnalisé à domicile.",
        en: "Tone, smooth and boost circulation with a personalized anti-cellulite massage at home.",
        nl: "Verstevig, egaliseer en stimuleer de bloedsomloop met een anti-cellulitis massage aan huis.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}/massage/anti-cellulite`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
          width: 1200,
          height: 627,
          alt: {
            fr: "Massage anti-cellulite en profondeur à domicile",
            en: "Deep anti-cellulite massage at home",
            nl: "Diepe anti-cellulitis massage aan huis",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage anti-cellulite à Halle | La Voie du Bien-Être",
        en: "Anti-cellulite massage in Halle | La Voie du Bien-Être",
        nl: "Anti-cellulitis massage in Halle | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Centre de massage à Halle | Shiatsu Reiki Massage Anti-Cellulite | La Voie du Bien-Être",
        en: "Massage center in Halle | Shiatsu Reiki Anti-Cellulite Massage | La Voie du Bien-Être",
        nl: "Massagecentrum in Halle | Shiatsu Reiki Anti-Cellulitis Massage | La Voie du Bien-Être",
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
        <HeroMassage variant="anticellulite" />
        <WhyThisCare title="anticellulite" />
        <Benefits ids={[15, 43, 55, 56]} title="anticellulite" />
        <TreatmentDescription variant="anticellulite" />
        <Gallery ids={[2, 5, 6]} />
        <CtaSectionMassagePage variant="anticellulite" />
        <Testimonials ids={[48, 49, 36, 19, 16]} />
      </main>
    </>
  );
}
