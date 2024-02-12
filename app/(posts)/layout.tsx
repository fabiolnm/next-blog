import flavor from './github-flavor.module.scss'
import page from './page.module.sass'

import { Box, Paper } from '@mui/material'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box className={`${flavor.github} ${page.github}`}>
      <Paper sx={{ px: 2, py: 0.5 }}>
        {children}
      </Paper>
    </Box>
  )
}
