import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CSS optimization
  experimental: {
    optimizeCss: true, // Critical CSS extraction
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};

export default nextConfig;

