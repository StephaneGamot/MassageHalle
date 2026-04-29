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
      fr: "Réflexologie plantaire à Hal | La Voie du Bien-Être",
      en: "Foot Reflexology in Halle (Brussels) | La Voie du Bien-Être",
      nl: "Voetreflexologie in Halle (Brussel) | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Réflexologie plantaire à Hal : rééquilibrez votre corps par les pieds grâce à une méthode naturelle et apaisante. Réservez votre séance dès maintenant !",
      en: "Foot reflexology in Halle: rebalance your body through the reflex zones of the feet with a natural, soothing method. Book your session today!",
      nl: "Voetreflexologie in Halle: breng uw lichaam in balans via de reflexzones van de voeten met een natuurlijke methode. Boek vandaag nog uw afspraak!",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/reflexologie-plantaire`,
      languages: {
        fr: `${baseUrl}/fr/reflexologie-plantaire`,
        en: `${baseUrl}/en/reflexologie-plantaire`,
        nl: `${baseUrl}/nl/reflexologie-plantaire`,
        "x-default": `${baseUrl}/fr/reflexologie-plantaire`,
      },
    },
    openGraph: {
      title: {
        fr: "Réflexologie plantaire à Hal – Harmonie & Bien-être",
        en: "Foot Reflexology in Halle – Harmony & Well-being",
        nl: "Voetreflexologie in Halle – Harmonie & Welzijn",
      }[currentLocale],
      description: {
        fr: "Une méthode douce qui stimule les zones réflexes des pieds pour harmoniser les fonctions corporelles.",
        en: "A gentle method that stimulates foot reflex zones to harmonize body functions.",
        nl: "Een zachte methode die de reflexzones van de voeten stimuleert om de lichaamsfuncties te harmoniseren.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/reflexologie-plantaire`,
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
            fr: "Séance de réflexologie plantaire à Hal",
            en: "Foot reflexology session in Halle",
            nl: "Voetreflexologiesessie in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Réflexologie plantaire – Bien-être & Équilibre à Hal",
        en: "Foot Reflexology – Wellness & Balance in Halle",
        nl: "Voetreflexologie – Welzijn & Evenwicht in Halle",
      }[currentLocale],
      description: {
        fr: "Soulagez votre corps en passant par les pieds. Une pratique ancestrale aux bienfaits durables.",
        en: "Relieve your body through your feet. An ancient practice with lasting benefits.",
        nl: "Verlicht uw lichaam via de voeten. Een eeuwenoude praktijk met duurzame voordelen.",
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
      />

      <MassageServiceJSONLD slug="reflexologie" locale={currentLocale} />

      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Réflexologie plantaire"
        serviceUrl={`${baseUrl}/${currentLocale}/reflexologie-plantaire`}
      />

      <main>
        <HeroMassage variant="reflexo" />
        <WhyThisCare title="reflexo" />
        <Benefits ids={[48, 8, 16, 14]} title="reflexo" />
        <TreatmentDescription variant="reflexo" />
        <Gallery ids={[30, 10, 15]} />
        <CtaSectionMassagePage variant="reflexo" />
        <ServiceFaq variant="reflexo" />
        <RelatedServices variant="reflexo" />
        <Testimonials ids={[8, 16, 25, 36, 44]} />
      </main>
    </>
  );
}
