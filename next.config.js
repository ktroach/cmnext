// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require("next-contentlayer");

// await import("./src/env.js");

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
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },      
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },                        
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
      }, 
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
      },   
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },    
      {
        protocol: 'https',
        hostname: 'imgix.cosmicjs.com',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },                  
    ],
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  staticPageGenerationTimeout: 1000,
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin({
        resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
    })),
    config.plugins.push(
      // @ts-ignore
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, "");
    })) 

    return config
},  
}

module.exports = withContentlayer(nextConfig)