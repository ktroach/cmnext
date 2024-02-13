// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require("next-contentlayer");

/** @type {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "mdx", "ts", "js"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },
    ],
  },
  experimental: {
    // TODO: Enable after fixing "Static Bail Out Caught" errors in production
    // ppr: true,
    esmExternals: "loose",
  },
  // Already doing linting and typechecking as separate tasks in CI
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

module.exports = withContentlayer(nextConfig)