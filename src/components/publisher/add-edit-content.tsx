'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import { toast } from 'sonner'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { blogSchema } from '@/validations/blog'
import { PublisherToolbar } from '@/components/publisher/publisher-toolbar'
import { MarkdownEditor } from '@/components/editors/markdown-editor'
import { useMounted } from '@/hooks/use-mounted'
import { RootConfig } from '@/config/root-config'
import { api } from '@/trpc/client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { getFrontendBaseUrl } from '@/lib/url'
import { HelpCircle } from 'lucide-react'

type Inputs = z.infer<typeof blogSchema>

export function AddEditContent(params: any) {
  const mounted = useMounted()
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const [editorContent, setEditorContent] =
    React.useState<any>('Just start typing!')
  const [postId, setPostId] = React.useState<any>()
  const [pageId, setPageId] = React.useState<any>()
  const [authorId, setAuthorId] = React.useState<any>()
  const [subsiteId, setSubsiteId] = React.useState<any>()
  const [contentLoaded, setContentLoaded] = React.useState<boolean>()
  const [content, setContent] = React.useState<any>()
  const [title, setTitle] = React.useState<any>()
  const [titleSearch, setTitleSearch] = React.useState<string | undefined>()
  const [contentStatus, setContentStatus] = React.useState<any>()
  const [coverImage, setCoverImage] = React.useState<any>()
  const [isSaving, setIsSaving] = React.useState<boolean>(false)
  const [pageType, setPageType] = React.useState<any>()
  const isPage: boolean = params?.isPost ? false : true
  const isPageTypeDisabled: boolean = params?.isNew ? false : true
  const pageTypes: any = [
    { label: 'markdown', value: 'markdown' },
    { label: 'full-width', value: 'full-width' },
    { label: 'form', value: 'form' },
  ]

  const handleTemplateHelp = () => {
    toast('TODO')
  }

  const editParams: any = params?.editParams ? params.editParams : null
  // console.log('>>> AddEditContent >>> editParams >>> ', editParams)

  const editData: any =
    editParams && editParams?.editData && editParams?.editData
      ? editParams.editData
      : null

  const editContentId: number | null = editData && editData?.id ? editData.id : null
  const editSlug: string | null = editData && editData?.slug ? editData.slug : null
  const editAuthorId: number | null = editData && editData?.authorId ? editData.authorId : null
  const editSubsiteId: number | null = editData && editData?.subsiteId ? editData.subsiteId : null
  const editStatus: string = editData && editData?.status ? editData.status : ''
  const editContent: string =  editData && editData?.content ? editData.content : ''
  const editTitle: string = editData && editData?.title ? editData.title : ''
  const editPageType: string = editData && editData?.pageType ? editData.pageType : ''
  const editCoverImage: string =  editData && editData?.coverImage ? editData.coverImage : ''

  if (!contentLoaded && editData) {
    setTitle(editTitle)
    setPageType(editPageType)
    setCoverImage(editCoverImage)
    setContent(editContent)
    setContentStatus(editStatus)
    setEditorContent(editContent)
    setAuthorId(editAuthorId)
    setSubsiteId(editSubsiteId)
    if (params?.isPost) {
      setPostId(editContentId)
    } else {
      setPageId(editContentId)
    }
    setContentLoaded(true)
  }

  const form = useForm<Inputs>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
      body: '',
      template: '',
      parent: '',
      order: '',
    },
  })

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        saveDraft()
      } catch (err) {
        console.error(err)
      }
    })
  }

  const closeEditor = () => {
    const subsite: any = params?.subsite ? params.subsite : undefined
    const subref: string = subsite?.subRef ? subsite.subRef : undefined
    if (subref) {
      const url: string = params?.isPost
        ? `${window.location.origin}/publish/${subref}/blogs`
        : `${window.location.origin}/publish/${subref}/pages`
      router.push(url)
    }
  }

  const viewPage = () => {
    const subsite: any = params?.subsite ? params.subsite : undefined
    const subref: string = subsite?.subRef ? subsite.subRef : undefined
    if (subref) {
      const url: string = params?.isPost
        ? `${window.location.origin}/p/${subref}/blogs${editSlug}`
        : `${window.location.origin}/p/${subref}/pages${editSlug} `
      window.open(url, '_blank')
    }
  }  

  const CreateContent = async () => {
    console.log('Entered: CreateContent')
    const requiredInputs: any = getCreateMutationVariables(params?.isPost)
    if (requiredInputs !== null) {
      if (params?.isPost) {
        return await createPostMutation.mutateAsync(requiredInputs)
      } else {
        return await createPageMutation.mutateAsync(requiredInputs)
      }
    }
    return null
  }

  const EditContent = async () => {
    console.log('Entered: EditContent')
    const requiredInputs: any = getEditMutationVariables()
    if (requiredInputs !== null) {
      if (params?.isPost) {
        return await editPostMutation.mutateAsync(requiredInputs)
      } else {
        return await editPageMutation.mutateAsync(requiredInputs)
      }
    }
    return null
  }

  const getEditMutationVariables = () => {
    let mutationVars: any = null
    if (postId) {
      mutationVars = {
        postId: postId,
        content: editorContent,
        authorId: authorId,
        subsiteId: subsiteId,
        metaData: `${editSlug}.mdx`,
      }
      return mutationVars
    }
    if (pageId) {
      mutationVars = {
        pageId: pageId,
        content: editorContent,
        authorId: authorId,
        subsiteId: subsiteId,
        metaData: `${editSlug}.mdx`,
      }
      return mutationVars
    }
    return null
  }

  const getCreateMutationVariables = (isPost: any) => {
    const formControl = form.getValues()
    const titleInput: string | undefined = title ? title : undefined
    const subsite: any = params?.subsite ? params.subsite : undefined
    const subref: string = subsite?.subRef ? subsite.subRef : undefined
    const userId: number | undefined = subsite?.userId
      ? parseInt(subsite.userId)
      : undefined
    const subsiteId: number | undefined = subsite?.subsiteId
      ? parseInt(subsite.subsiteId)
      : undefined
    const coverImage: string | undefined = formControl?.image
      ? formControl.image
      : RootConfig?.defaultCoverImage ?? undefined
    const contentDescription: string | undefined = formControl?.description
      ? formControl.description
      : title

    let inputsValid: boolean = verifyInput(titleInput)
    if (inputsValid) inputsValid = verifyInput(subref)
    if (inputsValid) inputsValid = verifyInput(userId)
    if (inputsValid) inputsValid = verifyInput(subsiteId)
    if (inputsValid) inputsValid = verifyInput(coverImage)
    if (inputsValid) {
      let mutationVars: any = {}
      if (isPost) {
        mutationVars = {
          subRef: subref,
          title: titleInput,
          description: contentDescription,
          image: coverImage,
          content: editorContent,
          authorId: userId,
          subsiteId: subsiteId
        }        
      } else {
        mutationVars = {
          subRef: subref,
          title: titleInput,
          description: contentDescription,
          image: coverImage,
          content: editorContent,
          authorId: userId,
          subsiteId: subsiteId,
          pageType: pageType
        }        
      }
      return mutationVars
    }
    return null
  }

  const verifyInput = (input: any): boolean => {
    let isValid = input && typeof input !== 'undefined' ? true : false
    if (typeof input === 'number' && input === 0) isValid = false
    if (typeof input === 'string' && input.length === 0) isValid = false
    return isValid
  }

  const saveDraft = async () => {
    let savedContent: any = null

    setIsSaving(true)

    if (params?.isNew) {
      savedContent = await CreateContent()
    } else {
      toast('Saving Changes...')
      savedContent = await EditContent()
    }

    if (!savedContent) {
      console.log('There was a problem saving draft: savedContent is null')
      toast('There was a problem saving draft. Please try again.')
      return
    }

    if (!savedContent?.id) {
      console.log('savedContent.id is null')
      return
    }

    if (params?.isPost) {
      setPostId(savedContent.id)
    } else {
      setPageId(savedContent.id)
    }

    setContentLoaded(false)
    setIsSaving(false)

    toast.success('Content saved successfully.')

    if (params?.isNew) {
      const newPageSlug: string | undefined =
        savedContent && savedContent?.slug ? savedContent?.slug : undefined
      const subsite: any = params?.subsite ? params.subsite : undefined
      const subref: string = subsite?.subRef ? subsite.subRef : undefined
      const baseUrl: string = getFrontendBaseUrl()
      const contentType: string = params?.isPost ? 'blogs' : 'pages'
      const editPageUrl: string | undefined =
        newPageSlug && subref
          ? `${baseUrl}/publish/${subref}/${contentType}/edit/${newPageSlug}`
          : undefined
      if (editPageUrl) {
        window.location.href = editPageUrl
      }
    } else {
      // reload the edit page
      window.location.reload()
    }
  }

  const { PublishPost, isPublishingPost } = handlePostPublish(postId)
  const { PublishPage, isPublishingPage } = handlePagePublish(pageId)
  const { UnPublishPage, isUnPublishingPage } = handlePageUnPublish(pageId)
  const { DeletePage, isDeletingPage } = handlePageDelete(pageId)
  const { UnPublishPost, isUnPublishingPost } = handlePostUnPublish(postId)
  const { DeletePost, isDeletingPost } = handlePostDelete(postId)

  const publishChanges = async () => {
    let publishResult: any = null
    if (params?.isPost) {
      publishResult = await PublishPost()
    } else {
      publishResult = await PublishPage()
    }
    console.log('>>> AddEditContent >>> publishResult >>> ', publishResult)
    if (publishResult) {
      window.location.reload()
    }
  }

  const unPublishChanges = async () => {
    let unPublishResult: any = null
    if (params?.isPost) {
      unPublishResult = await UnPublishPost()
    } else {
      unPublishResult = await UnPublishPage()
    }
    console.log('>>> AddEditContent >>> unPublishResult >>> ', unPublishResult)
    if (unPublishResult) {
      window.location.reload()
    }
  }

  const deleteContent = async () => {
    let deleteContentResult: any = null
    if (params?.isPost) {
      deleteContentResult = await DeletePost()
    } else {
      deleteContentResult = await DeletePage()
    }
    console.log(
      '>>> AddEditContent >>> deleteContentResult >>> ',
      deleteContentResult
    )
    if (deleteContentResult) {
      const subsite: any = params?.subsite ? params.subsite : undefined
      const subref: string = subsite?.subRef ? subsite.subRef : undefined
      const url: string = params?.isPost
        ? `${window.location.origin}/publish/${subref}/blogs?reload=true`
        : `${window.location.origin}/publish/${subref}/pages?reload=true`
      router.push(url)
      router.refresh()
    }
  }

  // Create Post Mutations
  const createPostMutation = api.posts.create.useMutation({
    onSuccess: (newPost) => {
      console.log('onSuccess >>> newPost >>> ', newPost)
    },
    onError: (error) =>
      toast('Failed to Create Post', {
        duration: 2000,
        description: error.message,
      }),
  })
  const isCreatingPost = createPostMutation.isLoading

  // Edit Post Mutations
  const editPostMutation = api.posts.updateContent.useMutation({
    onSuccess: (modifiedPost) => {
      console.log('onSuccess >>> modifiedPost >>> ', modifiedPost)
    },
    onError: (error) =>
      toast('Failed to Edit Post', {
        duration: 2000,
        description: error.message,
      }),
  })
  const isEditingPost = editPostMutation.isLoading

  // Publish Post Mutations
  function handlePostPublish(postId: any) {
    const setPostPublishedMutation = api.posts.setStatusPublished.useMutation({
      onSuccess: (updatedPost) => {
        console.log('onSuccess >>> updatedPost >>> ', updatedPost)
      },
      onError: (error) =>
        toast('Failed to Publish Post', {
          duration: 2000,
          description: error.message,
        }),
    })
    const isPublishingPost = setPostPublishedMutation.isLoading
    const PublishPost = async () => {
      console.log('Entered: PublishPost')
      if (!postId) {
        console.log('Failed to Publish - No Post ID !')
        toast('Something went wrong when Publishing. Please try again.')
        return
      }
      return await setPostPublishedMutation.mutateAsync({
        id: postId,
      })
    }
    return { PublishPost, isPublishingPost }
  }

  // Un-Publish Mutations
  function handlePageUnPublish(pageId: any) {
    const setPageUnPublishedMutation = api.pages.setStatusDraft.useMutation({
      onSuccess: (unpublishedPage) => {
        console.log('onSuccess >>> unpublishedPage >>> ', unpublishedPage)
      },
      onError: (error) =>
        toast('Failed to Un-Publish Page', {
          duration: 2000,
          description: error.message,
        }),
    })
    const isUnPublishingPage = setPageUnPublishedMutation.isLoading
    const UnPublishPage = async () => {
      console.log('Entered: UnPublishPage')
      if (!pageId) {
        console.log('Failed to Un-Publish - No Page ID !')
        toast('Something went wrong when Un-Publishing. Please try again.')
        return
      }
      return await setPageUnPublishedMutation.mutateAsync({
        id: pageId,
      })
    }
    return { UnPublishPage, isUnPublishingPage }
  }

  function handlePostUnPublish(postId: any) {
    const setPostUnPublishedMutation = api.posts.setStatusDraft.useMutation({
      onSuccess: (unpublishedPost) => {
        console.log('onSuccess >>> unpublishedPost >>> ', unpublishedPost)
      },
      onError: (error) =>
        toast('Failed to Un-Publish Post', {
          duration: 2000,
          description: error.message,
        }),
    })
    const isUnPublishingPost = setPostUnPublishedMutation.isLoading
    const UnPublishPost = async () => {
      console.log('Entered: UnPublishPost')
      if (!postId) {
        console.log('Failed to Un-Publish - No Post ID !')
        toast('Something went wrong when Un-Publishing. Please try again.')
        return
      }
      return await setPostUnPublishedMutation.mutateAsync({
        id: postId,
      })
    }
    return { UnPublishPost, isUnPublishingPost }
  }

  // Delete Content Mutations
  function handlePageDelete(pageId: any) {
    const setPageDeletedMutation = api.pages.softDelete.useMutation({
      onSuccess: (deletedPage) => {
        console.log('onSuccess >>> deletedPage >>> ', deletedPage)
      },
      onError: (error) =>
        toast('Failed to Delete Page', {
          duration: 2000,
          description: error.message,
        }),
    })
    const isDeletingPage = setPageDeletedMutation.isLoading
    const DeletePage = async () => {
      console.log('Entered: DeletePage...')
      if (!pageId) {
        console.log('Failed to Delete Page - No Page ID !')
        toast('Something went wrong when Deleting Page. Please try again.')
        return
      }
      return await setPageDeletedMutation.mutateAsync({
        id: pageId,
      })
    }
    return { DeletePage, isDeletingPage }
  }

  function handlePostDelete(postId: any) {
    const setPostDeletedMutation = api.posts.softDelete.useMutation({
      onSuccess: (deletedPost) => {
        console.log('onSuccess >>> deletedPost >>> ', deletedPost)
      },
      onError: (error) =>
        toast('Failed to Delete Post', {
          duration: 2000,
          description: error.message,
        }),
    })
    const isDeletingPost = setPostDeletedMutation.isLoading
    const DeletePost = async () => {
      console.log('Entered: DeletePost...')
      if (!postId) {
        console.log('Failed to Delete Post - No Post ID !')
        toast('Something went wrong when Deleting Post. Please try again.')
        return
      }
      return await setPostDeletedMutation.mutateAsync({
        id: postId,
      })
    }
    return { DeletePost, isDeletingPost }
  }

  // Create Page Mutations
  const createPageMutation = api.pages.create.useMutation({
    onSuccess: (newPage) => {
      console.log('onSuccess >>> newPage >>> ', newPage)
    },
    onError: (error) =>
      toast('Failed to Create Page', {
        duration: 2000,
        description: error.message,
      }),
  })
  const isCreatingPage = createPageMutation.isLoading

  // Edit Page Mutations
  const editPageMutation = api.pages.updateContent.useMutation({
    onSuccess: (modifiedPage) => {
      console.log('onSuccess >>> modifiedPage >>> ', modifiedPage)
    },
    onError: (error) =>
      toast('Failed to Edit Post', {
        duration: 2000,
        description: error.message,
      }),
  })
  const isEditingPage = editPageMutation.isLoading

  // Publish Page Mutations
  function handlePagePublish(publishPageId: any) {
    const setPagePublishedMutation = api.pages.setStatusPublished.useMutation({
      onSuccess: (updatedPage) => {
        console.log('onSuccess >>> updatedPage >>> ', updatedPage)
      },
      onError: (error) =>
        toast('Failed to Publish Page', {
          duration: 2000,
          description: error.message,
        }),
    })
    const isPublishingPage = setPagePublishedMutation.isLoading

    const PublishPage = async () => {
      console.log('Entered: PublishPage')
      if (!publishPageId) {
        console.log('Failed to Publish - Missing pageId')
        toast('Something went wrong when Publishing. Please try again.')
        return
      }
      return await setPagePublishedMutation.mutateAsync({
        id: publishPageId,
      })
    }
    return { PublishPage, isPublishingPage }
  }

  const handleOpenPageDesigner = () => {
    const subsite: any = params?.subsite ? params.subsite : undefined
    const subref: string = subsite?.subRef ? subsite.subRef : undefined
    if (subref) {
      const url: string = `${window.location.origin}/publish/${subref}/pages/designer/${editSlug}`
      window.open(url, '_blank')
    }    
  }

  return (
    <>
      <PublisherToolbar
        isBlog
        status={contentStatus}
        closeEditor={closeEditor}
        viewPage={viewPage}
        saveDraft={saveDraft}
        publishChanges={publishChanges}
        publishDisabled={params?.isNew}
        isUpdating={isSaving}
        isSaveDisabled={isSaving}
        unPublishChanges={unPublishChanges}
        deleteContent={deleteContent}
        unPublishDisabled={params?.isNew}
        deleteDisabled={params?.isNew}
        allToolbarActionsDisabled={!params?.isNew && !editData}
      />
      <Form {...form}>
        <form
          className="grid gap-4"
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Title</FormLabel>
                <FormControl>
                  <Input
                    disabled={contentLoaded}
                    placeholder="Title of your content..."
                    {...field}
                    className="hover:border-blue-500 border-blue-400"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value)
                    }}
                    onBlur={(e) => {
                      setTitleSearch(e.target.value)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator className="mt-5" />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className=""
                  title="If blank, a random image will be assigned based on the title"
                >
                  Cover Image
                </FormLabel>
                <FormControl>
                  <Input
                    className="hover:border-blue-500 border-blue-400"
                    disabled={contentLoaded}
                    title="If blank, the app will use a default image"
                    placeholder={RootConfig?.defaultCoverImage}
                    {...field}
                    value={coverImage}
                    onChange={(e) => {
                      setCoverImage(e.target.value)
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Page Options */}
          {isPage ? (
            <>
              <Separator className="mt-5" />

              <FormField
                control={form.control}
                name="template"
                disabled={isPageTypeDisabled}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <div className="flex flex-row space-between">
                        <div className="mr-2">Page Type</div>{' '}
                        <div className="mt-[-5px]">
                          <HelpCircle onClick={handleTemplateHelp} />
                        </div>{' '}
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={pageType}
                        onValueChange={(value) => {
                          setPageType(value)
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select what Page Type to use for this content" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {pageTypes.map((option: any, index: number) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                                disabled={contentLoaded}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          ) : (
            <></>
          )}
        </form>
      </Form>

      {pageType === 'markdown' ? (
        <>
          <Separator className="mt-5" />
          <Label className="text-lg">Edit in Markdown Editor</Label>
          <MarkdownEditor
            mounted={mounted}
            value={editorContent}
            onChange={setEditorContent}
            editorHeight="calc(100vh / 3)"
          />
        </>
      ) : (
        <></>
      )}

      {pageType === 'full-width' ? (
        <>
          <Separator className="mt-5" />
          <Label className="text-lg">Edit in Full-Width Page Designer</Label>
          <Button className='bg-blue-500 hover:bg-blue-600 text-white text-lg' onClick={handleOpenPageDesigner}>Open Page Designer</Button>
        </>
      ) : (
        <></>
      )}      



    </>
  )
}
