import { Block } from '@/components/containers/block'
import { RootConfig } from '@/config/root-config'
import {
  FeaturedPosts,
  FeaturedPages,
} from '@/components/templates/featured-content'
// import SubsiteHomeTemplate from '@/components/templates/base/subsite'

export default async function SubsiteHomePage({ params }: any) {
  console.log('params: ', params)
  const subRef: string | undefined = params?.sub ? params.sub : undefined

  const buildFeaturedSections = (sectionContent: any) => {
    let sections: any = []
    const sectionsConfig = [
      {
        title: 'Featured',
        description: 'Featured Content',
        href: `/p/${subRef}/pages`,
        linkText: 'View all Pages',
      },
      {
        title: 'Blogs',
        description: 'Recent Blog Posts',
        href: `/p/${subRef}/blogs`,
        linkText: 'View all Blogs',
      },      
    ]

    if (!sectionsConfig) return []
    for (let i = 0; i < sectionsConfig.length; i++) {
      const sectionConf = sectionsConfig[i]
      sections.push({
        ...sectionConf,
        content: sectionContent[i],
      })
    }
    return sections
  }

  const mainSections = buildFeaturedSections([
    <FeaturedPages 
      takeLimit={RootConfig.featureSitesLimit}
      subRef={subRef}
      contentType="pages"
    />,    
    <FeaturedPosts
      takeLimit={RootConfig.featureBlogsLimit}
      subRef={subRef}
      contentType="posts"
    />,
  ])

  const line = '...'
  const pitch = '.........'

  const leftAction = {
    title: "........",
    href: '',
  }
  const rightAction = {
    title: '........',
    href: '',
  }

  const markupTest1: string = `<ul><li>Item 1</li><li>Item 2</li></ul>`


  const markupTest2: string = `
  <ContentSection
    title="asdasdas"
    description="12312312312312"
    showButton={false}
    href="/p/qwdqwedqwd"
    linkText=""
    className=""
  >
    <>dfgdfgdgf</>
  </ContentSection>
  `

  const markdownTest1: string = `
  Heading
  =======
  ## Sub-heading
  Paragraphs are separated
  by a blank line.
  Two spaces at the end of a line
  produces a line break.
  Text attributes _italic_,

  - Hello World
  - poop
  - yoooo


  **bold**
  
  ---

  | Left-aligned | Center-aligned | Right-aligned |
  | :---         |     :---:      |          ---: |
  | git status   | git status     | git status    |
  | git diff     | git diff       | git diff      |



  |             |                |               |
  | :---        |     :---:      |          ---: |
  |             | git status     |               |
  |             | git diff       |               |



  ---

Bullet list:
* apples
* oranges
* pears
    
Numbered list:
1. wash
2. rinse
3. repeat
    
  A [link](http://example.com).
  
  |     |  |
| -------- | ------- |
|  ![Image](https://via.placeholder.com/150)  |  ![Image](https://via.placeholder.com/150)    |
|  ![Image](https://via.placeholder.com/150) |  ![Image](https://via.placeholder.com/150)     |
|  ![Image](https://via.placeholder.com/150)    |  ![Image](https://via.placeholder.com/150)    |
 
  ![Image](https://via.placeholder.com/150)

  ![Image](https://via.placeholder.com/150)

  > Markdown uses email-style > characters for blockquoting.  
  `

  /**
   *       <SubsiteHomeTemplate
        subRef={subRef}
        line={line}
        words={pitch}
        waves={RootConfig.waveAnimationColors}
        leftAction={leftAction}
        rightAction={rightAction}
        sections={mainSections}
        markupTest={markupTest1}
        markdownTest={markdownTest1}
      />
   */

  return (
    <>
      
    </>
  )
}
