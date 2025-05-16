// src/app/page.js
import { redirect } from 'next/navigation';
import Negotiator from 'negotiator';

const SUPPORTED_LOCALES = ['fr', 'en', 'nl'];
const DEFAULT_LOCALE = 'fr';

export async function generateMetadata() {
    return {
      title: "Redirection...",
      description: "Redirection automatique vers votre langue préférée.",
     alternates: {
    canonical: "https://lavoiedubienetre.be/",
    languages: {
      fr: "https://lavoiedubienetre.be/fr",
      en: "https://lavoiedubienetre.be/en",
      nl: "https://lavoiedubienetre.be/nl",
    },
  },
  robots: {
    index: false,
    follow: true,
  },
};}
  

export default function Page({ headers }) {
  // fallback si headers ne sont pas accessibles (Next 15 behavior)
  const acceptLang = headers?.get('accept-language') || '';
  const langs = new Negotiator({ headers: { 'accept-language': acceptLang } }).languages();
  const locale = langs.find((l) => SUPPORTED_LOCALES.includes(l.split('-')[0])) || DEFAULT_LOCALE;

  redirect(`/${locale}`);
}
