import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: ['10.0.3.138'],
  }),
};

export default nextConfig;