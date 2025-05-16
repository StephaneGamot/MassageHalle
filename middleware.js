import { NextResponse } from 'next/server';
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
  '/massage-sur-chaise',
  '/shiatsu',
  '/reiki',
  '/reflexologie-plantaire',
  '/therapie-cranio-sacree',
];

export function middleware(request) {
  const { pathname, locale } = request.nextUrl;

  // Rediriger les anciennes URLs vers la version FR par défaut
  if (legacyPaths.includes(pathname)) {
    return NextResponse.redirect(
      new URL(`/fr${pathname}`, request.url),
      308 // Permanent Redirect
    );
  }

  // Gérer les locales comme prévu (next-intl)
  return createMiddleware(routing)(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
