import fs from 'fs'
import path from 'path'
import { Todo } from '@/types/todo'

const filePath = path.join(process.cwd(), 'src/data/todos.json')

// Convert raw JSON into proper Todo objects
function readTodos(): Todo[] {
  const data = fs.readFileSync(filePath, 'utf-8')

  return JSON.parse(data).map((todo: any) => ({
    ...todo,
    createdAt: new Date(todo.createdAt), // ✅ FIX HERE
  }))
}

function writeTodos(todos: Todo[]) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(todos, null, 2)
  )
}

export function getTodos(): Todo[] {
  return readTodos()
}

export function getTodoById(id: string): Todo | undefined {
  return readTodos().find(t => t.id === id)
}

export function createTodo(title: string, description: string): Todo {
  const todos = readTodos()

  const todo: Todo = {
    id: crypto.randomUUID(),
    title,
    description,
    completed: false,
    createdAt: new Date(),
  }

  todos.push(todo)
  writeTodos(todos)
  return todo
}

export function updateTodo(
  id: string,
  data: Partial<Omit<Todo, 'id' | 'createdAt'>>
): Todo | null {
  const todos = readTodos()
  const index = todos.findIndex(t => t.id === id)

  if (index === -1) return null

  todos[index] = { ...todos[index], ...data }
  writeTodos(todos)
  return todos[index]
}

export function deleteTodo(id: string): boolean {
  const todos = readTodos()
  const filtered = todos.filter(t => t.id !== id)

  if (filtered.length === todos.length) return false

  writeTodos(filtered)
  return true
}
