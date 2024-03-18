"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/styles/icons"
import { blogSchema } from "@/validations/blog"

type Inputs = z.infer<typeof blogSchema>

import { MdEditor, type ToolbarNames } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export function AddBlogPostForm() {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();
  const [body, setBody] = useState("");
  const [isGenerating, setIsGenerating] = useState(false); 
  const [image, setImage] = useState("");

  const toolbarOptions: ToolbarNames[] = [
    'bold',
    'underline',
    'italic',
    '-',
    'strikeThrough',
    'title',
    'sub',
    'sup',
    'quote',
    'unorderedList',
    'orderedList',    
    '-',
    'revoke',
    'next',    
    '-',
    'pageFullscreen',
    'fullscreen',
    'preview',
    'htmlPreview',
    'catalog',    
  ]; 

  const form = useForm<Inputs>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      body: "",
    },
  })

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
        console.log(">>> onSubmit >>> input data >>> ", data);
        const response = await fetch("/api/blog/create", {
          method: "POST",
          body: JSON.stringify({
            title: data.title,
            description: data.description,
            image: "/_next/image?url=%2Fimages%2Fblog%2Fblog-two.jpg&w=750&q=75",
            body: body
          }),
        });

        console.log(">>> response >>> ", response);
        toast.success("Blog added successfully.")
        form.reset()
        router.push("/admin/blog")
      } catch (err) {
        console.error(err)
      }
    })
  }

  function handleSave() {
    console.log(">>> form.getValues() >>> ", form.getValues());
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
                <FormLabel>Title</FormLabel>
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
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Give your blog a description..." {...field} />
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
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="Type in the Image URL or Keywords..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Separator />
          <Label>Body</Label>
          <MdEditor modelValue={body} onChange={setBody} language='en-US' onSave={handleSave} toolbars={toolbarOptions} />

          <Button className='h-auto bg-blue-500 hover:bg-blue-700' disabled={isPending}>
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