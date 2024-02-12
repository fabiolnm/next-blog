import { Paper, Typography } from '@mui/material'
import { MDXProps } from 'mdx/types'
import { Metadata } from 'next'
import Blog from '../blog/Blog'

import flavor from './github-flavor.module.scss'
import page from './page.module.sass'

export function mount (
  path: string,
  metadata: Metadata,
  Body: (props: MDXProps) => JSX.Element
) {
  const { title, description } = metadata
  const [y, m, d] = path.split('/').slice(-4)

  return function Page() {
    return (
      <Blog>
        <Paper sx={{ px: 2, py: 0.5 }}
          className={`${flavor.github} ${page.github}`}
        >
          <article>
            <Typography variant="h6" component="h1" gutterBottom>
              {`${title}`}
            </Typography>
            <small>
              <em>{ new Date(+y, +m - 1, +d).toDateString() }</em>
            </small>
            <p>{description}</p>
            <Body />
          </article>
        </Paper>
      </Blog>
    )
  }
}
