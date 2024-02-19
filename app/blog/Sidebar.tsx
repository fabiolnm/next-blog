import { Paper, Stack, Typography } from '@mui/material'
import Link from 'next/link'

import { SupportedLanguages, sidebar } from '../settings'
import { t } from '../i18n'

export default function Sidebar({ lang }: { lang: SupportedLanguages }) {
  const { social } = sidebar

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {t('social', lang)}
      </Typography>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200', mb: 3 }}>
        {
          social.map(({ name, url, Icon }) => (
            <Link href={url} key={name}>
              <Stack direction="row" gap={1} sx={{ py: 1 }} alignItems="center">
                <Icon />
                <span>{name}</span>
              </Stack>
            </Link>
          ))
        }
      </Paper>
      <Typography variant="h6" gutterBottom>
        {t('about.title', lang)}
      </Typography>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography
          dangerouslySetInnerHTML={{ __html: t('about.description', lang) }}
	/>
      </Paper>
      {/* { archives?.length > 0 && <Archives items={archives} />} */}
    </>
  )
}
