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
      fr: "Shiatsu à Hal (Bruxelles) | La Voie du Bien-Être",
      en: "Shiatsu in Halle (Brussels) | La Voie du Bien-Être",
      nl: "Shiatsu in Halle (Brussel) | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Shiatsu à Hal dès 80€ : rééquilibrez votre énergie, libérez les tensions et retrouvez un bien-être profond et durable. Réservez !",
      en: "Shiatsu in Halle from €80: rebalance your energy, release deep tensions and restore lasting well-being. Book your session today!",
      nl: "Shiatsu in Halle vanaf €80: herbalanceer uw energie, laat spanningen los en herstel diep welzijn. Boek vandaag nog uw afspraak!",
    }[currentLocale],
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/shiatsu`,
      languages: {
        fr: `${baseUrl}/fr/shiatsu`,
        en: `${baseUrl}/en/shiatsu`,
        nl: `${baseUrl}/nl/shiatsu`,
        "x-default": `${baseUrl}/fr/shiatsu`,
      },
    },
    openGraph: {
      title: {
        fr: "Shiatsu à Hal – Équilibre et détente en profondeur",
        en: "Shiatsu in Halle – Deep Relaxation & Balance",
        nl: "Shiatsu in Halle – Diepe ontspanning en balans",
      }[currentLocale],
      description: {
        fr: "Un soin énergétique japonais par pressions douces pour revitaliser le corps et l'esprit.",
        en: "A Japanese energy treatment using gentle pressure to revitalize body and mind.",
        nl: "Een Japanse energetische behandeling met zachte druk om lichaam en geest te revitaliseren.",
      }[currentLocale],
      url: `${baseUrl}/${currentLocale}/shiatsu`,
      type: "website",
      siteName: "La Voie du Bien-Être",
      locale: {
        fr: "fr_BE",
        en: "en_BE",
        nl: "nl_BE",
      }[currentLocale],
      images: [
        {
          url: `${baseUrl}/Images/hero/shiatsu-massage-halle-bruxelles.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Séance de Shiatsu à Hal",
            en: "Shiatsu session in Halle",
            nl: "Shiatsu-sessie in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Shiatsu à Hal – Vitalité & sérénité",
        en: "Shiatsu in Halle – Vitality & Serenity",
        nl: "Shiatsu in Halle – Vitaliteit & Rust",
      }[currentLocale],
      description: {
        fr: "Soin Shiatsu pour soulager les tensions et stimuler la circulation de l'énergie vitale.",
        en: "Shiatsu treatment to relieve tension and boost vital energy flow.",
        nl: "Shiatsu-behandeling om spanningen te verlichten en de energiestroom te stimuleren.",
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

      <MassageServiceJSONLD slug="shiatsu" locale={currentLocale} />

      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Shiatsu"
        serviceUrl={`${baseUrl}/${currentLocale}/shiatsu`}
      />

      <main>
        <HeroMassage variant="shiatsu" />
        <WhyThisCare title="shiatsu" />
        <Benefits ids={[17, 18, 60, 11]} title="shiatsu" />
        <TreatmentDescription variant="shiatsu" />
        <Gallery ids={[29, 27, 18]} />
        <CtaSectionMassagePage variant="shiatsu" />
        <ServiceFaq variant="shiatsu" />
        <RelatedServices variant="shiatsu" />
        <Testimonials ids={[12, 18, 27, 34, 42, 46]} />
      </main>
    </>
  );
}
