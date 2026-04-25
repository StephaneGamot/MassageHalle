"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function HeroMassage({ variant }) {
  const t = useTranslations(`hero-massage.${variant}`);
  const globalT = useTranslations("hero-massage");
  const navT = useTranslations("nav");
  const locale = useLocale();

  return (
    <section
      className="relative min-h-[60vh] lg:min-h-[70vh] overflow-hidden"
      role="region"
      aria-labelledby="hero-massage-title"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(27,58,45,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 50% 80% at 80% 100%, rgba(212,186,145,0.10) 0%, transparent 50%),
          radial-gradient(ellipse 50% 80% at 20% 100%, rgba(212,186,145,0.08) 0%, transparent 50%),
          linear-gradient(180deg, #FAFAF7 0%, #F5F3EE 40%, #FAFAF7 100%)
        `,
      }}
    >
      {/* Decorative line accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 sm:h-28"
        style={{
          background: "linear-gradient(180deg, transparent 0%, #D4BA91 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle decorative corner ornaments */}
      <div className="absolute top-8 left-8 w-12 h-12 opacity-15 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48V0h2c0 25.4 20.6 46 46 46v2H0z" fill="#D4BA91"/>
        </svg>
      </div>
      <div className="absolute top-8 right-8 w-12 h-12 opacity-15 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-x-[-1]">
          <path d="M0 48V0h2c0 25.4 20.6 46 46 46v2H0z" fill="#D4BA91"/>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-[60vh] lg:min-h-[70vh] px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="breadcrumb justify-center mb-8">
            <Link href={`/${locale}`}>{navT("home") || "Accueil"}</Link>
            <span className="separator" aria-hidden="true">/</span>
            <span className="current">{t("title")}</span>
          </nav>

          {/* Small decorative element above title */}
          <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
            <span className="block w-8 sm:w-12 h-px bg-[#D4BA91]/60" />
            <span className="block w-1.5 h-1.5 rounded-full bg-[#D4BA91]/80" />
            <span className="block w-8 sm:w-12 h-px bg-[#D4BA91]/60" />
          </div>

          <h1
            id="hero-massage-title"
            className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1B3A2D] animate-fade-up"
          >
            {t("title")}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#595751] max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t("text1")}
          </p>

          {t.raw("text2") && (
            <p className="mt-4 text-base leading-relaxed text-[#6B6862] max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {t("text2")}
            </p>
          )}

          <div className="mt-10 flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="https://wa.me/32477131993" target="_blank" rel="noreferrer" className="btn-whatsapp">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {globalT("ctaWhatsapp") || "Reserver ce soin"}
            </a>
          </div>

          {/* Bottom decorative element */}
          <div className="flex items-center justify-center gap-3 mt-12" aria-hidden="true">
            <span className="block w-16 sm:w-24 h-px bg-[#D4BA91]/40" />
            <span className="block w-1.5 h-1.5 rotate-45 bg-[#D4BA91]/60" />
            <span className="block w-16 sm:w-24 h-px bg-[#D4BA91]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
