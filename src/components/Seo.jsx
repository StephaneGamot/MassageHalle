"use client";

import { useLocale } from 'next-intl';
import Head from 'next/head';

export default function Seo({ title, description }) {
  const locale = useLocale();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://lavoiedubienetre.be/${locale}`} />
      <meta property="og:locale" content={locale} />
    </Head>
  );
}
