# Next.js + Tailwind CSS Portfolio

This is a beginner-friendly **portfolio website** built using **Next.js (App Router)** and **Tailwind CSS**.

The goal of this project is to understand:
- How Tailwind CSS utility classes work
- How responsive design is done using Tailwind
- How layouts are built without writing custom CSS

---

## 🚀 Tech Stack

- **Next.js 16 (App Router)** – React framework for building web apps
- **React 19** – UI library
- **Tailwind CSS v4** – Utility-first CSS framework
- **TypeScript** – Type safety

---

## 📁 Project Structure

```

app/
├─ layout.tsx        → Root layout (applies to all pages)
├─ page.tsx          → Home page (landing page)
├─ about/page.tsx    → About page
├─ projects/page.tsx → Projects page
├─ contact/page.tsx  → Contact page
└─ globals.css       → Tailwind CSS import

````

---

## 🎨 What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework**.

Instead of writing CSS like this:

```css
.card {
  padding: 24px;
  background-color: white;
  border-radius: 16px;
}
````

You write styles directly in JSX using **utility classes**:

```html
<div class="p-6 bg-white rounded-2xl">
```

Each class does **one small job**.

---

## 🧱 Common Tailwind Utility Classes Used

### 📏 Spacing (Padding & Margin)

| Class     | Meaning              |
| --------- | -------------------- |
| `p-4`     | padding on all sides |
| `px-6`    | padding left & right |
| `py-4`    | padding top & bottom |
| `m-4`     | margin               |
| `mx-auto` | center horizontally  |

---

### 🧭 Layout (Flex & Grid)

#### Flexbox

```html
<div class="flex items-center justify-between">
```

| Class             | Meaning             |
| ----------------- | ------------------- |
| `flex`            | enables flexbox     |
| `items-center`    | vertical center     |
| `justify-center`  | horizontal center   |
| `justify-between` | space between items |

#### Grid

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
```

| Class            | Meaning                     |
| ---------------- | --------------------------- |
| `grid`           | enables grid                |
| `grid-cols-1`    | 1 column                    |
| `md:grid-cols-3` | 3 columns on medium screens |
| `gap-6`          | space between items         |

---

### 📱 Responsive Design

Tailwind is **mobile-first**.

```html
<h1 class="text-3xl md:text-5xl lg:text-7xl">
```

| Prefix | Screen size   |
| ------ | ------------- |
| `sm:`  | small devices |
| `md:`  | tablets       |
| `lg:`  | laptops       |
| `xl:`  | large screens |

---

### 🔤 Typography

| Class                      | Meaning        |
| -------------------------- | -------------- |
| `text-sm` → `text-7xl`     | text size      |
| `font-thin` → `font-black` | font weight    |
| `tracking-tight`           | letter spacing |
| `text-center`              | center text    |

---

### 🎨 Colors

```html
<div class="bg-indigo-600 text-white">
```

| Class             | Meaning          |
| ----------------- | ---------------- |
| `bg-indigo-500`   | background color |
| `text-white`      | text color       |
| `border-gray-200` | border color     |

---

### 🧊 Glassmorphism Effects

```html
<nav class="bg-white/80 backdrop-blur-md">
```

| Class              | Meaning                |
| ------------------ | ---------------------- |
| `bg-white/80`      | transparent background |
| `backdrop-blur-md` | background blur        |

---

### ✨ Hover, Focus & Active States

```html
<button class="
  hover:scale-105
  hover:shadow-xl
  focus:ring-4
  active:scale-95
">
```

| Class            | Meaning            |
| ---------------- | ------------------ |
| `hover:`         | when mouse is over |
| `focus:`         | keyboard focus     |
| `active:`        | when clicked       |
| `transition-all` | smooth animation   |
| `duration-300`   | animation speed    |

---

### 🧠 Example: Button Explained

```html
<button class="
  px-8 py-4
  bg-white
  text-indigo-600
  font-semibold
  rounded-full
  shadow-2xl
  hover:scale-105
  active:scale-95
  transition-all
">
```

This means:

* Padding inside button
* White background
* Indigo text
* Rounded corners
* Shadow
* Scales on hover
* Shrinks slightly on click
* Smooth animation

---

## 📦 How to Run the Project

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🎯 What You Learn From This Project

* Tailwind utility-first approach
* Responsive design without media queries
* Clean layouts using Flexbox & Grid
* Modern UI effects (hover, blur, animations)
* Next.js App Router basics

---

## 🧠 Simple Interview Line

> Tailwind CSS uses small utility classes that apply one style at a time, allowing fast, consistent, and responsive UI development without writing custom CSS.

---

Happy coding 🚀
This project is perfect for **practice, interviews, and real-world UI building**.

```
