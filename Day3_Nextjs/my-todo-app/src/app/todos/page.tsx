// List all todos + create + delete (Server Component)

import { revalidatePath } from 'next/cache'
import Link from 'next/link'
import { getTodos, deleteTodo, createTodo } from '@/lib/todo-store'

export default async function TodosPage() {
  const todos = getTodos()

  async function addTodo(formData: FormData) {
    'use server'
    const title = formData.get('title') as string
    const description = formData.get('description') as string

    if (!title || title.length < 3) return

    createTodo(title, description)
    revalidatePath('/todos')
  }

  async function removeTodo(id: string) {
    'use server'
    deleteTodo(id)
    revalidatePath('/todos')
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Todos</h1>

      {/* Add Todo */}
      <form action={addTodo} className="grid gap-2 max-w-md">
        <input
          name="title"
          placeholder="Title"
          required
          minLength={3}
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          className="border p-2 rounded"
        />
        <button className="bg-green-600 text-white py-2 rounded">
          Add Todo
        </button>
      </form>

      {/* Todo Table */}
      <div className="overflow-x-auto">
        <table className="w-full border mt-4">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id} className="border-t">
                <td className="p-2">{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.completed ? 'Done' : 'Pending'}</td>
                <td>{todo.createdAt.toLocaleDateString()}</td>
                <td className="space-x-2">
                  <Link
                    href={`/todos/${todo.id}`}
                    className="text-blue-600"
                  >
                    Edit
                  </Link>
                  <form
                    action={async () => {
                      'use server'
                      await removeTodo(todo.id)
                    }}
                    className="inline"
                  >
                    <button className="text-red-600">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
