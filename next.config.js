/** @type {import('next').NextConfig} */
const path = require("path");

// const withImages = require('next-images');

const nextConfig = {
  // reactStrictMode: true,

  // experimental: {
  //   appDir: true,
  // },

  compiler: {
    styledComponents: true,
  },

  // env: {
  //   NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  //   NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  // },

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  
  // ====== SVG =========
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     use: ['@svgr/webpack'],
  //   });
  //   return config;
  // },
};

module.exports = nextConfig;
// module.exports = withImages(nextConfig);
