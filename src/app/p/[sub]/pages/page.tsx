import React from 'react'
import CarouselTemplate from '@/components/templates/carousel'
import { SubTree } from '@/lib/subtree'
import { getPageByTitle, getSubsiteBySubsiteRef } from '@/lib/queries'

export default async function SubsiteHomePage({ params }: any) {
  const subRef: string | undefined = params?.sub ? params.sub : undefined
  let carouselNode: any = null

  if (subRef) {
    const subsite = await getSubsiteBySubsiteRef(subRef)
    const subsiteId = subsite && subsite?.id ? subsite.id : undefined
    if (subsiteId) {
      const pageData = await getPageByTitle('Home', subsiteId)
      const pageLayout: string = pageData && pageData?.layoutTemplate ? pageData.layoutTemplate : undefined
      if (pageLayout) {
        const parsedSubTree = SubTree.fromJSON<string>(pageLayout)
        carouselNode = parsedSubTree.findNodeAsJSON('carousel')
      }
    }
  }
  

  // const subtree = new SubTree<string>()
  // subtree.addNode('root', null, {})
  // subtree.addNode('carousel', 'root', {
  //   className:
  //     'w-full flex flex-col items-center justify-center overflow-hidden text-center border',
  //   parentClassName: 'p-5 inset-0 rounded-xl relative ',
  //   delay: 3000,
  //   stopOnInteraction: false,
  //   showBorder: true,
  // })
  // subtree.addNode('image', 'carousel', {
  //   className: 'inherit',
  //   src: 'https://picsum.photos/id/1/800/800',
  //   alt: 'image', 
  // })
  // subtree.addNode('image', 'carousel', {
  //   className: 'inherit',
  //   src: 'https://picsum.photos/id/2/800/800',
  //   alt: 'image', 
  // })
  
  // subtree.addNode('image', 'carousel', {
  //   className: 'inherit',
  //   src: 'https://picsum.photos/id/3/800/800',
  //   alt: 'image', 
  // })
  // subtree.addNode('image', 'carousel', {
  //   className: 'inherit',
  //   src: 'https://picsum.photos/id/4/800/800',
  //   alt: 'image', 
  // })

  // const subTreeString = subtree.toJSON()
  // console.log(subTreeString)

  // const parsedSubTree = SubTree.fromJSON<string>(subTreeString)
  // const carouselNode = parsedSubTree.findNodeAsJSON('carousel')

  return (
    <>
      {carouselNode ? (
        <>
          <CarouselTemplate subtree={carouselNode} />
        </>
      ) : (
        <></>
      )}
    </>
  )
}
