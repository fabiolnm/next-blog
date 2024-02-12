import { MDXProps } from 'mdx/types'
import { Metadata } from 'next'

export function mount (
  path: string,
  metadata: Metadata,
  Body: (props: MDXProps) => JSX.Element
) {
  const { title, description } = metadata
  const [y, m, d] = path.split('/').slice(-4)

  return function Page() {
    return (
      <article>
        <h1>
          {`${title}`}
        </h1>
        <small>
          <em>{ new Date(+y, +m - 1, +d).toDateString() }</em>
        </small>
        <p>{description}</p>
        <Body />
      </article>
    )
  }
}
