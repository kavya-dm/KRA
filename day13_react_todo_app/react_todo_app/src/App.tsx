import React, { useState, useEffect, useCallback } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
// import {Todo }  from '../types/Todo';

export interface Todo {
id: number;
text: string;
completed: boolean;
}


const App: React.FC = () => {
// State for todos list
const [todos, setTodos] = useState<Todo[]>([]);


// State for input field
const [input, setInput] = useState('');


// State for filter
const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');


// Load todos from localStorage on first render
useEffect(() => {
const stored = localStorage.getItem('todos');
if (stored) setTodos(JSON.parse(stored));
}, []);


// Save todos to localStorage when todos change
useEffect(() => {
localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);


// Add new todo
const addTodo = () => {
if (!input.trim()) return;
setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
setInput('');
};


// Toggle completion status
const toggleTodo = useCallback((id: number) => {
setTodos(todos.map(todo =>
todo.id === id ? { ...todo, completed: !todo.completed } : todo
));
}, [todos]);


// Delete todo
const deleteTodo = useCallback((id: number) => {
setTodos(todos.filter(todo => todo.id !== id));
}, [todos]);


// Filtered todos based on filter state
const filteredTodos = todos.filter(todo => {
if (filter === 'active') return !todo.completed;
if (filter === 'completed') return todo.completed;
return true;
});


return (
<div className="app">
<h1>React Todo List</h1>
<TodoForm input={input} setInput={setInput} addTodo={addTodo} />
<TodoFilter filter={filter} setFilter={setFilter} />
<TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
</div>
);
};


export default App;