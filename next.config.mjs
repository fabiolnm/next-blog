import createMdx from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    domains: ['source.unsplash.com'],
  },
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['css', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMdx({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
  }
})

export default withMDX(nextConfig)
