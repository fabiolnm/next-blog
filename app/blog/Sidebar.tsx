import { Paper, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import Archives from './Archives'

import { SupportedLanguages, sidebar } from '../settings'
import { t } from '../i18n'

export default function Sidebar({ lang }: { lang: SupportedLanguages }) {
  const { archives, description, social } = sidebar

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {t('social', lang)}
      </Typography>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200', mb: 3 }}>
        {
          social.map((network) => (
            <Link href="#" key={network.name}>
              <Stack direction="row" gap={1} sx={{ py: 1 }} alignItems="center">
                <network.icon />
                <span>{network.name}</span>
              </Stack>
            </Link>
          ))
        }
      </Paper>
      <Typography variant="h6" gutterBottom>
        {t('about', lang)}
      </Typography>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography>{description}</Typography>
      </Paper>

      { archives?.length > 0 && <Archives items={archives} />}
    </>
  )
}
