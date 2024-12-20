import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Ensure that certain client-side code is only included on the client-side
    if (isServer) {
      // You can add more exclusions here if needed
      config.node = {
        ...config.node,
        fs: 'empty', // Example for excluding file system access in SSR
      };
    }

    // Add any other custom webpack configurations here if needed
    return config;
  },
};

export default nextConfig;