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
      fr: "Massage Tao à Hal – Lenteur, présence, énergie vitale",
      en: "Tao Massage in Halle – Slow, mindful, deeply energetic",
      nl: "Tao-massage in Halle – Traag, bewust, energetisch diep",
    }[currentLocale],
    description: {
      fr: "Le massage Tao à Hal : un soin lent et profond, inspiré de la médecine chinoise, pour reconnecter corps et énergie. 90 min dès 110 €. Réservez en ligne.",
      en: "Tao massage in Halle: a slow, deep treatment rooted in Chinese medicine to reconnect body and energy. 90 min from €110. Book your session online.",
      nl: "Tao-massage in Halle: een trage, diepe behandeling uit de Chinese geneeskunde om lichaam en energie te verbinden. 90 min vanaf €110. Boek online.",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/tao`,
      languages: {
        fr: `${baseUrl}/fr/massage/tao`,
        en: `${baseUrl}/en/massage/tao`,
        nl: `${baseUrl}/nl/massage/tao`,
        "x-default": `${baseUrl}/fr/massage/tao`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage Tao à Hal – Lenteur, présence, énergie vitale",
        en: "Tao Massage in Halle – Slow, mindful, deeply energetic",
        nl: "Tao-massage in Halle – Traag, bewust, energetisch diep",
      }[currentLocale],
      description: {
        fr: "Le massage Tao à Hal : un soin lent et profond, inspiré de la médecine chinoise, pour reconnecter corps et énergie. 90 min dès 110 €. Réservez en ligne.",
        en: "Tao massage in Halle: a slow, deep treatment rooted in Chinese medicine to reconnect body and energy. 90 min from €110. Book your session online.",
        nl: "Tao-massage in Halle: een trage, diepe behandeling uit de Chinese geneeskunde om lichaam en energie te verbinden. 90 min vanaf €110. Boek online.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/tao`,
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
            fr: "Massage tao à domicile ou en cabinet à Hal",
            en: "Tao massage at home or in practice in Halle",
            nl: "Tao massage aan huis of in de praktijk in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage Tao à Hal – Lenteur, présence, énergie vitale",
        en: "Tao Massage in Halle – Slow, mindful, deeply energetic",
        nl: "Tao-massage in Halle – Traag, bewust, energetisch diep",
      }[currentLocale],
      description: {
        fr: "Le massage Tao à Hal : un soin lent et profond, inspiré de la médecine chinoise, pour reconnecter corps et énergie. 90 min dès 110 €. Réservez en ligne.",
        en: "Tao massage in Halle: a slow, deep treatment rooted in Chinese medicine to reconnect body and energy. 90 min from €110. Book your session online.",
        nl: "Tao-massage in Halle: een trage, diepe behandeling uit de Chinese geneeskunde om lichaam en energie te verbinden. 90 min vanaf €110. Boek online.",
      }[currentLocale],
      images: [`${baseUrl}/Images/OpenGraph/masseur-massage.jpg`],
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

  return (
    <>

      {/* ✅ JSON-LD du service Tao */}
      <MassageServiceJSONLD slug="tao" locale={currentLocale} />

      {/* ✅ Breadcrumb JSON-LD */}
      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Massage tao"
        serviceUrl={`${baseUrl}/${currentLocale}/massage/tao`}
      />

      <HeroMassage variant="tao" />
      <WhyThisCare title="tao" />
      <Benefits ids={[9, 11, 32, 46]} title="tao" />
      <TreatmentDescription variant="tao" />
      <Gallery ids={[7, 8, 9]} />
      <CtaSectionMassagePage variant="tao" />
      <ServiceFaq variant="tao" />
      <RelatedServices variant="tao" />
      <Testimonials ids={[9, 18, 22, 27, 33, 21]} />
    </>
  );
}
