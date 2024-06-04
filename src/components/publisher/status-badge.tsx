'use client'

import React from 'react'
import { Badge } from '@radix-ui/themes'
import {
  getStatusOrDefault as getStatusOrDefault,
  getStatusConfig,
} from '@/lib/statusFuncs'
import { RootConfig } from '@/config/root-config'

export enum BadgeSize {
  SMALL = '1',
  MEDIUM = '2',
  LARGE = '3',
}

export interface StatusBadgeProps {
  status: string | undefined
  size?: BadgeSize | undefined
  className?: string | undefined
}

export default function StatusBadge({
  status,
  size,
  className,
}: StatusBadgeProps) {
  const statusConfig: any = getStatusConfig(status)
  const badgeColor: any = statusConfig && statusConfig?.statusColor
      ? statusConfig.statusColor
      : RootConfig.statusConfigs.draft.statusColor
  const badgeText: string = getStatusOrDefault(status)
  const badgeSize: BadgeSize = size ? size : BadgeSize.LARGE
  const badgeClass = className ? className : ''

  const renderBadge = () => {
    return (
      <>
        <Badge className={badgeClass} size={badgeSize} color={badgeColor}>
          {badgeText}
        </Badge>
      </>
    )
  }

  return <>{renderBadge()}</>
}
