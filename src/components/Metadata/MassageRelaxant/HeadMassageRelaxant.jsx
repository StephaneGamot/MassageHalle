import Head from "next/head";
import { MetadataMassageRelaxant } from "@/data/metadata/metadataMassageRelaxant";

export default function HeadMassageRelaxant() {
  return (
    <Head>

      {/* JSON-LD combiné */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(MetadataMassageRelaxant),
        }}
      />

      {/* Fil d’Ariane */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://lavoiedubienetre.be/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Massage",
                item: "https://lavoiedubienetre.be/massage",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Massage relaxant",
                item: "https://lavoiedubienetre.be/massage/relaxant",
              },
            ],
          }),
        }}
      />
    </Head>
  );
}
