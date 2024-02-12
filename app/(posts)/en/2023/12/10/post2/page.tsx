import { Metadata } from 'next'
import body from './body.mdx'
import { mount } from '@/app/(posts)/mount'

export const metadata: Metadata = {
  title: 'Another blog post',
  description: `Cum sociis natoque penatibus et magnis dis parturient montes,
    nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia
    quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras
    mattis consectetur purus sit amet fermentum.`,
}

export default mount(__dirname, metadata, body)
