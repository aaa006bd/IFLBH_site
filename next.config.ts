import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;
