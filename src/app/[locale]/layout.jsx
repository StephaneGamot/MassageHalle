// app/[locale]/layout.jsx

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Footer from "@/components/Footer/Footer";
import NavWithDropdown from "@/components/Header/NavBar";
import "@/app/globals.css";
import { defaultMetadata } from "@/seo.config";

export const metadata = defaultMetadata;

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-title",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props) {
  const { children, params } = props;

  // ✅ params est "awaited" avant d'en lire les propriétés
  const { locale } = await params;

  const safeLocale = hasLocale(routing.locales, locale) ? locale : "fr";

  setRequestLocale(safeLocale);

  const messages = (await import(`@/messages/${safeLocale}.json`)).default;

  return (
    <html lang={safeLocale}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=yes"
        />
        <meta
          name="theme-color"
          content="#556B2F"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
        <meta
          name="google-site-verification"
          content="google1b18195b39af5559"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${cormorant.variable} ${openSans.variable}`}>
        <NextIntlClientProvider locale={safeLocale} messages={messages}>
          <NavWithDropdown />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
