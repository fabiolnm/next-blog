import { Toolbar, Typography } from '@mui/material'
import { LogoDev } from '@mui/icons-material'

// import Image from 'next/image'
import Link from 'next/link'

import { blogTitle, sections } from '../settings'
import { LanguageSelector } from './LanguageSelector'

interface Props {
  lang: string
  k?: string
}

export default function Header(props: Props) {
  const { lang, k } = props
  return (
    <>
      <Toolbar sx={{
        borderBottom: 1,
        borderColor: 'divider',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
      }}>
        {/* <Image src="../logo.png" alt="Logo" width={72} height={16} /> */}
        <Link href={`/${lang}`}>
          <LogoDev fontSize="large" />
        </Link>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {blogTitle[lang] || blogTitle.en}
        </Typography>
        <LanguageSelector lang={lang} />
        {/* <Button size="small">Subscribe</Button> */}
        {/* <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          padding: '0 !important',
          justifyContent: 'space-between',
          overflowX: 'auto',
          a: {
            height: '48px',
            padding: '12px 42px',
            whiteSpace: 'nowrap',
            '&:hover, &.active': {
              color: 'primary.main',
              backgroundColor: 'background.default',
            }
          }
        }}
      >
        {
          sections.map((keyword) => (
            <Link
              color="inherit"
              key={keyword}
              href={`/${lang}/?k=${keyword}`}
              className={k === keyword ? 'active' : ''}
            >
              {keyword}
            </Link>
          ))
        }
      </Toolbar>
    </>
  )
}
