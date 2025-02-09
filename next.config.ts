import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The following is only configured for internal local development, you can ignore it for your apps
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false
    return config
  }
};

export default nextConfig;
