/**
 * Bandeau « Prochaine disponibilité ».
 *
 * Pourquoi : sans signal de rareté/urgence, le visiteur ajoute le site aux favoris
 * et ne revient jamais. Annoncer un prochain créneau (« cette semaine », « jeudi 16h »)
 * pousse à passer à l'acte tout de suite.
 *
 * Mise à jour : éditez la clé `nextSlot` dans /src/data/business.js. Idéalement
 * 2×/semaine. Si vide → le bandeau ne s'affiche pas.
 */

import { BUSINESS } from "@/data/business";
import { ClockIcon } from "@heroicons/react/24/solid";

export default function UrgencyBadge({ locale = "fr", variant = "dark" }) {
  const text = BUSINESS.nextSlot?.[locale] || BUSINESS.nextSlot?.fr;
  if (!text) return null;

  const styles =
    variant === "dark"
      ? "bg-[#E8D4AD]/15 border-[#E8D4AD]/40 text-[#F3EDE4]"
      : "bg-[#F3EDE4] border-[#B08856]/40 text-[#1B3A2D]";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${styles}`}
      role="status"
      aria-live="polite"
    >
      <span
        className="relative flex h-2 w-2"
        aria-hidden="true"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8D4AD] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8D4AD]" />
      </span>
      <ClockIcon className="h-4 w-4" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}
