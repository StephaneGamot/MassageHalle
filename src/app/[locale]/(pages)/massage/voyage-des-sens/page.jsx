
import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage Voyage des Sens à Halle - Évasion & Détente Totale",
      en: "Sensory Journey Massage in Halle – Escape & Total Relaxation",
      nl: "Massage Reis der Zintuigen in Halle – Ontsnapping & Totale Ontspanning",
    }[currentLocale],
    description: {
      fr: "Offrez-vous une évasion sensorielle profonde avec le massage Voyage des Sens à Halle. Un soin enveloppant pour un lâcher-prise total, en toute sécurité.",
      en: "Experience a deep sensory escape with the Journey Massage in Halle. A cocooning treatment for complete letting go, in full safety.",
      nl: "Beleef een diepe zintuiglijke ontsnapping met de Reis der Zintuigen massage in Halle. Een omhullende behandeling voor totale ontspanning, in alle veiligheid.",
    }[currentLocale],
  alternates: {
  canonical: `https://lavoiedubienetre.be/${currentLocale}/massage/voyage-des-sens`,
  languages: {
    fr: 'https://lavoiedubienetre.be/fr/massage/voyage-des-sens',
    en: 'https://lavoiedubienetre.be/en/massage/voyage-des-sens',
    nl: 'https://lavoiedubienetre.be/nl/massage/voyage-des-sens',
    'x-default': 'https://lavoiedubienetre.be/fr/massage/voyage-des-sens',
  }
},

    openGraph: {
      title: {
        fr: "Massage Voyage des Sens à Halle - Évasion & Détente Totale",
        en: "Sensory Journey Massage in Halle – Escape & Total Relaxation",
        nl: "Massage Reis der Zintuigen in Halle – Ontsnapping & Totale Ontspanning",
      }[currentLocale],
      description: {
        fr: "Un massage qui vous invite à partir, à vous reconnecter et à lâcher prise en profondeur. Une évasion sensorielle unique à Halle.",
        en: "A massage inviting you to disconnect, reconnect, and fully release. A unique sensory escape in Halle.",
        nl: "Een massage die je uitnodigt om los te laten, opnieuw te verbinden en diep te ontspannen. Een unieke zintuiglijke ervaring in Halle.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}/massage/voyage-des-sens`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
          width: 1200,
          height: 627,
          alt: {
            fr: "Massage enveloppant pour une évasion sensorielle à Halle",
            en: "Cocooning massage for a sensory escape in Halle",
            nl: "Omhullende massage voor een zintuiglijke ontsnapping in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Massage Voyage des Sens – Lâcher-prise & spiritualité à Halle",
        en: "Journey Massage – Letting Go & Spiritual Escape in Halle",
        nl: "Reis der Zintuigen Massage – Loslaten & Spirituele Ontsnapping in Halle",
      }[currentLocale],
      description: {
        fr: "Un soin pour libérer corps et esprit. Le massage Voyage des Sens, un rituel pour vous recentrer.",
        en: "A treatment to free body and mind. The Journey Massage is a ritual to recentre yourself.",
        nl: "Een behandeling om lichaam en geest te bevrijden. De Reis der Zintuigen is een ritueel om opnieuw in balans te komen.",
      }[currentLocale],
      card: "summary_large_image",
      site: "@voiedubienetre",
      images: [
        "https://lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg",
      ],
    },
  };
}

export default function Page() {
  return (
    <>
      <main>
        <HeroMassage variant="voyage" />
        <WhyThisCare title="voyage" />
        <Benefits ids={[31, 63, 50, 64]} title="voyage" />
        <TreatmentDescription variant="voyage" />
        <Gallery ids={[6, 8, 9]} />
        <CtaSectionMassagePage variant="voyage" />
        <Testimonials ids={[6, 13, 19, 29, 41]} />
      </main>
    </>
  );
}
