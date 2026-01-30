// Shows selected post and cached user info

import { usePost, useUser } from '../query/queries'

export default function PostDetails({ postId }: { postId: number | null }) {
  const { data: post, isLoading } = usePost(postId)
  const { data: user } = useUser(post?.userId)

  if (!postId) return <p>Select a post</p>
  if (isLoading) return <p>Loading post...</p>

  return (
    <div>
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
      <p><strong>Author:</strong> {user?.name}</p>
    </div>
  )
}
