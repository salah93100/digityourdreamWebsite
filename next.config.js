/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['zupimages.net','cdn.sanity.io'],
    
  }
}

module.exports = nextConfig
