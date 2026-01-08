import { NextResponse } from 'next/server'
import { createTodo, getTodos } from '@/lib/todo-store'

export async function GET() {
  return NextResponse.json(getTodos())
}

export async function POST(req: Request) {
  const { title, description } = await req.json()

  if (!title || title.length < 3) {
    return NextResponse.json(
      { error: 'Title must be at least 3 characters' },
      { status: 400 }
    )
  }

  const todo = createTodo(title, description || '')
  return NextResponse.json(todo, { status: 201 })
}
