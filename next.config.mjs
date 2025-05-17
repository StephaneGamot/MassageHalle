

/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

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
    `.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "require-corp",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
];

const withNextIntl = createNextIntlPlugin({
  locales: ['fr', 'en', 'nl'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed', 
  localeDetection: true
});


const nextConfig = {
  reactStrictMode: true,
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
      {
        source: "/(.*)",
        has: [{ type: "host", value: "www.lavoiedubienetre.be" }],
        destination: "https://lavoiedubienetre.be/:1",
        permanent: true,
      },
      {
        source: "/(.*)",
        has: [{ type: "host", value: "http://lavoiedubienetre.be" }],
        destination: "https://lavoiedubienetre.be/:1",
        permanent: true,
      },
      {
        source: "/(.*)",
        has: [{ type: "host", value: "http://www.lavoiedubienetre.be" }],
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
        destination: "/massage/massage-sur-chaise",
        permanent: true,
      },
      {
        source: "/massage-sur-chaise",
        destination: "/massage/massage-sur-chaise",
        permanent: true,
      }, {
        source: '/massage/:slug*',
        destination: '/fr/massage/:slug*',
        permanent: true,
      },
      {
        source: '/shiatsu',
        destination: '/fr/shiatsu',
        permanent: true,
      },
      {
        source: '/reiki',
        destination: '/fr/reiki',
        permanent: true,
      },
      {
        source: '/reflexologie-plantaire',
        destination: '/fr/reflexologie-plantaire',
        permanent: true,
      },
      {
        source: '/therapie-cranio-sacree',
        destination: '/fr/therapie-cranio-sacree',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/fr/faq',
        permanent: true,
      }
      
    ];
  },
};

export default withNextIntl(nextConfig);
