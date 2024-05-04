'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import SkeletonCard from './skeleton-card';
import { api } from '@/trpc/client'

export interface LinkCardProps {
  takeLimit: number, 
  subRef?: any, 
  contentType?: any, 
}

const generateSkeletonCards = (skeletonCount: number) => {
  const skeletons = []; 
  for (let i=0; i < skeletonCount; i++) {
    skeletons.push(<SkeletonCard key={`key-${i}`} />);
  }
  return skeletons;
}

export const FeaturedPosts = ({ takeLimit, subRef, contentType }: LinkCardProps) => {
  const take = takeLimit ? takeLimit : 5
  const { isLoading, data } = api.posts.getFeatured.useQuery({
    limit: take,
  })
  if (isLoading) {
    return (
      <>
        {generateSkeletonCards(take)}
      </>
    )
  }  
  return RenderCards(data, subRef, contentType)
}

export const FeaturedSites = ({ takeLimit, subRef, contentType }: LinkCardProps) => {
  const take = takeLimit ? takeLimit : 5
  const { isLoading, data } = api.pages.getFeatured.useQuery({
    limit: take,
  })
  if (isLoading) {
    return (
      <>
        {generateSkeletonCards(take)}
      </>
    )
  }  
  return RenderCards(data, subRef, contentType)
}

export const FeaturedPages = ({ takeLimit, subRef, contentType }: LinkCardProps) => {
  const take = takeLimit ? takeLimit : 5
  const { isLoading, data } = api.pages.getFeatured.useQuery({
    limit: take,
  })
  if (isLoading) {
    return (
      <>
        {generateSkeletonCards(take)}
      </>
    )
  }  
  return RenderCards(data, subRef, contentType)
}

const RenderCards = (data: any[] | undefined, subRef?: any, contentType?: any) => {
  return (
    <>
      {data ? (
        data.map((item, index) => {
          let cardLink: string = subRef ? `/p/${subRef}/pages${item?.slug}` : item?.slug ?? ''
          if (contentType && contentType === 'posts' || contentType === 'blogs') {
            cardLink = subRef ? `/p/${subRef}/blogs/${item?.slug}` : item?.slug ?? ''    
          }
          const imageSrc: string = item?.coverImage
            ? item.coverImage
            : `https://source.unsplash.com/random/220x120`
          return (
            <Link href={cardLink} key={cardLink}>
              <span className="sr-only">{item?.title}</span>
              <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
                <CardHeader>
                  <div className="grid place-items-center">
                    <React.Suspense
                      fallback={<Skeleton className="h-[100px] w-[100px]" />}
                    >
                      <Image
                        src={imageSrc}
                        width={220}
                        height={120}
                        alt={item.title}
                      />
                    </React.Suspense>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center space-y-1.5">
                  <React.Suspense fallback={<Skeleton className="h-4 w-20" />}>
                    <CardTitle className="capitalize overflow-ellipsis">
                      {item?.title}
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
