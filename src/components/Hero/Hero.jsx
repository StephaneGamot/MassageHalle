"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Hero1 from "./../../../public/Images/hero/hero-1.webp";
import Hero2 from "./../../../public/Images/hero/hero-2.webp";
import Hero3 from "./../../../public/Images/hero/hero-3.webp";
import Hero4 from "./../../../public/Images/hero/hero-4.webp";
import Hero5 from "./../../../public/Images/hero/hero-5.webp";

export default function Hero() {
  return (
    <div>
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl py-6 px-6 lg:py-16 lg:px-8">
              <h1 className="sr-only">
                La Voie du Bien-Être Massage & soin therapeutique à Halle -
                Bruxelles
              </h1>
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h2 className="text-pretty text-5xl font-semibold tracking-tight sm:text-7xl">
                    Parce que le bien-être n’est pas un luxe… mais une
                    nécessité.
                  </h2>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Chaque soin est une parenthèse dans le tumulte du quotidien.
                    Offrez à votre corps ce qu’il mérite : douceur, attention,
                    et bienveillance.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      href="https://widget.treatwell.be/fr/salon/377730/menu/"
                      className="rounded-md bg-[#556B2F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#8FBC8F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#556B2F]"
                    >
                      Je prends soin de moi
                    </Link>
                    <Link
                      href="https://widget.treatwell.be/fr/salon/377730/menu/"
                      className="rounded-md bg-[#556B2F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#8FBC8F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#556B2F]"
                    >
                      Offrir ce moment à un être cher
                    </Link>
                  </div>
                </div>

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 place-items-center">
  {/* Colonne 1 */}
  <div className="w-full max-w-[176px] space-y-6 pt-8 sm:pt-80 lg:pt-36 xl:pt-80">
    <div className="relative">
      <Image
        alt="Portrait de votre praticien bien-être"
        src={Hero1}
        placeholder="blur"
        loading="lazy"
        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    </div>
  </div>

  {/* Colonne 2 */}
  <div className="w-full max-w-[176px] space-y-6 sm:pt-52 lg:pt-36">
    <div className="relative">
      <Image
        alt="Ambiance zen du cabinet"
        src={Hero2}
        placeholder="blur"
        loading="lazy"
        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    </div>
    <div className="relative">
      <Image
        alt="Moment de détente absolue"
        src={Hero3}
        placeholder="blur"
        loading="lazy"
        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    </div>
  </div>

  {/* Colonne 3 */}
  <div className="w-full max-w-[176px] space-y-6 pt-8 sm:pt-0">
    <div className="relative">
      <Image
        alt="Accueil chaleureux en cabinet"
        src={Hero4}
        placeholder="blur"
        loading="lazy"
        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    </div>
    <div className="relative">
      <Image
        alt="Cadre relaxant et bienveillant"
        src={Hero5}
        placeholder="blur"
        loading="lazy"
        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
    </div>
  </div>
</div>



              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
