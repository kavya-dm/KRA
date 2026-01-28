# 📝 Task Tracker App (React + TypeScript)

A beginner-friendly **Task Tracker** application built using **React with TypeScript**. This project focuses only on **core React fundamentals**, common hooks, and clean design patterns — no Redux, no Context, no routing.

---

## 🚀 Features

* Add new tasks
* Mark tasks as completed
* Delete tasks
* Filter tasks (All / Active / Completed)
* Persist tasks using `localStorage`
* Responsive, minimal UI

---

## 📂 Project Structure

```
src/
 ├─ components/
 │   ├─ TaskForm.tsx      # Input form to add tasks
 │   ├─ TaskList.tsx      # Displays task list
 │   └─ TaskFilter.tsx    # Filter buttons
 │
 ├─ App.tsx               # Main state & logic
 ├─ App.css               # Styling
 ├─ index.tsx             # App entry point
```

---

## 🧠 Core Concepts Used (With Definitions)

### 1️⃣ React Functional Components

**Definition:**
A function that returns JSX to render UI.

**Used because:**

* Simpler
* Easier to read
* Recommended by React

```tsx
function App() {
  return <div>Hello</div>;
}
```

---

### 2️⃣ `useState` Hook

**Definition:**
`useState` lets a component store and update state.

**Used for:**

* Task list
* Input field value
* Filter status

```ts
const [tasks, setTasks] = useState<Task[]>([]);
```

✅ Enables re-rendering when data changes

---

### 3️⃣ `useEffect` Hook

**Definition:**
Runs side effects like API calls, subscriptions, or localStorage operations.

**Used for:**

* Loading tasks on app start
* Saving tasks when they change

```ts
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```

---

### 4️⃣ TypeScript `interface`

**Definition:**
Defines the shape (structure) of an object.

```ts
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}
```

**Why we use it:**

* Type safety
* Better auto-complete
* Prevents runtime bugs

---

### 5️⃣ Single Source of Truth

**Definition:**
All shared state lives in **one place**.

**Used here:**

* All state is stored in `App.tsx`
* Child components only receive data via props

✅ Makes debugging easier

---

### 6️⃣ Lifting State Up

**Definition:**
Moving shared state to a common parent component.

**Used because:**

* Multiple components need access to the same data

```tsx
<TaskForm input={input} setInput={setInput} />
```

---

### 7️⃣ Controlled Components

**Definition:**
Form elements whose value is controlled by React state.

```tsx
<input value={input} onChange={e => setInput(e.target.value)} />
```

✅ React controls the UI state

---

### 8️⃣ Conditional Rendering

**Definition:**
Render UI based on conditions.

```tsx
{tasks.length === 0 && <p>No tasks yet</p>}
```

---

### 9️⃣ List Rendering with Keys

**Definition:**
Rendering arrays using `.map()` with unique `key`.

```tsx
<li key={task.id}>{task.text}</li>
```

✅ Helps React optimize re-rendering

---

### 🔟 LocalStorage Persistence

**Definition:**
Browser storage to save data across page refreshes.

```ts
localStorage.setItem("tasks", JSON.stringify(tasks));
```

✅ Tasks remain after refresh

---

## 🛠️ Setup Instructions

```bash
npx create-react-app task-tracker --template typescript
cd task-tracker
npm start
```

---


