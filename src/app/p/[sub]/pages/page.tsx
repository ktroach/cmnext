import React from 'react'
import { Block } from '@/components/containers/block'
import { RootConfig } from '@/config/root-config'
import CarouselTemplate from '@/components/templates/carousel'

export default async function SubsiteHomePage({ params }: any) {
  const subRef: string | undefined = params?.sub ? params.sub : undefined

  const config = {
    blocks: [
      {
        blockId: 'b1',
        blockType: 'carousel',
        items: [
          { 
            cn: 'inset-0 rounded-xl object-cover',
            src: 'https://picsum.photos/id/8/800/800'
          },
          { 
            cn: 'inset-0 rounded-xl object-cover',
            src: 'https://picsum.photos/id/16/800/800'
          },
          { 
            cn: 'inset-0 rounded-xl object-cover',
            src: 'https://picsum.photos/id/32/800/800'
          },
          { 
            cn: 'inset-0 rounded-xl object-cover',
            src: 'https://picsum.photos/id/64/800/800'
          }                                  
        ]
      }
    ]
  }



  return (
    <>
      <CarouselTemplate subRef={subRef} config={[]} />
    </>
  )
}
