/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    mdxRs: true,
  },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
