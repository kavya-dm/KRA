// // Edit Todo page (stable with file storage)

// import { notFound } from 'next/navigation'
// import { revalidatePath } from 'next/cache'
// import { getTodoById, updateTodo, deleteTodo } from '@/lib/todo-store'

// type PageProps = {
//   params: Promise<{ id: string }>
// }

// export default async function TodoDetailPage({ params }: PageProps) {
//   const { id } = await params
//   const todo = getTodoById(id)

//   if (!todo) notFound()

//   async function update(formData: FormData) {
//     'use server'

//     updateTodo(id, {
//       title: formData.get('title') as string,
//       description: formData.get('description') as string,
//       completed: formData.get('completed') === 'on',
//     })

//     revalidatePath('/todos')
//   }

//   async function remove() {
//     'use server'
//     deleteTodo(id)
//     revalidatePath('/todos')
//   }

//   return (
//     <form action={update} className="space-y-4 max-w-md">
//       <h1 className="text-xl font-bold">Edit Todo</h1>

//       <input
//         name="title"
//         defaultValue={todo.title}
//         required
//         minLength={3}
//         className="border p-2 w-full rounded"
//       />

//       <textarea
//         name="description"
//         defaultValue={todo.description}
//         className="border p-2 w-full rounded"
//       />

//       <label className="flex gap-2 items-center">
//         <input
//           type="checkbox"
//           name="completed"
//           defaultChecked={todo.completed}
//         />
//         Completed
//       </label>

//       <div className="flex gap-3">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">
//           Update
//         </button>

//         <form action={remove}>
//           <button className="bg-red-600 text-white px-4 py-2 rounded">
//             Delete
//           </button>
//         </form>
//       </div>
//     </form>
//   )
// }

import { notFound } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import {
  getTodoById,
  updateTodo,
  deleteTodo,
} from '@/lib/todo-store'

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function TodoDetailPage({ params }: PageProps) {
  // ✅ MUST await params
  const { id } = await params

  const todo = getTodoById(id)
  if (!todo) notFound()

  async function update(formData: FormData) {
    'use server'

    updateTodo(id, {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      completed: formData.get('completed') === 'on',
    })

    revalidatePath('/todos')
  }

  async function remove() {
    'use server'
    deleteTodo(id)
    revalidatePath('/todos')
  }

  return (
    <form action={update} className="space-y-4 max-w-md">
      <h1 className="text-xl font-bold">Edit Todo</h1>

      <input
        name="title"
        defaultValue={todo.title}
        className="border p-2 w-full"
        required
      />

      <textarea
        name="description"
        defaultValue={todo.description}
        className="border p-2 w-full"
      />

      <label className="flex gap-2 items-center">
        <input
          type="checkbox"
          name="completed"
          defaultChecked={todo.completed}
        />
        Completed
      </label>

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update
        </button>

        <button
          type="submit"
          formAction={remove}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </form>
  )
}
