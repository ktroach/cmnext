'use client'

import { Icons } from '@/styles/icons'
import { IconButton, Tooltip } from '@radix-ui/themes'
import { toast } from 'sonner'
import {
  EyeOpenIcon,
  ChevronLeftIcon,
  TrashIcon,
  RocketIcon,
  CrumpledPaperIcon,
} from '@radix-ui/react-icons'
import { Save } from 'lucide-react'
import StatusBadge, { BadgeSize } from './status-badge'

interface PublisherToolbarProps {
  isBlog?: boolean
  status?: string
  closeEditor?: any
  viewPage?: any
  saveDraft?: any
  publishChanges?: any
  publishDisabled?: boolean
  isUpdating?: boolean
  isSaveDisabled?: boolean
  unPublishChanges?: any
  deleteContent?: any
  unPublishDisabled?: boolean
  deleteDisabled?: boolean
  allToolbarActionsDisabled?: boolean
}

export const PublisherToolbar = ({
  isBlog,
  ...props
}: PublisherToolbarProps) => {
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

  const HandleViewPage = () => {
    if (props && props?.viewPage) {
      props.viewPage()
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
          onClick: () => {
            props.deleteContent()
          },
        },
        cancel: {
          label: 'Cancel',
          onClick: () => console.log('Delete Cancelled'),
        },
      })
    }
  }

  const isInUpdatingState = props?.isUpdating && props?.isUpdating === true ? true : false
  let isPublishDisabled = props?.publishDisabled && props?.publishDisabled === true ? true : false
  let isSaveDraftDisabled = props?.isSaveDisabled && props?.isSaveDisabled === true ? true : false
  let unPublishDisabled = props?.unPublishDisabled && props?.unPublishDisabled === true ? true : false
  let deleteDisabled = props?.deleteDisabled && props?.deleteDisabled === true ? true : false
  let viewPageDisabled = props?.deleteDisabled && props?.deleteDisabled === true ? true : false
  if (props?.allToolbarActionsDisabled) {
    isPublishDisabled = true
    isSaveDraftDisabled = true
    unPublishDisabled = true
    deleteDisabled = true
    viewPageDisabled = true
  }

  return (
    <header className="sticky top-0 z-[1000] w-full dark:bg-[#09090b84] bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.4] dark:border-white/[0.4] shadow-xl">
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
            <StatusBadge status={props?.status} className='ml-5' size={BadgeSize.LARGE} />
          </div>
        </div>
        <div className="flex flex-1 justify-end space-x-4">
          <Tooltip content="Close Editor">
            <IconButton
              color="gray"
              variant="classic"
              onClick={HandleCloseEditor}
              disabled={isInUpdatingState}
            >
              <ChevronLeftIcon width="18" height="18" />
            </IconButton>
          </Tooltip>
          <Tooltip content="View Page on your Site">
            <IconButton
              color="indigo"
              variant="classic"
              onClick={HandleViewPage}
              disabled={viewPageDisabled}
            >
              <EyeOpenIcon width="18" height="18" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Un-Publish">
            <IconButton
              color="plum"
              variant="classic"
              onClick={HandleUnPublishChanges}
              disabled={unPublishDisabled}
            >
              <CrumpledPaperIcon width="18" height="18" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Delete">
            <IconButton
              color="ruby"
              variant="classic"
              onClick={HandleDeleteContent}
              disabled={deleteDisabled}
            >
              <TrashIcon width="18" height="18" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Save Draft">
            <IconButton
              color="amber"
              variant="classic"
              onClick={HandleSaveDraft}
              disabled={isInUpdatingState || isSaveDraftDisabled}
            >
              <Save width="18" height="18" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Publish">
            <IconButton
              color="grass"
              variant="classic"
              onClick={HandlePublishChanges}
              disabled={isPublishDisabled || isInUpdatingState}
            >
              <RocketIcon width="18" height="18" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}
