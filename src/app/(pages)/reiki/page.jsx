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
        <title>Reiki à Halle (Bruxelles) - Soin énergétique & Équilibre</title>
        <meta
          name="description"
          content="Profitez d’un soin Reiki à Halle pour réharmoniser vos énergies et retrouver l’équilibre intérieur. Un accompagnement doux, profond et bienveillant."
        />
        <meta
          property="og:title"
          content="Reiki à Halle - La Voie du Bien-Être"
        />
        <link
          rel="canonical"
          href="https://lavoiedubienetre.be/massage/reiki"
        />
      </Head>
      <main>
        <HeroMassage
          variant="soin"
          title="Reconnectez-vous à votre énergie intérieure avec le Reiki"
          text1="Une méthode douce et puissante pour rétablir l’harmonie entre le corps et l’esprit. Ressentez les bienfaits d’un soin énergétique profond."
          text2="Chaque séance est une invitation à se recentrer, se libérer et retrouver la paix intérieure."
        />

        <Benefits ids={[11, 61 , 36, 46]} title="un soin Reiki" />
        <WhyThisCare
          ids={[39, 36, 28, 22]}
          title="Ce soin est-il fait pour vous ?"
        />
        <TreatmentDescription
          title="Un soin énergétique personnalisé"
          hero="Le Reiki agit en profondeur sur vos centres énergétiques. Par imposition des mains et présence bienveillante, ce soin permet de dissoudre les blocages, libérer le stress et relancer la circulation de l’énergie vitale."
          duration={
            <>
              entre <strong>60</strong> et <strong>90 minutes</strong>
            </>
          }
          text="Offrez à votre être une pause ressourçante, à partir de"
          price="70 €"
        />
        <Gallery ids={[11, 17, 23]} />
        <CtaSectionMassagePage
          title="Prenez un moment pour vous reconnecter"
          soin="votre séance de Reiki"
        />
        <Testimonials ids={[5, 10, 20, 29, 47]} />
      </main>
    </>
  );
}
