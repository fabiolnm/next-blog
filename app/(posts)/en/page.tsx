import Blog from '../../blog/Blog'

import type { Metadata } from "next"
import { t } from '../../i18n'

export const metadata: Metadata = {
  title: t('blogTitle', 'en'),
  description: t('blogDescription', 'en'),
}

interface PageProps {
  params: any
  searchParams: any
}

export default async function Page (props: PageProps) {
  return <Blog {...props} />
}
