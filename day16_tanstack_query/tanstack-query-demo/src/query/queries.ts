// All useQuery hooks live here

import { useQuery } from '@tanstack/react-query'
import { Post, User } from '../types'

const API_URL = 'https://jsonplaceholder.typicode.com'

// Fetch all posts
export const usePosts = () =>
  useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch(`${API_URL}/posts`)
      if (!res.ok) throw new Error('Failed to fetch posts')
      return res.json()
    }
  })

// Fetch single post
export const usePost = (postId: number | null) =>
  useQuery<Post>({
    queryKey: ['post', postId],
    enabled: !!postId, // prevents running without id
    queryFn: async () => {
      const res = await fetch(`${API_URL}/posts/${postId}`)
      if (!res.ok) throw new Error('Failed to fetch post')
      return res.json()
    }
  })

// Fetch user details
export const useUser = (userId?: number) =>
  useQuery<User>({
    queryKey: ['user', userId],
    enabled: !!userId,
    queryFn: async () => {
      const res = await fetch(`${API_URL}/users/${userId}`)
      if (!res.ok) throw new Error('Failed to fetch user')
      return res.json()
    }
  })
