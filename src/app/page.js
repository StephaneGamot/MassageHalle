import Image from "next/image";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import MassageCardContainer from "@/components/Cards/MassageCardContainer";
import Cta from "@/components/Cta/Cta";
import StructuredData from "@/components/Metadata/StructuredData";
import { MetadataHomePage } from "@/components/Metadata/HomePage/MetadataHomePage";

export const metadata = {
  title: "Massage & soin therapeutique à Halle - Bruxelles",
  description:
    "À Halle – Bruxelles, La Voie du Bien-Être vous accueille en cabinet ou à domicile pour des massages relaxants & soins thérapeutiques, pour retrouver équilibre et sérénité",
    alternates: {
      canonical: "https://lavoiedubienetre.be",
    },
    openGraph: {
      title: "La voie du bien-être | Détente et Relaxation",
      description: "Profitez d’un massage unique à Halle. Shiatsu, Reiki, et relaxation profonde vous attendent.",
      url: "https://lavoiedubienetre.be",
      siteName: "La voie du bien-être",
      locale: "fr_BE",
      type: "website",
      images: [
        {
          url: "https://lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg",
          width: 1200,
          height: 627,
          alt: "La voie du bien-être à Halle",
        },
      ],
    },
    twitter: {
      title: "La voie du bien-être | Shiatsu Reiki Massage à Halle",
      card: "summary_large_image",
      site: "@voiedubienetre",
      description: "Centre de massage à Halle | Shiatsu Reiki Reflexologie Plantaire | La voie du bien-être",
      images: ["https://lavoiedubienetre.be/Images/OpenGraph/masseur-massage.jpg"],
    },
  };

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
