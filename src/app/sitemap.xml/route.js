export async function GET() {
    const baseUrl = 'https://lavoiedubienetre.be';
    const locales = ['fr', 'en', 'nl'];
    const pages = [
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
      '', // pour la page d’accueil
    ];
  
    const urls = pages.map((page) => {
      const urlBlock = `
  <url>
    <loc>${baseUrl}/fr/${page}</loc>
    ${locales
      .map(
        (locale) =>
          `<xhtml:link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}/${page}" />`
      )
      .join('\n  ')}
  </url>`;
      return urlBlock;
    });
  
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${urls.join('\n')}
  </urlset>`;
  
    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }
  