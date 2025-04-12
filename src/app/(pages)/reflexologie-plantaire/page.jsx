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
        <title>Réflexologie plantaire à Halle - Harmonie & Bien-être</title>
        <meta
          name="description"
          content="Offrez à vos pieds une expérience unique avec la réflexologie plantaire à Halle. Une méthode naturelle pour rééquilibrer le corps et apaiser l'esprit."
        />
        <meta
          property="og:title"
          content="Réflexologie plantaire à Halle - La Voie du Bien-Être"
        />
        <link
          rel="canonical"
          href="https://lavoiedubienetre.be/reflexologie-plantaire"
        />
      </Head>

      <main>
        <HeroMassage
          variant="soin"
          title="Laissez vos pieds vous guider vers l’harmonie"
          text1="Chaque zone du pied correspond à une partie du corps. En les stimulant, la réflexologie plantaire permet un profond rééquilibrage énergétique."
          text2="Ce soin libère les tensions, favorise la circulation et réveille les capacités d’auto-guérison du corps."
        />

        <Benefits ids={[48, 8, 16, 14]} title="une séance de réflexologie plantaire" />

        <WhyThisCare
          ids={[9, 10, 18, 27]}
          title="Est-ce que la réflexologie est faite pour moi ?"
        />

        <TreatmentDescription
          title="Un toucher précis pour un équilibre intérieur"
          hero="À travers des pressions ciblées sur les zones réflexes du pied, ce soin agit à distance sur tout le corps. Il détend, régule et stimule en douceur les organes vitaux."
          duration={
            <>
              environ <strong>60</strong> minutes
            </>
          }
          text="Reconnectez-vous à vos sensations, à partir de"
          price="70€"
        />

        <Gallery ids={[30, 10, 15]} />

        <CtaSectionMassagePage
          title="Faites confiance à vos pieds"
          soin="votre séance de réflexologie"
        />

        <Testimonials ids={[8, 16, 25, 36, 44]} />
      </main>
    </>
  );
}
