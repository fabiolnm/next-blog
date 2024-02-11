import { Grid, Container, Typography, Divider, Paper } from '@mui/material'

import Header from './Header'
import MainFeaturedPost from './MainFeaturedPost'
import FeaturedPost from './FeaturedPost'
import Sidebar from './Sidebar'
import Footer from './Footer'

import { featuredPosts } from '../settings'

export default function Blog({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <main style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          marginBottom: 30,
        }}
        >
          <MainFeaturedPost />
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <Typography variant="h6" gutterBottom>
                Posts
              </Typography>
              <Divider />
              <Paper sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
                { children }
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Sidebar />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            {
              featuredPosts.map((post) => (
                <Grid item xs={12} md={6} key={post.title}>
                  <FeaturedPost post={post} />
                </Grid>
              ))
            }
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  )
}
