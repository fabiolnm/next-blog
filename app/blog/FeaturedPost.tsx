import {
  Card, CardActionArea, CardContent, CardMedia, Typography
} from '@mui/material'

interface FeaturedPostProps {
  post: {
    date: string
    description: string
    image: string
    imageLabel: string
    title: string
    url: string
  }
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props

  return (
    <CardActionArea component="a" href={post.url}>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {post.date}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {post.description}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Continue reading...
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          image={post.image}
          alt={post.imageLabel}
          sx={{
            width: 160,
            height: 200,
            overflow: 'hidden',
            objectFit: "cover",
            display: { xs: 'none', sm: 'block' }
          }}
        />
      </Card>
    </CardActionArea>
  )
}
