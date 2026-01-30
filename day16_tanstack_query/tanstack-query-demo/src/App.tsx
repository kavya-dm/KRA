// Main app wiring components together

import { useState } from 'react'
import PostsList from './components/PostsList'
import PostDetails from './components/PostDetails'
import CreatePostForm from './components/CreatePostForm'
import QueryStats from './components/QueryStats'

export default function App() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  return (
    <div>
      <h1>TanStack Query Demo</h1>
      <CreatePostForm />
      <PostsList onSelect={setSelectedPost} />
      <PostDetails postId={selectedPost} />
      <QueryStats />
    </div>
  )
}
