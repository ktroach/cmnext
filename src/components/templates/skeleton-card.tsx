'use client'

import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonCard() {
  return (
    <>
      <Skeleton className="h-[320] w-[320]">
        <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
          <CardHeader>
            <div className="grid place-items-center"></div>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-1.5"></CardContent>
        </Card>
      </Skeleton>
    </>
  )
}
