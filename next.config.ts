import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // CSS optimization
  experimental: {
    optimizeCss: true,
    // Optional: Add package import optimization for heavy packages
    // optimizePackageImports: ['lucide-react', 'date-fns', 'lodash'],
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: false,
  },

  // Production optimizations
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true, // Recommended for better error catching in development

  // Image optimization - Your settings are already excellent!
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for caching - Your settings are great!
  async headers() {
    return [
      {
        // Image caching - Added jpeg, gif, ico
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        // Static assets caching
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      {
        // Font caching
        source: '/:all*(woff|woff2|ttf|otf|eot)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);