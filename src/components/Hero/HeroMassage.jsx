"use client";
import Image from "next/image";
import Link from "next/link";
import heroImagesData from "./heroImagesData";
import { useTranslations, useLocale } from "next-intl";

export default function HeroMassage({ variant }) {
  const t = useTranslations(`hero-massage.${variant}`);
  const globalT = useTranslations("hero-massage");
  const locale = useLocale();
  const hero = heroImagesData[variant];

  return (
   <section
      className="relative h-[80vh] overflow-hidden bg-gray-50"
      role="region"
      aria-labelledby="hero-massage-title"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={hero?.src}
          alt={hero?.alt?.[locale] || ""}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1  id="hero-massage-title" className="text-4xl sm:text-5xl font-serif font-semibold text-gray-900">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg text-gray-700">{t("text1")}</p>
          <p className="mt-6 text-lg text-gray-700">{t("text2")}</p>

          <div className="mt-8 flex justify-center">
                <a
              href="https://wa.me/32477131993"
              target="_blank"
              rel="noreferrer"
                    className="rounded-md bg-[#1EBE5D] px-9.5 py-2.5  text-sm font-semibold text-white shadow-sm hover:bg-[#8FBC8F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#556B2F]"
                  >
                     WhatsApp
            </a>
            </div>
        </div>
      </div>
    </section>
  );
}
