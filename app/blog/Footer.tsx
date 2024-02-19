import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import { SupportedLanguages } from '../settings'
import { t } from '../i18n'

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
  const description = t('footer.description', lang)
  const title = t('footer.title', lang)

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
