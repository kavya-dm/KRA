// All useMutation hooks live here

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Post } from '../types'

const API_URL = 'https://jsonplaceholder.typicode.com'

// Create post mutation with optimistic update
export const useCreatePost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newPost: Omit<Post, 'id'>) => {
      const res = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: { 'Content-Type': 'application/json' }
      })
      if (!res.ok) throw new Error('Create failed')
      return res.json()
    },

    onMutate: async newPost => {
      await queryClient.cancelQueries({ queryKey: ['posts'] })

      const previousPosts = queryClient.getQueryData<Post[]>(['posts'])

      queryClient.setQueryData<Post[]>(['posts'], old => [
        ...(old || []),
        { ...newPost, id: Date.now() }
      ])

      return { previousPosts }
    },

    onError: (_err, _newPost, context) => {
      queryClient.setQueryData(['posts'], context?.previousPosts)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  })
}
