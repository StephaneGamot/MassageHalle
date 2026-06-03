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
import ServiceFaq from "@/components/Faq/ServiceFaq";

const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  return {
    title: {
      fr: "Thérapie cranio-sacrée à Hal – Migraines, stress, ATM",
      en: "Craniosacral Therapy Halle – Migraines, TMJ, tinnitus",
      nl: "Craniosacrale therapie Halle – Migraine, kaak, oorsuizen",
    }[currentLocale],
    description: {
      fr: "Migraines, acouphènes, mâchoire crispée, choc émotionnel ? Thérapie cranio-sacrée à Hal, 1 h 30 de soin doux dès 90 €. Sur rdv. Réservez en ligne.",
      en: "Migraines, tinnitus, jaw tension, emotional trauma? Craniosacral therapy in Halle, gentle 1h30 treatment from €90. By appointment. Book online.",
      nl: "Migraine, oorsuizen, kaakspanning, emotioneel trauma? Craniosacrale therapie in Halle, zachte 1h30 behandeling vanaf €90. Op afspraak. Boek online.",
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
        fr: "Thérapie cranio-sacrée à Hal – Migraines, stress, ATM",
        en: "Craniosacral Therapy Halle – Migraines, TMJ, tinnitus",
        nl: "Craniosacrale therapie Halle – Migraine, kaak, oorsuizen",
      }[currentLocale],
      description: {
        fr: "Migraines, acouphènes, mâchoire crispée, choc émotionnel ? Thérapie cranio-sacrée à Hal, 1 h 30 de soin doux dès 90 €. Sur rdv. Réservez en ligne.",
        en: "Migraines, tinnitus, jaw tension, emotional trauma? Craniosacral therapy in Halle, gentle 1h30 treatment from €90. By appointment. Book online.",
        nl: "Migraine, oorsuizen, kaakspanning, emotioneel trauma? Craniosacrale therapie in Halle, zachte 1h30 behandeling vanaf €90. Op afspraak. Boek online.",
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
        fr: "Thérapie cranio-sacrée à Hal – Migraines, stress, ATM",
        en: "Craniosacral Therapy Halle – Migraines, TMJ, tinnitus",
        nl: "Craniosacrale therapie Halle – Migraine, kaak, oorsuizen",
      }[currentLocale],
      description: {
        fr: "Migraines, acouphènes, mâchoire crispée, choc émotionnel ? Thérapie cranio-sacrée à Hal, 1 h 30 de soin doux dès 90 €. Sur rdv. Réservez en ligne.",
        en: "Migraines, tinnitus, jaw tension, emotional trauma? Craniosacral therapy in Halle, gentle 1h30 treatment from €90. By appointment. Book online.",
        nl: "Migraine, oorsuizen, kaakspanning, emotioneel trauma? Craniosacrale therapie in Halle, zachte 1h30 behandeling vanaf €90. Op afspraak. Boek online.",
      }[currentLocale],
      images: [`${baseUrl}/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp`],
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

      <MassageServiceJSONLD slug="cranioSacree" locale={currentLocale} />

      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="Thérapie Cranio-Sacrée"
        serviceUrl={`${baseUrl}/${currentLocale}/therapie-cranio-sacree`}
      />

      <HeroMassage variant="cst" />
      <WhyThisCare title="cst" />
      <Benefits ids={[62, 47, 63, 64]} title="cst" />
      <TreatmentDescription variant="cst" />
      <Gallery ids={[22, 31, 32]} />
      <CtaSectionMassagePage variant="cst" />
      <ServiceFaq variant="cst" />
      <RelatedServices variant="cst" />
      <Testimonials ids={[11, 19, 24, 13, 33, 47]} />
    </>
  );
}
