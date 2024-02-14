import { MetadataRoute } from 'next'
import { getPagesMetadata } from './settings'

// https://devcenter.heroku.com/articles/dyno-metadata
const { NEXT_PUBLIC_BASE_URL, HEROKU_APP_DEFAULT_DOMAIN_NAME } = process.env
const BASE_URL = NEXT_PUBLIC_BASE_URL ||
  `https://${HEROKU_APP_DEFAULT_DOMAIN_NAME}`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getPagesMetadata()
  return pages.map(({ lang, path, date: lastModified }) => (
    { url: new URL([lang, path].join('/'), BASE_URL).toString(), lastModified }
  ))
}
