interface Props {
  input: string;
  setInput: (value: string) => void;
  addTask: () => void;
}

export default function TaskForm({ input, setInput, addTask }: Props) {
  return (
    <div className="form">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={addTask} disabled={!input.trim()}>
        Add
      </button>
    </div>
  );
}
