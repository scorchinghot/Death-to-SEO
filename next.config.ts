import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //remove the line below!
  typescript: {
    // Warning: Disable type checking (use with caution)
    ignoreBuildErrors: true,  // This prevents TypeScript errors from blocking the build
  },
  eslint: {
    ignoreDuringBuilds: true,  // This will ignore ESLint errors during the build
  },
};

export default nextConfig;
