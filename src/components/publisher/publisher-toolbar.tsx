'use client'

import { Icons } from '@/styles/icons'
import { Button } from '@/components/ui/button'
import { Circle } from 'lucide-react'
import { RootConfig } from '@/config/root-config'
import { ArrowUpDown, ChevronLeft, MoreHorizontal } from "lucide-react"
import { toast } from 'sonner'

interface PublisherToolbarProps {
  isBlog?: boolean
  status?: string
  closeEditor?: any
  saveDraft?: any
  publishChanges?: any
  publishDisabled?: boolean
  isUpdating?: boolean
  isSaveDisabled?: boolean
  unPublishChanges?: any
  deleteContent?: any
  unPublishDisabled?: boolean
  deleteDisabled?: boolean
}

export const PublisherToolbar = ({
  isBlog,
  ...props
}: PublisherToolbarProps) => {
  const getFormattedStatus = (currentStatus: string | undefined) => {
    if (!currentStatus) return 'DRAFT'
    return currentStatus.toUpperCase()
  }

  const HandlePublishChanges = () => {
    if (props && props?.publishChanges) {
      props.publishChanges()
    }
  }

  const HandleSaveDraft = () => {
    if (props && props?.saveDraft) {
      props.saveDraft()
    }
  }

  const HandleCloseEditor = () => {
    if (props && props?.closeEditor) {
      props.closeEditor()
    }
  }


  const HandleUnPublishChanges = () => {
    if (props && props?.unPublishChanges) {
      props.unPublishChanges()
    }
  }
  

  const HandleDeleteContent = () => {
    if (props && props?.deleteContent) {
      toast('Are you sure you want to delete this?', {
        action: {
          label: 'Yes',
          onClick: () => {props.deleteContent()},
        },
        cancel: {
          label: 'Cancel',
          onClick: () => console.log('Delete Cancelled'),
        },        
      })
    }
  }  

  const renderIcon = (iconColor: string) => {
    const iconClass: string = `h-5 w-5 ${iconColor} fill-current rounded-2xl border border-white/[0.5] dark:border-white/[0.5] shadow-xl`
    return <Circle className={iconClass} />
  }

  const getStatusIcon = (status: string | undefined) => {
    if (!status) {
      return <></>
    }
    const statusKey: string = status.toLowerCase()
    let statusColor:any = ''
    if (statusKey === 'draft') statusColor = RootConfig.statusConfigs.draft.statusColor 
    if (statusKey === 'review') statusColor = RootConfig.statusConfigs.review.statusColor 
    if (statusKey === 'published') statusColor = RootConfig.statusConfigs.published.statusColor 
    if (statusKey === 'pending') statusColor = RootConfig.statusConfigs.pending.statusColor 
    return renderIcon(statusColor)
  }

  const isInUpdatingState = props?.isUpdating && props?.isUpdating === true ? true : false 
  const isPublishDisabled = props?.publishDisabled && props?.publishDisabled === true ? true : false 
  const isSaveDraftDisabled = props?.isSaveDisabled && props?.isSaveDisabled === true ? true : false 
  const unPublishDisabled = props?.unPublishDisabled && props?.unPublishDisabled === true ? true : false 
  const deleteDisabled = props?.deleteDisabled && props?.deleteDisabled === true ? true : false 

  return (
    <header className="sticky top-0 z-[1000] w-full border-b bg-white dark:bg-transparent">
      <div className="container flex flex-row h-16 items-center">
        <div className="mx-[-32px]">
          <div className="flex flex-row">
            <div>
              {props?.isUpdating ?? (
                <Icons.spinner
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
              )}             
            </div>
            <div>{getStatusIcon(props?.status)}</div>
            <div className="mx-2">{getFormattedStatus(props?.status)}</div>
          </div>
        </div>
        <div className="flex flex-1 justify-end space-x-4">
          <Button className=" bg-gray-800 hover:bg-gray-600 text-white text-sm font-medium font-mono" onClick={HandleCloseEditor} disabled={isInUpdatingState}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button className="  bg-cyan-800 hover:bg-cyan-600 text-white text-sm font-medium font-mono" onClick={HandleCloseEditor} disabled={isInUpdatingState}>
            View Page
          </Button>
          <Button className="  bg-orange-800 hover:bg-orange-600 text-white text-sm font-medium font-mono" onClick={HandleUnPublishChanges} disabled={unPublishDisabled}>
            Un-Publish 
          </Button>
          <Button className=" bg-red-800 hover:bg-red-600 text-white text-sm font-medium font-mono" onClick={HandleDeleteContent} disabled={deleteDisabled}>
            Delete 
          </Button>                    
          <Button
            className="bg-blue-800 hover:bg-blue-600 text-white text-sm font-medium font-mono"
            onClick={HandleSaveDraft}
            disabled={isInUpdatingState || isSaveDraftDisabled}
          >
            Save Draft
          </Button>
          <Button
            className="bg-green-800 hover:bg-green-600 text-white text-sm font-medium font-mono"
            onClick={HandlePublishChanges}
            disabled={isPublishDisabled || isInUpdatingState}
          >
            Publish
          </Button>
        </div>
      </div>
    </header>
  )
}
