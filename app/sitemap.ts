import { MetadataRoute } from 'next'
import { getPagesMetadata, supportedLanguagesValues } from './settings'

// https://devcenter.heroku.com/articles/dyno-metadata
const { NEXT_PUBLIC_BASE_URL, HEROKU_APP_DEFAULT_DOMAIN_NAME } = process.env
const BASE_URL = NEXT_PUBLIC_BASE_URL ||
  `https://${HEROKU_APP_DEFAULT_DOMAIN_NAME}`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultLang = supportedLanguagesValues[0]
  const pages = await getPagesMetadata(defaultLang)

  // TODO multiple languages support
  // https://github.com/vercel/next.js/pull/53765
  // https://github.com/vercel/next.js/discussions/53540
  return pages.map(({ lang, path, date: lastModified }) => (
    {
      url: new URL([lang, path].join('/'), BASE_URL).toString(),
      lastModified
    }
  ))
}
