import { NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

const legacyPaths = [
  '/massage/relaxant',
  '/massage/sportif',
  '/massage/a-domicile',
  '/massage/tao',
  '/massage/douceur-dorsale',
  '/massage/anti-cellulite',
  '/massage/deep-tissues',
  '/massage/voyage-des-sens',
  '/massage/massage-sur-chaise',
  '/shiatsu',
  '/reiki',
  '/reflexologie-plantaire',
  '/therapie-cranio-sacree',
  '/faq',
];

const locales = routing.locales;
const defaultLocale = routing.defaultLocale;

// 🔁 Redirige vers /[locale]/path en fonction de la langue du navigateur
function getPreferredLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return match(languages, locales, defaultLocale);
}

// ─────────────────────────────────────────────────────────────────
// 🔁 MIGRATION DE SITE — filet de sécurité
// Les redirects de next.config.mjs s'exécutent AVANT le middleware,
// donc ce bloc ne devrait jamais être atteint. Il est là au cas où
// (preview Vercel, route non couverte, etc.).
// ⚠️ Pour désactiver la migration : passer SITE_MIGRE à false.
// ─────────────────────────────────────────────────────────────────
const SITE_MIGRE = true;
const NOUVEAU_SITE = 'https://www.votremassageadomicilepaysbasque.com/fr';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (SITE_MIGRE) {
    return NextResponse.redirect(NOUVEAU_SITE, 301);
  }

  if (legacyPaths.includes(pathname)) {
    const locale = getPreferredLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url), 308);
  }

  return createMiddleware(routing)(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
