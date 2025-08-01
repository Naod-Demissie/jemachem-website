import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Your existing patterns
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com', pathname: '/**' },
      { protocol: 'https', hostname: 'via.placeholder.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn11.bigcommerce.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.globalso.com', pathname: '/**' },
      { protocol: 'https', hostname: '5.imimg.com', pathname: '/**' },
      { protocol: 'https', hostname: 'i0.wp.com', pathname: '/**' },
      { protocol: 'https', hostname: 'image.made-in-china.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.gopani.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.chinabentonite.net', pathname: '/**' },
      { protocol: 'https', hostname: 'image.chukouplus.com', pathname: '/**' },
      { protocol: 'https', hostname: 'm.media-amazon.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.hatenboer-water.com', pathname: '/**' },

      // Add these missing hostnames
      { protocol: 'https', hostname: 'cpimg.tistatic.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.bakersauthority.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.homeland.ie', pathname: '/**' },
      { protocol: 'https', hostname: 'masterbatchmanufacturer.com', pathname: '/**' },
      { protocol: 'https', hostname: 'essentialproducts.co.za', pathname: '/**' },
      { protocol: 'https', hostname: 'kamrach.com', pathname: '/**' },
      { protocol: 'https', hostname: 'vnk.com.my', pathname: '/**' },
      { protocol: 'https', hostname: 'www.ibuychemikals.com', pathname: '/**' },
      { protocol: 'https', hostname: 'flalab.com', pathname: '/**' }, // The one from the error
      { protocol: 'https', hostname: 'ionicproductsltd.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
