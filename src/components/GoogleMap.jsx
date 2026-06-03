import { getTranslations } from "next-intl/server";
import GoogleMapClient from "./GoogleMapClient";
import { BUSINESS } from "@/data/business";

/**
 * Wrapper serveur pour la carte Google Maps.
 *
 * On délègue le rendu à un composant client qui ne charge l'iframe Google Maps
 * (≈300–800 ms de LCP en moins + cookies tiers Google) QUE si l'utilisateur clique
 * sur le placeholder.
 *
 * SEO : un lien direct vers Google Maps reste présent comme fallback, ce qui
 * préserve le signal local et l'accessibilité (utilisateurs sans JS, lecteurs d'écran).
 */
export default async function GoogleMap() {
  const t = await getTranslations("map");
  const tMap = await getTranslations("googleMap");

  return (
    <section className="bg-[#FAFAF7]" aria-label={t("ariaLabel")}>
      <div className="section-wrap">
        <GoogleMapClient
          iframeTitle={t("iframeTitle")}
          loadButton={tMap("loadButton")}
          loadHint={tMap("loadHint")}
          directions={tMap("directions")}
          googleMapsUrl={BUSINESS.googleMapsUrl}
        />
      </div>
    </section>
  );
}
