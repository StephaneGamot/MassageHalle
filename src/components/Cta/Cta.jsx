"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Masseur1 from "./../../../public/Images/massage/masseur-massant-le-dos-une-femme.webp";
import Masseur2 from "./../../../public/Images/massage/seance-de-shiatsu-meridien-de-la-vessie.webp";
import Masseur3 from "./../../../public/Images/massage/masseur-faisant-un-massage-relaxant.webp";
import Masseur4 from "./../../../public/Images/massage/une-femme-dont-epaule-se-fait-masser.webp";

export default function Cta() {
  const t = useTranslations("cta");

  return (
    <section className="bg-white" aria-labelledby="cta-title">
      <div className="section-wrap">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* Texte */}
          <div className="max-w-xl mx-auto lg:mx-0">
            <p className="label-or mb-4">{t("label")}</p>
            <h2 id="cta-title" className="tracking-tight">
              {t("title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#595751]">
              {t("paragraph1")}
            </p>
            <p className="mt-4 leading-relaxed text-[#6B6862]">
              {t("paragraph2")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/32477131993"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t("ctaWhatsapp") || "Réserver via WhatsApp"}
              </a>
              {/* CTA secondaire — Appeler directement.
                  Couvre les visiteurs qui n'utilisent pas WhatsApp. */}
              <a
                href="tel:+32477131993"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#1B3A2D] text-[#1B3A2D] font-semibold hover:bg-[#F3EDE4] transition focus-visible:outline-2 focus-visible:outline-[#B08856]"
                aria-label={`${t("ctaCall") || "Appeler"} 04 77 13 19 93`}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {t("ctaCall") || "Appeler maintenant"}
              </a>
            </div>
          </div>

          {/* Images masonry */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="img-zoom rounded-2xl overflow-hidden">
                <Image src={Masseur1} alt="Praticien réalisant un massage relaxant sur table à Hal — La Voie du Bien-Être" placeholder="blur" loading="lazy" className="aspect-[4/5] w-full object-cover rounded-2xl" sizes="(max-width: 768px) 45vw, 280px" />
              </div>
              <div className="img-zoom rounded-2xl overflow-hidden">
                <Image src={Masseur2} alt="Séance de shiatsu — méridiens énergétiques japonais à Hal, Bruxelles" placeholder="blur" loading="lazy" className="aspect-[4/3] w-full object-cover rounded-2xl" sizes="(max-width: 768px) 45vw, 280px" />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-8">
              <div className="img-zoom rounded-2xl overflow-hidden">
                <Image src={Masseur3} alt="Massage relaxant aux huiles essentielles — soin corps et esprit à Hal" placeholder="blur" loading="lazy" className="aspect-[4/3] w-full object-cover rounded-2xl" sizes="(max-width: 768px) 45vw, 280px" />
              </div>
              <div className="img-zoom rounded-2xl overflow-hidden">
                <Image src={Masseur4} alt="Massage thérapeutique épaule et dos — libération des tensions à Hal" placeholder="blur" loading="lazy" className="aspect-[4/5] w-full object-cover rounded-2xl" sizes="(max-width: 768px) 45vw, 280px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
