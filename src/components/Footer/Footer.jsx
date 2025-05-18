"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import LangSwitcher from "@/components/LangSwitcher";

export default function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");
  const locale = useLocale(); // 👈 on récupère la langue courante

  const navigation = {
    massages: [
      { key: "relaxant", href: `/${locale}/massage/relaxant` },
      { key: "sportif", href: `/${locale}/massage/sportif` },
      { key: "domicile", href: `/${locale}/massage/a-domicile` },
      { key: "douceur", href: `/${locale}/massage/douceur-dorsale` },
      { key: "anticellulite", href: `/${locale}/massage/anti-cellulite` },
      { key: "tao", href: `/${locale}/massage/tao` },
      { key: "deeptissue", href: `/${locale}/massage/deep-tissues` },
    ],
    soins: [
      { key: "shiatsu", href: `/${locale}/shiatsu` },
      { key: "reiki", href: `/${locale}/reiki` },
      { key: "cranio", href: `/${locale}/therapie-cranio-sacree` },
      { key: "reflexo", href: `/${locale}/reflexologie-plantaire` },
      { key: "voyage", href: `/${locale}/massage/voyage-des-sens` },
      { key: "amma", href: `/${locale}/massage/massage-sur-chaise` },
    ],
    social: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/lavoiedubienetremassageshiatsureikireflexologie",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Instagram",
        href: "https://www.facebook.com/gamot.stephane/",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "X",
        href: "https://x.com/voiedubienetre",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        ),
      },
      {
        name: "YouTube",
        href: "https://www.youtube.com/@lavoiedubien-etre",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mt-16">
          <div>
            <h3 className="text-lg font-bold !text-[#7EA23F]">{t("massage")}</h3>
            <ul className="mt-6 space-y-4">
              {navigation.massages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm/6 text-gray-300 hover:text-white">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold !text-[#7EA23F]">{t("therapeutic")}</h3>
            <ul className="mt-6 space-y-4">
              {navigation.soins.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm/6 text-gray-200 hover:text-white">
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold !text-[#7EA23F]">{tf("contact")}</h3>
            <ul className="mt-6 space-y-2 text-sm/6 text-gray-200">
              <li className="text-sm/6 !text-gray-200 hover:text-white">📍 {tf("address")}</li>
              <li>
                📞 <a href="tel:+32477131993" className="!text-sm/6 text-gray-200 hover:text-white">+32 477 13 19 93</a>
              </li>
              <li>
                ✉️  <Link
                      href={`mailto:${atob("bGF2b2llZHViaWVuZXRyZUBvdXRsb29rLmNvbQ==")}`}
                      className="!text-sm/6 text-gray-200 hover:text-white"
                    >
                      {atob("bGF2b2llZHViaWVuZXRyZUBvdXRsb29rLmNvbQ==")}
                    </Link>
              </li>
              <li className="text-sm/6 !text-gray-200 hover:text-white italic">
                🕐 {tf("opening")}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-x-6 md:order-2">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </Link>
            ))}
          </div>

          <LangSwitcher direction="up" />

          <p className="mt-8 text-sm/6 !text-[#7EA23F] md:order-1 md:mt-0">
            &copy; 2025 La Voie du Bien-Être &nbsp;&nbsp;&nbsp; {tf("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
