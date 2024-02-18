import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import { SupportedLanguages, footerContents } from '../settings'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://your.website/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Footer({ lang }: { lang: SupportedLanguages }) {
  const { description, title } = footerContents[lang] || footerContents.en

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  )
}
