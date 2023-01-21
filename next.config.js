/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: false,
  webpack6: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false};

    return config;
  },
};
