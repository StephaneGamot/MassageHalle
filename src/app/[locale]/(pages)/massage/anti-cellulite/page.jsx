import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";
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
      fr: "Massage anti-cellulite à Hal",
      en: "Anti-Cellulite Massage in Halle",
      nl: "Anti-cellulite massage in Halle",
    }[currentLocale],
    description: {
      fr: "Réduisez la cellulite grâce à un massage drainant et tonifiant à Hal, près de Bruxelles. Résultats visibles rapidement. Réservez maintenant !",
      en: "Reduce cellulite with a draining and toning massage in Halle, near Brussels. Visible results from the very first sessions. Book your appointment today!",
      nl: "Verminder cellulite met een drainerende en versterkende massage in Halle, nabij Brussel. Zichtbare resultaten vanaf de eerste sessies. Boek nu!",
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
      canonical: `${baseUrl}/${currentLocale}/massage/anti-cellulite`,
      languages: {
        fr: `${baseUrl}/fr/massage/anti-cellulite`,
        en: `${baseUrl}/en/massage/anti-cellulite`,
        nl: `${baseUrl}/nl/massage/anti-cellulite`,
        "x-default": `${baseUrl}/fr/massage/anti-cellulite`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage anti-cellulite à Hal",
        en: "Anti-Cellulite Massage in Halle",
        nl: "Anti-cellulite massage in Halle",
      }[currentLocale],
      description: {
        fr: "Réduisez la cellulite grâce à un massage drainant et tonifiant à Hal, près de Bruxelles. Résultats visibles rapidement. Réservez maintenant !",
        en: "Reduce cellulite with a draining and toning massage in Halle, near Brussels. Visible results from the very first sessions. Book your appointment today!",
        nl: "Verminder cellulite met een drainerende en versterkende massage in Halle, nabij Brussel. Zichtbare resultaten vanaf de eerste sessies. Boek nu!",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/anti-cellulite`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: {
        fr: "fr_BE",
        en: "en_BE",
        nl: "nl_BE",
      }[currentLocale],
      images: [
        {
          url: `${baseUrl}/Images/OpenGraph/masseur-massage.jpg`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Massage anti-cellulite professionnel à Hal",
            en: "Professional anti-cellulite massage in Halle",
            nl: "Professionele anti-cellulite massage in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage anti-cellulite à Hal",
        en: "Anti-Cellulite Massage in Halle",
        nl: "Anti-cellulite massage in Halle",
      }[currentLocale],
      description: {
        fr: "Réduisez la cellulite grâce à un massage drainant et tonifiant à Hal, près de Bruxelles. Résultats visibles rapidement. Réservez maintenant !",
        en: "Reduce cellulite with a draining and toning massage in Halle, near Brussels. Visible results from the very first sessions. Book your appointment today!",
        nl: "Verminder cellulite met een drainerende en versterkende massage in Halle, nabij Brussel. Zichtbare resultaten vanaf de eerste sessies. Boek nu!",
      }[currentLocale],
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

      <MassageServiceJSONLD slug="antiCellulite" locale={currentLocale} />
      <ServiceBreadcrumbJsonLd locale={currentLocale} serviceName="Massage anti-cellulite" serviceUrl={`${baseUrl}/${currentLocale}/massage/anti-cellulite`} />

      <HeroMassage variant="anticellulite" />
      <WhyThisCare title="anticellulite" />
      <Benefits ids={[15, 43, 55, 56]} title="anticellulite" />
      <TreatmentDescription variant="anticellulite" />
      <Gallery ids={[2, 5, 6]} />
      <CtaSectionMassagePage variant="anticellulite" />
      <ServiceFaq variant="anticellulite" />
      <RelatedServices variant="anticellulite" />
      <Testimonials ids={[48, 49, 36, 19, 16]} />
    </>
  );
}
