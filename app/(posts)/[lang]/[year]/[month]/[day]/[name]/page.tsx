import { Paper, Typography } from '@mui/material'

import flavor from './github-flavor.module.scss'
import page from './page.module.sass'
import Blog from '@/app/blog/Blog'

export async function generateMetadata({ params }: { params: any }) {
  const { lang, year, month, day, name } = params

  const { metadata } = await
    import(`../../../../../${lang}/${year}/${month}/${day}/${name}/metadata`)

  const description = metadata.description
    .replace(/<[^>]*>/g, '').replace(/\s+/g, ' ')

  return { ...metadata, description }
}

export default async function Page ({ params }: { params: any }) {
  const { lang, year, month, day, name } = params

  const { metadata } = await
    import(`../../../../../${lang}/${year}/${month}/${day}/${name}/metadata`)

  const Body = await import(
    `../../../../../${lang}/${year}/${month}/${day}/${name}/body.mdx`
  ).then((module) => module.default)

  const { title, description } = metadata

  return (
    <Blog>
      <Paper sx={{ px: 2, py: 0.5 }}
        className={`${flavor.github} ${page.github}`}
      >
        <article>
          <Typography variant="h6" component="h1" gutterBottom>
            {title}
          </Typography>
          <small>
            <em>{ new Date(+year, +month - 1, +day).toDateString() }</em>
          </small>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <Body />
        </article>
      </Paper>
    </Blog>
  )
}
