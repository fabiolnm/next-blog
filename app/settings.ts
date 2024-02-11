import { GitHub, Facebook, X } from '@mui/icons-material'

export const sections = [
  { title: 'Next.js', url: '#' },
  { title: 'Material UI', url: '#' },
  { title: 'TypeScript', url: '#' },
  { title: 'React', url: '#' },
  { title: 'Jest', url: '#' },
  { title: 'Vercel', url: '#' },
  { title: 'Heroku', url: '#' },
  { title: 'Ruby on Rails', url: '#' },
]

export const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
}

export const featuredPosts = [
  {
    title: 'Post 3',
    date: 'Jan 10, 2024',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers?1',
    imageLabel: 'Image Text',
    url: '/en/2024/01/10/post3'
  },
  {
    title: 'Post 2',
    date: 'Dec 10, 2023',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers?2',
    imageLabel: 'Image Text',
    url: '/en/2023/12/10/post2'
  },
]

export const sidebar = {
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'Post 4', url: '/en/2024/02/10/post4' },
    { title: 'Post 3', url: '/en/2024/01/10/post3' },
    { title: 'Post 2', url: '/en/2023/12/10/post2' },
    { title: 'Post 1', url: '/en/2023/11/10/post1' },
  ],
  social: [
    { name: 'GitHub', icon: GitHub },
    { name: 'X', icon: X },
    { name: 'Facebook', icon: Facebook },
  ],
}

export const posts: any[] = [
  { title: 'Post1' },
  { title: 'Post2' }
]
