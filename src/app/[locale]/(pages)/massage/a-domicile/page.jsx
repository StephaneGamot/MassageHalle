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
      fr: "Massage à domicile à Hal, Bruxelles & Brabant – dès 80 €",
      en: "Home Massage in Halle, Brussels & Brabant – from €80",
      nl: "Massage aan huis – Halle, Brussel & Brabant vanaf €80",
    }[currentLocale],
    description: {
      fr: "Votre massage chez vous, sans bouger : Hal, Bruxelles, Uccle, Waterloo, Braine, Drogenbos. Table fournie, dès 80 €. Réservez votre créneau en ligne.",
      en: "Your massage delivered to your door: Halle, Brussels, Uccle, Waterloo, Braine. Table provided, from €80. Choose your time slot and book online.",
      nl: "Uw massage bij u thuis: Halle, Brussel, Ukkel, Waterloo, Drogenbos. Tafel inbegrepen, vanaf €80. Kies uw tijdslot en boek online uw sessie.",
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
      canonical: `${baseUrl}/${currentLocale}/massage/a-domicile`,
      languages: {
        fr: `${baseUrl}/fr/massage/a-domicile`,
        en: `${baseUrl}/en/massage/a-domicile`,
        nl: `${baseUrl}/nl/massage/a-domicile`,
        "x-default": `${baseUrl}/fr/massage/a-domicile`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage à domicile à Hal, Bruxelles & Brabant – dès 80 €",
        en: "Home Massage in Halle, Brussels & Brabant – from €80",
        nl: "Massage aan huis – Halle, Brussel & Brabant vanaf €80",
      }[currentLocale],
      description: {
        fr: "Votre massage chez vous, sans bouger : Hal, Bruxelles, Uccle, Waterloo, Braine, Drogenbos. Table fournie, dès 80 €. Réservez votre créneau en ligne.",
        en: "Your massage delivered to your door: Halle, Brussels, Uccle, Waterloo, Braine. Table provided, from €80. Choose your time slot and book online.",
        nl: "Uw massage bij u thuis: Halle, Brussel, Ukkel, Waterloo, Drogenbos. Tafel inbegrepen, vanaf €80. Kies uw tijdslot en boek online uw sessie.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/a-domicile`,
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
            fr: "Une longue séance de massage lui permettant de tout oublier",
            en: "A long massage session helping her forget everything",
            nl: "Een lange massagesessie om alles te vergeten",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage à domicile à Hal, Bruxelles & Brabant – dès 80 €",
        en: "Home Massage in Halle, Brussels & Brabant – from €80",
        nl: "Massage aan huis – Halle, Brussel & Brabant vanaf €80",
      }[currentLocale],
      description: {
        fr: "Votre massage chez vous, sans bouger : Hal, Bruxelles, Uccle, Waterloo, Braine, Drogenbos. Table fournie, dès 80 €. Réservez votre créneau en ligne.",
        en: "Your massage delivered to your door: Halle, Brussels, Uccle, Waterloo, Braine. Table provided, from €80. Choose your time slot and book online.",
        nl: "Uw massage bij u thuis: Halle, Brussel, Ukkel, Waterloo, Drogenbos. Tafel inbegrepen, vanaf €80. Kies uw tijdslot en boek online uw sessie.",
      }[currentLocale],
      images: [`${baseUrl}/Images/OpenGraph/masseur-massage.jpg`],
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

      {/* JSON-LD du service massage a domicile */}
      <MassageServiceJSONLD slug="domicile" locale={currentLocale} />
      <ServiceBreadcrumbJsonLd locale={currentLocale} serviceName="Massage à domicile" serviceUrl={`${baseUrl}/${currentLocale}/massage/a-domicile`} />
      <HeroMassage variant="domicile" />
      <WhyThisCare title="domicile" />
      <Benefits ids={[1, 19, 35, 25]} title="domicile" />
      <TreatmentDescription variant="domicile" />
      <Gallery ids={[7, 12, 16]} />
      <CtaSectionMassagePage variant="domicile" />
      <ServiceFaq variant="domicile" />
      <RelatedServices variant="domicile" />
      <Testimonials ids={[9, 17, 25, 33, 42]} />
    </>
  );
}
