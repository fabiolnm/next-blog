import dictionaries from './locales'
import { SupportedLanguages } from './settings'

export function t(key: string, lang: SupportedLanguages) {
  const dict = dictionaries[lang] || dictionaries.en
  const res = key.split('.').reduce((d, k) => d[k] || {}, dict)
  return typeof res === 'string' ? res : key
}
