import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodosService {
  // In-memory todo storage
  private todos: Todo[] = [];
  private idCounter = 1;

  // Create a new todo
  create(todo: Omit<Todo, 'id'>): Todo {
    const newTodo = { id: this.idCounter++, ...todo };
    this.todos.push(newTodo);
    return newTodo;
  }

  // Get all todos
  findAll(): Todo[] {
    return this.todos;
  }

  // Get a todo by ID
  findOne(id: number): Todo {
    const todo = this.todos.find(t => t.id === id);
    if (!todo) throw new NotFoundException('Todo not found');
    return todo;
  }

  // Update a todo by ID
  update(id: number, updates: Partial<Todo>): Todo {
    const todo = this.findOne(id);
    Object.assign(todo, updates);
    return todo;
  }

  // Delete a todo by ID
  delete(id: number): void {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) throw new NotFoundException('Todo not found');
    this.todos.splice(index, 1);
  }
}
