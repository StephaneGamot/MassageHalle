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
import RelatedServices from "@/components/RelatedServices/RelatedServices";
import EndOfYearOfferModal from "@/components/Modals/EndOfYearOfferModal";

const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage à domicile à Hal, Bruxelles et alentours",
      en: "Home Massage in Halle & Brussels | La Voie du Bien-Être",
      nl: "Massage aan huis in Halle & Brussel | Bien-Être",
    }[currentLocale],
    description: {
      fr: "Massage relaxant à domicile à Hal, Bruxelles et environs. Soin personnalisé dans le confort de votre foyer. Réservez votre séance maintenant !",
      en: "Enjoy a relaxing home massage in Halle, Brussels and surroundings. A personalized treatment in the comfort of your home. Book your session today!",
      nl: "Geniet van een ontspannende massage aan huis in Halle, Brussel en omgeving. Een persoonlijke behandeling in uw eigen comfort. Boek nu uw sessie!",
    }[currentLocale],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/a-domicile`,
      languages: {
        fr: `${baseUrl}/fr/massage/a-domicile`,
        en: `${baseUrl}/en/massage/a-domicile`,
        nl: `${baseUrl}/nl/massage/a-domicile`,
        "x-default": `${baseUrl}/fr/massage/a-domicile`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage à domicile à Hal, Bruxelles et alentours",
        en: "Home Massage in Halle & Brussels | La Voie du Bien-Être",
        nl: "Massage aan huis in Halle & Brussel | Bien-Être",
      }[currentLocale],
      description: {
        fr: "Massage relaxant à domicile à Hal, Bruxelles et environs. Soin personnalisé dans le confort de votre foyer. Réservez votre séance maintenant !",
        en: "Enjoy a relaxing home massage in Halle, Brussels and surroundings. A personalized treatment in the comfort of your home. Book your session today!",
        nl: "Geniet van een ontspannende massage aan huis in Halle, Brussel en omgeving. Een persoonlijke behandeling in uw eigen comfort. Boek nu uw sessie!",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/a-domicile`,
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
            fr: "Une longue séance de massage lui permettant de tout oublier",
            en: "A long massage session helping her forget everything",
            nl: "Een lange massagesessie om alles te vergeten",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage à domicile à Hal, Bruxelles et alentours",
        en: "Home Massage in Halle & Brussels | La Voie du Bien-Être",
        nl: "Massage aan huis in Halle & Brussel | Bien-Être",
      }[currentLocale],
      description: {
        fr: "Massage relaxant à domicile à Hal, Bruxelles et environs. Soin personnalisé dans le confort de votre foyer. Réservez votre séance maintenant !",
        en: "Enjoy a relaxing home massage in Halle, Brussels and surroundings. A personalized treatment in the comfort of your home. Book your session today!",
        nl: "Geniet van een ontspannende massage aan huis in Halle, Brussel en omgeving. Een persoonlijke behandeling in uw eigen comfort. Boek nu uw sessie!",
      }[currentLocale],
      images: [`${baseUrl}/Images/OpenGraph/masseur-massage.jpg`],
    },
  };
}

export default function Page({ params }) {
  const { locale } = params || {};
  const currentLocale = locale ?? "fr";

  const localBusinessId = `${baseUrl}/${currentLocale}#local-business`;

  return (
    <>
      {/* ✅ LocalBusiness pour le SEO local */}
      <LocalBusinessJsonLd
        type="HealthAndBeautyBusiness"
        id={localBusinessId}
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

      {/* JSON-LD du service massage a domicile */}
      <MassageServiceJSONLD slug="domicile" locale={currentLocale} />
      <ServiceBreadcrumbJsonLd locale={currentLocale} serviceName="Massage a domicile" serviceUrl={`${baseUrl}/${currentLocale}/massage/a-domicile`} />
<EndOfYearOfferModal />
      <main>
        <HeroMassage variant="domicile" />
        <WhyThisCare title="domicile" />
        <Benefits ids={[1, 19, 35, 25]} title="domicile" />
        <TreatmentDescription variant="domicile" />
        <Gallery ids={[7, 12, 16]} />
        <CtaSectionMassagePage variant="domicile" />
        <RelatedServices variant="domicile" />
        <Testimonials ids={[9, 17, 25, 33, 42]} />
      </main>
    </>
  );
}
