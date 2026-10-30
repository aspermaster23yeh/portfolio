import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Serve public assets as-is — Vercel Image Optimization returns
  // OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED on this project/plan.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
