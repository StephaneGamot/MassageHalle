import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Page() {
  return (
    <>
      <Head>
        <title>Massage Deep Tissues à Halle – Détente musculaire profonde</title>
        <meta
          name="description"
          content="Libérez les tensions profondes et soulagez les douleurs chroniques grâce au massage Deep Tissues à Halle. Un soin puissant et ciblé pour un bien-être durable."
        />
        <link
          rel="canonical"
          href="https://lavoiedubienetre.be/massage/deep-tissues"
        />
      </Head>
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
