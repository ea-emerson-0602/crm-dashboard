import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Check if it's server-side and modify config accordingly
    if (isServer) {
      // Remove fs property, as it's not needed in Next.js Webpack 5
      config.node = {
        ...config.node,
        // Remove fs property if you don't need it
      };
    }

    // Add any other custom webpack configurations here if needed
    return config;
  },
};

export default nextConfig;