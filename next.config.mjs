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
    `
      .replace(/\s{2,}/g, " ")
      .trim(),
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff", // ✅ Protection contre le content sniffing
  },
  {
    key: "X-Frame-Options",
    value: "DENY", // ✅ Protection contre le clickjacking (iframe)
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block", // ✅ Protection XSS dans les anciens navigateurs
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin", // Contrôle ce qui est envoyé comme referrer (recommandé)
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()", // Désactive certaines API navigateur sensibles
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin", // Protection contre certaines attaques de type cross-origin
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "require-corp", // Nécessaire si tu utilises SharedArrayBuffer
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin", // Restreint les ressources aux mêmes origines
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
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/Images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Rediriger www vers non-www (déjà présent chez toi 👍)
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "www.lavoiedubienetre.be",
          },
        ],
        destination: "https://lavoiedubienetre.be/:1",
        permanent: true,
      },
  
      // Rediriger http://lavoiedubienetre.be → https
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "http://lavoiedubienetre.be",
          },
        ],
        destination: "https://lavoiedubienetre.be/:1",
        permanent: true,
      },
  
      // Rediriger http://www.lavoiedubienetre.be → https + sans www
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "http://www.lavoiedubienetre.be",
          },
        ],
        destination: "https://lavoiedubienetre.be/:1",
        permanent: true,
      },

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
