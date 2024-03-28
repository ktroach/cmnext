import dayjs from 'dayjs'
import { humanizeDate } from '@/lib/dates'

export const SortByDate = (posts: any[], sortOrder?: string) => {
  if (!posts) {
    return []
  }
  // assumes the name of the property field is 'date'
  // also, this will sort the array in place
  posts.sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1))
  if (sortOrder && sortOrder.toUpperCase() === 'DESC') {
    // will reverse the array in place
    posts.reverse()
  }

  return posts
}

export const SortAndSliceByDate = (
  posts: any[],
  sortOrder: string,
  sliceStart: number,
  sliceEnd: number
) => {
  if (!posts) {
    return []
  }
  const sortedPosts: any[] = sortOrder
    ? SortByDate(posts, sortOrder)
    : SortByDate(posts)
  const slicedPosts: any[] = sortedPosts
    ? sortedPosts.slice(sliceStart, sliceEnd)
    : []
  return slicedPosts
}

export const HumanizeDates = (posts: any[]) => {
  if (!posts) {
    return []
  }
  posts.map((post) => {
    if (post?.date) {
      post.date = humanizeDate(post.date)
    }
  })
  return posts
}
