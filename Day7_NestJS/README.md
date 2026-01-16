

# Counter API – NestJS Core Concepts Demo

## Overview

This project is a **minimal NestJS application** created to understand how NestJS manages:

* Request execution
* Dependency Injection (DI) scopes
* Circular dependencies
* Application lifecycle hooks

The application exposes a simple **Counter API** and uses real, working examples to demonstrate these core concepts.

---

## Project Purpose

This project is **not a production app**.
It is a **learning-focused demo** designed to clearly show how important NestJS internals work in real code.

---

## Features Demonstrated

### 1. Execution Context

* Used inside a **Guard**
* Accesses request details such as:

  * Request type (`http`)
  * Client IP address
* Demonstrates how NestJS wraps incoming requests

### 2. Dependency Injection Scopes

* Uses **REQUEST-scoped provider**
* A new service instance is created **for every HTTP request**
* Demonstrates difference between:

  * Singleton (default)
  * Request-scoped providers

### 3. Circular Dependencies

* Demonstrates a circular relationship between:

  * `CounterModule`
  * `LoggerModule`
* Uses `forwardRef()` to resolve the circular dependency safely

### 4. Lifecycle Hooks

* Uses:

  * `onModuleInit()`
  * `onApplicationShutdown()`
* Logs show when providers are created and destroyed
* Helps understand application startup and shutdown behavior

---

## Project Structure

```
src/
├── app.module.ts
├── counter/
│   ├── counter.module.ts
│   ├── counter.controller.ts
│   └── counter.service.ts
└── logger/
    ├── logger.module.ts
    └── logger.service.ts
```

---

## API Endpoints

### GET `/counter`

* Returns the current counter value
* Logs:

  * Execution context type
  * Client IP
  * Request-scoped service instance ID

### POST `/counter/inc`

* Increments the counter
* Shows shared state with request-scoped service instances

---

## How to Run

### Install dependencies

```bash
npm install
```

### Start the application

```bash
npm run start:dev
```

---

## Test the API

```bash
curl http://localhost:3000/counter
```

```bash
curl -X POST http://localhost:3000/counter/inc
```

---

## Expected Console Logs

On request:

```
[Lifecycle][abc12] CounterService Init
[ExecutionContext] http
[ExecutionContext] IP: ::1
```

On application shutdown (Ctrl + C):

```
[Lifecycle][abc12] CounterService Shutdown
```

A warning like below is **expected and normal** in this demo:

```
[InjectorLogger] Nest encountered an undefined dependency.
```

This occurs because request-scoped providers do not exist during application bootstrap.

---

## Real-World Relevance

| Concept               | Used In                        |
| --------------------- | ------------------------------ |
| Execution Context     | Authentication & Authorization |
| DI Scopes             | Multi-tenant systems           |
| Circular Dependencies | Auth ↔ User modules            |
| Lifecycle Hooks       | Database & message queues      |

---

## Summary

This project demonstrates how NestJS:

* Handles incoming requests
* Manages provider lifetimes
* Resolves circular dependencies
* Controls application startup and shutdown

It is ideal for:

* Beginners learning NestJS internals
* Interview preparation
* Understanding real-world NestJS behavior


