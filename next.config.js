/** @type {import('next').NextConfig} */
const path = require('path')

// const withImages = require('next-images');

const nextConfig = {
 // reactStrictMode: true,

  // compiler: {
  //   styledComponents: true,
  // },

  // experimental: {
  //   appDir: true,
  // },

  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  },


  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
// module.exports = withImages(nextConfig);
