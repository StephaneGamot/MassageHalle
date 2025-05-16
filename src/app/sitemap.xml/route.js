import { NextResponse } from 'next/server';

const locales = ['fr', 'en', 'nl'];
const massagePaths = [
  'massage/relaxant',
  'massage/sportif',
  'massage/a-domicile',
  'massage/tao',
  'massage/douceur-dorsale',
  'massage/anti-cellulite',
  'massage/deep-tissues',
  'massage/voyage-des-sens',
  'massage/massage-sur-chaise',
];
const otherPaths = [
  'shiatsu',
  'reiki',
  'reflexologie-plantaire',
  'therapie-cranio-sacree',
  'faq',
];

export async function GET() {
  const urls = [];

  [...massagePaths, ...otherPaths].forEach((path) => {
    locales.forEach((locale) => {
      urls.push(`
        <url>
          <loc>https://lavoiedubienetre.be/${locale}/${path}</loc>
          <xhtml:link rel="alternate" hreflang="fr" href="https://lavoiedubienetre.be/fr/${path}" />
          <xhtml:link rel="alternate" hreflang="en" href="https://lavoiedubienetre.be/en/${path}" />
          <xhtml:link rel="alternate" hreflang="nl" href="https://lavoiedubienetre.be/nl/${path}" />
          <xhtml:link rel="alternate" hreflang="x-default" href="https://lavoiedubienetre.be/fr/${path}" />
        </url>
      `);
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset 
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml"
    >
      ${urls.join('\n')}
    </urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
