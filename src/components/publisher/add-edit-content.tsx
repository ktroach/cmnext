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
import { Icons } from '@/styles/icons'
import { useMounted } from '@/hooks/use-mounted'
import {
  handlePostPublish,
  createPostMutation,
  isCreatingPost,
} from '@/lib/contentMutations'
import { RootConfig } from '@/config/root-config'

type Inputs = z.infer<typeof blogSchema>

export function AddEditContent(params: any) {
  const mounted = useMounted()
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const [editorContent, setEditorContent] =
    React.useState<any>('Just start typing!')
  const [postId, setPostId] = React.useState<any>()

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
    console.log('Entered: CreatePost')
    const requiredInputs: any = getMutationVariables()
    if (requiredInputs !== null) {
      if (params?.isPost) {
        return await createPostMutation.mutateAsync(requiredInputs)
      }
      return await createPostMutation.mutateAsync(requiredInputs)
    }
    return null
  }

  const getMutationVariables = () => {
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

    let valid: boolean = verifyInput(title)
    if (valid) valid = verifyInput(subref)
    if (valid) valid = verifyInput(userId)
    if (valid) valid = verifyInput(subsiteId)
    if (valid) valid = verifyInput(coverImage)
    if (valid) {
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
    let isValid = input && typeof(input) !== 'undefined' ? true : false 
    if (typeof(input) === 'number' && input === 0) isValid = false
    if (typeof(input) === 'string' && input.length === 0) isValid = false
    return isValid 
  }

  const saveDraft = async () => {
    // isNew ?
    const post: any = await CreateContent()
    console.log('after CreatePost >>> post >>> ', post)
    if (post?.id) {
      setPostId(post.id)
    }

    if (!post) {
      console.log('There was a problem creating the post')
      toast('There was a problem saving draft. Please try again.')
      return
    }
  }

  const { PublishPost, isPublishingPost } = handlePostPublish(postId)

  const publishChanges = async () => {
    if (params?.isPost) {
      await PublishPost()
    } else {
      await PublishPage()
    }
  }

  if (isPending) {
    return <>Loading...</>
  }

  return (
    <>
      <PublisherToolbar
        isBlog
        status={params?.status}
        closeEditor={closeEditor}
        saveDraft={saveDraft}
        publishChanges={publishChanges}
        publishDisabled={params?.isNew}
      />
      {(isCreatingPost || isPublishingPost) ?? (
        <Icons.spinner
          className="mr-2 h-4 w-4 animate-spin"
          aria-hidden="true"
        />
      )}
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
                    placeholder="Title goes here..."
                    {...field}
                    className="hover:border-blue-500 border-blue-400"
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
