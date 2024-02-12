import { Metadata } from 'next'
import body from './body.mdx'
import { mount } from '@/app/(posts)/mount'

export const metadata: Metadata = {
  title: 'New feature',
  description: `Cum sociis natoque penatibus et magnis dis parturient montes,
    nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur.
    Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac
    cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo
    sit amet risus.`,
}

export default mount(__dirname, metadata, body)
