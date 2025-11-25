"use client";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Contact() {
  const t = useTranslations("contact");

  useEffect(() => {
    const field = document.getElementById("validation-check");
    if (field) field.value = "ok";
  }, []);

  return (
    <section
      id="contact"
      className="relative isolate bg-slate-50 py-12 sm:py-24"
      aria-labelledby="contact-title"
    >
      {/* Halo discret */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 flex justify-center blur-3xl"
      >
        <div className="h-56 w-[32rem] bg-gradient-to-tr from-[#7EA23F]/25 via-emerald-500/10 to-sky-500/20 opacity-70" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Carte centrale */}
        <div className="rounded-3xl border border-white/10 bg-black px-6 py-8 shadow-2xl shadow-black/40 backdrop-blur-sm sm:px-10 sm:py-10">
          {/* Titre + texte */}
          <div className="text-center">
            <h2
              id="contact-title"
              className="text-balance text-3xl font-semibold tracking-tight !text-slate-50 sm:text-4xl"
            >
              {t("title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed !text-slate-200">
              {t("paragraph")}
            </p>
          </div>

          {/* Infos de contact */}
          <dl className="mt-10 space-y-6 text-sm !text-slate-100">
            <div className="flex items-start gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Adresse</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#7EA23F]/40 bg-black/40">
                  <BuildingOffice2Icon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#7EA23F]"
                  />
                </span>
              </dt>
              <dd className="leading-relaxed">
                Octaaf de Kerchove d&apos;Exaerdestraat 193
                <br />
                1501 Buizingen (Halle)
              </dd>
            </div>

            <div className="flex items-start gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Téléphone</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#7EA23F]/40 bg-black/40">
                  <PhoneIcon aria-hidden="true" className="h-5 w-5 text-[#7EA23F]" />
                </span>
              </dt>
              <dd className="leading-relaxed">
                <Link
                  href="tel:+32477131993"
                  className="text-base font-medium text-slate-50 hover:text-[#c0e28a]"
                >
                  04 77 13 19 93
                </Link>
                <p className="mt-1 text-xs !text-slate-200">
                  Si je suis en séance, laissez un message ou un SMS et je vous
                  recontacte.
                </p>
              </dd>
            </div>

            <div className="flex items-start gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#7EA23F]/40 bg-black/40">
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-[#7EA23F]"
                  />
                </span>
              </dt>
              <dd className="leading-relaxed">
                <Link
                  href={`mailto:${atob(
                    "bGF2b2llZHViaWVuZXRyZUBvdXRsb29rLmNvbQ=="
                  )}`}
                  className="text-base font-medium text-slate-50 hover:text-[#c0e28a]"
                >
                  {atob("bGF2b2llZHViaWVuZXRyZUBvdXRsb29rLmNvbQ==")}
                </Link>
                <p className="mt-1 text-xs !text-slate-200">
                  Vous pouvez m&apos;écrire pour toute question ou demande
                  spécifique.
                </p>
              </dd>
            </div>
          </dl>

          {/* CTA Treatwell */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="https://widget.treatwell.be/fr/salon/la-voie-du-bien-etre/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#7EA23F] px-6 py-2.5 text-sm font-semibold text-slate-50 shadow-md shadow-[#7EA23F]/40 hover:bg-[#8fb94a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7EA23F] focus-visible:ring-offset-slate-950"
            >
              Réserver sur Treatwell
            </Link>
          </div>

          {/* Honeypot / champ caché */}
          <input type="hidden" id="validation-check" name="validation-check" />
        </div>
      </div>
    </section>
  );
}
