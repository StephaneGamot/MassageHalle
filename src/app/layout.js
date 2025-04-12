// import { SpeedInsights } from '@vercel/speed-insights/next';
//import { Analytics } from "@vercel/analytics/react"
//import GoogleAnalytics from "../../GoogleAnalytics";
import Head from "next/head";

import { Cormorant_Garamond, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavWithDropdown from "@/components/Header/NavBar";

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

export const metadata = {
  title: "Massage & soin thérapeutique à Halle - Bruxelles",
  description:
    "À Halle – Bruxelles, La Voie du Bien-Être vous accueille en cabinet ou à domicile pour des massages relaxants & soins thérapeutiques, pour retrouver équilibre et sérénité",
  metadataBase: new URL("https://lavoiedubienetre.be"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Viewport & theme */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=yes"
        />
        <meta
          name="theme-color"
          content="#556B2F"
          media="(prefers-color-scheme: dark)"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />

        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="google1b18195b39af5559"
        />
      </head>

      <body className={`${cormorant.variable} ${openSans.variable}`}>
        <NavWithDropdown />
        {children}
        <Footer />
      </body>
    </html>
  );
}
