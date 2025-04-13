import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";

export const metadata = {
  title: "Massage Shiatsu à Halle (Bruxelles) - Équilibre & Énergie",
  description:
    "Découvrez le Shiatsu à Halle : un soin thérapeutique japonais qui rééquilibre l’énergie vitale, libère les tensions et soutient le corps dans son auto-guérison.",
  alternates: {
    canonical: "https://lavoiedubienetre.be/shiatsu",
  },
  openGraph: {
    title: "Massage Shiatsu à Halle (Bruxelles) - Équilibre & Énergie",
    description:
      "Découvrez le Shiatsu à Halle : un soin thérapeutique japonais qui rééquilibre l’énergie vitale, libère les tensions et soutient le corps dans son auto-guérison.",
    url: "https://lavoiedubienetre.be/shiatsu",
  },
};

export default function Page() {
  return (
    <>
  

      <main>
        <HeroMassage
          variant="soin"
          title="Rééquilibrez votre énergie avec le Shiatsu"
          text1="Un soin japonais thérapeutique qui agit en profondeur sur les méridiens d’énergie."
          text2="Retrouvez harmonie, ancrage et vitalité à travers un toucher précis, rythmé et bienveillant."
        />

        <Benefits ids={[17, 18, 60, 11]} title="une séance de Shiatsu" />

        <WhyThisCare
          ids={[34, 31, 29, 24, 18]}
          title="À qui s’adresse le Shiatsu ?"
        />

        <TreatmentDescription
          title="Un soin énergétique profond"
          hero="Le Shiatsu est un art du toucher issu du Japon, qui utilise des pressions des doigts le long des méridiens pour relancer la circulation énergétique, détendre le système nerveux et soutenir l’auto-régulation du corps."
          duration={
            <>
              environ <strong>90 minutes</strong>
            </>
          }
          text="Prenez soin de votre équilibre intérieur, à partir de"
          price="99 €"
        />

        <Gallery ids={[29, 27, 18]} />

        <CtaSectionMassagePage
          title="Offrez-vous un moment de recentrage"
          soin="votre soin Shiatsu"
        />

        <Testimonials ids={[12, 18, 27, 34, 42, 46]} />
      </main>
    </>
  );
}
