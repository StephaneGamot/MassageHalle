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
      fr: "Thérapie Cranio-Sacrée à Halle – Apaisement profond",
      en: "Craniosacral Therapy in Halle – Deep Relief",
      nl: "Craniosacrale Therapie in Halle – Diepe Ontspanning",
    }[currentLocale],
    description: {
      fr: "Offrez à votre corps un soin subtil et puissant avec la thérapie cranio-sacrée. Idéal pour libérer les blocages profonds du système nerveux.",
      en: "Give your body a subtle yet powerful treatment with craniosacral therapy. Ideal to release deep nervous system tensions.",
      nl: "Gun uw lichaam een subtiele maar krachtige behandeling met craniosacrale therapie. Ideaal om diepe spanningen in het zenuwstelsel los te laten.",
    }[currentLocale],
    alternates: {
      canonical: `https://lavoiedubienetre.be/${currentLocale}/therapie-cranio-sacree`,
    },
    openGraph: {
      title: {
        fr: "Thérapie Cranio-Sacrée à Halle – Apaisement profond",
        en: "Craniosacral Therapy in Halle – Deep Relief",
        nl: "Craniosacrale Therapie in Halle – Diepe Ontspanning",
      }[currentLocale],
      description: {
        fr: "Une approche douce pour réguler le système nerveux, soulager les douleurs chroniques et favoriser un bien-être durable.",
        en: "A gentle method to regulate the nervous system, relieve chronic pain, and support long-lasting wellness.",
        nl: "Een zachte methode om het zenuwstelsel te reguleren, chronische pijn te verlichten en duurzaam welzijn te bevorderen.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}/therapie-cranio-sacree`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
          width: 1200,
          height: 627,
          alt: {
            fr: "Thérapie cranio-sacrée – Détente profonde à Halle",
            en: "Craniosacral therapy – Deep relaxation in Halle",
            nl: "Craniosacrale therapie – Diepe ontspanning in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Cranio-Sacrée à Halle – Retrouver équilibre et calme",
        en: "Craniosacral Therapy – Restore balance and calm",
        nl: "Craniosacrale Therapie – Herstel van rust en evenwicht",
      }[currentLocale],
      description: {
        fr: "Apaisement du système nerveux, libération des tensions profondes. Une séance de CST pour se recentrer.",
        en: "Soothing of the nervous system, deep release. A CST session to refocus.",
        nl: "Kalmering van het zenuwstelsel, diepe bevrijding. Een CST-sessie om opnieuw in balans te komen.",
      }[currentLocale],
      card: "summary_large_image",
      site: "@voiedubienetre",
      images: [
        "https://lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg",
      ],
    },
  };
}


export default function TherapieCranioSacreePage() {
  return (
    <>
      <main>
        <HeroMassage variant="cst" />
        <WhyThisCare title="cst" />
        <Benefits ids={[62, 47, 63, 64]} title="cst" />
        <TreatmentDescription variant="cst" />
        <Gallery ids={[22, 31, 32]} />
        <CtaSectionMassagePage variant="cst" />
        <Testimonials ids={[11, 19, 24, 13, 33, 47]} />
      </main>
    </>
  );
}
