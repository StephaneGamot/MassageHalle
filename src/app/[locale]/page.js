// import Image from "next/image";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import MassageCardContainer from "@/components/Cards/MassageCardContainer";
import Cta from "@/components/Cta/Cta";
import StructuredData from "@/components/Metadata/StructuredData";
import { MetadataHomePage } from "@/components/Metadata/HomePage/MetadataHomePage";

import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? 'fr';

  return {
    title: {
      fr: "Massages bien-être à Halle | La Voie du Bien-Être",
      en: "Well-being massages in Halle | La Voie du Bien-Être",
      nl: "Wellnessmassages in Halle | La Voie du Bien-Être",
    }[currentLocale],
    description: {
      fr: "Découvrez nos massages relaxants et soins thérapeutiques à Halle, en cabinet ou à domicile.",
      en: "Discover our relaxing massages and therapeutic treatments in Halle, at home or in our studio.",
      nl: "Ontdek onze ontspanningsmassages en therapeutische behandelingen in Halle, aan huis of in de praktijk.",
    }[currentLocale],
    alternates: {
      canonical: `https://lavoiedubienetre.be/${currentLocale}`,
    },
    openGraph: {
      title: {
        fr: "Massages bien-être à Halle | La Voie du Bien-Être",
        en: "Well-being massages in Halle | La Voie du Bien-Être",
        nl: "Wellnessmassages in Halle | La Voie du Bien-Être",
      }[currentLocale],
      description: {
        fr: "Offrez-vous un moment de détente absolue avec nos soins personnalisés dans un cadre apaisant.",
        en: "Treat yourself to total relaxation with our personalized treatments in a soothing setting.",
        nl: "Gun jezelf een moment van volledige ontspanning met onze persoonlijke behandelingen in een rustgevende omgeving.",
      }[currentLocale],
      url: `https://lavoiedubienetre.be/${currentLocale}`,
      siteName: "La Voie du Bien-Être",
      locale: `${currentLocale}_BE`,
      type: "website",
      images: [
        {
          url: "https://lavoiedubienetre.be/Images/OpenGraph/accueil-massage-halle.webp",
          width: 1200,
          height: 627,
          alt: {
            fr: "Massage bien-être à Halle",
            en: "Well-being massage in Halle",
            nl: "Wellnessmassage in Halle",
          }[currentLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@voiedubienetre",
      title: {
        fr: "Massages et soins à Halle – Bruxelles",
        en: "Massages & treatments in Halle – Brussels",
        nl: "Massages & behandelingen in Halle – Brussel",
      }[currentLocale],
      description: {
        fr: "Prenez soin de vous avec un massage relaxant ou thérapeutique à Halle, Uccle, Tubize ou à domicile.",
        en: "Take care of yourself with a relaxing or therapeutic massage in Halle, Uccle, Tubize or at home.",
        nl: "Verzorg jezelf met een ontspannende of therapeutische massage in Halle, Ukkel, Tubize of bij je thuis.",
      }[currentLocale],
      images: ["https://lavoiedubienetre.be/Images/OpenGraph/accueil-massage-halle.webp"],
    },
  };
}




export default function Home() {
  return (
    <>
 <StructuredData data={MetadataHomePage} />
    <main>
      <Hero />
      <MassageCardContainer />
      <Cta />
      <Contact />
       <Testimonials ids={[1, 4, 7, 23, 35]} />
    </main>
    </>
  );
}
