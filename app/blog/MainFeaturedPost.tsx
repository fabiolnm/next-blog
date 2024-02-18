import {  Paper, Typography, Grid, Link, Box } from '@mui/material'
import Image from 'next/image'

import { SupportedLanguages, mainFeaturedPost as post } from '../settings'

interface Props {
  lang: SupportedLanguages
  post: any
}

export default function MainFeaturedPost(props: Props) {
  const { lang, post } = props
  const { title, description } = post.metadata
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage:
          'url(https://source.unsplash.com/random?wallpapers?main)',
      }}
    >
      {<Image
        style={{ display: 'none' }}
        src="https://source.unsplash.com/random?wallpapers?main)"
        alt=""
        width={100}
        height={100}
      />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={8}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <Link variant="subtitle1" href={`/${lang}/${post.path}`} color="#FFF">
              Continue reading...
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
