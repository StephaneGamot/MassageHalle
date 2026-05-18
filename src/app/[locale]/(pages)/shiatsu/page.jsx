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
      fr: "Shiatsu à Hal – Praticien certifié, séance 60 min 80 €",
      en: "Shiatsu in Halle – Certified practitioner, 60 min €80",
      nl: "Shiatsu in Halle – Gecertificeerd, 60 min sessie €80",
    }[currentLocale],
    description: {
      fr: "Shiatsu traditionnel à Hal par un praticien certifié : digestion, sommeil, stress, douleurs. Séance habillée de 60 min dès 80 €. Réservez en ligne.",
      en: "Traditional Shiatsu in Halle with a certified practitioner: digestion, sleep, stress, pain. 60-min fully-clothed session from €80. Book online.",
      nl: "Traditionele Shiatsu in Halle door een gecertificeerd beoefenaar: spijsvertering, slaap, stress, pijn. 60-min sessie (gekleed) vanaf €80. Boek online.",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/shiatsu`,
      languages: {
        fr: `${baseUrl}/fr/shiatsu`,
        en: `${baseUrl}/en/shiatsu`,
        nl: `${baseUrl}/nl/shiatsu`,
        "x-default": `${baseUrl}/fr/shiatsu`,
      },
    },
    openGraph: {
      title: {
        fr: "Shiatsu à Hal – Praticien certifié, séance 60 min 80 €",
        en: "Shiatsu in Halle – Certified practitioner, 60 min €80",
        nl: "Shiatsu in Halle – Gecertificeerd, 60 min sessie €80",
      }[currentLocale],
      description: {
        fr: "Shiatsu traditionnel à Hal par un praticien certifié : digestion, sommeil, stress, douleurs. Séance habillée de 60 min dès 80 €. Réservez en ligne.",
        en: "Traditional Shiatsu in Halle with a certified practitioner: digestion, sleep, stress, pain. 60-min fully-clothed session from €80. Book online.",
        nl: "Traditionele Shiatsu in Halle door een gecertificeerd beoefenaar: spijsvertering, slaap, stress, pijn. 60-min sessie (gekleed) vanaf €80. Boek online.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/shiatsu`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: {
        fr: "fr_BE",
        en: "en_BE",
        nl: "nl_BE",
      }[currentLocale],
      images: [
        {
          url: `${baseUrl}/Images/hero/shiatsu-zen-seance-therapeutique-holistique.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Séance de Shiatsu à Hal",
            en: "Shiatsu session in Halle",
            nl: "Shiatsu-sessie in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Shiatsu à Hal – Praticien certifié, séance 60 min 80 €",
        en: "Shiatsu in Halle – Certified practitioner, 60 min €80",
        nl: "Shiatsu in Halle – Gecertificeerd, 60 min sessie €80",
      }[currentLocale],
      description: {
        fr: "Shiatsu traditionnel à Hal par un praticien certifié : digestion, sommeil, stress, douleurs. Séance habillée de 60 min dès 80 €. Réservez en ligne.",
        en: "Traditional Shiatsu in Halle with a certified practitioner: digestion, sleep, stress, pain. 60-min fully-clothed session from €80. Book online.",
        nl: "Traditionele Shiatsu in Halle door een gecertificeerd beoefenaar: spijsvertering, slaap, stress, pijn. 60-min sessie (gekleed) vanaf €80. Boek online.",
      }[currentLocale],
      images: [`${baseUrl}/Images/hero/shiatsu-massage-halle-bruxelles.webp`],
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

      <MassageServiceJSONLD slug="shiatsu" locale={currentLocale} />

      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Shiatsu"
        serviceUrl={`${baseUrl}/${currentLocale}/shiatsu`}
      />

      <HeroMassage variant="shiatsu" />
      <WhyThisCare title="shiatsu" />
      <Benefits ids={[17, 18, 60, 11]} title="shiatsu" />
      <TreatmentDescription variant="shiatsu" />
      <Gallery ids={[29, 27, 18]} />
      <CtaSectionMassagePage variant="shiatsu" />
      <ServiceFaq variant="shiatsu" />
      <RelatedServices variant="shiatsu" />
      <Testimonials ids={[12, 18, 27, 34, 42, 46]} />
    </>
  );
}
