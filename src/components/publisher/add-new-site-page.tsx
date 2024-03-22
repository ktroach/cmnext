'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
// import { toast } from "sonner"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Icons } from '@/styles/icons'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { pageSchema } from '@/validations/page'
import { PublisherToolbar } from '@/components/publisher/publisher-toolbar'
import { MarkdownEditor } from '@/components/editor'
import Link from 'next/link'

type Inputs = z.infer<typeof pageSchema>

export function AddNewSitePageForm() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const [body, setBody] = useState('')
  const [editorValue, setEditorValue] =
    React.useState<any>('Just start typing!')

  let allPages: any = []

  allPages.push({ value: 'home', title: 'Home' })
  allPages.push({ value: 'me', title: 'Me ' })
  allPages.push({ value: 'you', title: 'You ' })

  const form = useForm<Inputs>({
    resolver: zodResolver(pageSchema),
    defaultValues: {
      title: '',
      description: '',
      image: '',
      body: '',
      parentPage: '',
    },
  })

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        // console.log(">>> onSubmit >>> input data >>> ", data);
        // const response = await fetch("/api/blog/create", {
        //   method: "POST",
        //   body: JSON.stringify({
        //     title: data.title,
        //     description: data.description,
        //     image: "/_next/image?url=%2Fimages%2Fblog%2Fblog-two.jpg&w=750&q=75",
        //     body: body
        //   }),
        // });
        // console.log(">>> response >>> ", response);
        // toast.success("Blog added successfully.")
        // form.reset()
        // router.push("/admin/blog")
      } catch (err) {
        console.error(err)
      }
    })
  }

  return (
    <>
      <PublisherToolbar editorValue={editorValue} isPage={true} />
      <Form {...form}>
        <form
          className="grid gap-4"
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        >
          <FormField
            control={form.control}
            name="parentPage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent Page</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="You can select a parent page for this page to go under" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="page-1">Home</SelectItem>
                    {/* {allPages?.map((pageItem: any) => {
                        <SelectItem value={pageItem.value}>
                          {pageItem.title}
                        </SelectItem>
                    })} */}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can select a parent page for this page to go under on the
                  Navigation Menu of your site
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Page Title</FormLabel>
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
                <FormLabel>Page Description</FormLabel>
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
          <MarkdownEditor
            value={editorValue}
            onChange={setEditorValue}
            editorHeight={1600}
            hideToolbar={false}
          />
          {/* <Button type="submit">Submit</Button> */}
        </form>
      </Form>
    </>
  )
}
