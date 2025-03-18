import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    dangerouslyAllowSVG: true, // Permite SVGs externos
    contentSecurityPolicy: "default-src 'self'; img-src * data:;",
  },
};

export default nextConfig;
