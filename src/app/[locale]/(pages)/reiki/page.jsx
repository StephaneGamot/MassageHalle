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
      fr: "Reiki à Hal · apaisement & lâcher-prise",
      en: "Reiki in Halle – Reiki Master, 60 min session from €120",
      nl: "Reiki in Halle – Reiki Master, 60 min sessie vanaf 120€",
    }[currentLocale],
    description: {
      fr: "Séance de Reiki à Halle pour apaiser le mental et relâcher les tensions. Maître Reiki certifié, 20 ans d'expérience. 1 h 30 dès 120€. Réservez en ligne.",
      en: "Reiki in Halle with a Reiki Master: ease stress, anxiety and emotional fatigue. 90-min fully-clothed treatment from €120. Quiet studio. Book online.",
      nl: "Reiki in Halle bij een Reiki Master: verlicht stress, angst en emotionele vermoeidheid. 1u30 (gekleed), vanaf 120€. Rustige praktijk. Boek online.",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/reiki`,
      languages: {
        fr: `${baseUrl}/fr/reiki`,
        en: `${baseUrl}/en/reiki`,
        nl: `${baseUrl}/nl/reiki`,
        "x-default": `${baseUrl}/fr/reiki`,
      },
    },
    openGraph: {
      title: {
        fr: "Reiki à Hal · apaisement & lâcher-prise",
        en: "Reiki in Halle – Reiki Master, 60 min session from €120",
        nl: "Reiki in Halle – Reiki Master, 60 min sessie vanaf 120€",
      }[currentLocale],
      description: {
        fr: "Séance de Reiki à Halle pour apaiser le mental et relâcher les tensions. Maître Reiki certifié, 20 ans d'expérience. 1 h 30 dès 120€. Réservez en ligne.",
        en: "Reiki in Halle with a Reiki Master: ease stress, anxiety and emotional fatigue. 90-min fully-clothed treatment from €120. Quiet studio. Book online.",
        nl: "Reiki in Halle bij een Reiki Master: verlicht stress, angst en emotionele vermoeidheid. 1u30 (gekleed), vanaf 120€. Rustige praktijk. Boek online.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/reiki`,
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
            fr: "Soin Reiki à Hal",
            en: "Reiki treatment in Halle",
            nl: "Reiki-behandeling in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Reiki à Hal · apaisement & lâcher-prise",
        en: "Reiki in Halle – Reiki Master, 60 min session from €120",
        nl: "Reiki in Halle – Reiki Master, 60 min sessie vanaf 120€",
      }[currentLocale],
      description: {
        fr: "Séance de Reiki à Halle pour apaiser le mental et relâcher les tensions. Maître Reiki certifié, 20 ans d'expérience. 1 h 30 dès 120€. Réservez en ligne.",
        en: "Reiki in Halle with a Reiki Master: ease stress, anxiety and emotional fatigue. 90-min fully-clothed treatment from €120. Quiet studio. Book online.",
        nl: "Reiki in Halle bij een Reiki Master: verlicht stress, angst en emotionele vermoeidheid. 1u30 (gekleed), vanaf 120€. Rustige praktijk. Boek online.",
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

      <MassageServiceJSONLD slug="reiki" locale={currentLocale} />

      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Reiki"
        serviceUrl={`${baseUrl}/${currentLocale}/reiki`}
      />

      <HeroMassage variant="reiki" />
      <WhyThisCare title="reiki" />
      <Benefits ids={[11, 61, 36, 46]} title="reiki" />
      <TreatmentDescription variant="reiki" />
      <Gallery ids={[11, 17, 23]} />
      <CtaSectionMassagePage variant="reiki" />
      <ServiceFaq variant="reiki" />
      <RelatedServices variant="reiki" />
      <Testimonials ids={[5, 10, 20, 29, 47]} />
    </>
  );
}
