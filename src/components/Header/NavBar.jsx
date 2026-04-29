"use client";

import Logo from "./../../../public/Images/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import LangSwitcher from "@/components/LangSwitcher";
import { useState, useEffect, useCallback } from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const massageItems = [
    { key: "relaxant", path: "massage/relaxant" },
    { key: "sportif", path: "massage/sportif" },
    { key: "tao", path: "massage/tao" },
    { key: "douceur", path: "massage/douceur-dorsale" },
    { key: "anticellulite", path: "massage/anti-cellulite" },
    { key: "deeptissue", path: "massage/deep-tissues" },
    { key: "domicile", path: "massage/a-domicile" },
  ];

  const soinItems = [
    { key: "shiatsu", path: "shiatsu" },
    { key: "reiki", path: "reiki" },
    { key: "reflexo", path: "reflexologie-plantaire" },
    { key: "cranio", path: "therapie-cranio-sacree" },
    { key: "voyage", path: "massage/voyage-des-sens" },
    { key: "amma", path: "massage/massage-sur-chaise" },
  ];

  /* Nav toujours sombre — logo clair sur fond noir */
  const navBg = scrolled
    ? "bg-[#1a1a1a] shadow-[0_1px_12px_rgba(0,0,0,0.3)]"
    : "bg-[#1a1a1a]/90 backdrop-blur-md";
  const textColor = "text-[#F5F5F3]";
  const textMuted = "text-[#CCCBC6]";
  const hoverBg = "hover:bg-white/10";
  const menuBtnColor = "text-[#F5F5F3]";

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          {/* Barre fixe */}
          <div
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
              <div className="flex h-16 lg:h-[4.5rem] items-center justify-between">

                {/* Logo */}
                <Link
                  href={`/${locale}`}
                  className="flex items-center min-h-[44px] min-w-[44px] shrink-0"
                  aria-label="Accueil"
                >
                  <Image
                    src={Logo}
                    alt="Logo La Voie du Bien-Être"
                    width={80}
                    height={80}
                    className="h-9 w-auto lg:h-10"
                    priority
                  />
                </Link>

                {/* Desktop links */}
                <div className="hidden lg:flex lg:items-center lg:gap-x-1">

                  {/* Dropdown Massage */}
                  <Menu as="div" className="relative">
                    <MenuButton
                      className={`flex items-center gap-x-1 rounded-lg px-4 py-2.5 text-[0.9375rem] font-semibold transition-all duration-300 min-h-[44px] ${textColor} ${hoverBg}`}
                    >
                      {t("massage")}
                      <ChevronDownIcon className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                    </MenuButton>
                    <MenuItems className="absolute left-0 z-50 mt-2 w-56 origin-top-left rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5 focus:outline-none">
                      {massageItems.map(({ key, path }) => (
                        <MenuItem key={key}>
                          {({ active }) => (
                            <Link
                              href={`/${locale}/${path}`}
                              className={`block rounded-lg px-4 py-3 text-sm transition-colors min-h-[44px] flex items-center ${
                                active ? "bg-[#F3EDE4] text-[#7B6139]" : "text-[#2A2A2A]"
                              }`}
                            >
                              {t(key)}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>

                  {/* Dropdown Soins */}
                  <Menu as="div" className="relative">
                    <MenuButton
                      className={`flex items-center gap-x-1 rounded-lg px-4 py-2.5 text-[0.9375rem] font-semibold transition-all duration-300 min-h-[44px] ${textMuted} ${hoverBg}`}
                    >
                      {t("therapeutic")}
                      <ChevronDownIcon className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
                    </MenuButton>
                    <MenuItems className="absolute left-0 z-50 mt-2 w-60 origin-top-left rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5 focus:outline-none">
                      {soinItems.map(({ key, path }) => (
                        <MenuItem key={key}>
                          {({ active }) => (
                            <Link
                              href={`/${locale}/${path}`}
                              className={`block rounded-lg px-4 py-3 text-sm transition-colors min-h-[44px] flex items-center ${
                                active ? "bg-[#F3EDE4] text-[#7B6139]" : "text-[#2A2A2A]"
                              }`}
                            >
                              {t(key)}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>

                  <Link
                    href={`/${locale}#contact`}
                    className={`rounded-lg px-4 py-2.5 text-[0.9375rem] font-semibold transition-all duration-300 min-h-[44px] flex items-center ${textMuted} ${hoverBg}`}
                  >
                    {t("contact")}
                  </Link>

                  <Link
                    href={`/${locale}/faq`}
                    className={`rounded-lg px-4 py-2.5 text-[0.9375rem] font-semibold transition-all duration-300 min-h-[44px] flex items-center ${textMuted} ${hoverBg}`}
                  >
                    {t("faq")}
                  </Link>
                </div>

                {/* Desktop: langue + CTA */}
                <div className="hidden lg:flex lg:items-center lg:gap-x-3">
                  <LangSwitcher direction="down" />
                </div>

                {/* Mobile toggle */}
                <div className="flex lg:hidden">
                  <DisclosureButton
                    className={`inline-flex items-center justify-center rounded-lg p-2 transition-all min-h-[44px] min-w-[44px] ${menuBtnColor} ${hoverBg}`}
                    aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                  >
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="h-16 lg:h-[4.5rem]" />

          {/* Mobile panel */}
          <DisclosurePanel className="lg:hidden fixed inset-0 z-40 bg-white overflow-y-auto pt-16">
            <div className="px-5 pb-8 pt-4">

              <p className="label-or px-3 pt-4 pb-2">{t("massage")}</p>
              <div className="space-y-0.5">
                {massageItems.map(({ key, path }) => (
                  <DisclosureButton
                    key={key}
                    as={Link}
                    href={`/${locale}/${path}`}
                    className="block rounded-lg px-4 py-3 text-base text-[#2A2A2A] hover:bg-[#F3EDE4] transition-colors min-h-[44px]"
                  >
                    {t(key)}
                  </DisclosureButton>
                ))}
              </div>

              <p className="label-or px-3 pt-6 pb-2">{t("therapeutic")}</p>
              <div className="space-y-0.5">
                {soinItems.map(({ key, path }) => (
                  <DisclosureButton
                    key={key}
                    as={Link}
                    href={`/${locale}/${path}`}
                    className="block rounded-lg px-4 py-3 text-base text-[#2A2A2A] hover:bg-[#F3EDE4] transition-colors min-h-[44px]"
                  >
                    {t(key)}
                  </DisclosureButton>
                ))}
              </div>

              <div className="my-5 border-t border-[#E8E0D4]" />

              <div className="space-y-0.5">
                <DisclosureButton
                  as={Link}
                  href={`/${locale}#contact`}
                  className="block rounded-lg px-4 py-3 text-base text-[#2A2A2A] hover:bg-[#F3EDE4] transition-colors min-h-[44px]"
                >
                  {t("contact")}
                </DisclosureButton>
                <DisclosureButton
                  as={Link}
                  href={`/${locale}/faq`}
                  className="block rounded-lg px-4 py-3 text-base text-[#2A2A2A] hover:bg-[#F3EDE4] transition-colors min-h-[44px]"
                >
                  {t("faq")}
                </DisclosureButton>
              </div>

              <div className="mt-6 flex justify-center">
                <LangSwitcher direction="horizontal" />
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
