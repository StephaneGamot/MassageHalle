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
import { LocalBusinessJsonLd } from "next-seo";

const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Reiki à Hal – Soin énergétique | La Voie du Bien-Être",
      en: "Reiki in Halle – Energy Healing | La Voie du Bien-Être",
      nl: "Reiki in Halle – Energetische zorg | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Soin Reiki à Hal dès 80€ : réharmonisez vos énergies et retrouvez l'équilibre intérieur. Accompagnement doux et bienveillant. Réservez !",
      en: "Reiki session in Halle from €80: rebalance your energy and restore inner harmony with a gentle, compassionate treatment. Book today!",
      nl: "Reiki in Halle vanaf €80: harmoniseer uw energieën en herstel uw innerlijk evenwicht. Zachte, zorgzame begeleiding. Boek nu!",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/reiki`,
      languages: {
        fr: `${baseUrl}/fr/reiki`,
        en: `${baseUrl}/en/reiki`,
        nl: `${baseUrl}/nl/reiki`,
        "x-default": `${baseUrl}/fr/reiki`,
      },
    },
    openGraph: {
      title: {
        fr: "Reiki à Hal – Soin énergétique & Équilibre",
        en: "Reiki in Halle – Energy Healing & Balance",
        nl: "Reiki in Halle – Energetische zorg & Evenwicht",
      }[currentLocale],
      description: {
        fr: "Un soin énergétique doux pour apaiser, revitaliser et équilibrer vos centres énergétiques.",
        en: "A gentle energy healing treatment to soothe, revitalize, and balance your chakras.",
        nl: "Een zachte energetische behandeling om uw energiecentra te kalmeren, revitaliseren en in balans te brengen.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/reiki`,
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
            fr: "Soin Reiki à Hal",
            en: "Reiki treatment in Halle",
            nl: "Reiki-behandeling in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Soin Reiki à Hal – Énergie & Sérénité",
        en: "Reiki in Halle – Energy & Serenity",
        nl: "Reiki in Halle – Energie & Rust",
      }[currentLocale],
      description: {
        fr: "Un soin énergétique à Hal pour vous reconnecter à votre essence vitale.",
        en: "An energy healing session in Halle to reconnect with your vital essence.",
        nl: "Een energetische behandeling in Halle om opnieuw verbinding te maken met uw vitale energie.",
      }[currentLocale],
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
        rating={{
          ratingValue: "4.9",
          ratingCount: "50",
        }}
      />

      <MassageServiceJSONLD slug="reiki" locale={currentLocale} />

      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Reiki"
        serviceUrl={`${baseUrl}/${currentLocale}/reiki`}
      />

      <main>
        <HeroMassage variant="reiki" />
        <WhyThisCare title="reiki" />
        <Benefits ids={[11, 61, 36, 46]} title="reiki" />
        <TreatmentDescription variant="reiki" />
        <Gallery ids={[11, 17, 23]} />
        <CtaSectionMassagePage variant="reiki" />
        <ServiceFaq variant="reiki" />
        <RelatedServices variant="reiki" />
        <Testimonials ids={[5, 10, 20, 29, 47]} />
      </main>
    </>
  );
}
