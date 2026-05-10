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
      fr: "Massage sportif à Hal – Récupération",
      en: "Sports Massage in Halle – Recovery",
      nl: "Sportmassage in Halle – Herstel",
    }[currentLocale],
    description: {
      fr: "Massage sportif à Hal dès 80€ : récupération musculaire optimale, soulagement des tensions et prévention des blessures. Sur rdv. Réservez !",
      en: "Sports massage in Halle from €80: optimal recovery and muscle tension relief after exercise. Book your session now!",
      nl: "Sportmassage in Halle vanaf €80: optimaal herstel en verlichting van spierspanning na inspanning. Boek nu je sessie!",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/sportif`,
      languages: {
        fr: `${baseUrl}/fr/massage/sportif`,
        en: `${baseUrl}/en/massage/sportif`,
        nl: `${baseUrl}/nl/massage/sportif`,
        "x-default": `${baseUrl}/fr/massage/sportif`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage sportif à Hal – Récupération",
        en: "Sports Massage in Halle – Recovery",
        nl: "Sportmassage in Halle – Herstel",
      }[currentLocale],
      description: {
        fr: "Massage sportif à Hal dès 80€ : récupération musculaire optimale, soulagement des tensions et prévention des blessures. Sur rdv. Réservez !",
        en: "Sports massage in Halle from €80: optimal recovery and muscle tension relief after exercise. Book your session now!",
        nl: "Sportmassage in Halle vanaf €80: optimaal herstel en verlichting van spierspanning na inspanning. Boek nu je sessie!",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/sportif`,
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
            fr: "Massage sportif pour récupération musculaire à Hal",
            en: "Sports massage for muscle recovery in Halle",
            nl: "Sportmassage voor spierherstel in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage sportif à Hal – Récupération",
        en: "Sports Massage in Halle – Recovery",
        nl: "Sportmassage in Halle – Herstel",
      }[currentLocale],
      description: {
        fr: "Massage sportif à Hal : récupération musculaire et performance optimale. Réservez votre séance maintenant !",
        en: "Sports massage in Halle: muscle recovery and optimal performance. Book your session now!",
        nl: "Sportmassage in Halle: spierherstel en optimale prestaties. Boek nu je sessie!",
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

      {/* ✅ JSON-LD du service spécifique */}
      <MassageServiceJSONLD slug="sportif" locale={currentLocale} />

      {/* ✅ Breadcrumb JSON-LD */}
      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Massage sportif"
        serviceUrl={`${baseUrl}/${currentLocale}/massage/sportif`}
      />

      <HeroMassage variant="sportif" />
      <WhyThisCare title="sportif" />
      <Benefits ids={[2, 7, 52, 53]} title="sportif" />
      <TreatmentDescription variant="sportif" />
      <Gallery ids={[7, 21, 24]} />
      <CtaSectionMassagePage variant="sportif" />
      <ServiceFaq variant="sportif" />
      <RelatedServices variant="sportif" />
      <Testimonials ids={[6, 10, 19, 28, 42]} />
    </>
  );
}
