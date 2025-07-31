import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn11.bigcommerce.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.globalso.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '5.imimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.made-in-china.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gopani.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.chinabentonite.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'image.chukouplus.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.hatenboer-water.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
