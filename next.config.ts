import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    domains: ["swgoh.gg", "swgoh.wiki"],
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@core": "./src/core",
      "@infrastructure": "./src/infrastructure",
      "@presentation": "./src/presentation",
      "@data": "./src/data",
    };
    return config;
  },
};

export default nextConfig;
