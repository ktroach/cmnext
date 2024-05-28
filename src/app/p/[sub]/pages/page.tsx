import React from 'react'
import CarouselTemplate from '@/components/templates/carousel'
import { SubTree } from '@/lib/subtree'

export default async function SubsiteHomePage({ params }: any) {
  const subRef: string | undefined = params?.sub ? params.sub : undefined

  const subtree = new SubTree<string>()
  subtree.addNode('root', null, {})
  subtree.addNode('carousel', 'root', {
    className:
      'w-full flex flex-col items-center justify-center overflow-hidden text-center border',
    parentClassName: 'p-5 inset-0 rounded-xl relative ',
    delay: 3000,
    stopOnInteraction: false,
    showBorder: true,
  })
  subtree.addNode('image', 'carousel', {
    className: 'inherit',
    src: 'https://picsum.photos/id/8/800/800',
    alt: 'image', 
  })
  subtree.addNode('image', 'carousel', {
    className: 'inherit',
    src: 'https://picsum.photos/id/16/800/800',
    alt: 'image', 
  })
  subtree.addNode('image', 'carousel', {
    className: 'inherit',
    src: 'https://picsum.photos/id/32/800/800',
    alt: 'image', 
  })
  subtree.addNode('image', 'carousel', {
    className: 'inherit',
    src: 'https://picsum.photos/id/64/800/800',
    alt: 'image', 
  })

  const subTreeString = subtree.toJSON()
  const parsedSubTree = SubTree.fromJSON<string>(subTreeString)
  const carouselNode = parsedSubTree.findNodeAsJSON('carousel')

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
