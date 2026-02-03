# Next.js Dashboard – Reusable Button Component Demo

This project is a simple dashboard application built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.  
Its primary goal is to demonstrate how to design and reuse a **configurable UI Button component** across an entire application.

---
## 🎯 Purpose of the Project

Buttons are one of the most frequently used UI elements in real-world applications (navigation, forms, tables, modals, dashboards).

This project focuses on:
- Creating **one reusable Button component**
- Eliminating duplicated UI logic and styles
- Demonstrating clean component architecture
- Teaching how props control UI behavior and appearance

---

## 🧱 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

---

## 📁 Project Structure

```

app/
├── page.tsx        # Dashboard page
├── layout.tsx      # Root layout
├── globals.css     # Tailwind styles
components/
├── ui/
│   └── Button.tsx  # Reusable Button component
├── Sidebar.tsx     # Sidebar navigation
├── StatCard.tsx    # Dashboard statistics cards
├── DataTable.tsx   # Table with action buttons
└── Modal.tsx       # Modal using reusable buttons

```

---

## 🔘 Reusable Button Component

The `Button` component is located at:

```

components/ui/Button.tsx

````

### Supported Props
- `variant`: `"primary"` | `"outline"`
- `size`: `"sm"` | `"lg"`
- `loading`: boolean
- `icon`: ReactNode
- `type`: `"button"` | `"submit"`

This allows the same Button component to be reused across:
- Sidebar navigation
- Dashboard cards
- Forms
- Tables
- Modals
- Call-to-action sections

---

## 📊 Dashboard Features

- Responsive layout (desktop & tablet)
- Sidebar navigation
- Statistic cards
- Action table
- Form actions
- Call-to-action buttons

All buttons in the dashboard use the **same Button component**, proving the effectiveness of reusable UI design.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
````

### 2. Run the development server

```bash
npm run dev
```

### 3. Open in browser

```
http://localhost:3000
```

---

## ✅ Key Concepts Demonstrated

* Reusable UI components
* Prop-driven configuration
* Clean and semantic folder structure
* Tailwind-first styling
* Elimination of duplicated UI logic
* Scalable frontend architecture

---

## 📌 Conclusion

This project serves as a learning reference for building scalable frontend applications using reusable UI components in Next.js.
It highlights how a single well-designed Button component can simplify development and maintain consistency across an entire application.

---

**Author:** Kavya D M
**License:** MIT

👍
```
