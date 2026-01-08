# 📝 Next.js 15 Todo CRUD App (No DB, Persistent Storage)

A **production-ready Todo application** built with **Next.js 15/16 App Router**, **TypeScript**, **React Server Components**, **Server Actions**, **Route Handlers**, and **Tailwind CSS** — using **file-based JSON storage** instead of in-memory or a database.

This ensures:

* ✅ Data persistence across refreshes
* ✅ Stable edit/delete functionality
* ✅ No database setup required
* ✅ Fully compatible with Next.js 15 / 16 (Turbopack)

---

## 🚀 Features

* ✅ Full CRUD (Create, Read, Update, Delete)
* ✅ App Router (Next.js 15/16)
* ✅ React Server Components
* ✅ Server Actions (`"use server"`)
* ✅ REST API with Route Handlers
* ✅ File-based persistent storage (`todos.json`)
* ✅ Tailwind CSS responsive UI
* ✅ TypeScript end-to-end
* ✅ Validation & error handling
* ✅ Mobile-friendly UI

---

## 🧱 Tech Stack

| Technology    | Usage                      |
| ------------- | -------------------------- |
| Next.js 15/16 | App Router, Server Actions |
| TypeScript    | Type safety                |
| React         | UI                         |
| Tailwind CSS  | Styling                    |
| Node.js FS    | Persistent storage         |
| JSON file     | Database replacement       |

---

## 📁 Project Folder Structure

```txt
my-todo-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global Tailwind styles
│   │
│   │   ├── todos/                  # UI routes
│   │   │   ├── page.tsx            # Todo list page (/todos)
│   │   │   └── [id]/
│   │   │       └── page.tsx        # Edit todo page (/todos/:id)
│   │
│   │   └── api/                    # API routes
│   │       └── todos/
│   │           ├── route.ts        # GET, POST
│   │           └── [id]/
│   │               └── route.ts    # GET, PATCH, DELETE
│   │
│   ├── lib/
│   │   └── todo-store.ts           # File-based data logic
│   │
│   ├── data/
│   │   └── todos.json              # Persistent storage file
│   │
│   └── types/
│       └── todo.ts                 # Todo interface
│
├── public/
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📦 Todo Data Model

```ts
export interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: Date
}
```

---

## 💾 Storage Strategy (Important)

This project **does NOT use**:

* ❌ In-memory arrays
* ❌ SQLite
* ❌ PostgreSQL
* ❌ Prisma

Instead, it uses:

### ✅ File-based JSON storage

```txt
src/data/todos.json
```

Benefits:

* Data survives refresh & rebuild
* Simple to understand
* Perfect for demos & learning
* No random 404s while editing

---

## 🌐 Routes Overview

### UI Routes

| URL          | Description         |
| ------------ | ------------------- |
| `/`          | Home                |
| `/todos`     | List & create todos |
| `/todos/:id` | Edit / delete todo  |

### API Routes

| Method | URL              | Description   |
| ------ | ---------------- | ------------- |
| GET    | `/api/todos`     | Get all todos |
| POST   | `/api/todos`     | Create todo   |
| GET    | `/api/todos/:id` | Get one       |
| PATCH  | `/api/todos/:id` | Update        |
| DELETE | `/api/todos/:id` | Delete        |

---

## 🧪 API Testing (cURL Examples)

### Create Todo

```bash
curl -X POST http://localhost:3000/api/todos \
-H "Content-Type: application/json" \
-d '{"title":"Test Todo","description":"My task"}'
```

### Get All Todos

```bash
curl http://localhost:3000/api/todos
```

### Update Todo

```bash
curl -X PATCH http://localhost:3000/api/todos/<id> \
-H "Content-Type: application/json" \
-d '{"completed":true}'
```

### Delete Todo

```bash
curl -X DELETE http://localhost:3000/api/todos/<id>
```

---

## ▶️ Running the Project

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start development server

```bash
npm run dev
```

### 3️⃣ Open in browser

```
http://localhost:3000
```

---

## ⚠️ Important Next.js 15 / 16 Notes

### Async `params` rule

In Next.js 15+:

```ts
type PageProps = {
  params: Promise<{ id: string }>
}

const { id } = await params
```

🚫 Accessing `params.id` directly will cause runtime errors.

---

## ❗ Common Issues & Fixes

### ❓ 404 on edit page?

✔ Ensure the todo exists in `todos.json`
✔ File storage prevents random resets

### ❓ Data not saving?

✔ Check write permission for `src/data/todos.json`

### ❓ Build error about routes?

✔ UI routes and API routes must be separated
✔ APIs must live under `/app/api`

---

## 🔐 Security Notes

* All mutations are done via **Server Actions**
* No client-side data mutation
* Safe for production demos
* Can be extended with auth later

---

## 🚀 Possible Enhancements

* 🔁 Replace JSON with SQLite
* 🐘 PostgreSQL + Prisma
* 🔐 Authentication
* ⚡ Optimistic UI
* 📄 Pagination & filtering
* 🧪 Unit tests

---

## 📌 Summary

✔ Persistent data
✔ Stable edit/delete
✔ No database
✔ Next.js 15/16 ready
✔ Beginner-friendly
✔ Production-grade structure

---
👍
