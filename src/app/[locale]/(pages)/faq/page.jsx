import { getTranslations } from 'next-intl/server';
import { useTranslations } from "next-intl";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import FiftyQuestions from '@/components/Faq/FiftyQuestions';

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";
  const t = await getTranslations({ locale, namespace: "faq" });


  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
 alternates: {
  canonical: `https://lavoiedubienetre.be/${currentLocale}/faq`,
 languages: {
    fr: 'https://lavoiedubienetre.be/fr/faq',
    en: 'https://lavoiedubienetre.be/en/faq',
    nl: 'https://lavoiedubienetre.be/nl/faq',
    'x-default': 'https://lavoiedubienetre.be/fr/faq',
  } 
},
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://lavoiedubienetre.be/${locale}/faq`,
      siteName: "La voie du bien-être - massage relaxant",
      locale: `${locale}_BE`,
      images: [
        {
          url: "https://www.lavoiedubienetre.be/Images/hero/massage-tao-a-domicile-massotherapeuthe-halle-bruxelles-brabant-wallon.webp",
          width: 1200,
          height: 627,
          alt: "Une longue séance de massage lui permetant de tout oublier",
          type: "image/webp" 
        },
      ],
    },
    twitter: {
      title: t("metaTitle"),
      card: "summary_large_image",
      site: "@voiedubienetre",
      description: t("metaDescription"),
      images: [
        "https://lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg",
      ],
    },
  };
}

export default function Page() {


  return (
  <FiftyQuestions />
  );
}
