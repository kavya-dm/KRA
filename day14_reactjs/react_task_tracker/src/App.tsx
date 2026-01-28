import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

export interface Task { // It defines the “shape” of a task object so TypeScript can: catch bugs early, give autocomplete
  id: number;
  text: string;
  completed: boolean;
}

type Filter = "all" | "active" | "completed";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("tasks");
      if (saved) setTasks(JSON.parse(saved));
    } catch {
      console.error("Failed to load tasks");
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Task Tracker</h1>

      <TaskForm
        input={input}
        setInput={setInput}
        addTask={addTask}
      />

      <TaskFilter filter={filter} setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />

      {tasks.length === 0 && <p className="empty">No tasks yet</p>}
    </div>
  );
}

export default App;
