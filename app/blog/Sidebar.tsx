import { Grid, Paper, Stack, Typography } from '@mui/material'
import Link from 'next/link'

interface SidebarProps {
  archives: ReadonlyArray<{
    url: string
    title: string
  }>
  description: string
  social: ReadonlyArray<{
    icon: React.ElementType
    name: string
  }>
  title: string
}

export default function Sidebar(props: SidebarProps) {
  const { archives, description, social, title } = props

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {
        social.map((network) => (
          <Link href="#" key={network.name}>
            <Stack direction="row" spacing={1} alignItems="center">
              <network.icon />
              <span>{network.name}</span>
            </Stack>
          </Link>
        ))
      }
    </Grid>
  )
}
