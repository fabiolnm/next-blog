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

  const metadata = await Promise.all(
    files.filter((f) => f.endsWith('metadata.ts')).map((f) => (
      import(`./(posts)/en/${f}`).then(({ metadata }) => {
        const [y, m, d, name] = f.split('/')
        return {
          metadata,
          lang: 'en',
          date: new Date(+y, +m - 1, +d),
          path: [y, m, d, name].join('/')
        }
      })
    ))
  )

  return metadata
}

export const mainFeaturedPost = '2023/11/10/post1'

export const featuredPosts = [
  '2023/12/10/post2',
  '2024/01/10/post3',
]

export const sidebar = {
  social: [
    { name: 'GitHub', icon: GitHub },
    { name: 'X', icon: X },
    { name: 'Facebook', icon: Facebook },
  ],
  description: `Etiam porta sem malesuada magna mollis euismod. Cras mattis
    consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed
    consectetur.`,
  archives: [
    // { title: 'Post 4', url: '/en/2024/02/10/post4' },
    // { title: 'Post 3', url: '/en/2024/01/10/post3' },
    // { title: 'Post 2', url: '/en/2023/12/10/post2' },
    // { title: 'Post 1', url: '/en/2023/11/10/post1' },
  ]
}
