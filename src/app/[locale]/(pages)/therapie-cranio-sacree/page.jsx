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
import { LocalBusinessJsonLd } from "next-seo";

const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Thérapie Cranio-Sacrée à Hal | La Voie du Bien-Être",
      en: "Craniosacral Therapy in Halle (Brussels) | La Voie du Bien-Être",
      nl: "Craniosacrale Therapie in Halle | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Thérapie cranio-sacrée à Hal : libérez les blocages du système nerveux grâce à un soin subtil et puissant. Réservez votre séance dès maintenant !",
      en: "Craniosacral therapy in Halle: release deep nervous system blockages with a subtle yet powerful treatment. Book your session at our studio today!",
      nl: "Craniosacrale therapie in Halle: bevrijd diepe blokkades in het zenuwstelsel met een subtiele maar krachtige behandeling. Boek nu uw afspraak!",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/therapie-cranio-sacree`,
      languages: {
        fr: `${baseUrl}/fr/therapie-cranio-sacree`,
        en: `${baseUrl}/en/therapie-cranio-sacree`,
        nl: `${baseUrl}/nl/therapie-cranio-sacree`,
        "x-default": `${baseUrl}/fr/therapie-cranio-sacree`,
      },
    },
    openGraph: {
      title: {
        fr: "Thérapie Cranio-Sacrée à Hal – Apaisement profond",
        en: "Craniosacral Therapy in Halle – Deep Relief",
        nl: "Craniosacrale Therapie in Halle – Diepe Ontspanning",
      }[currentLocale],
      description: {
        fr: "Une approche douce pour réguler le système nerveux, soulager les douleurs chroniques et favoriser un bien-être durable.",
        en: "A gentle method to regulate the nervous system, relieve chronic pain, and support long-lasting wellness.",
        nl: "Een zachte methode om het zenuwstelsel te reguleren, chronische pijn te verlichten en duurzaam welzijn te bevorderen.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/therapie-cranio-sacree`,
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
            fr: "Thérapie cranio-sacrée – Détente profonde à Hal",
            en: "Craniosacral therapy – Deep relaxation in Halle",
            nl: "Craniosacrale therapie – Diepe ontspanning in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Cranio-Sacrée à Hal – Retrouver équilibre et calme",
        en: "Craniosacral Therapy – Restore balance and calm",
        nl: "Craniosacrale Therapie – Herstel van rust en evenwicht",
      }[currentLocale],
      description: {
        fr: "Apaisement du système nerveux, libération des tensions profondes. Une séance de CST pour se recentrer.",
        en: "Soothing of the nervous system, deep release. A CST session to refocus.",
        nl: "Kalmering van het zenuwstelsel, diepe bevrijding. Een CST-sessie om opnieuw in balans te komen.",
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

      <MassageServiceJSONLD slug="cranioSacree" locale={currentLocale} />

      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Thérapie Cranio-Sacrée"
        serviceUrl={`${baseUrl}/${currentLocale}/therapie-cranio-sacree`}
      />

      <main>
        <HeroMassage variant="cst" />
        <WhyThisCare title="cst" />
        <Benefits ids={[62, 47, 63, 64]} title="cst" />
        <TreatmentDescription variant="cst" />
        <Gallery ids={[22, 31, 32]} />
        <CtaSectionMassagePage variant="cst" />
        <RelatedServices variant="cst" />
        <Testimonials ids={[11, 19, 24, 13, 33, 47]} />
      </main>
    </>
  );
}
