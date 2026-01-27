import React from 'react';


interface Props {
filter: string;
setFilter: (value: 'all' | 'active' | 'completed') => void;
}


const TodoFilter: React.FC<Props> = ({ filter, setFilter }) => {
return (
<div className="filters">
<button onClick={() => setFilter('all')}>All</button>
<button onClick={() => setFilter('active')}>Active</button>
<button onClick={() => setFilter('completed')}>Completed</button>
</div>
);
};


export default TodoFilter;