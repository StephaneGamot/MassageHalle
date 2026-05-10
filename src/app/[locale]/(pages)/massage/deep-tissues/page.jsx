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
      fr: "Massage Deep Tissue à Hal",
      en: "Deep Tissue Massage in Halle",
      nl: "Deep Tissue Massage in Halle",
    }[currentLocale],
    description: {
      fr: "Massage Deep Tissue à Hal dès 80€ : libérez les tensions profondes et soulagez les douleurs chroniques. Soin ciblé. Réservez !",
      en: "Deep Tissue massage in Halle from €80: release deep tension and relieve chronic pain. Powerful, focused treatment. Book now!",
      nl: "Deep Tissue massage in Halle vanaf €80: laat diepe spanningen los en verlicht chronische pijn. Gerichte behandeling. Boek nu!",
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
        fr: "Massage Deep Tissue à Hal",
        en: "Deep Tissue Massage in Halle",
        nl: "Deep Tissue Massage in Halle",
      }[currentLocale],
      description: {
        fr: "Massage Deep Tissue à Hal dès 80€ : libérez les tensions profondes et soulagez les douleurs chroniques. Soin ciblé. Réservez !",
        en: "Deep Tissue massage in Halle from €80: release deep tension and relieve chronic pain. Powerful, focused treatment. Book now!",
        nl: "Deep Tissue massage in Halle vanaf €80: laat diepe spanningen los en verlicht chronische pijn. Gerichte behandeling. Boek nu!",
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
        fr: "Massage Deep Tissue à Hal",
        en: "Deep Tissue Massage in Halle",
        nl: "Deep Tissue Massage in Halle",
      }[currentLocale],
      description: {
        fr: "Massage Deep Tissue à Hal : libérez vos tensions profondes avec un soin ciblé et puissant. Réservez maintenant !",
        en: "Deep Tissue massage in Halle: release deep tension with a focused, powerful treatment. Book your session now!",
        nl: "Deep Tissue massage in Halle: laat diepe spanningen los met een gerichte, krachtige behandeling. Boek nu!",
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
