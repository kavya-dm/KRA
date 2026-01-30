# 📘 TanStack Query Demo (React Query v5)

This project is a **simple React + TypeScript application** built using **Create React App** to demonstrate **server-state management** with **TanStack Query (React Query v5)**.

The app uses the **JSONPlaceholder public API** to fetch, cache, and update data such as posts and users.

---

## 🚀 Tech Stack

- React 18
- TypeScript
- Create React App
- TanStack Query v5
- JSONPlaceholder API

---

## 🎯 Project Goal

To understand how **TanStack Query** manages **server state** in React applications, including:
- Data fetching
- Caching
- Background refetching
- Mutations
- Optimistic updates

---

## 🧠 Server State vs Client State

### Server State
- Data fetched from an external API
- Needs caching and synchronization
- Can become stale
- Shared across components

**Examples**
- Posts list
- Post details
- User details

Handled by **TanStack Query**

---

### Client State
- Local UI-related state
- Temporary and not shared
- Exists only in the browser

**Examples**
- Selected post ID
- Form input values

Handled by **React `useState`**

---

## 📁 Folder Structure

```

src/
├── query/
│   ├── client.ts        # QueryClient setup
│   ├── queries.ts       # All useQuery hooks
│   └── mutations.ts    # All useMutation hooks
├── components/
│   ├── PostsList.tsx
│   ├── PostDetails.tsx
│   ├── CreatePostForm.tsx
│   └── QueryStats.tsx
├── types.ts             # TypeScript types
├── App.tsx
├── index.tsx
└── index.css

````

---

## ⚙️ Project Setup

```bash
npx create-react-app tanstack-query-demo --template typescript
cd tanstack-query-demo
npm install @tanstack/react-query @tanstack/react-query-devtools
npm start
````

---

## 🔌 API Used (JSONPlaceholder)

Base URL:

```
https://jsonplaceholder.typicode.com
```

Endpoints:

```
GET  /posts
GET  /posts/:id
GET  /users/:id
POST /posts
```

---

## 🔁 TanStack Query Concepts Used

### useQuery

* Fetches data from server
* Automatically caches data
* Handles loading and error states
* Refetches data in the background

#### Important Options

* `staleTime` → how long data is considered fresh
* `gcTime` → when unused cache is garbage-collected
* `enabled` → conditional fetching
* `refetchOnWindowFocus` → refetch on tab focus

---

### useMutation

* Used for creating new posts
* Optimistic UI updates
* Rollback on error
* Cache invalidation using `invalidateQueries`

---

## 🧪 TanStack Query DevTools

* Shows cached queries
* Displays query status (loading, error, success)
* Helps debug server-state behavior

DevTools are enabled automatically in the app.

---

## ✨ App Features

* Posts list with loading and error states
* Click a post to view details and author info
* Cached data reuse across components
* Create new post with optimistic update
* Cache statistics display

---

## ✅ Learning Outcomes

By completing this project, you will understand:

* Difference between server state and client state
* How TanStack Query caches data
* How background refetching works
* How mutations update cached data
* How to structure server-state logic cleanly

---

## 📌 Notes

* Uses **ONLY Create React App**
* No custom backend required
* Fully compatible with **TanStack Query v5**
* Beginner-friendly and interview-ready project



```
