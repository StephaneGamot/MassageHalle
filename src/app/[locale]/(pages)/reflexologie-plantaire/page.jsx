import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";
import ServiceBreadcrumbJsonLd from "@/components/Metadata/ServiceBreadcrumbJsonLd";
import RelatedServices from "@/components/RelatedServices/RelatedServices";
import ServiceFaq from "@/components/Faq/ServiceFaq";

const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Réflexologie plantaire à Hal – Sommeil, stress, digestion",
      en: "Foot Reflexology Halle – Sleep, stress, digestion €80+",
      nl: "Voetreflexologie Halle – Slaap, stress, spijsvertering",
    }[currentLocale],
    description: {
      fr: "Mal de tête, mauvais sommeil, digestion lente ? Réflexologie plantaire à Hal, 60 min de soin par les pieds, dès 80 €. Cabinet calme. Réservez en ligne.",
      en: "Headaches, poor sleep, sluggish digestion? Foot reflexology in Halle: 60-min treatment from €80. Calm studio. Book your session online today.",
      nl: "Hoofdpijn, slecht slapen, trage spijsvertering? Voetreflexologie in Halle: 60-min behandeling vanaf €80. Rustige praktijk. Boek vandaag uw sessie.",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/reflexologie-plantaire`,
      languages: {
        fr: `${baseUrl}/fr/reflexologie-plantaire`,
        en: `${baseUrl}/en/reflexologie-plantaire`,
        nl: `${baseUrl}/nl/reflexologie-plantaire`,
        "x-default": `${baseUrl}/fr/reflexologie-plantaire`,
      },
    },
    openGraph: {
      title: {
        fr: "Réflexologie plantaire à Hal – Sommeil, stress, digestion",
        en: "Foot Reflexology Halle – Sleep, stress, digestion €80+",
        nl: "Voetreflexologie Halle – Slaap, stress, spijsvertering",
      }[currentLocale],
      description: {
        fr: "Mal de tête, mauvais sommeil, digestion lente ? Réflexologie plantaire à Hal, 60 min de soin par les pieds, dès 80 €. Cabinet calme. Réservez en ligne.",
        en: "Headaches, poor sleep, sluggish digestion? Foot reflexology in Halle: 60-min treatment from €80. Calm studio. Book your session online today.",
        nl: "Hoofdpijn, slecht slapen, trage spijsvertering? Voetreflexologie in Halle: 60-min behandeling vanaf €80. Rustige praktijk. Boek vandaag uw sessie.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/reflexologie-plantaire`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: {
        fr: "fr_BE",
        en: "en_BE",
        nl: "nl_BE",
      }[currentLocale],
      images: [
        {
          url: `${baseUrl}/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Séance de réflexologie plantaire à Hal",
            en: "Foot reflexology session in Halle",
            nl: "Voetreflexologiesessie in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Réflexologie plantaire à Hal – Sommeil, stress, digestion",
        en: "Foot Reflexology Halle – Sleep, stress, digestion €80+",
        nl: "Voetreflexologie Halle – Slaap, stress, spijsvertering",
      }[currentLocale],
      description: {
        fr: "Mal de tête, mauvais sommeil, digestion lente ? Réflexologie plantaire à Hal, 60 min de soin par les pieds, dès 80 €. Cabinet calme. Réservez en ligne.",
        en: "Headaches, poor sleep, sluggish digestion? Foot reflexology in Halle: 60-min treatment from €80. Calm studio. Book your session online today.",
        nl: "Hoofdpijn, slecht slapen, trage spijsvertering? Voetreflexologie in Halle: 60-min behandeling vanaf €80. Rustige praktijk. Boek vandaag uw sessie.",
      }[currentLocale],
      images: [`${baseUrl}/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}


export default async function Page(props) {
  const { params } = props;
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return (
    <>

      <MassageServiceJSONLD slug="reflexologie" locale={currentLocale} />

      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Réflexologie plantaire"
        serviceUrl={`${baseUrl}/${currentLocale}/reflexologie-plantaire`}
      />

      <HeroMassage variant="reflexo" />
      <WhyThisCare title="reflexo" />
      <Benefits ids={[48, 8, 16, 14]} title="reflexo" />
      <TreatmentDescription variant="reflexo" />
      <Gallery ids={[30, 10, 15]} />
      <CtaSectionMassagePage variant="reflexo" />
      <ServiceFaq variant="reflexo" />
      <RelatedServices variant="reflexo" />
      <Testimonials ids={[8, 16, 25, 36, 44]} />
    </>
  );
}
