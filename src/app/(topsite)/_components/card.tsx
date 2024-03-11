import * as React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Icons } from '@/styles/icons'

export interface LinkCardProps {
  url: string
  title: string
  icon?: keyof typeof Icons
  iconSize?: string
}

export const SrcCard = ({ url, title, icon, iconSize }: LinkCardProps) => {
  const Icon = icon ? Icons[icon] : Icons["nextjs"];
  const IconSize = iconSize ? `size-${iconSize}` : 'size-5'
  return (
    <Link href={url}>
      <span className="sr-only">{title}</span>
      <Card className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent transition-colors hover:bg-muted/50">
        <CardHeader>
          <div className="grid size-11 place-items-center rounded-full border-2">
            <Icon className={IconSize} aria-hidden="true" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-1.5">
          <CardTitle className="capitalize">{title}</CardTitle>
          <React.Suspense
            fallback={<Skeleton className="h-4 w-20" />}
          ></React.Suspense>
        </CardContent>
      </Card>
    </Link>
  )
}
