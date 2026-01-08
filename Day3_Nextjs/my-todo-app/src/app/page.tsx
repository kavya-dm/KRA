// Home page with link to Todos
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Next.js 15 Todo App</h1>
      <Link
        href="/todos"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        Go to Todos
      </Link>
    </div>
  )
}
