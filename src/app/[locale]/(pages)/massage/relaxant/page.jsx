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
  const { locale } = await params; // Next 15-friendly
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Massage relaxant à Hal | La Voie du Bien-Être",
      en: "Relaxing Massage in Halle | La Voie du Bien-Être",
      nl: "Ontspanningsmassage in Halle | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Massage relaxant à Hal dès 80€ : relâchez stress et tensions grâce à un soin doux et enveloppant. Détente totale garantie. Réservez !",
      en: "Relaxing massage in Halle from €80: release stress and tension with a gentle, soothing treatment. Total relaxation guaranteed. Book now!",
      nl: "Ontspanningsmassage in Halle vanaf €80: laat stress en spanning los met een zachte, omhullende behandeling. Totale ontspanning. Boek nu!",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/massage/relaxant`,
      languages: {
        fr: `${baseUrl}/fr/massage/relaxant`,
        en: `${baseUrl}/en/massage/relaxant`,
        nl: `${baseUrl}/nl/massage/relaxant`,
        "x-default": `${baseUrl}/fr/massage/relaxant`,
      },
    },
    openGraph: {
      title: {
        fr: "Massage relaxant à Hal | La Voie du Bien-Être",
        en: "Relaxing Massage in Halle | La Voie du Bien-Être",
        nl: "Ontspanningsmassage in Halle | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Massage relaxant à Hal dès 80€ : relâchez stress et tensions grâce à un soin doux et enveloppant. Détente totale garantie. Réservez !",
        en: "Relaxing massage in Halle from €80: release stress and tension with a gentle, soothing treatment. Total relaxation guaranteed. Book now!",
        nl: "Ontspanningsmassage in Halle vanaf €80: laat stress en spanning los met een zachte, omhullende behandeling. Totale ontspanning. Boek nu!",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/massage/relaxant`,
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
            fr: "Femme détendue recevant un massage relaxant",
            en: "Relaxed woman receiving a relaxing massage",
            nl: "Ontspannen vrouw krijgt een ontspanningsmassage",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massage relaxant à Hal | La Voie du Bien-Être",
        en: "Relaxing Massage in Halle | La Voie du Bien-Être",
        nl: "Ontspanningsmassage in Halle | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Massage relaxant à Hal : relâchez le stress et les tensions grâce à un soin doux et enveloppant. Réservez maintenant !",
        en: "Relaxing massage in Halle: release stress and tension with a gentle, soothing treatment. Book your session today!",
        nl: "Ontspanningsmassage in Halle: laat stress en spanning los met een zachte, omhullende behandeling. Boek nu!",
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
  const { locale } = await params;
  const currentLocale = locale ?? "fr";

  const localBusinessId = `${baseUrl}/${currentLocale}#local-business`;

  return (
    <>
      {/* ✅ LocalBusiness complet, avec le même @id que dans MassageServiceJSONLD */}
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

      {/* JSON-LD du service massage relaxant */}
      <MassageServiceJSONLD slug="relaxant" locale={currentLocale} />

      {/* Breadcrumb JSON-LD */}
      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Massage relaxant"
        serviceUrl={`${baseUrl}/${currentLocale}/massage/relaxant`}
      />

      <main>
        <HeroMassage variant="massage" />
        <Benefits ids={[1, 6, 19, 4]} title="relaxant" />
        <WhyThisCare ids={[2, 6, 13, 21, 31]} title="relaxant" />
        <TreatmentDescription variant="relaxant" />
        <Gallery ids={[1, 2, 3]} />
        <CtaSectionMassagePage variant="relaxant" />
        <ServiceFaq variant="relaxant" />
        <RelatedServices variant="massage" />
        <Testimonials ids={[1, 4, 11, 23, 35]} />
      </main>
    </>
  );
}
