/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode for React
  reactStrictMode: true,
  // Define the file extensions that should be considered as pages
  pageExtensions: ['js', 'jsx', 'mdx'],
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig