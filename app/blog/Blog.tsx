import { Box, Grid, Container } from '@mui/material'

import Header from './Header'
import MainFeaturedPost from './MainFeaturedPost'
import FeaturedPost from './FeaturedPost'
import Sidebar from './Sidebar'
import Footer from './Footer'

import { featuredPosts, mainFeaturedPost, getPagesMetadata } from '../settings'
import { Listing } from './Listing'

export default async function Blog({ searchParams, children }: {
  searchParams?: any,
  children?: React.ReactNode
}) {
  const pages = await getPagesMetadata()
  return (
    <>
      <Container maxWidth="lg">
        <Header k={searchParams ? searchParams['k'] : ''} />
        <main style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          marginBottom: 30,
        }}
        >
          <MainFeaturedPost
            post={pages.find(({ path }) => path === mainFeaturedPost)}
          />
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <Box>
                {children ?? (
                  <Listing pages={pages} searchParams={searchParams} />
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Sidebar />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            {
              featuredPosts.map(
                (post) => pages.find(({ path }) => path === post)
              ).map((post) => post && (
                <Grid item xs={12} md={6} key={post.metadata.title}>
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
