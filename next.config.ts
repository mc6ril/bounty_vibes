import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export",
    images: {
        domains: ["swgoh.gg", "swgoh.wiki"],
    },
};

export default nextConfig;
