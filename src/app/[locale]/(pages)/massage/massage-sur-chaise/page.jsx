import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";
import { LocalBusinessJsonLd } from "next-seo";
import ServiceBreadcrumbJsonLd from "@/components/Metadata/ServiceBreadcrumbJsonLd";

const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage Amma assis en entreprise à Hal & Bruxelles",
      en: "Seated Amma Massage for Companies | Halle & Brussels",
      nl: "Amma stoelmassage voor bedrijven | Halle & Brussel",
    }[currentLocale],
    description: {
      fr: "Offrez à vos collaborateurs un massage Amma assis en entreprise à Hal et Bruxelles. Réduit le stress et booste la productivité. Réservez une séance !",
      en: "Treat your team to a seated Amma massage at work in Halle and Brussels. Reduces stress and boosts productivity. Book a session for your company!",
      nl: "Trakteer uw team op een Amma stoelmassage op het werk in Halle en Brussel. Vermindert stress en verhoogt de productiviteit. Boek nu een sessie!",
    }[currentLocale],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/massage-sur-chaise`,
      languages: {
        fr: `${baseUrl}/fr/massage/massage-sur-chaise`,
        en: `${baseUrl}/en/massage/massage-sur-chaise`,
        nl: `${baseUrl}/nl/massage/massage-sur-chaise`,
        "x-default": `${baseUrl}/fr/massage/massage-sur-chaise`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage Amma assis en entreprise à Hal & Bruxelles",
        en: "Seated Amma Massage for Companies | Halle & Brussels",
        nl: "Amma stoelmassage voor bedrijven | Halle & Brussel",
      }[currentLocale],
      description: {
        fr: "Offrez à vos collaborateurs un massage Amma assis en entreprise à Hal et Bruxelles. Réduit le stress et booste la productivité. Réservez une séance !",
        en: "Treat your team to a seated Amma massage at work in Halle and Brussels. Reduces stress and boosts productivity. Book a session for your company!",
        nl: "Trakteer uw team op een Amma stoelmassage op het werk in Halle en Brussel. Vermindert stress en verhoogt de productiviteit. Boek nu een sessie!",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/massage-sur-chaise`,
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
            fr: "Massage Amma assis en entreprise",
            en: "Seated Amma massage at work",
            nl: "Amma stoelmassage op de werkvloer",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      title: {
        fr: "Massage Amma assis en entreprise à Hal & Bruxelles",
        en: "Seated Amma Massage for Companies | Halle & Brussels",
        nl: "Amma stoelmassage voor bedrijven | Halle & Brussel",
      }[currentLocale],
      description: {
        fr: "Offrez à vos collaborateurs un massage Amma assis en entreprise à Hal et Bruxelles. Réduit le stress et booste la productivité. Réservez une séance !",
        en: "Treat your team to a seated Amma massage at work in Halle and Brussels. Reduces stress and boosts productivity. Book a session for your company!",
        nl: "Trakteer uw team op een Amma stoelmassage op het werk in Halle en Brussel. Vermindert stress en verhoogt de productiviteit. Boek nu een sessie!",
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
        id={`${baseUrl}/${currentLocale}#local-business`} // ⬅️ plus de variable
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

      <MassageServiceJSONLD slug="amma" locale={currentLocale} />
      <ServiceBreadcrumbJsonLd locale={currentLocale} serviceName="Massage Amma assis" serviceUrl={`${baseUrl}/${currentLocale}/massage/massage-sur-chaise`} />

      <main>
        <HeroMassage variant="amma" />
        <WhyThisCare title="amma" />
        <Benefits ids={[42, 44, 49, 51]} title="amma" />
        <TreatmentDescription variant="amma" />
        <Gallery ids={[4, 33, 34]} />
        <CtaSectionMassagePage variant="amma" />
        <Testimonials ids={[6, 17, 22, 36, 47]} />
      </main>
    </>
  );
}
