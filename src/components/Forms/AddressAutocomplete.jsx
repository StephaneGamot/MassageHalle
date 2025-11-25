"use client";

import { useEffect, useRef } from "react";

export default function AddressAutocomplete({ onAddressSelect, label = "Adresse" }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Si le script Google n'est pas encore chargé
    if (typeof window === "undefined") return;
    if (!window.google || !window.google.maps || !window.google.maps.places) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["address"],
        componentRestrictions: { country: ["be", "fr"] },
        fields: ["address_components", "geometry", "formatted_address"],
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (!place || !place.address_components) return;

      if (onAddressSelect) {
        // On renvoie les infos utiles au parent
        const data = extractAddress(place);
        onAddressSelect(data);
      }
    });

    return () => {
      // Pas d’API officielle pour cleanup, on laisse l’instance se faire GC
    };
  }, [onAddressSelect]);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-100">
        {label}
      </label>
      <input
        ref={inputRef}
        type="text"
        placeholder="Votre adresse (avec numéro)"
        autoComplete="off"
        className="w-full rounded-md border border-slate-500 bg-slate-900/40 px-3 py-2 text-sm text-slate-100 placeholder-slate-400 shadow-sm focus:border-[#7EA23F] focus:outline-none focus:ring-1 focus:ring-[#7EA23F]"
      />
    </div>
  );
}

// Petite fonction utilitaire pour structurer l'adresse
function extractAddress(place) {
  const components = place.address_components || [];

  const get = (type) => {
    const comp = components.find((c) => c.types.includes(type));
    return comp ? comp.long_name : "";
  };

  const streetNumber = get("street_number");
  const route = get("route");

  return {
    formatted: place.formatted_address || "",
    street: [streetNumber, route].filter(Boolean).join(" "),
    postalCode: get("postal_code"),
    city: get("locality") || get("postal_town"),
    country: get("country"),
    location: place.geometry?.location ?? null,
  };
}
