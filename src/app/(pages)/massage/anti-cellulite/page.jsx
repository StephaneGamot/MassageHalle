import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function page() {
  return (
    <>
      <Head>
        <title>Massage anti-cellulite à Halle | La Voie du Bien-Être</title>
        <meta
          name="description"
          content="Tonifiez, lissez et activez la circulation grâce à un massage anti-cellulite personnalisé à Halle. Pour une silhouette redessinée et une peau plus ferme."
        />
        <meta
          property="og:title"
          content="Massage anti-cellulite à Halle - La Voie du Bien-Être"
        />
        <link
          rel="canonical"
          href="https://lavoiedubienetre.be/massage/anti-cellulite"
        />
      </Head>

      <main>
        <HeroMassage
          variant="massage"
          title="Redessinez votre silhouette avec un massage anti-cellulite"
          text1="Une approche ciblée pour raffermir, drainer et favoriser une peau plus lisse. Tonique mais respectueux du corps."
          text2="Pensé pour les femmes, ce soin allie efficacité et bienveillance."
        />

        <Benefits
          ids={[15, 43, 55, 56]}
          title="un massage anti-cellulite"
        />

        <WhyThisCare
          ids={[38, 29, 17, 15]}
          title="Est-ce que ce soin est pour moi ?"
        />

        <TreatmentDescription
          title="Un soin tonique et ciblé"
          hero="Ce massage stimule la circulation sanguine et lymphatique, déloge les tensions et favorise le raffermissement des tissus."
          duration={
            <>
              entre <strong>60</strong> et <strong>90 minutes</strong>
            </>
          }
          text="Un soin personnalisé pour des résultats visibles, à partir de"
          price="70 €"
        />

        <Gallery ids={[2, 5, 6]} />

        <CtaSectionMassagePage
          title="Sentez-vous plus légère, plus tonique"
          soin="votre massage anti-cellulite"
        />

        <Testimonials ids={[50, 49, 36, 19, 16 ]} />
      </main>
    </>
  );
}

