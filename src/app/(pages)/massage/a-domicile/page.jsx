import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";

export const metadata = {
  title: "Massage à domicile à Halle, Bruxelles et alentours",
  description:
    "Détendez votre corps et votre esprit grâce à un massage relaxant à Halle, près de Bruxelles. Une expérience douce, personnalisée, disponible en cabinet ou à domicile.",
  alternates: {
    canonical: "https://lavoiedubienetre.be/massages/a-domicile",
  },
 
openGraph: {
    title: "Massage & soin therapeutique à domicile",
    description:
      "Détendez votre corps et votre esprit grâce à un massage relaxant à Halle, près de Bruxelles. Une expérience douce, personnalisée, disponible en cabinet ou à domicile.",
    url: "https://lavoiedubienetre.be/massages/a-domicile",
  },
siteName: "La Voie du Bien-Être",
  images: [
    {
      url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
      width: 1200,
      height: 630,
      alt: "Massage relaxant à Bruxelles - Halle",
    },
  ],
  type: "website",
  twitter: {
    title: "La voie du bien-être | Shiatsu Reiki Massage à Halle",
    card: "summary_large_image",
    site: "@voiedubienetre",
    description: "Massage à domicile | Shiatsu Reiki Reflexologie Plantaire | La voie du bien-être",
    images: ["https://lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg"],
  },
};

export default function page() {
  return (
    <>

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

