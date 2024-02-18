import { GoogleAnalytics } from '@next/third-parties/google'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { CssBaseline } from '@mui/material'

import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Next MUI Blog',
  description: 'Blog template based on Next.js 14 and Material-UI',
}

const { GTAG_ID } = process.env

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <html lang="en">
          <body suppressHydrationWarning>
            {children}
          </body>
          <GoogleAnalytics gaId={GTAG_ID ?? ''} />
        </html>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
