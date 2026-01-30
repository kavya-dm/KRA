// Demonstrates useMutation with optimistic updates

import { useState } from 'react'
import { useCreatePost } from '../query/mutations'

export default function CreatePostForm() {
  const [title, setTitle] = useState('')
  const mutation = useCreatePost()

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={() => mutation.mutate({ title, body: 'Demo', userId: 1 })}>
        Add Post
      </button>
      {mutation.isError && <p>Error creating post</p>}
    </div>
  )
}
