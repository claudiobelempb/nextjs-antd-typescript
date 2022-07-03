// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// };

// module.exports = nextConfig;

// next.config.js
const withLess = require('next-with-less');

module.exports = withLess({
  lessLoaderOptions: {
    /* ... */
  }
});
