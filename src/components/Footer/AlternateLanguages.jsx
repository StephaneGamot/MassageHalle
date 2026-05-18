"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

/**
 * Liens internes vers les autres versions linguistiques de la page courante.
 *
 * Pourquoi : un simple LangSwitcher (dropdown) ne donne pas à Google de signal
 * d'ancre <a> visible vers les pages /en et /nl. Ce composant rend des liens
 * texte tangibles, crawlable et utile aux visiteurs multilingues.
 */
const LOCALES = ["fr", "en", "nl"];

const LABELS = {
  fr: { name: "Version française", short: "FR" },
  en: { name: "English version", short: "EN" },
  nl: { name: "Nederlandse versie", short: "NL" },
};

function stripLocale(pathname) {
  if (!pathname) return "";
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && LOCALES.includes(parts[0])) {
    return "/" + parts.slice(1).join("/");
  }
  return pathname;
}

export default function AlternateLanguages() {
  const locale = useLocale();
  const pathname = usePathname();
  const base = stripLocale(pathname);

  const others = LOCALES.filter((l) => l !== locale);

  return (
    <nav
      aria-label="Other languages"
      className="mt-10 pt-6 border-t border-white/10"
    >
      <p className="text-xs uppercase tracking-widest !text-[#D4BA91] text-center mb-3">
        {locale === "fr"
          ? "Cette page dans d'autres langues"
          : locale === "en"
          ? "This page in other languages"
          : "Deze pagina in andere talen"}
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {others.map((l) => (
          <li key={l}>
            <Link
              href={`/${l}${base}`}
              hrefLang={l}
              rel="alternate"
              className="text-sm !text-white/85 hover:!text-white underline decoration-white/30 hover:decoration-white transition-colors"
            >
              <span className="font-semibold mr-1">{LABELS[l].short}</span>
              <span className="!text-white/70">— {LABELS[l].name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
