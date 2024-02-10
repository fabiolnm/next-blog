import { Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Search } from '@mui/icons-material'
import Link from 'next/link'

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string
    url: string
  }>
  title: string
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <Search />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {
          sections.map(({ title, url }) => (
            <Link color="inherit" key={title} href={url}>
              {title}
            </Link>
          ))
        }
      </Toolbar>
    </>
  )
}
