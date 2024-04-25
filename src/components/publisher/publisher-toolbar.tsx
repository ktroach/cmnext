'use client'

import { Button } from '@/components/ui/button'
import { Circle } from 'lucide-react'
import { RootConfig } from '@/config/root-config'

interface PublisherToolbarProps {
  isBlog?: boolean
  status?: string
  closeEditor?: any
  saveDraft?: any
  publishChanges?: any
  publishDisabled?: boolean
}

export const PublisherToolbar = ({
  isBlog,
  ...props
}: PublisherToolbarProps) => {
  const getFormattedStatus = (currentStatus: string | undefined) => {
    if (!currentStatus) return 'DRAFT'
    return currentStatus.toUpperCase()
  }

  const PublishChanges = () => {
    if (props && props?.publishChanges) {
      props.publishChanges()
    }
  }

  const SaveDraft = () => {
    if (props && props?.saveDraft) {
      props.saveDraft()
    }
  }

  const CloseEditor = () => {
    if (props && props?.closeEditor) {
      props.closeEditor()
    }
  }

  const renderIcon = (iconColor: string) => {
    const iconClass: string = `h-5 w-5 ${iconColor} fill-current rounded-2xl border border-white/[0.5] dark:border-white/[0.5] shadow-xl`
    return (
      <Circle className={iconClass} />
    )
  }

  const getStatusIcon = (status: string | undefined) => {
    if (!status) {
      return <></>
    }
    const statusKey: string = status.toLowerCase()
    // @ts-ignore eslint-disable-next-line
    return renderIcon(RootConfig.statusConfigs[statusKey].statusColor)
  }

  return (
    <header className="sticky top-0 z-[1000] w-full border-b bg-white dark:bg-transparent">
      <div className="container flex flex-row h-16 items-center">
        <div className="mx-[-32px]">
          <div className='flex flex-row'>
            <div>{getStatusIcon('DRAFT')}</div>
            <div className='mx-2'>{getFormattedStatus(props.status)}</div>
          </div>
       </div>
        <div className="flex flex-1 justify-end space-x-4">
          <Button className=" bg-primary text-sm" onClick={CloseEditor}>
            Close Editor
          </Button>
          <Button
            className="bg-blue-800 hover:bg-blue-600 text-white text-sm"
            onClick={SaveDraft}
          >
            Save Draft
          </Button>
          <Button
            className="bg-green-800 hover:bg-green-600 text-white text-sm"
            onClick={PublishChanges}
            disabled={props.publishDisabled}
          >
            Publish 
          </Button>
        </div>
      </div>
    </header>
  )
}
