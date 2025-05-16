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

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (legacyPaths.includes(pathname)) {
    const locale = getPreferredLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url), 308);
  }

  return createMiddleware(routing)(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
