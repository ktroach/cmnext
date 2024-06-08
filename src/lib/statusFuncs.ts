import { RootConfig } from '@/config/root-config'

export enum StatusTypes {
    DRAFT = "DRAFT",
    REVIEW = "REVIEW",
    PUBLISHED = "PUBLISHED",
    PENDING = "PENDING"
}

export const getStatusConfig = (status: string | undefined) => {
  if (!status) {
    return RootConfig.statusConfigs.draft.statusColor
  }
  const statusType: any = StatusTypes[status as keyof typeof StatusTypes]
  let statusConf: any = ''
  if (statusType === StatusTypes.DRAFT)
    statusConf = RootConfig.statusConfigs.draft
  if (statusType === StatusTypes.REVIEW)
    statusConf = RootConfig.statusConfigs.review
  if (statusType === StatusTypes.PUBLISHED)
    statusConf = RootConfig.statusConfigs.published
  if (statusType === StatusTypes.PENDING)
    statusConf = RootConfig.statusConfigs.pending
  return statusConf
}

export const getStatusOrDefault = (status: string | undefined) => {
  if (!status) return StatusTypes.DRAFT
  return status.toUpperCase()
}