import fs from 'fs'

import { GitHub, Facebook, X } from '@mui/icons-material'

export const supportedLanguagesValues = ['en', 'br'] as const;
export type SupportedLanguages = typeof supportedLanguagesValues[number]

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

export async function getPagesMetadata(lang: SupportedLanguages) {
  const directoryPath = `app/(posts)/${lang}`

  let files = []
  try {
    files = await fs.promises.readdir(directoryPath, { recursive: true })
  } catch (err) {
    throw new Error('Unable to scan directory: ' + err)
  }

  // filter out the root page.tsx file
  files = files.filter((f) => f !== 'page.tsx')
  const metadata = await Promise.all(
    files.filter((f) => f.endsWith('metadata.ts')).map((f) => (
      import(`./(posts)/${lang}/${f}`).then(({ metadata }) => {
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
  ]
}
