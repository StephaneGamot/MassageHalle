import { getTranslations } from 'next-intl/server';
import { useTranslations } from "next-intl";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import FiftyQuestions from '@/components/Faq/FiftyQuestions';
import ServiceBreadcrumbJsonLd from "@/components/Metadata/ServiceBreadcrumbJsonLd";
import { LocalBusinessJsonLd } from "next-seo";

const baseUrl = "https://lavoiedubienetre.be";

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";
  const t = await getTranslations({ locale, namespace: "faq" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `${baseUrl}/${currentLocale}/faq`,
      languages: {
        fr: `${baseUrl}/fr/faq`,
        en: `${baseUrl}/en/faq`,
        nl: `${baseUrl}/nl/faq`,
        "x-default": `${baseUrl}/fr/faq`,
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `${baseUrl}/${currentLocale}/faq`,
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
            fr: "Questions fréquentes sur les massages à Hal",
            en: "Frequently asked questions about massages in Halle",
            nl: "Veelgestelde vragen over massages in Halle",
          }[currentLocale],
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: t("metaTitle"),
      description: t("metaDescription"),
      images: [
        `${baseUrl}/Images/OpenGraph/masseur-massage.jpg`,
      ],
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

function FAQPageJsonLd({ locale }) {
  const faqItems = {
    fr: [
      { question: "Quels types de massages proposez-vous ?", answer: "Nous proposons des massages relaxants, sportifs, anti-cellulite, Shiatsu, Reiki, réflexologie plantaire et plus encore, adaptés à vos besoins spécifiques." },
      { question: "Proposez-vous des massages à domicile ?", answer: "Oui, nous proposons certains soins à domicile dans la région de Halle et ses environs." },
      { question: "Quels sont les bienfaits d'un massage relaxant ?", answer: "Le massage relaxant réduit le stress, détend les muscles, améliore la circulation et favorise un sommeil réparateur." },
      { question: "Est-ce que je dois me déshabiller pour un massage ?", answer: "Cela dépend du soin choisi. Pour le Shiatsu ou Reiki, vous restez habillé. Pour les massages à l'huile, il est préférable d'être en sous-vêtements." },
      { question: "Combien de temps dure un massage ?", answer: "Une séance classique dure entre 60 minutes et 120 minutes selon le type de massage choisi." },
      { question: "À quelle fréquence devrais-je me faire masser ?", answer: "Cela dépend de vos besoins, mais une séance par mois est idéale pour un bien-être constant." },
      { question: "Y a-t-il des contre-indications au massage ?", answer: "Oui, fièvre, maladies contagieuses, phlébite, fractures récentes peuvent être des contre-indications." },
      { question: "Puis-je recevoir un massage si je suis enceinte ?", answer: "Oui, certains massages sont adaptés à la grossesse, notamment à partir du 2e trimestre." },
      { question: "Qu'est-ce que la réflexologie plantaire ?", answer: "C'est un massage des pieds stimulant des zones réflexes liées aux organes pour rétablir l'équilibre du corps." },
      { question: "Quels sont les effets du Reiki ?", answer: "Le Reiki favorise la détente, l'équilibre émotionnel, et aide à libérer les blocages énergétiques." },
      { question: "Le massage shiatsu se fait-il avec ou sans huile ?", answer: "Le shiatsu se pratique habillé, sans huile, par des pressions sur des points énergétiques." },
      { question: "Puis-je offrir un massage en cadeau ?", answer: "Absolument ! Nous proposons des bons cadeaux personnalisés." },
      { question: "Un massage peut-il soulager les migraines ?", answer: "Oui, certains massages comme le crânien ou le shiatsu peuvent atténuer les maux de tête." },
    ],
    en: [
      { question: "What types of massages do you offer?", answer: "We offer relaxing, sports, anti-cellulite, Shiatsu, Reiki, foot reflexology and more, tailored to your specific needs." },
      { question: "Do you offer home massage services?", answer: "Yes, we offer certain treatments at home in the Halle area and its surroundings." },
      { question: "What are the benefits of a relaxing massage?", answer: "It reduces stress, relaxes muscles, improves circulation, and promotes restful sleep." },
      { question: "Do I need to undress for a massage?", answer: "It depends on the treatment. For Shiatsu or Reiki, you stay clothed. For oil massages, underwear is preferred." },
      { question: "How long does a massage last?", answer: "A standard session lasts between 60 and 120 minutes depending on the type of massage chosen." },
      { question: "How often should I get a massage?", answer: "It depends on your needs, but once a month is ideal for consistent well-being." },
      { question: "Are there any contraindications for massage?", answer: "Yes, fever, contagious diseases, phlebitis, and recent fractures can be contraindications." },
      { question: "Can I receive a massage if I am pregnant?", answer: "Yes, certain massages are adapted for pregnancy, especially from the 2nd trimester." },
      { question: "What is foot reflexology?", answer: "It is a foot massage that stimulates reflex zones linked to organs to restore body balance." },
      { question: "What are the effects of Reiki?", answer: "Reiki promotes relaxation, emotional balance, and helps release energy blockages." },
      { question: "Is Shiatsu done with or without oil?", answer: "Shiatsu is performed clothed, without oil, using pressure on energy points." },
      { question: "Can I offer a massage as a gift?", answer: "Absolutely! We offer personalized gift vouchers." },
      { question: "Can a massage relieve migraines?", answer: "Yes, certain massages like cranial or shiatsu can alleviate headaches." },
    ],
    nl: [
      { question: "Welke soorten massages bieden jullie aan?", answer: "Wij bieden ontspannende, sport-, anti-cellulite-, Shiatsu-, Reiki-, voetreflexologie en meer aan, afgestemd op uw specifieke behoeften." },
      { question: "Bieden jullie massages aan huis aan?", answer: "Ja, wij bieden bepaalde behandelingen aan huis aan in de regio Halle en omgeving." },
      { question: "Wat zijn de voordelen van een ontspannende massage?", answer: "Ontspanningsmassage vermindert stress, ontspant de spieren, verbetert de bloedsomloop en bevordert een herstellende slaap." },
      { question: "Moet ik me uitkleden voor een massage?", answer: "Dat hangt af van de behandeling. Bij Shiatsu of Reiki blijft u gekleed. Bij oliemassages is ondergoed aan te raden." },
      { question: "Hoe lang duurt een massage?", answer: "Een standaardsessie duurt tussen 60 en 120 minuten, afhankelijk van het type massage." },
      { question: "Hoe vaak zou ik een massage moeten krijgen?", answer: "Dat hangt af van uw behoeften, maar eenmaal per maand is ideaal voor constant welzijn." },
      { question: "Zijn er contra-indicaties voor massage?", answer: "Ja, koorts, besmettelijke ziekten, flebitis en recente breuken kunnen contra-indicaties zijn." },
      { question: "Kan ik een massage krijgen als ik zwanger ben?", answer: "Ja, bepaalde massages zijn aangepast aan de zwangerschap, vooral vanaf het 2e trimester." },
      { question: "Wat is voetreflexologie?", answer: "Het is een voetmassage die reflexzones stimuleert die verbonden zijn met organen om het lichaamsevenwicht te herstellen." },
      { question: "Wat zijn de effecten van Reiki?", answer: "Reiki bevordert ontspanning, emotioneel evenwicht en helpt energieblokkades los te laten." },
      { question: "Wordt Shiatsu met of zonder olie gedaan?", answer: "Shiatsu wordt gekleed uitgevoerd, zonder olie, met druk op energiepunten." },
      { question: "Kan ik een massage als cadeau geven?", answer: "Absoluut! Wij bieden gepersonaliseerde cadeaubonnen aan." },
      { question: "Kan een massage migraine verlichten?", answer: "Ja, bepaalde massages zoals craniaal of shiatsu kunnen hoofdpijn verlichten." },
    ],
  };

  const items = faqItems[locale] || faqItems.fr;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function Page({ params }) {
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
        rating={{
          ratingValue: "4.9",
          ratingCount: "50",
        }}
      />

      <FAQPageJsonLd locale={currentLocale} />

      <ServiceBreadcrumbJsonLd
        locale={currentLocale}
        serviceName="FAQ"
        serviceUrl={`${baseUrl}/${currentLocale}/faq`}
      />

      <FiftyQuestions />
    </>
  );
}
