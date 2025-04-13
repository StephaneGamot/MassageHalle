import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";

export const metadata = {
  title: "Massage Deep Tissues à Halle – Détente musculaire profonde",
  description:
    "Libérez les tensions profondes et soulagez les douleurs chroniques grâce au massage Deep Tissues à Halle. Un soin puissant et ciblé pour un bien-être durable.",
  alternates: {
    canonical: "https://lavoiedubienetre.be/massage/deep-tissues",
  },
  openGraph: {
    title: "Massage Deep tissues à domicile",
    description:
      "Libérez les tensions profondes et soulagez les douleurs chroniques grâce au massage Deep Tissues à Halle. Un soin puissant et ciblé pour un bien-être durable.",
    url: "https://lavoiedubienetre.be/massage/deep-tissues",
  },
siteName: "La Voie du Bien-Être",
  images: [
    {
      url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
      width: 1200,
      height: 630,
      alt: "Massage relaxant à Halle",
    },
  ],
  type: "website",
  twitter: {
    title: "La voie du bien-être | Shiatsu Reiki Massage à Halle",
    card: "summary_large_image",
    site: "@voiedubienetre",
    description: "Centre de massage à Halle | Shiatsu Reiki Reflexologie Plantaire | La voie du bien-être",
    images: ["https://lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg"],
  },
};


export default function Page() {
  return (
    <>
     
      <main>
        <HeroMassage
          variant="massage"
          title="Libérez vos tensions profondes avec un massage Deep Tissues"
          text1="Plongez dans un soin puissant et ciblé, pensé pour les muscles contractés, les douleurs persistantes et les tensions profondes accumulées."
          text2="Ce massage thérapeutique agit en profondeur pour vous apporter un soulagement durable et une sensation de légèreté retrouvée."
        />

        <Benefits ids={[57, 27, 58 , 59]} title="un massage deep tissues" />

        <WhyThisCare ids={[32,15, 20, 16]} title="Est-ce que ce massage Deep tissues est fait pour vous ?" />

        <TreatmentDescription
          title="Un soin intense, pour un apaisement profond"
          hero="Ce massage utilise des pressions lentes et ciblées sur les muscles profonds et les tissus conjonctifs. Il est idéal pour ceux qui recherchent une détente durable et un soin réparateur."
          duration={<>entre <strong>60</strong> et <strong>90 minutes</strong></>}
          text="Offrez à votre corps un soin thérapeutique complet, à partir de"
          price="70 €"
        />

        <Gallery ids={[7, 13, 24]} />

        <CtaSectionMassagePage
          title="Libérez les tensions. Offrez à vos muscles le soin qu’ils méritent."
          soin="votre massage Deep Tissues"
        />

        <Testimonials ids={[5, 15 , 30, 35, 43, 13]} />
      </main> 
    </>
  );
}
