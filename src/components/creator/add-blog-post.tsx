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

  // react-hook-form
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

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        // const generatedImage = await generateImage();

        // console.log(">>> onSubmit >>> generatedImage >>> ", generatedImage);

        // const imageUrl = data?.image ? data.image : generatedImage;  

        const response = await fetch("/api/blog/create", {
          method: "POST",
          body: JSON.stringify({
            title: data.title,
            description: data.description,
            image: "/_next/image?url=%2Fimages%2Fblog%2Fblog-two.webp&w=750&q=75",
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

  // https://chat.openai.com/c/19649322-e550-4754-8351-1ee0b7eeea99
  // const resolveResponse = async (responseObject:  Promise<Response>, propertyKey: string) => {
  //   const jsonData: unknown = (await responseObject).json();
  //   const dataObject: object | undefined = jsonData &&  Object.keys(jsonData).length > 0 ? jsonData : undefined; 
  //   const imageProp: unknown = dataObject && dataObject.hasOwnProperty(propertyKey) ? dataObject[propertyKey] : undefined; 

  // }; 

  const generateImage = async () => {
    setIsGenerating(true);
    const prompt = form.getValues().title; 
    console.log(">>>> generateImage >>> prompt >>> ", prompt);     
    const response = await fetch(`/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: `${prompt}`
      }),
    }); 
    
    const data: unknown = await response.json();
    const dataObject: object | undefined = data && Object.keys(data).length > 0 ? data : undefined; 
    const imageProp: unknown = dataObject && "url" in dataObject ? dataObject.url : undefined; 
    console.log(">>>> generateImage >>> imageProp >>> ", imageProp);     
    // setImage(imageProp);
    setIsGenerating(false);
  };  

  // const generateImageFromAI = async () => {
  //   console.log(">>>> generateImageFromAI >>>> "); 

  //   setIsGenerating(true); 

  //   const OPEN_AI_KEY = "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"; 
  //   const OPEN_AI_URL = 'https://api.openai.com/v1/images/generations';

  //   const requestHeaders = {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${OPEN_AI_KEY}`,
  //   };

  //   const prompt = form.getValues().image; 
  //   console.log(">>>> generateImageFromAI >>> prompt >>> ", prompt); 
  
  //   const requestData = {
  //     model: 'image-alpha-001',
  //     prompt,
  //     num_images: 1,
  //     size: '256x256',
  //     response_format: 'url',
  //   };
  
  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  //   const response = await axios.post(
  //     OPEN_AI_URL,
  //     requestData,
  //     requestHeaders
  //   );

  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  //   const responseData: unknown = response && response?.data ? response.data : undefined;    
  //   console.log(">>>> OpenAI >>> Response Data >>> ", responseData); 

  //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //   // const imageUrl: string = responseData && responseData?.url ? responseData.url : "";

  //   setIsGenerating(false); 

  //   return ""; 
  // }; 

  function handleSave() {
    console.log(">>> form.getValues() >>> ", form.getValues());
    // form.getValues()
    // onSubmit(inputs); 
  }


  return (
    <>
      <Label className='text-lg'>
        Start creating your blog post here. When you're done, hit "Save Draft" to save the first draft of your blog post.  This will not publish the post to the public site yet, it will just save a draft that you can publish when you're ready to.
      </Label>
      <Separator />
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
          {/* <p className='text-sm text-mute'>
            Here is where you will start typing the actual content for your blog post. 
            Notice that there are two sections. The section to the left is the editor window where you can type, and the section to the right is the preview window. 
            In the editor window, you can type your content using Markdown syntax.  
          </p> */}
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