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
import { blogSchema } from '@/validations/blog'
import { PublisherToolbar } from '@/components/publisher/publisher-toolbar'
import { MarkdownEditor } from '@/components/editor'
import { useMounted } from '@/hooks/use-mounted'
import { RootConfig } from '@/config/root-config'
import { api } from '@/trpc/client'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { getFrontendBaseUrl } from '@/lib/url'

type Inputs = z.infer<typeof blogSchema>

export function AddEditContent(params: any) {
  const mounted = useMounted()
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const [editorContent, setEditorContent] = React.useState<any>('Just start typing!')
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

  const isPage: boolean = params?.isPost ? false : true 

  // TODO: Populate from database
  const pageTemplates: any = [
    {label: 'none', value: ''},
    {label: 'full page template', value: 'full page template'},
    {label: 'image gallery template', value: 'image table template'},
    {label: 'bio page template', value: 'bio page template'},
  ]
  // TODO: Populate from database
  const parentPage: any = [
    {label: 'none', value: ''},
    {label: 'about', value: '/about'},
    {label: 'products', value: '/products'},
    {label: 'services', value: '/services'},
  ]  

  const editParams: any = params?.editParams ? params.editParams : null
  console.log('>>> AddEditContent >>> editParams >>> ', editParams)

  const editData: any =
    editParams && editParams?.editData && editParams?.editData
      ? editParams.editData
      : null

  console.log('>>> AddEditContent >>> editData >>> ', editData)      

  const editContentId: number | null = editData && editData?.id ? editData.id : null
  const editSlug: string | null = editData && editData?.slug ? editData.slug : null
  const editAuthorId: number | null = editData && editData?.authorId ? editData.authorId : null
  const editSubsiteId: number | null = editData && editData?.subsiteId ? editData.subsiteId : null
  const editStatus: string = editData && editData?.status ? editData.status : ''
  const editContent: string =
    editData && editData?.content ? editData.content : ''
  const editTitle: string = editData && editData?.title ? editData.title : ''
  console.log('>>> AddEditContent >>> editTitle >>> ', editTitle)  


  const editCoverImage: string =
    editData && editData?.coverImage ? editData.coverImage : ''

  if (!contentLoaded && editData) {
    setTitle(editTitle)
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

  const CreateContent = async () => {
    console.log('Entered: CreateContent')
    const requiredInputs: any = getCreateMutationVariables()
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

  const getCreateMutationVariables = () => {
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
      : undefined

    let inputsValid: boolean = verifyInput(titleInput)
    if (inputsValid) inputsValid = verifyInput(subref)
    if (inputsValid) inputsValid = verifyInput(userId)
    if (inputsValid) inputsValid = verifyInput(subsiteId)
    if (inputsValid) inputsValid = verifyInput(coverImage)
    if (inputsValid) {
      const mutationVars: any = {
        subRef: subref,
        title: titleInput,
        description: contentDescription,
        image: coverImage,
        content: editorContent,
        authorId: userId,
        subsiteId: subsiteId,
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
      const newPageSlug: string | undefined = savedContent && savedContent?.slug ? savedContent?.slug : undefined
      const subsite: any = params?.subsite ? params.subsite : undefined
      const subref: string = subsite?.subRef ? subsite.subRef : undefined      
      const baseUrl: string = getFrontendBaseUrl()
      const editPageUrl: string | undefined = newPageSlug && subref ? `${baseUrl}/publish/${subref}/pages/edit/${newPageSlug}` : undefined
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

  

  return (
    <>
      <PublisherToolbar
        isBlog
        status={contentStatus}
        closeEditor={closeEditor}
        saveDraft={saveDraft}
        publishChanges={publishChanges}
        publishDisabled={params?.isNew}
        isUpdating={isSaving}
        isSaveDisabled={isSaving}
      />
      <Form {...form}>
        <form
          className="grid gap-4"
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          {isPage ? (
            <>
              <FormField
                control={form.control}
                name="template"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Template</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value?.toString()}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Template" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {pageTemplates.map((option: any, index: number) => (
                              <SelectItem key={option.value} value={option.value}>
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
              <FormField
                control={form.control}
                name="parent"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Parent</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value?.toString()}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a Parent" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {parentPage.map((option: any, index: number) => (
                              <SelectItem key={option.value} value={option.value}>
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
          ) : (<></>)}

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
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Summary</FormLabel>
                <FormControl>
                  <Input
                    className="hover:border-blue-500 border-blue-400"
                    disabled={contentLoaded}
                    placeholder="Tell a summary about your content..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className="text-lg"
                  title="If blank, a random image will be assigned based on the title"
                >
                  Cover Image (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    className="hover:border-blue-500 border-blue-400"
                    disabled={contentLoaded}
                    title="If blank, the app will use a default image"
                    placeholder="https://source.unsplash.com/random/220x120"
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
          <Separator />
          <Label className="text-lg">Content Block</Label>
        </form>
      </Form>
      <MarkdownEditor
        mounted={mounted}
        value={editorContent}
        onChange={setEditorContent}
        editorHeight="calc(100vh / 3)"
      />

      {pageId ? (<p>TODO: Add/Remove Content Blocks...</p>) : (<></>)}
      
    </>
  )
}
