import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";
import RelatedServices from "@/components/RelatedServices/RelatedServices";
import ServiceBreadcrumbJsonLd from "@/components/Metadata/ServiceBreadcrumbJsonLd";
import ServiceFaq from "@/components/Faq/ServiceFaq";

const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage Voyage des Sens à Hal · évasion",
      en: "Sensory Journey Massage Halle – 90 min full escape",
      nl: "Zintuigenreis-massage Halle – 90 min volledige ontsnapping",
    }[currentLocale],
    description: {
      fr: "Massage Voyage des Sens à Halle : 90 minutes d'évasion totale pour le corps et l'esprit. Praticien certifié. Offrez-vous une parenthèse, réservez en ligne.",
      en: "Treat yourself (or someone special): 90-min signature Sensory Journey massage in Halle, warm oils and soft music, from €110. Gift vouchers available.",
      nl: "Trakteer uzelf (of iemand): 90-min signature Zintuigenreis massage in Halle, warme oliën en zachte muziek, vanaf €110. Cadeaubonnen beschikbaar.",
    }[currentLocale],
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
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/voyage-des-sens`,
      languages: {
        fr: `${baseUrl}/fr/massage/voyage-des-sens`,
        en: `${baseUrl}/en/massage/voyage-des-sens`,
        nl: `${baseUrl}/nl/massage/voyage-des-sens`,
        "x-default": `${baseUrl}/fr/massage/voyage-des-sens`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage Voyage des Sens à Hal · évasion",
        en: "Sensory Journey Massage Halle – 90 min full escape",
        nl: "Zintuigenreis-massage Halle – 90 min volledige ontsnapping",
      }[currentLocale],
      description: {
        fr: "Massage Voyage des Sens à Halle : 90 minutes d'évasion totale pour le corps et l'esprit. Praticien certifié. Offrez-vous une parenthèse, réservez en ligne.",
        en: "Treat yourself (or someone special): 90-min signature Sensory Journey massage in Halle, warm oils and soft music, from €110. Gift vouchers available.",
        nl: "Trakteer uzelf (of iemand): 90-min signature Zintuigenreis massage in Halle, warme oliën en zachte muziek, vanaf €110. Cadeaubonnen beschikbaar.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/voyage-des-sens`,
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
            fr: "Massage enveloppant pour une évasion sensorielle à Halle",
            en: "Cocooning massage for a sensory escape in Halle",
            nl: "Omhullende massage voor een zintuiglijke ontsnapping in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Massage Voyage des Sens à Hal · évasion",
        en: "Sensory Journey Massage Halle – 90 min full escape",
        nl: "Zintuigenreis-massage Halle – 90 min volledige ontsnapping",
      }[currentLocale],
      description: {
        fr: "Massage Voyage des Sens à Halle : 90 minutes d'évasion totale pour le corps et l'esprit. Praticien certifié. Offrez-vous une parenthèse, réservez en ligne.",
        en: "Treat yourself (or someone special): 90-min signature Sensory Journey massage in Halle, warm oils and soft music, from €110. Gift vouchers available.",
        nl: "Trakteer uzelf (of iemand): 90-min signature Zintuigenreis massage in Halle, warme oliën en zachte muziek, vanaf €110. Cadeaubonnen beschikbaar.",
      }[currentLocale],
      card: "summary_large_image",
      site: "@voiedubienetre",
      images: [`${baseUrl}/Images/OpenGraph/masseur-massage.jpg`],
    },
  };
}

export default async function Page(props) {
  const { params } = props;
  const { locale } = await params;
  const currentLocale = locale ?? "fr";

  return (
    <>

      <MassageServiceJSONLD slug="voyage" locale={currentLocale} />
      <ServiceBreadcrumbJsonLd locale={currentLocale} serviceName="Massage Voyage des Sens" serviceUrl={`${baseUrl}/${currentLocale}/massage/voyage-des-sens`} />

      <HeroMassage variant="voyage" />
      <WhyThisCare title="voyage" />
      <Benefits ids={[31, 63, 50, 64]} title="voyage" />
      <TreatmentDescription variant="voyage" />
      <Gallery ids={[6, 8, 9]} />
      <CtaSectionMassagePage variant="voyage" />
      <ServiceFaq variant="voyage" />
      <RelatedServices variant="voyage" />
      <Testimonials ids={[6, 13, 19, 29, 41]} />
    </>
  );
}
