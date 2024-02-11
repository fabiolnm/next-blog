import { posts } from "./settings"

export default function Page () {
  const [post] = posts
  return <>{post.title}</>
}
