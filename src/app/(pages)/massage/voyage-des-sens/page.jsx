

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
        <title>Massage Voyage des Sens à Halle - Évasion & Détente Totale</title>
        <meta
          name="description"
          content="Offrez-vous une évasion sensorielle complète avec le massage Voyage des Sens à Halle. Une détente profonde des fascias, un lâcher-prise total, pour le corps et l'esprit."
        />
        <meta
          property="og:title"
          content="Massage Voyage des Sens - La Voie du Bien-Être à Halle"
        />
        <link
          rel="canonical"
          href="https://lavoiedubienetre.be/massage/voyage-des-sens"
        />
      </Head>
      <main>
        <HeroMassage
          variant="soin"
          title="Offrez à vos sens un véritable voyage"
          text1="Ce massage est une ode à la douceur, une célébration du lâcher-prise."
          text2="Il invite le corps à s’abandonner, et l’esprit à s’apaiser profondément."
        />

        <Benefits ids={[31, 63, 50, 64 ]} title="le massage Voyage des Sens" />
        
        <WhyThisCare
          ids={[37, 35, 31, 25, 19]}
          title="Est-ce que ce massage doux et sensuel est pour vous ?"
        />
        
        <TreatmentDescription
          title="Une évasion sensorielle absolue"
          hero="Le Voyage des Sens agit en profondeur sur les fascias pour libérer les tensions enfouies, réveiller la circulation énergétique et instaurer une détente durable dans tout le corps."
          duration={<> <strong>120 minutes</strong></>}
          text="Un soin unique, à vivre pleinement, à partir de"
          price="125 €"
        />

        <Gallery ids={[6, 8, 9]} />
        
        <CtaSectionMassagePage
          title="Prenez le temps d’un véritable voyage intérieur"
          soin="le massage Voyage des Sens"
        />

        <Testimonials ids={[6, 13, 19, 29, 41]} />
      </main>
    </>
  );
}
