export async function GET() {
    const baseUrl = 'https://lavoiedubienetre.be';
    const locales = ['fr', 'en', 'nl'];
    const paths = [
      '',
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
  
    const urls = paths.map((path) => {
      const cleanedPath = path.replace(/\/+$/, ''); // Nettoyage
      const frPath = `${baseUrl}/fr/${cleanedPath}`;
      const altLinks = locales
        .map((lang) => {
          const altUrl = `${baseUrl}/${lang}/${cleanedPath}`.replace(/\/+$/, '');
          return `<xhtml:link rel="alternate" hreflang="${lang}" href="${altUrl}" />`;
        })
        .join('\n    ');
  
      return `
    <url>
      <loc>${frPath}</loc>
      ${altLinks}
    </url>`;
    });
  
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
  