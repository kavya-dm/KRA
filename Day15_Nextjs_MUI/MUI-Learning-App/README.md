# 📘 MUI Learning App – Simple Documentation

This document explains the **functions and components used in the MUI-Learning-App** in a **simple, beginner-friendly way**. The goal is to help you understand **what each function does and how data flows in the app**.

---

## 🧱 Project Overview

* Framework: **Next.js 14+ (App Router)**
* UI Library: **Material UI (MUI v5)**
* Language: **TypeScript**
* Features:

  * Light/Dark theme toggle
  * Common MUI components demo
  * Simple working form
  * Responsive layout

---

## 📁 Folder Structure Explained

```
app/
  layout.tsx        → Root layout for the entire app
  page.tsx          → Main demo page
  globals.css       → Global styles

components/
  ThemeRegistry.tsx → Theme + color mode logic
  Header.tsx        → Top navigation bar
  FeatureCard.tsx  → Reusable card component

theme.ts            → Central MUI theme configuration
```

---

## 🔹 app/layout.tsx

### Function: `RootLayout`

**Purpose:** Wraps the entire application with the MUI Theme provider.

**What it does:**

* Defines the HTML structure
* Loads global styles
* Ensures all pages have access to the MUI theme

**Why it’s important:**
Every page in the app uses the same theme and layout.

---

## 🔹 app/page.tsx

### Function: `HomePage`

**Purpose:** Main page that demonstrates MUI components.

### State Functions Used

#### `useState(name)`

* Stores the value entered in the text field
* Updates as the user types

#### `useState(submitted)`

* Tracks whether the form is submitted
* Used to show validation and success message

### Function: `handleSubmit`

**Purpose:** Handles form submission.

**What it does:**

* Checks if the input is not empty
* Updates `submitted` state
* Displays a greeting message

### Sections Rendered

* Hero section (Typography + Button)
* Form section (TextField + Button)
* Features section (Grid + Cards)

---

## 🔹 components/ThemeRegistry.tsx

### Context: `ColorModeContext`

**Purpose:** Shares the theme toggle function across components.

### Function: `ThemeRegistry`

**Purpose:** Manages MUI theme and light/dark mode.

### State Used

#### `useState(mode)`

* Stores current theme mode (`light` or `dark`)

### Function: `toggleColorMode`

**Purpose:** Switches between light and dark themes.

### Function: `createTheme`

**Purpose:** Creates a MUI theme using custom colors and mode.

### Why this file matters

* Central place for theme logic
* Makes theme available to entire app
* Follows MUI best practices

---

## 🔹 components/Header.tsx

### Function: `Header`

**Purpose:** Displays the top navigation bar.

### Hook Used

#### `useContext(ColorModeContext)`

* Accesses the `toggleColorMode` function
* Allows button to switch theme

### UI Elements

* AppBar
* Toolbar
* Title text
* Theme toggle icon button

---

## 🔹 components/FeatureCard.tsx

### Function: `FeatureCard`

**Purpose:** Reusable card component for feature display.

### Props Used

* `title` → Card heading
* `description` → Card content text

### MUI Components Used

* Card
* CardContent
* CardActions
* Typography
* Button

### Why reusable components matter

* Avoid code duplication
* Easier maintenance
* Cleaner UI structure

---

## 🔹 theme.ts

### Constant: `themeOptions`

**Purpose:** Defines the global MUI theme.

### What it controls

* Primary color (`#1976d2`)
* Secondary color (`#dc004e`)

### Why this file exists

* Central place to change branding
* Used by `ThemeRegistry`

---

## 🔹 globals.css

### Purpose

* Applies global CSS reset
* Ensures consistent styling
* Allows Tailwind CSS compatibility

---

## 🔄 Application Flow (Simple)

1. `layout.tsx` loads first
2. `ThemeRegistry` provides theme context
3. `page.tsx` renders UI
4. `Header` toggles theme
5. Form updates state and displays result
6. Cards display feature info

---

## ✅ Key Concepts You Learned

* How MUI ThemeProvider works
* How to implement light/dark mode
* How React state controls UI
* How to build reusable components
* How Next.js App Router structure works

---

📌 **This project is intentionally simple** so you can focus on understanding **MUI fundamentals and function flow** without confusion.
