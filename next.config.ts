import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: ['10.0.3.138'],
  }),

  // Garante uma única origem canônica (www.easymall.com.br) para SEO —
  // evita conteúdo duplicado entre o domínio com e sem "www".
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "easymall.com.br" }],
        destination: "https://www.easymall.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;