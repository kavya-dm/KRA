import React from 'react';


interface Props {
input: string;
setInput: (value: string) => void;
addTodo: () => void;
}


const TodoForm: React.FC<Props> = ({ input, setInput, addTodo }) => {
return (
<div className="todo-form">
<input
value={input}
onChange={e => setInput(e.target.value)} // Update state on typing
placeholder="Enter a todo"
/>
<button onClick={addTodo}>Add</button> {/* Handle click */}
</div>
);
};


export default TodoForm;