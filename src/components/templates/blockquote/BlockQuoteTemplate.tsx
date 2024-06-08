'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface BlockQuoteTemplateProps {
  cite?: string | undefined
  text?: string | undefined
  className?: string | undefined
  children?: any
}

export default function BlockQuoteTemplate({
  cite,
  text,
  className,
  children,
}: BlockQuoteTemplateProps) {
  return (
    <blockquote
      cite={cite}
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
    >
        {`"${text}"`}
    </blockquote>
  )
}
