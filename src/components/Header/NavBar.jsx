"use client";

import Logo from "./../../../public/Images/logo.webp";
import Image from "next/image";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center px-2 lg:px-0">
                <div className="shrink-0">
                  <Link href="/">
                    <Image
                      src={Logo}
                      alt="Logo de la voie du bien-être massages et soins thérapeuthique à Halle"
                      width={200}
                      title="Massages et soins thérapeuthique à Hal"
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
                      <MenuButton className="rounded-md px-3 py-2 text-lg text-white hover:bg-gray-800  ">
                        Massage{" "}
                        <ChevronDownIcon
                          className="inline size-4 ml-1"
                          aria-hidden="true"
                        />
                      </MenuButton>
                      <MenuItems className="absolute z-20 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="py-1">
                          <MenuItem>
                            <Link
                              href="/massage/relaxant"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Massage relaxant
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              href="/massage/sportif"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Massage sportif
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              href="/massage/a-domicile"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Massage à domicile
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              href="/massage/tao"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Massage Tao
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              href="/massage/douceur-dorsale"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Douceur dorsale
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              href="/massage/anti-cellulite"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Massage anti-cellulite
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              href="/massage/deep-tissues"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Massage deep-tissues
                            </Link>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </Menu>

                    {/* Dropdown Soin thérapeutique */}
                    <Menu as="div" className="relative inline-block text-left">
                      <MenuButton className="rounded-md px-3 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white">
                        Soin thérapeutique{" "}
                        <ChevronDownIcon
                          className="inline size-4 ml-1"
                          aria-hidden="true"
                        />
                      </MenuButton>
                      <MenuItems className="absolute z-20 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="py-1">
                          <MenuItem>
                            <Link
                              href="/shiatsu"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Shiatsu
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              href="/reiki"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Reiki
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <a
                              href="/reflexologie-plantaire"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Réflexologie plantaire
                            </a>
                          </MenuItem>

                          <MenuItem>
                            <Link
                              href="/therapie-cranio-sacree"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Thérapie cranio sacrée
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              href="/massage/voyage-des-sens"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Voyage des sens
                            </Link>
                          </MenuItem>
                          <MenuItem>
                            <Link
                              href="/massage/massage-sur-chaise"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Amma
                            </Link>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </Menu>
                    <Menu as="div" className="relative inline-block text-left">
                      <MenuButton className="rounded-md px-3 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white">
                        <Link href="/#contact"> Contact </Link>
                      </MenuButton>
                    </Menu>
                    <Menu as="div" className="relative inline-block text-left">
                      <MenuButton className="rounded-md px-3 py-2 text-lg text-gray-300 hover:bg-gray-800 hover:text-white">
                        <Link href="/faq">FAQ</Link>
                      </MenuButton>
                    </Menu>
                  </div>
                </div>
              </div>

              {/* Search bar 
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <div className="relative w-full max-w-lg lg:max-w-xs">
                  <input
                    name="search"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="block w-full rounded-md bg-gray-700 py-1.5 pl-10 pr-3 text-white placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="size-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </div>  */}

              {/* Mobile toggle */}
              <div className="flex lg:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block size-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block size-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <DisclosurePanel className="lg:hidden transition-all duration-300 ease-in-out">
            <div className="space-y-1 px-2 pb-3 pt-2 text-center">
              <DisclosureButton
                as="a"
                href="/massage/relaxant"
                className="block rounded-md px-3 py-2 text-base font-medium text-white bg-gray-900"
              >
                Massage relaxant
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/massage/sportif"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Massage sportif
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/massage/a-domicile"
                className="block rounded-md px-3 py-2 text-base font-medium text-white bg-gray-900"
              >
                Massage à domicile
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/massage/tao"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Massage tao
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/massage/douceur-dorsale"
                className="block rounded-md px-3 py-2 text-base font-medium text-white bg-gray-900"
              >
                Douceur dorsale
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/massage/anti-cellulite"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Massage anti-cellulite
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/reiki"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Reiki
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/shiatsu"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Shiatsu
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/therapie-cranio-sacree"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Thérapie cranio sacrée
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/reflexologie-plantaire"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Reflexologie plantaire
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/massage/massage-sur-chaise"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Amma
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/massage/voyage-des-sens"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Voyage des sens
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/massage/deep-tissues"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Massage Deep tissues
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/#contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                CONTACT
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/faq"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
               FAQ
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
