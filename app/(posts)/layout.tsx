import flavor from './github-flavor.module.scss'
import page from './page.module.sass'

import { Box } from '@mui/material'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box className={`${flavor.github} ${page.github}`}>
      {children}
    </Box>
  )
}
