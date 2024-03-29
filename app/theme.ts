'use client'

import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

import "./globals.css"

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      }
    }
  }
})

export default theme
