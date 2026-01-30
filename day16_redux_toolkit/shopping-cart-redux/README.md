# Shopping Cart App – React + Redux Toolkit (TypeScript)

This project is a simple **Shopping Cart application** built using **React**, **TypeScript**, and **Redux Toolkit**.  
It demonstrates how to manage **global state** in a React application using modern Redux best practices.

---

## Purpose of This Project

The goal of this project is to understand:

- What global state is
- When Redux is required
- How Redux Toolkit simplifies Redux
- How data flows through a Redux-based React application

A shopping cart is a perfect example because cart data is shared across multiple components.

---

## What is Global State?

**Global state** is data that needs to be accessed or updated by multiple components.

### Example in this project:
- Products add items to the cart
- Cart displays items
- Cart summary calculates total price
- Cart item counter updates automatically

Because many components depend on the same data, Redux is used instead of `useState`.

---

## When to Use Redux

| Use Case | Recommended Tool |
|--------|------------------|
| Local UI state | useState |
| Small shared state | useContext |
| Large shared state | Redux Toolkit |

Redux is ideal when:
- State is shared across many components
- Logic becomes complex
- You need predictable state updates

---

## Tech Stack

- React (Create React App)
- TypeScript
- Redux Toolkit
- React Redux
- Redux DevTools

---

## Project Setup

```bash
npx create-react-app shopping-cart-redux --template typescript
cd shopping-cart-redux
npm install @reduxjs/toolkit react-redux
npm start
````

---

## Folder Structure

```text
src/
├── store/
│   ├── cartSlice.ts     # Redux slice (state + actions)
│   ├── index.ts         # Redux store configuration
│   └── hooks.ts         # Typed Redux hooks
│
├── components/
│   ├── ProductList.tsx
│   ├── ProductCard.tsx
│   ├── Cart.tsx
│   ├── CartItem.tsx
│   └── CartSummary.tsx
│
├── types.ts             # Shared TypeScript interfaces
├── App.tsx
├── index.tsx
└── App.css
```

---

## Redux Toolkit Concepts Used

### 1. createSlice

`createSlice` combines:

* Initial state
* Reducer logic
* Action creators

In this project:

* Cart state contains `items` and `total`
* Actions include:

  * addToCart
  * removeFromCart
  * updateQuantity
  * clearCart

---

### 2. configureStore

`configureStore` creates the Redux store and:

* Combines reducers
* Enables Redux DevTools
* Applies good defaults automatically

---

### 3. Provider

The `<Provider>` component makes the Redux store available to all React components.

```tsx
<Provider store={store}>
  <App />
</Provider>
```

---

### 4. useDispatch

Used to **send actions** to Redux.

Example:

```ts
dispatch(addToCart(product));
```

---

### 5. useSelector

Used to **read data** from Redux state.

Example:

```ts
const items = useSelector(state => state.cart.items);
```

---

### 6. Typed Redux Hooks

Custom hooks are used for TypeScript safety:

* `useAppDispatch`
* `useAppSelector`

This avoids repetitive typing and improves developer experience.

---

## Application Features

* Display 6 sample products
* Add products to cart
* Update product quantity
* Remove items from cart
* Clear entire cart
* Live total price calculation
* Cart item counter

All updates happen instantly using Redux state.

---

## Redux Data Flow

```text
User Action
   ↓
dispatch(action)
   ↓
Reducer (cartSlice)
   ↓
Redux Store Updates
   ↓
useSelector reads new state
   ↓
React UI re-renders
```

---

## Redux DevTools

This project supports Redux DevTools.

Steps:

1. Install Redux DevTools browser extension
2. Open browser DevTools
3. Go to Redux tab
4. Observe actions and state updates in real time

---

## Learning Outcome

By completing this project, you will understand:

* Global state management
* Redux Toolkit basics
* Redux data flow
* TypeScript integration with Redux
* Clean and scalable React architecture

---

## Conclusion

This project demonstrates a **production-ready yet beginner-friendly** approach to Redux Toolkit using Create React App and TypeScript.
It is ideal for learning, interviews, and as a foundation for larger applications.

```
