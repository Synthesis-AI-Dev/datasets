/** @type {import('next').NextConfig} */

const {repoName} = require('./config')
const isProduction = process.env.NODE_ENV === 'production'

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
  publicRuntimeConfig: {
    linkPrefix: isProduction ? `/${repoName}` : ''
  },
  assetPrefix: isProduction ? `/${repoName}/` : "",
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})