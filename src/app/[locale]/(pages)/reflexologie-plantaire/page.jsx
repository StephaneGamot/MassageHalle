
import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Réflexologie plantaire à Halle - Harmonie & Bien-être",
      en: "Foot Reflexology in Halle – Harmony & Well-being",
      nl: "Voetreflexologie in Halle – Harmonie & Welzijn",
    }[currentLocale],
    description: {
      fr: "Offrez à vos pieds une expérience unique avec la réflexologie plantaire à Halle. Une méthode naturelle pour rééquilibrer le corps et apaiser l'esprit.",
      en: "Give your feet a unique experience with foot reflexology in Halle. A natural method to balance the body and calm the mind.",
      nl: "Gun uw voeten een unieke ervaring met voetreflexologie in Halle. Een natuurlijke methode om het lichaam in balans te brengen en de geest te kalmeren.",
    }[currentLocale],
alternates: {
  canonical: `https://lavoiedubienetre.be/${currentLocale}/reflexologie-plantaire`,
  languages: {
    fr: 'https://lavoiedubienetre.be/fr/reflexologie-plantaire',
    en: 'https://lavoiedubienetre.be/en/reflexologie-plantaire',
    nl: 'https://lavoiedubienetre.be/nl/reflexologie-plantaire',
    'x-default': 'https://lavoiedubienetre.be/fr/reflexologie-plantaire',
  }
},

    openGraph: {
      title: {
        fr: "Réflexologie plantaire à Halle - Harmonie & Bien-être",
        en: "Foot Reflexology in Halle – Harmony & Well-being",
        nl: "Voetreflexologie in Halle – Harmonie & Welzijn",
      }[currentLocale],
      description: {
        fr: "Une méthode douce qui stimule les zones réflexes des pieds pour harmoniser les fonctions corporelles.",
        en: "A gentle method that stimulates foot reflex zones to harmonize body functions.",
        nl: "Een zachte methode die de reflexzones van de voeten stimuleert om de lichaamsfuncties te harmoniseren.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}/reflexologie-plantaire`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
          width: 1200,
          height: 627,
          alt: {
            fr: "Séance de réflexologie plantaire à Halle",
            en: "Foot reflexology session in Halle",
            nl: "Voetreflexologiesessie in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Réflexologie plantaire – Bien-être & Équilibre à Halle",
        en: "Foot Reflexology – Wellness & Balance in Halle",
        nl: "Voetreflexologie – Welzijn & Evenwicht in Halle",
      }[currentLocale],
      description: {
        fr: "Soulagez votre corps en passant par les pieds. Une pratique ancestrale aux bienfaits durables.",
        en: "Relieve your body through your feet. An ancient practice with lasting benefits.",
        nl: "Verlicht uw lichaam via de voeten. Een eeuwenoude praktijk met duurzame voordelen.",
      }[currentLocale],
      card: "summary_large_image",
      site: "@voiedubienetre",
      images: [
        "https://lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg",
      ],
    },
  };
}


export default function Page({ params }) {
  const { locale } = params || {};
  const currentLocale = locale ?? "fr";

  return (
    <>
      <MassageServiceJSONLD slug="relaxant" locale={currentLocale} />  <main>
        <HeroMassage variant="reflexo" />
        <WhyThisCare title="reflexo" />
        <Benefits ids={[48, 8, 16, 14]} title="reflexo" />
        <TreatmentDescription variant="reflexo" />
        <Gallery ids={[30, 10, 15]} />
        <CtaSectionMassagePage variant="reflexo" />
        <Testimonials ids={[8, 16, 25, 36, 44]} />
      </main>
    </>
  );
}
