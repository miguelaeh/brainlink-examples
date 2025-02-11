import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The following is only configured for internal local development, you can ignore it for your apps
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false
    return config
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            // Allow the worker to be created from the unpkg.com script. 
            // TODO: we should host the script to remove attack vectors
            key: 'Content-Security-Policy',
            value: `
              script-src 'self' 'unsafe-inline' https://unpkg.com;
              worker-src 'self' https://unpkg.com;
            `.replace(/\s{2,}/g, ' ').trim(), // Minify the CSP string
          },
        ],
      },
    ];
  }
};

export default nextConfig;
