'use client'

import React, { useState, useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor'
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

type Inputs = z.infer<typeof blogSchema>

export function AddBlogPostForm() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  // const [body, setBody] = useState('')
  // const [isGenerating, setIsGenerating] = useState(false)
  // const [image, setImage] = useState('')
  const [value, setValue] = React.useState('**Just start typing!**')

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
        // TODO: tRPC call
      } catch (err) {
        console.error(err)
      }
    })
  }

  function handleSave() {
    console.log('>>> form.getValues() >>> ', form.getValues())
    // form.getValues()
    // onSubmit(inputs);
  }

  return (
    <>
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
                <FormLabel>Blog Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title goes here..." {...field} />
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
                <FormLabel>Blog Description</FormLabel>
                <FormControl>
                  <Input
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
                <FormLabel>Cover Image (URL)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Type in the Image URL or Keywords..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator />
          <Label>Blog Content (Markdown)</Label>
          <MDEditor value={value} onChange={setValue} />

          <Button
            className="h-auto bg-blue-500 hover:bg-blue-700"
            disabled={isPending}
          >
            {isPending && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Save Draft
            <span className="sr-only">Submit</span>
          </Button>
        </form>
      </Form>
    </>
  )
}
