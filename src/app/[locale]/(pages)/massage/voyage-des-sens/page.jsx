import HeroMassage from "@/components/Hero/HeroMassage";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Benefits from "@/components/Benefits/Benefits";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
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
      fr: "Massage Voyage des Sens à Hal – Évasion & Détente",
      en: "Sensory Journey Massage in Halle | La Voie du Bien-Être",
      nl: "Zintuigenreis Massage in Halle | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Évasion sensorielle avec le massage Voyage des Sens à Hal, près de Bruxelles. Lâcher-prise total garanti. Réservez votre séance maintenant !",
      en: "Deep relaxation with the Sensory Journey Massage in Halle, near Brussels. A unique cocooning experience for total release. Book now!",
      nl: "Ontdek diepe ontspanning met de Reis der Zintuigen massage in Halle, nabij Brussel. Een unieke ervaring voor totaal loslaten. Boek nu uw sessie!",
    }[currentLocale],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/voyage-des-sens`,
      languages: {
        fr: `${baseUrl}/fr/massage/voyage-des-sens`,
        en: `${baseUrl}/en/massage/voyage-des-sens`,
        nl: `${baseUrl}/nl/massage/voyage-des-sens`,
        "x-default": `${baseUrl}/fr/massage/voyage-des-sens`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage Voyage des Sens à Hal – Évasion & Détente",
        en: "Sensory Journey Massage in Halle | La Voie du Bien-Être",
        nl: "Zintuigenreis Massage in Halle | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Évasion sensorielle avec le massage Voyage des Sens à Hal, près de Bruxelles. Lâcher-prise total garanti. Réservez votre séance maintenant !",
        en: "Deep relaxation with the Sensory Journey Massage in Halle, near Brussels. A unique cocooning experience for total release. Book now!",
        nl: "Ontdek diepe ontspanning met de Reis der Zintuigen massage in Halle, nabij Brussel. Een unieke ervaring voor totaal loslaten. Boek nu uw sessie!",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/voyage-des-sens`,
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
            fr: "Massage enveloppant pour une évasion sensorielle à Halle",
            en: "Cocooning massage for a sensory escape in Halle",
            nl: "Omhullende massage voor een zintuiglijke ontsnapping in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Massage Voyage des Sens à Hal – Évasion & Détente",
        en: "Sensory Journey Massage in Halle | La Voie du Bien-Être",
        nl: "Zintuigenreis Massage in Halle | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Évasion sensorielle avec le massage Voyage des Sens à Hal, près de Bruxelles. Lâcher-prise total garanti. Réservez votre séance maintenant !",
        en: "Deep relaxation with the Sensory Journey Massage in Halle, near Brussels. A unique cocooning experience for total release. Book now!",
        nl: "Ontdek diepe ontspanning met de Reis der Zintuigen massage in Halle, nabij Brussel. Een unieke ervaring voor totaal loslaten. Boek nu uw sessie!",
      }[currentLocale],
      card: "summary_large_image",
      site: "@voiedubienetre",
      images: [`${baseUrl}/Images/OpenGraph/masseur-massage.jpg`],
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

      <MassageServiceJSONLD slug="voyage" locale={currentLocale} />
      <ServiceBreadcrumbJsonLd locale={currentLocale} serviceName="Massage Voyage des Sens" serviceUrl={`${baseUrl}/${currentLocale}/massage/voyage-des-sens`} />

      <main>
        <HeroMassage variant="voyage" />
        <WhyThisCare title="voyage" />
        <Benefits ids={[31, 63, 50, 64]} title="voyage" />
        <TreatmentDescription variant="voyage" />
        <Gallery ids={[6, 8, 9]} />
        <CtaSectionMassagePage variant="voyage" />
        <ServiceFaq variant="voyage" />
        <RelatedServices variant="voyage" />
        <Testimonials ids={[6, 13, 19, 29, 41]} />
      </main>
    </>
  );
}
