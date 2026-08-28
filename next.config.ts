import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "ftp.goit.study",
      },
      {
        protocol: "https",
        hostname: "ac.goit.global",
      },
    ],
  },
  reactCompiler: true,
};
export default nextConfig;
