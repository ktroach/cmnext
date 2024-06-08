'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export interface LinkableImageCardProps {
  title?: string | undefined
  className?: string | undefined
  children?: any
  linkSrc?: string | undefined
}

export default function LinkableImageCard({
  title,
  children,
  linkSrc,
}: LinkableImageCardProps) {
  if (linkSrc) {
    return (
      <Link href={linkSrc} key={Math.random()}>
        <span className="sr-only">{title}</span>
        {renderCard(children, title)}
      </Link>
    )
  }
  return <>{renderCard(children, title)}</>
}

function renderCard(children: any, title?: string | undefined) {
  return (
    <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
      <CardHeader>
        <div className="grid place-items-center">
          <React.Suspense
            fallback={<Skeleton className="h-[100px] w-[100px]" />}
          >
            {children.map((image: any, index: number) => {
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                key={Math.random()}
              />
            })}
          </React.Suspense>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-1.5">
        <React.Suspense fallback={<Skeleton className="h-4 w-20" />}>
          <CardTitle className="capitalize overflow-ellipsis">
            {title}
          </CardTitle>
        </React.Suspense>
      </CardContent>
    </Card>
  )
}
