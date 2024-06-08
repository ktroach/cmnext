import React, { useState, useMemo } from 'react'
import { cn } from '@/lib/utils'

interface GridPaperProps {
  children?: any
  className?: string | undefined
  hideSmallGrid?: boolean
  hideBigGrid?: boolean
}

const GridPaper = ({
  children,
  className,
  hideSmallGrid,
  hideBigGrid,
}: GridPaperProps) => {
  const AbosluteFullDivClassName = 'absolute w-full h-full bg-white dark:bg-gray-700'
  const SmallGridClassName = hideSmallGrid ? AbosluteFullDivClassName : cn(AbosluteFullDivClassName, 'bg-smallgrid')
  const BigGridClassName = hideBigGrid ? AbosluteFullDivClassName : cn(AbosluteFullDivClassName, ' bg-grid')
  const OuterRelativePaperDiv = className ? className : 'flex-1 relative w-full h-full'

  return (
    <>
      <div className={OuterRelativePaperDiv}>
        <div className={SmallGridClassName}>
            <div className={BigGridClassName}>
                {children}
            </div>
        </div>
      </div>
    </>
  )
}

export default GridPaper
