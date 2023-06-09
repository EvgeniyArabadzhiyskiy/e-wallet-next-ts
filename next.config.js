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


  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
// module.exports = withImages(nextConfig);
