/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  distDir: 'dist',
}

module.exports = nextConfig
