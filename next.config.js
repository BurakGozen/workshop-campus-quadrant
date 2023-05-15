/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.watchOptions.ignored = new RegExp(["/\\.git/", "|", "/\\.next/"].join(""));

    return config;
  },
};

module.exports = nextConfig;
