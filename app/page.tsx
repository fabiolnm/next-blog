import {
  Card, CardActionArea, CardContent, Divider, Typography
} from '@mui/material'
import { getPagesMetadata } from './settings'

export default async function Page () {
  const pages = await getPagesMetadata()
  return (
    <>
      <Typography variant="h6" component="h1" gutterBottom>
        Posts
      </Typography>
      {
        pages.map(({ date, path, metadata }) => (
          <CardActionArea key={path} href={`/en/${path}`}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography component="div" variant="h5">
                  { metadata.title }
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="em">
                  { date.toDateString() }
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="body1" component="div">
                  { metadata.description }
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        ))
      }
    </>
  )
}
