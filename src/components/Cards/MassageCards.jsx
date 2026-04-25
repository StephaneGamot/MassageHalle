"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function MassageCards({
  title,
  description,
  imageUrl,
  imageAlt,
  slug,
  index = 0,
}) {
  const locale = useLocale();
  const t = useTranslations("massages");

  if (!slug || typeof slug !== "string") return null;

  return (
    <Link
      href={`/${locale}/${slug}`}
      className="group block card-lift rounded-2xl bg-white overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8976A] focus-visible:ring-offset-2"
      aria-label={`${t("discoverCta") || "Découvrir"} ${title}`}
    >
      {/* Photo en haut — arrondie, aspect-ratio fixe (CLS=0) */}
      <div className="img-zoom">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={400}
          height={267}
          loading={index < 3 ? "eager" : "lazy"}
          className="aspect-[3/2] w-full object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Texte en bas */}
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-[#2A2A2A] group-hover:text-[#7B6139] transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-2 text-sm text-[#595751] leading-relaxed line-clamp-2">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7B6139] group-hover:gap-2.5 transition-all duration-200">
          {t("discoverCta") || "Découvrir ce soin"}
          <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
