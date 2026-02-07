import Head from "next/head";
import HeroMassage from "@/components/Hero/HeroMassage";
import Benefits from "@/components/Benefits/Benefits";
import WhyThisCare from "@/components/WhyThisCare/WhyThisCare";
import TreatmentDescription from "@/components/TreatmentDescription/TreatmentDescription";
import Gallery from "@/components/Gallery/Gallery";
import CtaSectionMassagePage from "@/components/Cta/CtaSectionMassagePage";
import Testimonials from "@/components/Testimonials/Testimonials";
import MassageServiceJSONLD from "@/components/Metadata/MassageServiceJSONLD";



export default function Page({ params }) {
  const { locale } = params || {};
  const currentLocale = locale ?? "fr";

  return (
    <>
      <MassageServiceJSONLD slug="relaxant" locale={currentLocale} />
      <main>
        <HeroMassage variant="anticellulite" />
        <WhyThisCare title="anticellulite" />
        <Benefits ids={[15, 43, 55, 56]} title="anticellulite" />
        <TreatmentDescription variant="anticellulite" />
        <Gallery ids={[2, 5, 6]} />
        <CtaSectionMassagePage variant="anticellulite" />
        <Testimonials ids={[48, 49, 36, 19, 16]} />
      </main>
    </>
  );
}
