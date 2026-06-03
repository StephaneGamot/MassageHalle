import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";
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
      fr: "Massage Deep Tissue à Hal – Douleurs profondes, dès 120 €",
      en: "Deep Tissue Massage Halle – Back, neck & sciatica €120+",
      nl: "Deep Tissue Massage Halle – Rug, nek, ischias vanaf 120 €",
    }[currentLocale],
    description: {
      fr: "Mal de dos, nuque bloquée, sciatique ? Massage Deep Tissue à Hal pour libérer les tensions profondes et retrouver la mobilité. Dès 120 €. RDV en ligne.",
      en: "Back pain, stiff neck, sciatica? Deep Tissue massage in Halle to release deep tension and restore mobility. From €120. Book online today.",
      nl: "Rugpijn, stijve nek, ischias? Deep Tissue massage in Halle om diepe spanning los te laten en mobiliteit te herstellen. Vanaf 120 €. Boek online.",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/deep-tissues`,
      languages: {
        fr: `${baseUrl}/fr/massage/deep-tissues`,
        en: `${baseUrl}/en/massage/deep-tissues`,
        nl: `${baseUrl}/nl/massage/deep-tissues`,
        "x-default": `${baseUrl}/fr/massage/deep-tissues`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage Deep Tissue à Hal – Douleurs profondes, dès 120 €",
        en: "Deep Tissue Massage Halle – Back, neck & sciatica €120+",
        nl: "Deep Tissue Massage Halle – Rug, nek, ischias vanaf 120 €",
      }[currentLocale],
      description: {
        fr: "Mal de dos, nuque bloquée, sciatique ? Massage Deep Tissue à Hal pour libérer les tensions profondes et retrouver la mobilité. Dès 120 €. RDV en ligne.",
        en: "Back pain, stiff neck, sciatica? Deep Tissue massage in Halle to release deep tension and restore mobility. From €120. Book online today.",
        nl: "Rugpijn, stijve nek, ischias? Deep Tissue massage in Halle om diepe spanning los te laten en mobiliteit te herstellen. Vanaf 120 €. Boek online.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/deep-tissues`,
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
            fr: "Massage profond pour soulager les tensions à Hal",
            en: "Deep massage to relieve tension in Halle",
            nl: "Diepe massage om spanningen te verlichten in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage Deep Tissue à Hal – Douleurs profondes, dès 120 €",
        en: "Deep Tissue Massage Halle – Back, neck & sciatica €120+",
        nl: "Deep Tissue Massage Halle – Rug, nek, ischias vanaf 120 €",
      }[currentLocale],
      description: {
        fr: "Mal de dos, nuque bloquée, sciatique ? Massage Deep Tissue à Hal pour libérer les tensions profondes et retrouver la mobilité. Dès 120 €. RDV en ligne.",
        en: "Back pain, stiff neck, sciatica? Deep Tissue massage in Halle to release deep tension and restore mobility. From €120. Book online today.",
        nl: "Rugpijn, stijve nek, ischias? Deep Tissue massage in Halle om diepe spanning los te laten en mobiliteit te herstellen. Vanaf 120 €. Boek online.",
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

  const localBusinessId = `${baseUrl}/#localbusiness`;

  return (
    <>

      {/* ✅ JSON-LD du service spécifique Deep Tissue */}
      <MassageServiceJSONLD slug="deepTissue" locale={currentLocale} />

      {/* ✅ Breadcrumb JSON-LD */}
      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Massage Deep Tissue"
        serviceUrl={`${baseUrl}/${currentLocale}/massage/deep-tissues`}
      />

      <HeroMassage variant="deeptissue" />
      <WhyThisCare title="deeptissue" />
      <Benefits ids={[57, 27, 58, 59]} title="deeptissue" />
      <TreatmentDescription variant="deeptissue" />
      <Gallery ids={[7, 13, 24]} />
      <CtaSectionMassagePage variant="deeptissue" />
      <ServiceFaq variant="deepTissue" />
      <RelatedServices variant="deeptissue" />
      <Testimonials ids={[5, 15, 30, 35, 43, 13]} />
    </>
  );
}
