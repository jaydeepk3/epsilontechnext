import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days image cache
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'epsilon-technology.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|woff2|woff|ttf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true, // 301 redirect (Good for SEO)
      },
      {
        source: '/online-opd-growth-system',
        destination: 'https://doctor.epsilon-technology.com',
        permanent: true,
      },
      {
        source: '/online-opd-growth-system/',
        destination: 'https://doctor.epsilon-technology.com',
        permanent: true,
      },
      {
        source: '/item/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
