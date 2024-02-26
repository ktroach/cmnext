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
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  staticPageGenerationTimeout: 1000,
}

module.exports = withContentlayer(nextConfig)