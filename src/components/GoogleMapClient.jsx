"use client";

/**
 * Carte Google Maps en lazy-load « clic-to-load ».
 *
 * Pourquoi : l'iframe Google Maps charge ~600 Ko de JS + cookies tiers dès
 * l'affichage du composant, ce qui dégrade le LCP et le score Web Vitals
 * (donc le ranking). On affiche d'abord un placeholder ultra-léger ; l'iframe
 * n'est insérée dans le DOM qu'après un clic explicite de l'utilisateur.
 *
 * Bonus RGPD : aucun cookie Google n'est posé tant que l'utilisateur n'a pas
 * activement consenti en cliquant.
 */

import { useState } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";

const IFRAME_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.5696912176845!2d4.256385212462524!3d50.7464694658871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c23185a0470331%3A0xdb0fae66d0976815!2sMassage%20Relaxant%20-%20La%20voie%20du%20bien-%C3%AAtre!5e0!3m2!1sfr!2sbe!4v1764024459493!5m2!1sfr!2sbe";

export default function GoogleMapClient({
  iframeTitle,
  loadButton,
  loadHint,
  directions,
  googleMapsUrl,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[16/9] max-h-[450px] rounded-2xl overflow-hidden shadow-md">
      {loaded ? (
        <iframe
          src={IFRAME_SRC}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={iframeTitle}
        />
      ) : (
        // Placeholder ultra-léger : dégradé + icône + bouton.
        // Pas de requête réseau tant que l'utilisateur ne clique pas.
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6"
          style={{
            background:
              "linear-gradient(135deg, #F3EDE4 0%, #E8DFCF 60%, #D8CBB3 100%)",
          }}
        >
          {/* Faux quadrillage type "carte" pour évoquer la map sans la charger */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(27,58,45,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(27,58,45,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />
          <MapPinIcon className="relative h-12 w-12 text-[#1B3A2D]" aria-hidden="true" />
          <p className="relative text-sm text-[#595751] max-w-md">{loadHint}</p>
          <div className="relative flex flex-wrap gap-3 justify-center">
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1B3A2D] text-white font-semibold shadow hover:bg-[#244e3c] transition focus-visible:outline-2 focus-visible:outline-[#B08856]"
            >
              {loadButton}
            </button>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#1B3A2D] text-[#1B3A2D] font-semibold hover:bg-white/40 transition focus-visible:outline-2 focus-visible:outline-[#B08856]"
            >
              {directions}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
