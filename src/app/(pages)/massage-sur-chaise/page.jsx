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
        <title>Massage Amma assis en entreprise – Halle & Bruxelles</title>
        <meta
          name="description"
          content="Offrez un moment de détente à vos collaborateurs grâce au massage Amma assis. Idéal pour réduire le stress, améliorer la concentration et booster le bien-être en entreprise."
        />
        <meta
          property="og:title"
          content="Massage sur chaise pour entreprise – La Voie du Bien-Être"
        />
        <link
          rel="canonical"
          href="https://lavoiedubienetre.be/massage-sur-chaise"
        />
      </Head>

      <main>
        <HeroMassage
          variant="massage"
          title="Offrez une pause bien-être à vos collaborateurs"
          text1="Le massage Amma assis est une solution idéale pour relâcher les tensions rapidement, sans avoir à se changer ou à s’allonger."
          text2="Un soin express mais profondément efficace, directement au sein de votre entreprise."
        />

        <Benefits
          ids={[42, 44,  49, 51]}
          title="le massage Amma en entreprise"
        />

        <WhyThisCare
          ids={[4, 7, 9, 15]}
          title="Pourquoi choisir le Amma assis en entreprise ?"
        />

        <TreatmentDescription
          title="Un soin court, précis et ressourçant"
          hero="En 15 à 30 minutes, le massage Amma agit sur les méridiens pour relancer l’énergie, relâcher les tensions du dos, des épaules et de la nuque."
          duration={
            <>
              entre <strong>15</strong> et <strong>30 minutes</strong> par personne
            </>
          }
          text="Tarifs adaptés aux entreprises, à partir de"
          price="20 €"
        />

        <Gallery ids={[4, 33, 34]} />

        <CtaSectionMassagePage
          title="Améliorez la qualité de vie au travail"
          soin="un massage Amma en entreprise"
        />

        <Testimonials ids={[6, 17, 22, 36, 47]} />
      </main>
    </>
  );
}
