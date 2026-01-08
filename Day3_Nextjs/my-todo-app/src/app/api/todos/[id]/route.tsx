import { NextResponse } from 'next/server'
import { getTodoById, updateTodo, deleteTodo } from '@/lib/todo-store'

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const todo = getTodoById(params.id)
  if (!todo) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(todo)
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json()
  const todo = updateTodo(params.id, body)

  if (!todo)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return NextResponse.json(todo)
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const success = deleteTodo(params.id)
  if (!success)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })

  return new NextResponse(null, { status: 204 })
}
