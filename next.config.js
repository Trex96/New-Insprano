/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['unsplash.com', 'images.unsplash.com'],
  },
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.extensions = ['.js', '.jsx', ...config.resolve.extensions]
    return config
  }
}

module.exports = nextConfig
