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
        <main>
          <MainFeaturedPost />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="Posts" />
            <Sidebar />
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
