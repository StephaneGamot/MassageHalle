export async function GET() {
    const baseUrl = 'https://lavoiedubienetre.be';
    const locales = ['fr', 'en', 'nl'];
    const paths = [
      '', // Home
      'massage/relaxant',
      'massage/sportif',
      'massage/a-domicile',
      'massage/tao',
      'massage/douceur-dorsale',
      'massage/anti-cellulite',
      'massage/deep-tissues',
      'massage/voyage-des-sens',
      'massage/massage-sur-chaise',
      'shiatsu',
      'reiki',
      'reflexologie-plantaire',
      'therapie-cranio-sacree',
      'faq',
    ];
  
    const today = new Date().toISOString();
  
    const urls = [];
  
    for (const path of paths) {
      for (const locale of locales) {
        const loc = `${baseUrl}/${locale}/${path}`.replace(/\/+$/, '');
  
        const alternateLinks = locales
          .map(lang => {
            const href = `${baseUrl}/${lang}/${path}`.replace(/\/+$/, '');
            return `<xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />`;
          })
          .join('\n    ');
  
        urls.push(`
      <url>
        <loc>${loc}</loc>
        <lastmod>${today}</lastmod>
        ${alternateLinks}
      </url>`);
      }
    }
  
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls.join('\n')}
  </urlset>`;
  
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
  