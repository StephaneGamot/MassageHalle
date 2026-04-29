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
      fr: "Massage tao à Hal – Harmonie & Énergie | Bien-Être",
      en: "Tao Massage in Halle – Harmony | La Voie du Bien-Être",
      nl: "Tao Massage in Halle – Harmonie | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Massage tao à Hal : reconnectez-vous à votre énergie vitale. Douceur, lenteur et conscience du corps en une séance unique. Réservez maintenant !",
      en: "Tao massage in Halle: reconnect with your vital energy. A unique experience combining gentleness, slowness, and body awareness. Book your session now!",
      nl: "Tao-massage in Halle: herontdek je vitale energie. Een unieke ervaring van zachtheid, traagheid en lichaamsbewustzijn. Boek nu je sessie!",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/tao`,
      languages: {
        fr: `${baseUrl}/fr/massage/tao`,
        en: `${baseUrl}/en/massage/tao`,
        nl: `${baseUrl}/nl/massage/tao`,
        "x-default": `${baseUrl}/fr/massage/tao`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage tao à Hal – Harmonie & Énergie | Bien-Être",
        en: "Tao Massage in Halle – Harmony | La Voie du Bien-Être",
        nl: "Tao Massage in Halle – Harmonie | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Massage tao à Hal : reconnectez-vous à votre énergie vitale. Douceur, lenteur et conscience du corps en une séance unique. Réservez maintenant !",
        en: "Tao massage in Halle: reconnect with your vital energy. A unique experience combining gentleness, slowness, and body awareness. Book your session now!",
        nl: "Tao-massage in Halle: herontdek je vitale energie. Een unieke ervaring van zachtheid, traagheid en lichaamsbewustzijn. Boek nu je sessie!",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/tao`,
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
            fr: "Massage tao à domicile ou en cabinet à Hal",
            en: "Tao massage at home or in practice in Halle",
            nl: "Tao massage aan huis of in de praktijk in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage tao à Hal – Harmonie | La Voie du Bien-Être",
        en: "Tao Massage in Halle – Harmony | La Voie du Bien-Être",
        nl: "Tao Massage in Halle – Harmonie | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Massage tao à Hal : douceur, lenteur et harmonie pour retrouver l’équilibre. Réservez votre séance !",
        en: "Tao massage in Halle: gentleness, slowness and harmony to restore balance. Book your session now!",
        nl: "Tao-massage in Halle: zachtheid, traagheid en harmonie om in balans te komen. Boek nu je sessie!",
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

export default function Page({ params }) {
  const { locale } = params || {};
  const currentLocale = locale ?? "fr";

  return (
    <>
      {/* ✅ LocalBusiness pour le SEO local */}
      <LocalBusinessJsonLd
        type="HealthAndBeautyBusiness"
        id={`${baseUrl}/${currentLocale}#local-business`}
        name="La Voie du Bien-Être"
        description="Massages, shiatsu, reiki et soins énergétiques à Halle – un espace de détente et d’harmonie pour le corps et l’esprit."
        url={`${baseUrl}/${currentLocale}`}
        telephone="+32477131993"
        address={{
          streetAddress: "Octave de Kerchove d’Exaerdestraat 193",
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

      {/* ✅ JSON-LD du service Tao */}
      <MassageServiceJSONLD slug="tao" locale={currentLocale} />

      {/* ✅ Breadcrumb JSON-LD */}
      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Massage tao"
        serviceUrl={`${baseUrl}/${currentLocale}/massage/tao`}
      />

      <main>
        <HeroMassage variant="tao" />
        <WhyThisCare title="tao" />
        <Benefits ids={[9, 11, 32, 46]} title="tao" />
        <TreatmentDescription variant="tao" />
        <Gallery ids={[7, 8, 9]} />
        <CtaSectionMassagePage variant="tao" />
        <ServiceFaq variant="tao" />
        <RelatedServices variant="tao" />
        <Testimonials ids={[9, 18, 22, 27, 33, 21]} />
      </main>
    </>
  );
}
