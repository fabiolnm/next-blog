import { Grid, Container } from '@mui/material'

import Header from './Header'
import MainFeaturedPost from './MainFeaturedPost'
import FeaturedPost from './FeaturedPost'
import Main from './Main'
import Sidebar from './Sidebar'
import Footer from './Footer'

import { featuredPosts } from '../settings'

export default function Blog() {
  return (
    <>
      <Container maxWidth="lg">
        <Header title="Blog" />
        <main style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          marginBottom: 30,
        }}
        >
          <MainFeaturedPost />
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Main title="Posts" />
            </Grid>
            <Grid item xs={12} md={4}>
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
