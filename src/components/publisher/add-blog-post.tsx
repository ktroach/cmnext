'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
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
import { Icons } from '@/styles/icons'
import { blogSchema } from '@/validations/blog'
import { PublisherToolbar } from '@/components/publisher/publisher-toolbar'
import { MarkdownEditor } from '@/components/editor'

type Inputs = z.infer<typeof blogSchema>

export function AddBlogPostForm() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const [editorValue, setEditorValue] = React.useState<any>('Just start typing!')

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
        // TODO: TRPC call
        console.log(">>> editorValue >>> ", editorValue)
      } catch (err) {
        console.error(err)
      }
    })
  }

  return (
    <>
      <PublisherToolbar editorValue={editorValue} isPage={false} />
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
                <FormLabel className='text-lg'>Blog Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title goes here..." {...field}  className='hover:border-blue-500 border-blue-400' />
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
                <FormLabel className='text-lg'>Blog Description</FormLabel>
                <FormControl>
                  <Input
                  className='hover:border-blue-500 border-blue-400'
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
                <FormLabel className='text-lg' title='If blank, AI will generate cover image based on title'>Cover Image URL (Optional)</FormLabel>
                <FormControl>
                  <Input 
                    className='hover:border-blue-500 border-blue-400'
                    title='If blank, AI will generate cover image based on title'
                    placeholder="Type in the Image URL or Keywords..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator />
          <Label className='text-lg' >Blog Content</Label>

        </form>
      </Form>
      <MarkdownEditor value={editorValue} onChange={setEditorValue} editorHeight="calc(100vh / 3)" />
    </>
  )
}
