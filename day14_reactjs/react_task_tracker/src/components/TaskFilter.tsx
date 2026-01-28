type Filter = "all" | "active" | "completed";

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export default function TaskFilter({ filter, setFilter }: Props) {
  return (
    <div className="filters">
      {["all", "active", "completed"].map(f => (
        <button
          key={f}
          className={filter === f ? "active" : ""}
          onClick={() => setFilter(f as Filter)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
