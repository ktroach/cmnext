'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export interface LinkableImageCardsSectionProps {
  children?: any, 
}

export default function LinkableImageCardsSection({children}: LinkableImageCardsSectionProps) {
  return (
    <>
      {children ? (
        children.map((item: any, index: number) => {
          const props = item?.props ? item.props : undefined
          return (
            <Link href={props?.href} key={Math.random()}>
              <span className="sr-only">{item?.title}</span>
              <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
                <CardHeader>
                  <div className="grid place-items-center">
                    <React.Suspense
                      fallback={<Skeleton className="h-[100px] w-[100px]" />}
                    >
                      <Image
                        src={props?.src}
                        width={220}
                        height={120}
                        alt={props?.alt}
                      />
                    </React.Suspense>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-1.5">
                  <React.Suspense fallback={<Skeleton className="h-4 w-20" />}>
                    <CardTitle className="capitalize overflow-ellipsis">
                      {props?.title}
                    </CardTitle>
                  </React.Suspense>
                </CardContent>
              </Card>
            </Link>
          )
        })
      ) : (
        <></>
      )}
    </>
  )  
}
