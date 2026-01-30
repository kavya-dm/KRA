// Displays list of posts with loading & error states

import { usePosts } from '../query/queries'

export default function PostsList({ onSelect }: { onSelect: (id: number) => void }) {
  const { data, isLoading, isError } = usePosts()

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error loading posts</p>

  return (
    <ul>
      {data!.slice(0, 10).map(post => (
        <li key={post.id} onClick={() => onSelect(post.id)}>
          {post.title}
        </li>
      ))}
    </ul>
  )
}
