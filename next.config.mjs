/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore ESLint errors during production builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ignore TypeScript errors during production builds
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable WebP and AVIF formats for optimized images (Requirement 10.6)
    formats: ['image/avif', 'image/webp'],
    // Allow SVG images from placeholder service (for development)
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Remote patterns for external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for srcset generation
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize image size for better performance
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
  // Compress responses for better performance
  compress: true,
  // Generate ETags for caching
  generateEtags: true,
  // Optimize fonts
  optimizeFonts: true,
  // Enable experimental features for better performance
  experimental: {
    // Optimize package imports for smaller bundles
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts for 1 year
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
