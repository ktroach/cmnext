'use client'

import * as React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Icons } from '@/styles/icons'
import { FeaturedItemType } from '@/types'

export interface LinkCardProps {
  dataEntity: string
}

export const FeaturedItems = ({ dataEntity }: LinkCardProps) => {
  // TODO: make a tRPC call
  // iterate tRPC results using map()

  // url, title, icon, iconSize

  // const Icon = icon ? Icons[icon] : Icons['nextjs']
  // const IconSize = iconSize ? `size-${iconSize}` : 'size-5'

  const Icon = Icons['star']
  const [featuredItems, setFeaturedItems] = React.useState<FeaturedItemType[] | null>(null)

  return (
    <>
      {featuredItems ? (
        featuredItems.map((item) => {
          return (
            <Link href={item.url}>
              <span className="sr-only">{item.title}</span>
              <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
                <CardHeader>
                  <div className="grid size-11 place-items-center rounded-full border-2">
                    <Icon className='size-5' aria-hidden="true" />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-1.5">
                  <CardTitle className="capitalize">{item.title}</CardTitle>
                  <React.Suspense
                    fallback={<Skeleton className="h-4 w-20" />}
                  ></React.Suspense>
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
