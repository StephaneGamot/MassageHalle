import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";

export default function Page() {
  return (
    <>
      <Head>
        <title>Massage tao à Halle - Harmonie & Énergie | La Voie du Bien-Être</title>
        <meta
          name="description"
          content="Reconnectez-vous à votre énergie vitale avec le massage tao à Halle. Une expérience unique alliant douceur, lenteur et conscience du corps."
        />
        <meta
          property="og:title"
          content="Massage tao à Halle - Harmonie & Énergie | La Voie du Bien-Être"
        />
        <link
          rel="canonical"
          href="https://lavoiedubienetre.be/massage/tao"
        />
      </Head>

      <main>
        <HeroMassage
          variant="massage"
          title="Reconnectez-vous à votre énergie vitale avec un massage tao"
          text1="Un voyage intérieur vers l’équilibre, la lenteur et la pleine présence. Chaque geste invite à une harmonie profonde entre corps et esprit."
          text2="Le massage tao est une célébration du vivant, de la circulation énergétique et du respect du corps."
        />

        <Benefits ids={[9, 11, 32, 46]} title="un massage tao" />

        <WhyThisCare
          ids={[3, 8, 15, 24]}
          title="Est-ce que ce massage Tao est fait pour vous ?"
        />

        <TreatmentDescription
          title="Un soin d’harmonisation énergétique"
          hero="Le massage tao allie gestes fluides, respiration consciente et écoute du corps. Il favorise la circulation de l’énergie, la libération émotionnelle et la présence à soi."
          duration={
            <>
              entre <strong>90</strong> et <strong>120 minutes</strong>
            </>
          }
          text="Ce soin puissant et doux à la fois est proposé à partir de"
          price="99€"
        />

        <Gallery ids={[7, 8, 9]} />

        <CtaSectionMassagePage
          title="Faites de l’harmonie un soin"
          soin="votre massage tao"
        />

        <Testimonials ids={[9, 18, 22, 27, 33, 21]} />
      </main>
    </>
  );
}
