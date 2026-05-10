/**
 * @deprecated Ce composant est désactivé.
 *
 * Il était marqué "use client" ce qui empêchait le rendu SSR du JSON-LD,
 * le rendant invisible pour les crawlers (dont Google).
 *
 * La logique LocalBusiness est désormais couverte par :
 *   - HomepageJsonLd.jsx (reviewSchema / HealthAndBeautyBusiness) — SSR ✅
 *   - MassageServiceJSONLD.jsx (provider) — SSR ✅
 *
 * Ne pas réimporter ce fichier.
 */
export default null;
