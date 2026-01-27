import React from 'react';
import { Todo } from '../types/Todo';


interface Props {
todo: Todo;
toggleTodo: (id: number) => void;
deleteTodo: (id: number) => void;
}


const TodoItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
return (
<li className={todo.completed ? 'completed' : ''}>
<input
type="checkbox"
checked={todo.completed}
onChange={() => toggleTodo(todo.id)}
/>
{todo.text}
<button onClick={() => deleteTodo(todo.id)}>X</button>
</li>
);
};


export default TodoItem;