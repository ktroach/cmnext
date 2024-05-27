'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Block } from '@/components/containers/block'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'

export interface CarouselTemplateProps {
  subRef: any
  config: any
}

export default function CarouselTemplate({
  subRef,
  config,
}: CarouselTemplateProps) {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <div className="mt-5">
      <div className="w-full flex flex-col items-center justify-center overflow-hidden text-center border ">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                <Image
                    className="inset-0 rounded-xl object-cover"
                    src={`https://picsum.photos/id/${233 + index}/800/800`}
                    alt="image"
                    quality={100}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '800px' }}
                  ></Image>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
