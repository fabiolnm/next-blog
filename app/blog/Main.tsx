import { Divider, Grid, Typography } from '@mui/material'

import { posts } from '../settings'

interface MainProps {
  title: string
}

export default function Main(props: MainProps) {
  const { title } = props

  return (
    <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3 } }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {
        posts.map((post) => (
          <Typography className="markdown" key={post}>
            {post.title}
          </Typography>
        ))
      }
    </Grid>
  )
}
