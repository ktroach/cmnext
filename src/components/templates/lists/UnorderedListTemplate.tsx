'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface UnorderedListTemplateProps {
  className?: string | undefined
  children?: any
}

export default function UnorderedListTemplate({
  className,
  children,
}: UnorderedListTemplateProps) {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}>
      {children.map((item: any, index: number) => {
        const itemProps = item?.props ? item.props : undefined
        return (
          <li>itemProps?.text</li>
        )
      })}
    </ul>
  )
}
