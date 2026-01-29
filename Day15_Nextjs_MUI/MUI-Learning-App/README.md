````md
# 🚀 Next.js 15 Routing Mastery – Product Dashboard

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

A **simple, beginner-friendly Product Dashboard** built with **Next.js 15 App Router** to understand **routing, navigation, and layouts**.  
Perfect for learning and portfolio use.

---

## 📑 Table of Contents
- [✨ Overview](#-overview)
- [📋 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [📚 Learning Objectives](#-learning-objectives)
- [🔍 Routing Basics](#-routing-basics)
- [📜 Golden Rules](#-golden-rules)
- [📄 License](#-license)

---

## ✨ Overview

This project demonstrates **Next.js 15 App Router fundamentals** using a real-world example.

**You will learn:**
- File-based routing
- Static and dynamic routes
- Client-side navigation
- Loading and error handling

---

## 📋 Features

- App Router (`app/` directory)
- Static routes (`/`, `/about`)
- Dynamic routes (`/products/[id]`)
- Navigation using `Link`
- Loading & error states
- Responsive Tailwind CSS UI

---

## 🛠️ Tech Stack

- **Next.js 15**
- **React**
- **TypeScript**
- **Tailwind CSS**

---

## 🚀 Quick Start

```bash
npx create-next-app@latest product-dashboard
cd product-dashboard
npm install
npm run dev
````

Open 👉 `http://localhost:3000`

---

## 📁 Project Structure

```txt
app/
├─ page.tsx            # Home page
├─ layout.tsx          # Root layout with navbar
├─ globals.css         # Global Tailwind styles
├─ about/
│  └─ page.tsx         # About page
├─ products/
│  ├─ page.tsx         # Products list
|  |_ data.tsx         # Demo data   
│  └─ [id]/
│     ├─ page.tsx      # Product details
│     ├─ loading.tsx   # Loading UI
│     └─ error.tsx     # Error UI
```

---

## 📚 Learning Objectives

* Understand what Next.js is and why it’s used
* Learn App Router structure
* Master file-based routing
* Implement navigation with `Link`
* Handle loading and errors gracefully

---

## 🔍 Routing Basics

| URL           | File                         |
| ------------- | ---------------------------- |
| `/`           | `app/page.tsx`               |
| `/about`      | `app/about/page.tsx`         |
| `/products`   | `app/products/page.tsx`      |
| `/products/1` | `app/products/[id]/page.tsx` |

---

## 📜 Golden Rules

Here are the **10 golden rules of building a Next.js (App Router) app** 👇

1. Everything inside `app/` maps to routes (folders = URLs)
2. `layout.tsx` is mandatory and must wrap `<html>` and `<body>`
3. Components are **Server Components by default**
4. Add `"use client"` only when using hooks, state, or events
5. Use `Link` from `next/link` for internal navigation
6. Dynamic routes use `[param]` folders and access via `params`
7. Use `loading.tsx` for loading states and `error.tsx` for errors
8. Use `notFound()` instead of throwing errors for missing pages
9. Import global CSS only in `layout.tsx`
10. Prefer App Router over Pages Router for performance and scalability

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ 
