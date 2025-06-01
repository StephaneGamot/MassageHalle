"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CtaSectionMassagePage({ variant = "" }) {
  const t = useTranslations("ctaMassage");

  return (
    <section
      id="reservation"
      className="py-24 bg-[#f7f7f7]"
      role="region"
      aria-labelledby="cta-massage-title"
    >
      <div className="text-center max-w-xl mx-auto px-6">
        <h3
          id="cta-massage-title"
          className="text-3xl font-serif text-gray-900"
        >
          {t(`titles.${variant}`)}
        </h3>
        <p className="mt-4 text-lg text-gray-600">
          {t("paragraph", { soin: t(`soins.${variant}`) })}
        </p>
        <div className="mt-8">
          <Link
            href="https://widget.treatwell.be/fr/salon/377730/menu/"
            className="inline-block rounded-md bg-[#556B2F] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6f8e42] transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#556B2F]"
          >
            {t("cta")}
          </Link>
          <p className="mt-8 text-lg text-gray-600">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
