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
      className="bg-[#F3EDE4]"
      aria-labelledby="contact-title"
    >
      <div className="section-wrap">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white px-6 py-10 sm:px-10 sm:py-14 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">

          <div className="text-center">
            <p className="label-or mb-3">{t("ctaWhatsapp") ? "Contact" : "Contact"}</p>
            <h2
              id="contact-title"
              className="text-3xl sm:text-4xl tracking-tight"
            >
              {t("title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#595751] max-w-lg mx-auto">
              {t("paragraph")}
            </p>
          </div>

          <dl className="mt-10 space-y-5">
            <div className="flex items-start gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Adresse</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3EDE4]">
                  <BuildingOffice2Icon aria-hidden="true" className="h-5 w-5 text-[#B8976A]" />
                </span>
              </dt>
              <dd className="text-sm leading-relaxed text-[#595751] pt-2.5">
                Octaaf de Kerchove d&apos;Exaerdestraat 193<br />
                1501 Buizingen (Halle)
              </dd>
            </div>

            <div className="flex items-start gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Téléphone</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3EDE4]">
                  <PhoneIcon aria-hidden="true" className="h-5 w-5 text-[#B8976A]" />
                </span>
              </dt>
              <dd className="pt-1">
                <Link
                  href="tel:+32477131993"
                  className="text-base font-semibold text-[#2A2A2A] hover:text-[#7B6139] transition-colors min-h-[44px] inline-flex items-center"
                >
                  04 77 13 19 93
                </Link>
                <p className="mt-0.5 text-xs text-[#6B6862]">
                  Si je suis en séance, laissez un message ou un SMS.
                </p>
              </dd>
            </div>

            <div className="flex items-start gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3EDE4]">
                  <EnvelopeIcon aria-hidden="true" className="h-5 w-5 text-[#B8976A]" />
                </span>
              </dt>
              <dd className="pt-1">
                <Link
                  href={`mailto:${atob("bGF2b2llZHViaWVuZXRyZUBvdXRsb29rLmNvbQ==")}`}
                  className="text-base font-semibold text-[#2A2A2A] hover:text-[#7B6139] transition-colors min-h-[44px] inline-flex items-center"
                >
                  {atob("bGF2b2llZHViaWVuZXRyZUBvdXRsb29rLmNvbQ==")}
                </Link>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/32477131993"
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t("ctaWhatsapp") || "Réserver via WhatsApp"}
            </a>
          </div>

          <input type="hidden" id="validation-check" name="validation-check" />
        </div>
      </div>
    </section>
  );
}
