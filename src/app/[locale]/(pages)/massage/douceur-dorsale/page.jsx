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
      fr: "Massage Douceur Dorsale à Hal | La Voie du Bien-Être",
      en: "Back Massage Douceur Dorsale | La Voie du Bien-Être",
      nl: "Rugmassage Douceur Dorsale | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Massage du dos exclusif à Hal : méthode Douceur Dorsale pour libérer les tensions et retrouver un dos détendu et léger. Réservez maintenant !",
      en: "Exclusive back massage in Halle: our Douceur Dorsale method relieves tension and restores lightness and comfort. Book your session today!",
      nl: "Exclusieve rugmassage in Halle: onze Douceur Dorsale-methode verlicht spanningen en herstelt een ontspannen, lichte rug. Boek nu je sessie!",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/douceur-dorsale`,
      languages: {
        fr: `${baseUrl}/fr/massage/douceur-dorsale`,
        en: `${baseUrl}/en/massage/douceur-dorsale`,
        nl: `${baseUrl}/nl/massage/douceur-dorsale`,
        "x-default": `${baseUrl}/fr/massage/douceur-dorsale`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage Douceur Dorsale à Hal | La Voie du Bien-Être",
        en: "Back Massage Douceur Dorsale | La Voie du Bien-Être",
        nl: "Rugmassage Douceur Dorsale | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Massage du dos exclusif à Hal : méthode Douceur Dorsale pour libérer les tensions et retrouver un dos détendu et léger. Réservez maintenant !",
        en: "Exclusive back massage in Halle: our Douceur Dorsale method relieves tension and restores lightness and comfort. Book your session today!",
        nl: "Exclusieve rugmassage in Halle: onze Douceur Dorsale-methode verlicht spanningen en herstelt een ontspannen, lichte rug. Boek nu je sessie!",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/douceur-dorsale`,
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
            fr: "Massage doux pour le dos à Hal",
            en: "Gentle back massage in Halle",
            nl: "Zachte rugmassage in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage Douceur Dorsale à Hal | La Voie du Bien-Être",
        en: "Back Massage Douceur Dorsale | La Voie du Bien-Être",
        nl: "Rugmassage Douceur Dorsale | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Soin exclusif du dos Douceur Dorsale à Hal : libérez les tensions dorsales. Réservez votre séance maintenant !",
        en: "Exclusive Douceur Dorsale back care in Halle: release back tension and restore well-being. Book your session now!",
        nl: "Exclusieve Douceur Dorsale rugbehandeling in Halle: verlicht rugspanningen en herstel welzijn. Boek nu!",
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

  const localBusinessId = `${baseUrl}/${currentLocale}#local-business`;

  return (
    <>
      {/* ✅ LocalBusiness (SEO local) */}
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

      {/* JSON-LD du service douceur dorsale */}
      <MassageServiceJSONLD slug="douceurDorsale" locale={currentLocale} />

      {/* Breadcrumb JSON-LD */}
      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Douceur Dorsale"
        serviceUrl={`${baseUrl}/${currentLocale}/massage/douceur-dorsale`}
      />

      <main>
        <HeroMassage variant="dos" />
        <WhyThisCare title="dos" />
        <Benefits ids={[6, 54, 35, 52]} title="dos" />
        <TreatmentDescription variant="dos" />
        <Gallery ids={[25, 8, 9]} />
        <CtaSectionMassagePage variant="dos" />
        <ServiceFaq variant="dos" />
        <RelatedServices variant="dos" />
        <Testimonials ids={[5, 14, 18, 22, 29]} />
      </main>
    </>
  );
}
