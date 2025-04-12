import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Head from "next/head";

export default function page() {
  return (
    <>
 <Head>
      <title>Massage à domicile à Halle et alentours – La Voie du Bien-Être</title>
      <meta
        name="description"
        content="Profitez d’un massage professionnel sans quitter votre maison. Je me déplace à Halle et dans les environs pour vous offrir un moment de détente inégalé."
      />
      <link
        rel="canonical"
        href="https://lavoiedubienetre.be/massages/a-domicile"
      />  
    </Head>
<main>
        <HeroMassage
          variant="massage"
          title="Recevez un soin d’exception sans quitter votre maison"
          text1="Laissez-vous porter par une expérience de détente absolue, directement chez vous. Un soin sur-mesure, dans le confort de votre cocon."
          text2="Inutile de courir après le calme. C’est lui qui vient à vous."
        />

        <Benefits
          ids={[1, 19, 35, 25]}
          title="un massage à domicile"
        />

        <WhyThisCare
          ids={[3, 9, 14, 27]}
          title="Ce massage est-il fait pour vous ?"
        />

        <TreatmentDescription
          title="Un soin professionnel dans votre espace personnel"
          hero="Je me déplace chez vous avec tout le nécessaire : table de massage, huiles, musique douce… Vous n’avez qu’à vous laisser aller."
          duration={<>entre <strong>90</strong> et <strong>120 minutes</strong></>}
          text="À vivre dans votre environnement familier, à partir de"
          price="99€ + indemnité de déplacement"
        />

        <Gallery ids={[7, 12, 16]} />

        <CtaSectionMassagePage
          title="Créez votre bulle de bien-être chez vous"
          soin="votre massage à domicile"
        />

        <Testimonials ids={[9, 17, 25, 33, 42]} />
      </main>
    </>
  );
}

