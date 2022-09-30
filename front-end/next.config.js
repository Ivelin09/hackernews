/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BACK_END: process.env.BACK_END
  }
}

module.exports = nextConfig
