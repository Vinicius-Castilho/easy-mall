import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Libera o acesso do seu IP na rede local para o WebSocket funcionar no celular */
  allowedDevOrigins: ['10.0.3.241'],
};

export default nextConfig;