"use client"

import { api } from '@/trpc/client'
import { toast } from 'sonner'

export const createPostMutation = api.posts.create.useMutation({
    onSuccess: (newPost) => {
      console.log('onSuccess >>> newPost >>> ', newPost)
    },
    onError: (error) =>
      toast('Failed to Create User', {
        duration: 2000,
        description: error.message,
      }),
  })

export const isCreatingPost = createPostMutation.isLoading

export function handlePostPublish(postId: any) {
    const setPostPublishedMutation = api.posts.setStatusPublished.useMutation({
      onSuccess: (updatedPost) => {
        console.log('onSuccess >>> updatedPost >>> ', updatedPost)
      },
      onError: (error) => toast('Failed to Publish', {
        duration: 2000,
        description: error.message,
      }),
    })
  
    const isPublishingPost = setPostPublishedMutation.isLoading
  
    const PublishPost = async () => {
      console.log('Entered: PublishPost')
      if (!postId) {
        console.log("Failed to Publish - No Post ID !")
        toast("Cannot Publish!")
        return
      }
      return await setPostPublishedMutation.mutateAsync({
        id: postId
      })
    }
    return { PublishPost, isPublishingPost }
  }