import Blog from '../../blog/Blog'

interface PageProps {
  params: any
  searchParams: any
}

export default async function Page (props: PageProps) {
  return <Blog {...props} />
}
