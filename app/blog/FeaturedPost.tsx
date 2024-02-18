import {
  Box,
  Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia,
  Divider, Typography
} from '@mui/material'
import { randomInt } from 'crypto'
import { SupportedLanguages } from '../settings'

interface FeaturedPostProps {
  post: any
  lang: SupportedLanguages
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { lang, post } = props
  const { title, description } = post.metadata

  return (
    <CardActionArea component="a" href={`/${lang}/${post.path}`}>
      <Card>
        <CardHeader title={title} />
        <Divider />
        <Box sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            image={`https://source.unsplash.com/random?wallpapers?${randomInt(1000)}`}
            alt=""
            sx={{
              width: 160,
              height: 240,
              overflow: 'hidden',
              objectFit: "cover",
              display: { xs: 'none', sm: 'block' }
            }}
          />
          <CardContent
            sx={{
              flex: 1,
              px: 2,
              py: 1,
              ':last-child': {
                pb: 0
              }
            }}
          >
            <Typography variant="subtitle1" color="text.secondary">
              <em>{post.date.toDateString()}</em>
            </Typography>
            <Typography paragraph
              variant="subtitle1"
              sx={{ maxHeight: 140, overflow: 'hidden' }}
            >
              { description.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ') }
            </Typography>
            <CardActions sx={{ px: 0 }}>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
    </CardActionArea>
  )
}
