"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function MassageCards({
  title,
  description,
  imageUrl,
  imageAlt,
  slug // 👈 remplace `url`
}) {
  const locale = useLocale();

// ✅ sécurité : si pas de slug, on n'affiche pas la carte
if (!slug || typeof slug !== 'string') return null;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 px-4 py-4">
      <Link
        href={`/${locale}/${slug}`}
        passHref
        role="link"
        aria-label={`En savoir plus sur ${title}`}
      >
        <div className="block bg-white shadow-lg rounded-lg overflow-hidden w-64 custom-height mx-auto md:m-0 hover:shadow-xl transition-shadow duration-300">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={256}
            height={192}
            quality={100}
            loading="lazy"
            title={title}
          />
          <div className="p-1 my-2 mx-4">
            <h3 className="text-xl text-black text-center font-semibold mb-2" aria-label={title}>
              {title}
            </h3>
            <p className="text-gray-600 text-ellipsis">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

