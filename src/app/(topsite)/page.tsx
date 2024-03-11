import * as React from 'react'
import {
  FeaturedPosts,
  FeaturedSites,
} from '@/components/templates/featured-content'
import StarterTemplate from '@/components/templates/facets/starter'

export default function IndexPage() {
  const line = 'Taking your Content to the Next level'
  const words = 'Create Blogs, Create Sites, Create your Dreams'
  const waves = ['#38bfff', '#818cf8', '#c084fc', '#e879f9', '#22d3ee']
  const leftAction = {title: 'Learn More...', href: ''}
  const rightAction = {title: 'Start Creating', href: ''}
  const sections = [{
    title: "Blogs",
    description: "Featured Blog Posts",
    href: "http://localhost:3000/blogs",
    linkText: "View all Blogs",
    content: <FeaturedPosts takeLimit={4} />,    
  }, {
    title: "Sites",
    description: "Featured Sites",
    href: "http://localhost:3000/sites",
    linkText: "View all Sites",
    content: <FeaturedSites takeLimit={4} />,     
  }, ]

  return (
    <>
      <StarterTemplate line={line} words={words} waves={waves} leftAction={leftAction} rightAction={rightAction} sections={sections}  />
    </>
  )
}
