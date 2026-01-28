import { Task } from "../App";

interface Props {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function TaskList({ tasks, toggleTask, deleteTask }: Props) {
  if (tasks.length === 0) return null;

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? "done" : ""}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {task.text}
          <button onClick={() => deleteTask(task.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}
