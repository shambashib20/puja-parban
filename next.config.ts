import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export is only needed for `next build` (the GitHub Pages
  // deployment artifact). Leaving it on during `next dev` triggers a
  // Next.js dev-server bug where non-ASCII dynamic route params (our
  // Bengali blog slugs) fail to match against the pre-rendered route list.
  ...(process.env.NODE_ENV === "production" ? { output: "export" as const } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
