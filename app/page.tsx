import Blog from './blog/Blog'

interface PageProps {
  searchParams: any
}

export default async function Page (props: PageProps) {
  const { searchParams } = props
  return <Blog searchParams={searchParams} />
}
