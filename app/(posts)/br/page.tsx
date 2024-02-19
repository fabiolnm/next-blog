import Blog from '../../blog/Blog'

import type { Metadata } from "next"
import { t } from '../../i18n'

export const metadata: Metadata = {
  title: t('blogTitle', 'br'),
  description: t('blogDescription', 'br'),
}

interface PageProps {
  params: any
  searchParams: any
}

export default async function Page (props: PageProps) {
  props.params.lang = 'br'
  return <Blog {...props} />
}
