import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function TherapieCranioSacreePage() {
  return (
    <>
      <Head>
        <title>Thérapie cranio-sacrée à Halle | La Voie du Bien-Être</title>
        <meta
          name="description"
          content="Libérez les tensions profondes et retrouvez un alignement intérieur avec la thérapie cranio-sacrée à Halle. Une approche douce, énergétique et profondément apaisante."
        />
        <meta property="og:title" content="Thérapie cranio-sacrée à Halle" />
        <link
          rel="canonical"
          href="https://lavoiedubienetre.be/massage/therapie-cranio-sacree"
        />
      </Head>

      <main>
        <HeroMassage
          variant="soin"
          title="Reconnectez votre corps à son intelligence naturelle"
          text1="La thérapie cranio-sacrée est une approche subtile et puissante qui invite le corps à s’auto-réguler, à relâcher les blocages profonds et à retrouver son équilibre."
          text2="Elle agit en douceur sur le système nerveux et énergétique pour favoriser l’apaisement, l’ancrage et la régénération."
        />

        <Benefits ids={[ 62, 47, 63, 64]} title="la thérapie cranio-sacrée" />
        <WhyThisCare
          ids={[3, 9, 16, 20]}
          title="Est-ce que cette thérapie est faite pour moi ?"
        />
        <TreatmentDescription
          title="Un soin profondément régulateur"
          hero="À travers un toucher doux sur le crâne, la colonne et le sacrum, cette thérapie permet au système cranio-sacré de libérer les tensions accumulées. C’est un soin qui respecte le rythme du corps et favorise l’équilibre global."
          duration={
            <>
              entre <strong>60</strong> et <strong>90 minutes</strong>
            </>
          }
          text="Une invitation à ralentir et à revenir à soi, à partir de"
          price="70 €"
        />
        <Gallery ids={[22, 31, 32]} />
        <CtaSectionMassagePage
          title="Offrez à votre système nerveux un moment de réparation"
          soin="votre séance de thérapie cranio-sacrée"
        />
        <Testimonials ids={[11, 19, 24, 13, 33, 47]} />
      </main>
    </>
  );
}
