import { Metadata } from 'next'
import body from './body.mdx'
import { mount } from '@/app/(posts)/mount'

export const metadata: Metadata = {
  title: 'Test',
  description: `Bla bla bla.`,
}

export default mount(__dirname, metadata, body)