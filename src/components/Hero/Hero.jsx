"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import Hero1 from "./../../../public/Images/hero/hero-1.webp";
import Hero2 from "./../../../public/Images/hero/hero-2.webp";
import Hero3 from "./../../../public/Images/hero/hero-3.webp";
import Hero4 from "./../../../public/Images/hero/hero-4.webp";
import Hero5 from "./../../../public/Images/hero/hero-5.webp";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative bg-[#1B3A2D] overflow-hidden" aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[85vh]">

          {/* Texte */}
          <div className="relative z-10 px-6 py-16 sm:px-10 lg:py-24 lg:pl-10 xl:pl-0 order-2 lg:order-1">
            <p
              className="label-or !text-[#E8D4AD] mb-5 animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              La Voie du Bien-Être
            </p>

            <h1
              id="hero-title"
              className="text-pretty !text-[#F3EDE4] animate-fade-up"
              style={{ animationDelay: "0.15s" }}
            >
              {t("headline")}
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed !text-white/85 max-w-lg animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              {t("paragraph")}
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: "0.45s" }}
            >
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

              <Link
                href="https://widget.treatwell.be/fr/salon/la-voie-du-bien-etre/"
                className="btn-outline !text-[#D4BA91] !border-[#D4BA91]/40 hover:!bg-[#D4BA91] hover:!text-[#1B3A2D]"
              >
                {t("ctaSecondary")}
              </Link>
            </div>

            <p
              className="mt-6 text-sm !text-white/70 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              {t("trust") || "Halle · Bruxelles · À domicile"}
            </p>
          </div>

          {/* Images */}
          <div className="relative order-1 lg:order-2 px-6 py-8 lg:px-0 lg:py-12">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:max-w-none lg:pr-8">
              <div className="space-y-3 sm:space-y-4 pt-10">
                <div className="img-zoom rounded-2xl overflow-hidden">
                  <Image alt="Massage bien-être à Hal — praticien La Voie du Bien-Être" src={Hero1} placeholder="blur" loading="eager" className="aspect-[2/3] w-full rounded-2xl object-cover" sizes="(max-width: 768px) 30vw, 200px" />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4 pt-20 sm:pt-24">
                <div className="img-zoom rounded-2xl overflow-hidden">
                  <Image alt="Ambiance zen du cabinet de massage relaxant à Hal" src={Hero2} placeholder="blur" loading="eager" className="aspect-[2/3] w-full rounded-2xl object-cover" sizes="(max-width: 768px) 30vw, 200px" />
                </div>
                <div className="img-zoom rounded-2xl overflow-hidden">
                  <Image alt="Détente absolue lors d'un soin thérapeutique" src={Hero3} placeholder="blur" loading="lazy" className="aspect-[2/3] w-full rounded-2xl object-cover" sizes="(max-width: 768px) 30vw, 200px" />
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="img-zoom rounded-2xl overflow-hidden">
                  <Image alt="Accueil chaleureux au cabinet de massage à Hal" src={Hero4} placeholder="blur" loading="lazy" className="aspect-[2/3] w-full rounded-2xl object-cover" sizes="(max-width: 768px) 30vw, 200px" />
                </div>
                <div className="img-zoom rounded-2xl overflow-hidden">
                  <Image alt="Cadre relaxant pour shiatsu et reiki à Hal" src={Hero5} placeholder="blur" loading="lazy" className="aspect-[2/3] w-full rounded-2xl object-cover" sizes="(max-width: 768px) 30vw, 200px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
