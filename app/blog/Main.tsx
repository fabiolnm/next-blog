import { Box, Divider, Paper, Typography } from '@mui/material'

import { posts } from '../settings'

interface MainProps {
  title: string
}

export default function Main(props: MainProps) {
  const { title } = props
  const [post]  = posts

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Paper sx={{ height: '100vh', p: 2 }}>
        {
          <Typography className="markdown" key={post}>
            {post.title}
          </Typography>
        }
      </Paper>
    </Box>
  )
}
