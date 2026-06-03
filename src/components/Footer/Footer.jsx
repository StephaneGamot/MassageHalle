"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import LangSwitcher from "@/components/LangSwitcher";
import AlternateLanguages from "@/components/Footer/AlternateLanguages";

export default function Footer() {
  const t = useTranslations("nav");
  const ft = useTranslations("footer");
  const locale = useLocale();

  const massages = [
    { key: "relaxant", href: `/${locale}/massage/relaxant` },
    { key: "sportif", href: `/${locale}/massage/sportif` },
    { key: "douceur", href: `/${locale}/massage/douceur-dorsale` },
    { key: "anticellulite", href: `/${locale}/massage/anti-cellulite` },
    { key: "tao", href: `/${locale}/massage/tao` },
    { key: "deeptissue", href: `/${locale}/massage/deep-tissues` },
    { key: "domicile", href: `/${locale}/massage/a-domicile` },
  ];

  const soins = [
    { key: "shiatsu", href: `/${locale}/shiatsu` },
    { key: "reiki", href: `/${locale}/reiki` },
    { key: "cranio", href: `/${locale}/therapie-cranio-sacree` },
    { key: "reflexo", href: `/${locale}/reflexologie-plantaire` },
    { key: "voyage", href: `/${locale}/massage/voyage-des-sens` },
    { key: "amma", href: `/${locale}/massage/massage-sur-chaise` },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@lavoiedubien-etre",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#1B3A2D]">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8 lg:px-8">

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest !text-[#D4BA91]">
              {t("massage")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {massages.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="text-sm !text-white/80 hover:!text-white transition-colors min-h-[44px] inline-flex items-center">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest !text-[#D4BA91]">
              {t("therapeutic")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {soins.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className="text-sm !text-white/80 hover:!text-white transition-colors min-h-[44px] inline-flex items-center">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest !text-[#D4BA91]">
              {t("contact")}
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="tel:+32477131993" className="text-sm !text-white/80 hover:!text-white transition-colors min-h-[44px] inline-flex items-center">
                  04 77 13 19 93
                </Link>
              </li>
              <li className="text-sm !text-white/80">Halle, 1501 Buizingen</li>
              <li>
                <Link href={`/${locale}/tarifs`} className="text-sm !text-white/80 hover:!text-white transition-colors min-h-[44px] inline-flex items-center">
                  {locale === "en" ? "Prices" : locale === "nl" ? "Tarieven" : "Tarifs"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/cartes-cadeaux`} className="text-sm !text-white/80 hover:!text-white transition-colors min-h-[44px] inline-flex items-center">
                  {locale === "en" ? "Gift cards" : locale === "nl" ? "Cadeaubonnen" : "Cartes-cadeaux"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/faq`} className="text-sm !text-white/80 hover:!text-white transition-colors min-h-[44px] inline-flex items-center">
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest !text-[#D4BA91]">
              {ft("followUs")}
            </h3>
            <div className="mt-4 flex gap-x-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-[#D4BA91] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon aria-hidden="true" className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <LangSwitcher direction="up" />
            </div>
          </div>
        </div>

        {/* Liens internes vers les autres versions linguistiques — signal SEO */}
        <AlternateLanguages />

        {/* Villes desservies — SEO local, désormais cliquables vers les pages dédiées */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs !text-white/70 text-center mb-3">
            {ft("seoCities")}
          </p>
          <p className="text-xs text-center !text-white/80 flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
            <Link href={`/${locale}/massage-bruxelles`} className="underline-offset-2 hover:!text-[#D4BA91] hover:underline">
              {locale === "nl" ? "Massage Brussel" : locale === "en" ? "Massage Brussels" : "Massage Bruxelles"}
            </Link>
            <Link href={`/${locale}/massage-uccle`} className="underline-offset-2 hover:!text-[#D4BA91] hover:underline">
              {locale === "nl" ? "Massage Ukkel" : "Massage Uccle"}
            </Link>
            <Link href={`/${locale}/massage-waterloo`} className="underline-offset-2 hover:!text-[#D4BA91] hover:underline">
              Massage Waterloo
            </Link>
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs !text-white/75">
            &copy; {new Date().getFullYear()} La Voie du Bien-&Ecirc;tre
          </p>
          <div className="flex gap-6 flex-wrap">
            <Link href="https://www.votremassageadomicilepaysbasque.com/fr" className="text-xs !text-white/75 hover:!text-[#D4BA91] transition-colors" target="_blank" rel="noopener noreferrer">
              Massage Pays-Basque
            </Link>
            <Link href="https://www.stephanegamot.com/" className="text-xs !text-white/75 hover:!text-[#D4BA91] transition-colors" target="_blank" rel="noopener noreferrer">
              Stéphane Gamot — Developer
            </Link>
            <Link href="https://www.creation-site-internet-pays-basque.com/fr" className="text-xs !text-white/75 hover:!text-[#D4BA91] transition-colors" target="_blank" rel="noopener noreferrer">
              Création de site internet au Pays Basque
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
