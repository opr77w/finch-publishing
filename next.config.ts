// When: 2026-03-26 | By: claude-sonnet-4-6 | What: Next.js config with basePath /finch for opr.tw/finch deployment
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/finch",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/guides",
        destination: "/our-guides",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
