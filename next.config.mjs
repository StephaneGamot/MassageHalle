/** @type {import('next').NextConfig} */

// 1️⃣ ⬇️ Tu définis ici les headers de sécurité
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
   value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com;
      img-src 'self' data: https://images.unsplash.com https://www.lavoiedubienetre.be;
      style-src 'self' 'unsafe-inline';
      connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com https://va.vercel-scripts.com;
      font-src 'self';
      object-src 'none';
      base-uri 'self';
      frame-ancestors 'none';
    `.replace(/\s{2,}/g, ' ').trim(),
  },
];

// 2️⃣ ⬇️ Tu ajoutes les headers dans la config
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.lavoiedubienetre.be",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)", // Applique à toutes les routes
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/shiatsu/traditionnel",
        destination: "/shiatsu",
        permanent: true,
      },
      {
        source: "/shiatsu/amma",
        destination: "/massage-sur-chaise",
        permanent: true,
      },
    ];
  },
};

// 3️⃣ ⬇️ Tu exportes ta configuration
export default nextConfig;
