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
  const { locale } = await params; // Next 15-friendly
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage relaxant à Hal – 60 min de détente dès 120 €",
      en: "Relaxing Massage in Halle – 60 min from €120",
      nl: "Ontspanningsmassage Halle – 60 min vanaf 120 €",
    }[currentLocale],
    description: {
      fr: "Stress, fatigue ou tensions ? Offrez-vous 1 h 30 de massage relaxant à Hal ou Bruxelles, dès 120 €. Cabinet ou à domicile, du lundi au samedi. Réservez.",
      en: "Stressed, tired or tense? Enjoy a 90-min relaxing massage in Halle or Brussels from €120. Studio or at home, Monday to Saturday. Book online today.",
      nl: "Stress, vermoeidheid of spanning? Geniet 1u30 ontspanningsmassage in Halle of Brussel vanaf 120 €. Praktijk of aan huis, ma-za. Boek online.",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/relaxant`,
      languages: {
        fr: `${baseUrl}/fr/massage/relaxant`,
        en: `${baseUrl}/en/massage/relaxant`,
        nl: `${baseUrl}/nl/massage/relaxant`,
        "x-default": `${baseUrl}/fr/massage/relaxant`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage relaxant à Hal – 60 min de détente dès 120 €",
        en: "Relaxing Massage in Halle – 60 min from €120",
        nl: "Ontspanningsmassage Halle – 60 min vanaf 120 €",
      }[currentLocale],
      description: {
        fr: "Stress, fatigue ou tensions ? Offrez-vous 1 h 30 de massage relaxant à Hal ou Bruxelles, dès 120 €. Cabinet ou à domicile, du lundi au samedi. Réservez.",
        en: "Stressed, tired or tense? Enjoy a 90-min relaxing massage in Halle or Brussels from €120. Studio or at home, Monday to Saturday. Book online today.",
        nl: "Stress, vermoeidheid of spanning? Geniet 1u30 ontspanningsmassage in Halle of Brussel vanaf 120 €. Praktijk of aan huis, ma-za. Boek online.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/relaxant`,
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
            fr: "Femme détendue recevant un massage relaxant",
            en: "Relaxed woman receiving a relaxing massage",
            nl: "Ontspannen vrouw krijgt een ontspanningsmassage",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage relaxant à Hal – 60 min de détente dès 120 €",
        en: "Relaxing Massage in Halle – 60 min from €120",
        nl: "Ontspanningsmassage Halle – 60 min vanaf 120 €",
      }[currentLocale],
      description: {
        fr: "Stress, fatigue ou tensions ? Offrez-vous 1 h 30 de massage relaxant à Hal ou Bruxelles, dès 120 €. Cabinet ou à domicile, du lundi au samedi. Réservez.",
        en: "Stressed, tired or tense? Enjoy a 90-min relaxing massage in Halle or Brussels from €120. Studio or at home, Monday to Saturday. Book online today.",
        nl: "Stress, vermoeidheid of spanning? Geniet 1u30 ontspanningsmassage in Halle of Brussel vanaf 120 €. Praktijk of aan huis, ma-za. Boek online.",
      }[currentLocale],
      images: [
        `${baseUrl}/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp`,
      ],
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
  const { locale } = await params;
  const currentLocale = locale ?? "fr";

  const localBusinessId = `${baseUrl}/#localbusiness`;

  return (
    <>

      {/* JSON-LD du service massage relaxant */}
      <MassageServiceJSONLD slug="relaxant" locale={currentLocale} />

      {/* Breadcrumb JSON-LD */}
      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Massage relaxant"
        serviceUrl={`${baseUrl}/${currentLocale}/massage/relaxant`}
      />

      <HeroMassage variant="massage" />
      <Benefits ids={[1, 6, 19, 4]} title="relaxant" />
      <WhyThisCare ids={[2, 6, 13, 21, 31]} title="relaxant" />
      <TreatmentDescription variant="relaxant" />
      <Gallery ids={[1, 2, 3]} />
      <CtaSectionMassagePage variant="relaxant" />
      <ServiceFaq variant="relaxant" />
      <RelatedServices variant="massage" />
      <Testimonials ids={[1, 4, 11, 23, 35]} />
    </>
  );
}
