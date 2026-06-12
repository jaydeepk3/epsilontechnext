import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true, // 301 redirect (Good for SEO)
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
