import type { NextConfig } from "next";

// Deployed on Vercel, which hosts Next.js natively (SSR/SSG per route).
// `output: "export"` is intentionally NOT set: static export builds
// pre-rendered the Bengali blog slugs as literal on-disk file paths and
// Vercel's static routing matched them inconsistently against
// percent-encoded request URLs, causing 404s on those routes in
// production. Normal Next.js hosting handles the same dynamic routes
// (via generateStaticParams) correctly.
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
