import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    // 🚨 disables ESLint checks during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 🚨 disables TypeScript checks during production builds
    ignoreBuildErrors: true,
  },
  // Optimize for production
  // swcMinify: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
