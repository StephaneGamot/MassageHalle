/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/shiatsu/traditionnel',
        destination: '/shiatsu',
        permanent: true,
      },
      {
        source: '/massage-anti-cellulite-bruxelles',
        destination: '/massage/anti-cellulite',
        permanent: true,
      }
     
    ];
  },
};

export default nextConfig;
