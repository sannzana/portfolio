import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isProduction ? "/portfolio" : undefined,

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  cacheComponents: false,
  partialPrefetching: false,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;