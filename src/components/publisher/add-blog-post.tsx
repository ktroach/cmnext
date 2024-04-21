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
import { api } from '@/trpc/client'

type Inputs = z.infer<typeof blogSchema>

export function AddBlogPostForm(params: any) {
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
    const subref = params?.subRef ? params.subRef : undefined
    console.log('close editor called: ', subref)
    if (subref) {
      const url = `${window.location.origin}/publish/${subref}/blogs`
      router.push(url)
    }
  }

  const createPostMutation = api.posts.create.useMutation({
    onSuccess: (newPost) => {
      console.log('onSuccess >>> newPost >>> ', newPost)
    },
    onError: (error) =>
      toast('Failed to Create User', {
        duration: 2000,
        description: error.message,
      }),
  })

  const isCreatingPost = createPostMutation.isLoading

  const CreatePost = async () => {
    console.log('Entered: CreatePost')
    const formControl = form.getValues()
    const title = formControl.title
    const subref = params?.subRef ? params.subRef : undefined
    const slug = `/${subref}/blogs/${title}`
    return await createPostMutation.mutateAsync({
      subRef: subref,
      title: title,
      description: formControl.description ?? "blog post",
      image: formControl.image ?? "default.png",
      content: editorContent,
      slug: slug,
    })
  }

  const saveDraft = async () => {
    const post: any = await CreatePost()
    console.log('after CreatePost >>> post >>> ', post)
    if (post?.id) {
      setPostId(post.id)
    }

    if (!post) {
      console.log(
        'There was a problem creating the post'
      )
      toast('There was a problem saving draft. Please try again.')
      return
    }
  }

  const setPublishedMutation = api.posts.setStatusPublished.useMutation({
    onSuccess: (updatedPost) => {
      console.log('onSuccess >>> updatedPost >>> ', updatedPost)
    },
    onError: (error) =>
      toast('Failed to Publish', {
        duration: 2000,
        description: error.message,
      }),    
  })

  const isPublishingPost = setPublishedMutation.isLoading

  const PublishPost = async () => {
    console.log('Entered: PublishPost')
    if (!postId) {
      console.log("Failed to Publish - No Post ID !")
      toast("Cannot Publish!")
      return
    }
    return await setPublishedMutation.mutateAsync({
      id: postId
    })
  }

  const publishChanges = async () => {
    await PublishPost()
  }

  if (isPending) {
    return <>Loading...</>
  }

  return (
    <>
      {/* <p>On Client: {params.subRef}</p> */}
      <PublisherToolbar
        isBlog
        status={params?.status}
        closeEditor={closeEditor}
        saveDraft={saveDraft}
        publishChanges={publishChanges}
      />
      {(isCreatingPost || isPublishingPost) ??
        <Icons.spinner
          className="mr-2 h-4 w-4 animate-spin"
          aria-hidden="true"
        />      
      }
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
