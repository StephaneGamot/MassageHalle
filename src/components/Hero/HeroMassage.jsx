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

          <div className="mt-8">
            <Link
              href="https://widget.treatwell.be/fr/salon/la-voie-du-bien-etre/"
               aria-label={globalT("cta")}
              className="inline-block rounded-md bg-[#556B2F] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6f8e42] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#556B2F]"
            >
              {globalT("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
