/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

module.exports = withMDX({
  images: {
    loader: "custom"
  },
  basePath: isProd ? "/test-gh-pages" : "",
  assetPrefix: isProd ? "/test-gh-pages/": "",
  // assetPrefix: isProd ? "test-gh-pages" : "",
  reactStrictMode: true,
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})