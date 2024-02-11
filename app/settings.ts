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
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
]

export const sidebar = {
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2024', url: '#1' },
    { title: 'February 2024', url: '#2' },
    { title: 'January 2024', url: '#3' },
    { title: 'December 2023', url: '#4' },
    { title: 'November 2023', url: '#5' },
    { title: 'October 2023', url: '#6' },
    { title: 'September 2023', url: '#7' },
    { title: 'August 2023', url: '#8' },
    { title: 'July 2023', url: '#9' },
    { title: 'June 2023', url: '#10' },
    { title: 'May 2023', url: '#11' },
    { title: 'April 2023', url: '#12' },
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
