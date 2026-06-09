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
      fr: "Massage du dos à Hal · Douceur Dorsale",
      en: "Back Massage in Halle – Douceur Dorsale Method (45 min)",
      nl: "Rugmassage in Halle – Douceur Dorsale methode (45 min)",
    }[currentLocale],
    description: {
      fr: "Massage du dos à Halle, méthode Douceur Dorsale : 45 min ciblées sur le dos et la nuque. Praticien certifié. Réservez votre séance en ligne.",
      en: "Heavy, tense, tired back? Our signature 45-min Douceur Dorsale back massage releases tension — partial undressing only. From €65. Book online.",
      nl: "Zware, gespannen, vermoeide rug? Onze 45-min Douceur Dorsale rugmassage verlicht spanning — gedeeltelijk uitkleden. Vanaf €65. Boek online.",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/douceur-dorsale`,
      languages: {
        fr: `${baseUrl}/fr/massage/douceur-dorsale`,
        en: `${baseUrl}/en/massage/douceur-dorsale`,
        nl: `${baseUrl}/nl/massage/douceur-dorsale`,
        "x-default": `${baseUrl}/fr/massage/douceur-dorsale`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage du dos à Hal · Douceur Dorsale",
        en: "Back Massage in Halle – Douceur Dorsale Method (45 min)",
        nl: "Rugmassage in Halle – Douceur Dorsale methode (45 min)",
      }[currentLocale],
      description: {
        fr: "Massage du dos à Halle, méthode Douceur Dorsale : 45 min ciblées sur le dos et la nuque. Praticien certifié. Réservez votre séance en ligne.",
        en: "Heavy, tense, tired back? Our signature 45-min Douceur Dorsale back massage releases tension — partial undressing only. From €65. Book online.",
        nl: "Zware, gespannen, vermoeide rug? Onze 45-min Douceur Dorsale rugmassage verlicht spanning — gedeeltelijk uitkleden. Vanaf €65. Boek online.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/douceur-dorsale`,
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
            fr: "Massage doux pour le dos à Hal",
            en: "Gentle back massage in Halle",
            nl: "Zachte rugmassage in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage du dos à Hal · Douceur Dorsale",
        en: "Back Massage in Halle – Douceur Dorsale Method (45 min)",
        nl: "Rugmassage in Halle – Douceur Dorsale methode (45 min)",
      }[currentLocale],
      description: {
        fr: "Massage du dos à Halle, méthode Douceur Dorsale : 45 min ciblées sur le dos et la nuque. Praticien certifié. Réservez votre séance en ligne.",
        en: "Heavy, tense, tired back? Our signature 45-min Douceur Dorsale back massage releases tension — partial undressing only. From €65. Book online.",
        nl: "Zware, gespannen, vermoeide rug? Onze 45-min Douceur Dorsale rugmassage verlicht spanning — gedeeltelijk uitkleden. Vanaf €65. Boek online.",
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

      {/* JSON-LD du service douceur dorsale */}
      <MassageServiceJSONLD slug="douceurDorsale" locale={currentLocale} />

      {/* Breadcrumb JSON-LD */}
      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Massage Douceur Dorsale"
        serviceUrl={`${baseUrl}/${currentLocale}/massage/douceur-dorsale`}
      />

      <HeroMassage variant="dos" />
      <WhyThisCare title="dos" />
      <Benefits ids={[6, 54, 35, 52]} title="dos" />
      <TreatmentDescription variant="dos" />
      <Gallery ids={[25, 8, 9]} />
      <CtaSectionMassagePage variant="dos" />
      <ServiceFaq variant="dos" />
      <RelatedServices variant="dos" />
      <Testimonials ids={[5, 14, 18, 22, 29]} />
    </>
  );
}
