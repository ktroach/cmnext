'use client'

import React, { useState, useEffect } from 'react'
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

type Inputs = z.infer<typeof blogSchema>

export function AddEditContent(params: any) {
  const mounted = useMounted()
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const [editorContent, setEditorContent] =
    React.useState<any>('Just start typing!')
  const [postId, setPostId] = React.useState<any>()
  const [pageId, setPageId] = React.useState<any>()
  const [contentLoaded, setContentLoaded] = React.useState<boolean>()
  const [content, setContent] = React.useState<any>()
  const [title, setTitle] = React.useState<any>()
  const [titleSearch, setTitleSearch] = React.useState<string | undefined>()
  const [contentStatus, setContentStatus] = React.useState<any>()

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
  function handlePagePublish(pageId: any) {
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
      if (!pageId) {
        console.log('Failed to Publish - Missing pageId')
        toast('Something went wrong when Publishing. Please try again.')
        return
      }
      return await setPagePublishedMutation.mutateAsync({
        id: pageId,
      })
    }
    return { PublishPage, isPublishingPage }
  }

  const subsiteData: any = params?.subsite ? params.subsite : undefined
  const authorIdData = subsiteData && subsiteData?.userId ? subsiteData.userId : undefined
  const subSiteIdData = subsiteData && subsiteData?.subsiteId ? subsiteData.subsiteId : undefined
  const { isLoading, data: postData } = api.posts.getPost.useQuery({
    title: titleSearch,
    authorId: authorIdData, 
    subsiteId: subSiteIdData, 
  })
  if (!isLoading && postData) {
    console.log('postData >>> ', postData)
    if (!content) {
      setContent(postData)
      setContentStatus(postData?.status)
      setContentLoaded(true)
    }
  }    

  const form = useForm<Inputs>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
      body: '',
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
    console.log('>>> EditContent >>> requiredInputs >>> ', requiredInputs)
    return null
  }

  const getEditMutationVariables = () => {
    let mutationVars: any = null
    if (params?.isPost) {
      if (!postId) {
        return null
      }
      mutationVars = {
        postId: postId,
        content: editorContent,
      }
    } else {
      if (!pageId) {
        return null
      }
      mutationVars = {
        pageId: pageId,
        content: editorContent,
      }
    }
    return mutationVars
  }

  const getCreateMutationVariables = () => {
    const formControl = form.getValues()
    const title = formControl.title
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

    let inputsValid: boolean = verifyInput(title)
    if (inputsValid) inputsValid = verifyInput(subref)
    if (inputsValid) inputsValid = verifyInput(userId)
    if (inputsValid) inputsValid = verifyInput(subsiteId)
    if (inputsValid) inputsValid = verifyInput(coverImage)
    if (inputsValid) {
      const mutationVars: any = {
        subRef: subref,
        title: title,
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

    if (params?.isNew) {
      savedContent = await CreateContent()
    } else {
      savedContent = await EditContent()
    }

    console.log('>>> saveDraft >>> savedContent >>> ', savedContent)

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
  }

  const { PublishPost, isPublishingPost } = handlePostPublish(postId)
  const { PublishPage, isPublishingPage } = handlePagePublish(pageId)

  const publishChanges = async () => {
    if (params?.isPost) {
      return await PublishPost()
    } else {
      return await PublishPage()
    }
  }

  const contentIsUpdating: boolean =
    isPending ||
    isCreatingPage ||
    isCreatingPost ||
    isPublishingPost ||
    isPublishingPage

  return (
    <>
      <PublisherToolbar
        isBlog
        status={contentStatus}
        closeEditor={closeEditor}
        saveDraft={saveDraft}
        publishChanges={publishChanges}
        publishDisabled={params?.isNew}
        isUpdating={contentIsUpdating}
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
                <FormLabel className="text-lg">Blog Title</FormLabel>
                <FormControl>
                  <Input
                    disabled={contentLoaded}
                    placeholder="Title of your post..."
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
                <FormLabel className="text-lg">Blog Description</FormLabel>
                <FormControl>
                  <Input
                    className="hover:border-blue-500 border-blue-400"
                    placeholder="Give your blog a description..."
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
                  title="If blank, AI will generate cover image based on title"
                >
                  Cover Image URL (Optional)
                </FormLabel>
                <FormControl>
                  <Input
                    className="hover:border-blue-500 border-blue-400"
                    title="If blank, AI will generate cover image based on title"
                    placeholder="Type in the Image URL or Keywords..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator />
          <Label className="text-lg">Blog Content</Label>
        </form>
      </Form>
      <MarkdownEditor
        mounted={mounted}
        value={editorContent}
        onChange={setEditorContent}
        editorHeight="calc(100vh / 3)"
      />
    </>
  )
}
