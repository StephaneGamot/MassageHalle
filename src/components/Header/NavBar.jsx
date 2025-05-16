"use client";

import Logo from "./../../../public/Images/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import LangSwitcher from "@/components/LangSwitcher";


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

  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center px-2 lg:px-0">
                <div className="shrink-0">
                  <Link href={`/${locale}`}>
                    <Image
                      src={Logo}
                      alt="Logo de la voie du bien-être massages et soins thérapeutiques à Halle"
                      width={200}
                      height={200}
                      className="h-10 w-auto"
                      priority
                    />
                  </Link>
                  
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">

                    {/* Dropdown Massage */}
                    <Menu as="div" className="relative inline-block text-left">
                      <MenuButton className="rounded-md px-3 py-2 text-lg text-white hover:bg-gray-800">
                        {t("massage")}
                        <ChevronDownIcon className="inline size-4 ml-1" />
                      </MenuButton>
                      <MenuItems className="absolute z-20 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="py-1">
                          {["relaxant", "sportif", "domicile", "tao", "douceur", "anticellulite", "deeptissue"].map((key) => (
                            <MenuItem key={key}>
                              <Link
                                href={`/${locale}/massage/${key === "douceur" ? "douceur-dorsale" : key === "domicile" ? "a-domicile" : key === "anticellulite" ? "anti-cellulite" : key === "deeptissue" ? "deep-tissues" : key}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {t(key)}
                              </Link>
                            </MenuItem>
                          ))}
                        </div>
                      </MenuItems>
                    </Menu>

                    {/* Dropdown Soin thérapeutique */}
                    <Menu as="div" className="relative inline-block text-left">
                      <MenuButton className="rounded-md px-3 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white">
                        {t("therapeutic")}
                        <ChevronDownIcon className="inline size-4 ml-1" />
                      </MenuButton>
                      <MenuItems className="absolute z-20 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="py-1">
                          {[
                            { key: "shiatsu", path: "shiatsu" },
                            { key: "reiki", path: "reiki" },
                            { key: "reflexo", path: "reflexologie-plantaire" },
                            { key: "cranio", path: "therapie-cranio-sacree" },
                            { key: "voyage", path: "massage/voyage-des-sens" },
                            { key: "amma", path: "massage/massage-sur-chaise" }
                          ].map(({ key, path }) => (
                            <MenuItem key={key}>
                              <Link
                                href={`/${locale}/${path}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {t(key)}
                              </Link>
                            </MenuItem>
                          ))}
                        </div>
                      </MenuItems>
                    </Menu>

                    {/* Contact & FAQ */}
                    <Link
                      href={`/${locale}#contact`}
                      className="rounded-md px-3 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      {t("contact")}
                    </Link>

                    <Link
                      href={`/${locale}/faq`}
                      className="rounded-md px-3 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white"
                    >
                      {t("faq")}
                    </Link>
                  </div>
                </div>
                
              </div>
              <div className="hidden lg:block ml-auto">
              <LangSwitcher direction="down" />
</div>

              {/* Mobile Menu Toggle */}
              <div className="flex lg:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block size-6" />
                  ) : (
                    <Bars3Icon className="block size-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 text-center">
              {[
                "relaxant",
                "sportif",
                "domicile",
                "tao",
                "douceur",
                "anticellulite",
                "deeptissue",
                "shiatsu",
                "reiki",
                "cranio",
                "reflexo",
                "amma",
                "voyage",
              ].map((key) => (
                <DisclosureButton
                  key={key}
                  as="a"
                  href={`/${locale}/${["shiatsu", "reiki", "cranio", "reflexo"].includes(key)
                    ? key === "cranio"
                      ? "therapie-cranio-sacree"
                      : key === "reflexo"
                      ? "reflexologie-plantaire"
                      : key
                    : `massage/${key === "douceur" ? "douceur-dorsale" : key === "domicile" ? "a-domicile" : key === "anticellulite" ? "anti-cellulite" : key === "deeptissue" ? "deep-tissues" : key === "amma" ? "massage-sur-chaise" : key}`
                  }`}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {t(key)}
                </DisclosureButton>
              ))}
              <DisclosureButton
                as="a"
                href={`/${locale}#contact`}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {t("contact")}
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href={`/${locale}/faq`}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {t("faq")}
              </DisclosureButton>
              <div className="mt-4 flex justify-center">
              <LangSwitcher direction="horizontal" />
    </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
