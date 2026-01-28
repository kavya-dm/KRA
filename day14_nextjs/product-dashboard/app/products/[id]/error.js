"use client";

// Error UI for product page
export default function Error({ reset }) {
  return (
    <div>
      <p>Something went wrong.</p>
      <button onClick={reset} className="text-blue-600">Retry</button>
    </div>
  );
}
