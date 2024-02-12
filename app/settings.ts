import fs from 'fs'

import { GitHub, Facebook, X } from '@mui/icons-material'

export const blogTitle = 'Blog'

export const sections = [
  'Next.js',
  'Material UI',
  'TypeScript',
  'React',
  'Jest',
  'Vercel',
  'Heroku',
  'Ruby on Rails',
]

export async function getPagesMetadata() {
  const directoryPath = 'app/(posts)/en'

  let files = []
  try {
    files = await fs.promises.readdir(directoryPath, { recursive: true })
  } catch (err) {
    throw new Error('Unable to scan directory: ' + err)
  }

  const pages = files.map((f) => f.split('/'))
    .filter((parts) => parts[4]?.startsWith('page.'))
    .map(([y, m, d, name]) => (
      {
        date: new Date(+y, +m - 1, +d),
        path: [y, m, d, name].join('/'),
      }
    ))

  const metadata = await Promise.all(
    pages.map(({ date, path }) => (
      import(`./(posts)/en/${path}/page`)
        .then(({ metadata }) => ({ date, path, metadata }))
    ))
  )

  return metadata
}

export const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
  url: '/en/posts/2024/02/10/post4'
}

export const featuredPosts = [
  {
    title: 'Post 3',
    date: 'Jan 10, 2024',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers?1',
    imageLabel: 'Image Text',
    url: '/en/2024/01/10/post3'
  },
  {
    title: 'Post 2',
    date: 'Dec 10, 2023',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers?2',
    imageLabel: 'Image Text',
    url: '/en/2023/12/10/post2'
  },
]

export const sidebar = {
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'Post 4', url: '/en/2024/02/10/post4' },
    { title: 'Post 3', url: '/en/2024/01/10/post3' },
    { title: 'Post 2', url: '/en/2023/12/10/post2' },
    { title: 'Post 1', url: '/en/2023/11/10/post1' },
  ],
  social: [
    { name: 'GitHub', icon: GitHub },
    { name: 'X', icon: X },
    { name: 'Facebook', icon: Facebook },
  ],
}
