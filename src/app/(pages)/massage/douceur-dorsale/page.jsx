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
        <title>Massage du dos à Halle – Soin exclusif “Douceur Dorsale”</title>
        <meta
          name="description"
          content="Découvrez notre massage exclusif du dos à Halle. Une méthode douce, ciblée, pour libérer les tensions et retrouver un dos détendu et léger."
        />
        <meta
          property="og:title"
          content="Massage du dos à Halle – Soin exclusif “Douceur Dorsale”"
        />
        <link
          rel="canonical"
          href="https://lavoiedubienetre.be/massage/douceur-dorsale"
        />
      </Head>
      <main>
        <HeroMassage
          variant="massage"
          title="Libérez votre dos… avec le massage Douceur Dorsale"
          text1="Ce soin unique cible les tensions accumulées le long de la colonne, dans les trapèzes et les lombaires. Tout est pensé pour vous offrir un soulagement profond et durable."
          text2="Chaque mouvement est une invitation à relâcher ce que votre dos porte depuis trop longtemps."
        />

        <Benefits ids={[6, 54, 35, 52]} title="un massage du dos" />
        <WhyThisCare
          ids={[33, 29, 21, 8 ]}
          title="Est-ce que ce soin du dos est pour moi ?"
        />
        <TreatmentDescription
          title="Un massage profond et ciblé"
          hero="Spécialement conçu pour le dos, ce soin associe techniques enveloppantes et gestes profonds pour relâcher les nœuds, délier les tensions et favoriser une posture plus légère."
          duration={
            <>
              environ <strong>60</strong> minutes de bien-être ciblé
            </>
          }
          text="Prenez soin de votre dos avec ce massage exclusif, à partir de"
          price="74 €"
        />

        <Gallery ids={[25, 8, 9]} />
        <CtaSectionMassagePage
          title="Votre dos mérite aussi de souffler"
          soin="le soin Douceur Dorsale"
        />
        <Testimonials ids={[5, 14, 18, 22, 29]} />
      </main>
    </>
  );
}
