'use client'

import React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { RootConfig } from '@/config/root-config'

export interface CarouselTemplateProps {
  children: any
  carouselDelay?: number | undefined 
  carouselStopOnInteraction?: boolean
  carouselClassName?: string | undefined
  carouselParentClassName?: string | undefined
}

export default function CarouselTemplate({ children, carouselDelay, carouselStopOnInteraction, carouselClassName, carouselParentClassName }: CarouselTemplateProps) {
  const delay: number = carouselDelay ?? 3000
  const stopOnInteraction: boolean = carouselStopOnInteraction ?? true
  const rootClassName: string = carouselClassName ? carouselClassName : ''
  const parentClassName: string = carouselParentClassName ? carouselParentClassName : ''
  const carouselImages: any = children ? children : []
  const defaultClassName: string = RootConfig.templateConfigs.carousel.defaultClassName
  const defaultSrc: string = RootConfig.templateConfigs.carousel.defaultSrc

  const plugin = React.useRef(
    Autoplay({ delay: delay, stopOnInteraction: stopOnInteraction })
  )

  return (
    <div className="mt-5">
      <div className={rootClassName}>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {carouselImages.map((img: any, index: number) => {
              const inheritClass =
                img?.properties?.className &&
                img?.properties?.className === 'inherit'
                  ? true
                  : false
              const imgClass = inheritClass
                ? parentClassName
                : img?.properties?.className ?? defaultClassName
              const imgSrc = img?.properties?.src ?? defaultSrc
              const imgAlt = img?.properties?.alt ?? 'image'
              return (
                <CarouselItem key={index}>
                  <div className="relative w-screen h-screen overflow-hidden -z-10">
                    <Image
                      className={imgClass}
                      src={imgSrc}
                      alt={imgAlt}
                      sizes="100vw"
                      width={0}
                      height={0}
                      fill 
                      style={{
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                </CarouselItem>
              )
            })} 
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
