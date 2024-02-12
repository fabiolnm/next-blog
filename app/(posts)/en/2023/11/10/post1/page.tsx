import { Metadata } from 'next'
import body from './body.mdx'
import { mount } from '@/app/(posts)/mount'

export const metadata: Metadata = {
  title: 'Sample blog post',
  description: `This blog post shows a few different types of content that are
    supported and styled with Material styles. Basic typography, images, and
    code are all supported. You can extend these by modifying Markdown.js`,
  keywords: ['Next.js', 'Material UI', 'Markdown'],
}

export default mount(__dirname, metadata, body)
