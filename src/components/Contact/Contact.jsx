"use client";

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { useEffect } from "react";

export default function Contact() {
  const t = useTranslations('contact');

  useEffect(() => {
    const field = document.getElementById("validation-check");
    if (field) field.value = "ok";
  }, []);

  return (
    <div id='contact' className="relative isolate bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" width="100%" height="100%" strokeWidth={0} />
              </svg>
              <div
                aria-hidden="true"
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                />
              </div>
            </div>
            <h2 id="contact-title" className="text-pretty text-4xl font-semibold tracking-tight !text-[#6a8934] sm:text-5xl">{t("title")}</h2>
            <p className="mt-6 text-lg/8 !text-[#7EA23F]">
              {t("paragraph")}
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  Octaaf de kerchove d'exaerdestraat 193<br />
                  1501 Buizingen (Halle)
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <Link href="tel:+1 (555) 234-5678" className="hover:text-white">
                    04 77 13 19 93
                  </Link>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <Link
                    href={`mailto:${atob("bGF2b2llZHViaWVuZXRyZUBvdXRsb29rLmNvbQ==")}`}
                    className="hover:text-white"
                  >
                    {atob("bGF2b2llZHViaWVuZXRyZUBvdXRsb29rLmNvbQ==")}
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <form
          action="https://formsubmit.co/lavoiedubienetre@outlook.com"
          method="POST"
          role="form"
          aria-labelledby="contact-title"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <input
              type="text"
              name="_honeypot"
              aria-label="Leave this field empty"
              style={{ display: "none" }}
            />
            <input type="hidden" name="_origin" value="https://lavoiedubienetre.be" />
            <input type="hidden" id="validation-check" name="validation-check" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Nouveau message via le site La Voie du Bien-Être" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://lavoiedubienetre.be/" />

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                  {t("form.firstName")}
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-[#556B2F]"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
                  {t("form.lastName")}
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-[#556B2F]"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                  {t("form.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-[#556B2F]"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
                  {t("form.phone")}
                </label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-[#556B2F]"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-[#556B2F]"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-[#556B2F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#8FBC8F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#556B2F]"
              >
                {t("form.submit")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
