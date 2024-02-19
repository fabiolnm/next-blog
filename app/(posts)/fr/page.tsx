import Blog from '../../blog/Blog'

import type { Metadata } from "next"
import { t } from '../../i18n'

export const metadata: Metadata = {
  title: t('blogTitle', 'fr'),
  description: t('blogDescription', 'fr'),
}

interface PageProps {
  params: any
  searchParams: any
}

export default async function Page (props: PageProps) {
  props.params.lang = 'fr'
  return <Blog {...props} />
}
