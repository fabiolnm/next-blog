import Blog from './blog/Blog'

interface PageProps {
  searchParams: any
}

export default async function Page (props: PageProps) {
  const { searchParams } = props
  const k = searchParams['k']

  return (
    <Blog k={k} />
  )
}
