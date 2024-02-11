import { Paper, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import Archives from './Archives'

import { sidebar } from '../settings'

export default function Sidebar() {
  const { archives, description, social } = sidebar

  return (
    <>
      <Typography variant="h6" gutterBottom>
        About
      </Typography>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
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
      { archives.length > 0 && <Archives items={archives} />}
    </>
  )
}
