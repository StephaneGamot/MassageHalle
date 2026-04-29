import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";
import RelatedServices from "@/components/RelatedServices/RelatedServices";
import { LocalBusinessJsonLd } from "next-seo";
import ServiceBreadcrumbJsonLd from "@/components/Metadata/ServiceBreadcrumbJsonLd";
import ServiceFaq from "@/components/Faq/ServiceFaq";

const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage anti-cellulite à Hal | La Voie du Bien-Être",
      en: "Anti-Cellulite Massage in Halle | La Voie du Bien-Être",
      nl: "Anti-cellulite massage in Halle | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Réduisez la cellulite grâce à un massage drainant et tonifiant à Hal, près de Bruxelles. Résultats visibles rapidement. Réservez maintenant !",
      en: "Reduce cellulite with a draining and toning massage in Halle, near Brussels. Visible results from the very first sessions. Book your appointment today!",
      nl: "Verminder cellulite met een drainerende en versterkende massage in Halle, nabij Brussel. Zichtbare resultaten vanaf de eerste sessies. Boek nu!",
    }[currentLocale],
    robots: {
      index: true,
      follow: true,
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
        fr: "Massage anti-cellulite à Hal | La Voie du Bien-Être",
        en: "Anti-Cellulite Massage in Halle | La Voie du Bien-Être",
        nl: "Anti-cellulite massage in Halle | La Voie du Bien-Être",
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
          url: `${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`,
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
        fr: "Massage anti-cellulite à Hal | La Voie du Bien-Être",
        en: "Anti-Cellulite Massage in Halle | La Voie du Bien-Être",
        nl: "Anti-cellulite massage in Halle | La Voie du Bien-Être",
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

export default function Page({ params }) {
  const { locale } = params || {};
  const currentLocale = locale ?? "fr";

  return (
    <>
      <LocalBusinessJsonLd
        type="HealthAndBeautyBusiness"
        id={`${baseUrl}/${currentLocale}#local-business`}
        name="La Voie du Bien-Être"
        description="Massages bien-être, shiatsu, reiki et soins thérapeutiques à Hal (Halle)."
        url={`${baseUrl}/${currentLocale}`}
        telephone="+32477131993"
        address={{
          streetAddress: "Octave de Kerchove d'Exaerdestraat 193",
          addressLocality: "Halle",
          postalCode: "1501",
          addressCountry: "BE",
        }}
        geo={{
          latitude: 50.7464695,
          longitude: 4.2563906,
        }}
        priceRange="€€"
        image={[`${baseUrl}/Images/OpenGraph/accueil-massage-halle.webp`]}
        sameAs={[
          "https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie/",
        ]}
        openingHours={[
          {
            opens: "10:00",
            closes: "19:00",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
        ]}
      />

      <MassageServiceJSONLD slug="antiCellulite" locale={currentLocale} />
      <ServiceBreadcrumbJsonLd locale={currentLocale} serviceName="Massage anti-cellulite" serviceUrl={`${baseUrl}/${currentLocale}/massage/anti-cellulite`} />

      <main>
        <HeroMassage variant="anticellulite" />
        <WhyThisCare title="anticellulite" />
        <Benefits ids={[15, 43, 55, 56]} title="anticellulite" />
        <TreatmentDescription variant="anticellulite" />
        <Gallery ids={[2, 5, 6]} />
        <CtaSectionMassagePage variant="anticellulite" />
        <ServiceFaq variant="anticellulite" />
        <RelatedServices variant="anticellulite" />
        <Testimonials ids={[48, 49, 36, 19, 16]} />
      </main>
    </>
  );
}
