import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import Head from "next/head";

export default function page() {
  return (
 <>
   <Head>
        <title>Massage Sportif à Halle – Récupération & Performance</title>
        <meta
          name="description"
          content="Offrez à votre corps une récupération optimale après l’effort. Le massage sportif soulage les tensions musculaires et améliore la performance."
        />
        <link rel="canonical" href="https://lavoiedubienetre.be/massage/sportif" />
      </Head>
        <main>
        <HeroMassage
          variant="massage"
          title="Préparez votre corps, libérez vos tensions"
          text1="Un massage en profondeur conçu pour les sportifs et les personnes actives. Idéal avant ou après un effort physique."
          text2="Chaque soin est adapté à votre corps, vos objectifs, et votre rythme."
        />

        <Benefits ids={[2, 7, 52, 53 ]} title="un massage sportif" />
        
        <WhyThisCare
          ids={[3, 8, 12, 14]}
          title="Est-ce que ce massage sportif est pour moi ?"
        />

        <TreatmentDescription
          title="Un soin ciblé et revitalisant"
          hero="Le massage sportif vise à soulager les tensions musculaires, améliorer la récupération et prévenir les blessures. Il peut être tonique ou plus profond, selon votre pratique."
          duration={ <>entre <strong>60</strong> et <strong>90 minutes</strong></> }
          text="Offrez à votre corps ce regain d’énergie, à partir de"
          price="74€"
        />

        <Gallery ids={[7, 21, 24]} />

        <CtaSectionMassagePage
          title="Accordez à vos muscles le soin qu’ils méritent"
          soin="votre massage sportif"
        />

        <Testimonials ids={[6, 10, 19, 28, 42]} />
      </main>
    </>
  );
}