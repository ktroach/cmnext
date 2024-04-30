'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'
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
import { useMounted } from '@/hooks/use-mounted'

type Inputs = z.infer<typeof pageSchema>

export function AddNewSitePageForm(params: any) {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()
  const [editorContent, setEditorContent] = React.useState<any>('')
  const [contentStatus, setContentStatus] = React.useState<string>('DRAFT')

  const mounted = useMounted()
  console.log("mounted: ", mounted)

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

  const getCurrentStatus = async () => {
    setContentStatus('REVIEW')
    return
    const subref = params?.subRef ? params.subRef : undefined
    const token = params?.token ? params.token : undefined    
    const statusEndpoint = '/pages/[id]/status'
    const response = await fetch(statusEndpoint, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    console.log("response: ", response)
  }

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
    if (subref) {
      const url = `${window.location.origin}/publish/${subref}/pages`
      router.push(url)
    }
  }

  const saveDraft = async () => {
    const subref = params?.subRef ? params.subRef : undefined
    const token = params?.token ? params.token : undefined
    console.log('Saving draft...', subref)
    console.log(">>> form.getValues() >>> ", form.getValues())
    const formControl = form.getValues()
    const saveEndpoint = '/pages/save'
    const response = await fetch(saveEndpoint, {
      method: 'PATCH',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        contentType: 'page',
        title: formControl.title,
        description: formControl.description,
        image: formControl.image,
        content: editorContent,
      }),
    })
    console.log("response: ", response)
    // TODO: returns the full data with the new id of the Page
    if (response.status !== 204) {
      toast.error('Failed to Save Draft')
    }
  }

  const publishChanges = async () => {
    const subref = params?.subRef ? params.subRef : undefined
    const token = params?.token ? params.token : undefined
    console.log('Publishing changes >>> subref >>> ', subref, " >>> token >>> ", token)
    const formControl = form.getValues()
    const publishEndpoint = '/pages/publish'
    const response = await fetch(publishEndpoint, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        contentType: 'page',
        title: formControl.title,
        description: formControl.description,
        image: formControl.image,
        content: editorContent,
      }),
    })
    console.log("response: ", response)
    // TODO: returns the data of the Page
    if (response.status !== 204) {
      toast.error('Failed to Publish Page')
    }    
  }

  if (isPending) {
    return (
      <>Loading...</>
    )
  }  

  return (
    <>
      <PublisherToolbar
        status={contentStatus}        
        isBlog={false}
        closeEditor={closeEditor}
        saveDraft={saveDraft}
        publishChanges={publishChanges}        
      />
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
                    <SelectItem value=""></SelectItem>
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
            value={editorContent}
            onChange={setEditorContent}
            editorHeight="calc(100vh / 3)"
          />
        </form>
      </Form>
    </>
  )
}
