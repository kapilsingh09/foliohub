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
};

export default nextConfig;
