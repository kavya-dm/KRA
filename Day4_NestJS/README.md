# NestJS Users API (Simple Learning Project)

This is a **beginner-friendly NestJS project** created to understand core NestJS concepts like **Controllers, Services, Guards, DTOs, Middleware, and basic Authentication**.

The project exposes a small **Users API** protected using a **custom API Key Guard**.

---

## 🚀 What this project does

* Starts a NestJS server
* Provides an **Auth login endpoint**
* Provides **Users CRUD-like APIs (in-memory)**
* Protects routes using a **custom AuthGuard**
* Uses **DTOs** for request structure
* Demonstrates **NestJS request lifecycle**

⚠️ Note: This project does **NOT** use a database. Data is stored **in memory** and resets on restart.

---

## 📁 Project Structure (Important)

```
src/
├── main.ts                 # Application entry point
├── app.module.ts           # Root module
│
├── auth/
│   ├── auth.controller.ts  # Login API
│   ├── auth.service.ts     # Login logic
│   └── auth.module.ts
│
├── users/
│   ├── users.controller.ts # Users APIs
│   ├── users.service.ts    # Business logic
│   ├── dto/
│   │   └── create-user.dto.ts
│   └── interfaces/
│       └── user.interface.ts
│
├── common/
│   └── guards/
│       └── auth.guard.ts   # API Key Guard
│
└── .env                    # Environment variables
```

---

## 🔐 Authentication Logic (Very Simple)

This project uses a **custom API Key authentication**:

* Client must send an API key in request headers
* Guard checks the API key
* If invalid or missing → request is blocked

### Header Required

```
x-api-key: SECRET_KEY
```

The API key value is stored in the `.env` file.

---

## ⚙️ Environment Setup

### 1️⃣ Install dependencies

```
npm install
```

---

### 2️⃣ Create `.env` file

In the project root, create a file named `.env`:

```
API_KEY=SECRET_KEY
```

---

### 3️⃣ Start the server

```
npm run start:dev
```

You should see:

```
Nest application successfully started
```

---

## 🧪 How to Test the APIs

Use **Postman**, **Thunder Client**, or **curl**.

---

### ✅ 1. Login API (Public)

**POST**

```
http://localhost:3000/auth/login
```

**Body (JSON):**

```
{
  "username": "admin",
  "password": "admin"
}
```

**Expected Response:**

```
{
  "message": "Login successful"
}
```

---

### ✅ 2. Create User (Protected)

**POST**

```
http://localhost:3000/users
```

**Headers:**

```
x-api-key: SECRET_KEY
Content-Type: application/json
```

**Body:**

```
{
  "name": "Kavya",
  "email": "kavya@test.com"
}
```

**Expected Response:**

```
{
  "id": "<generated_id>",
  "name": "Kavya",
  "email": "kavya@test.com"
}
```

---

### ✅ 3. Get All Users (Protected)

**GET**

```
http://localhost:3000/users
```

**Headers:**

```
x-api-key: SECRET_KEY
```

**Expected Response:**

```
[
  {
    "id": "<id>",
    "name": "Kavya",
    "email": "kavya@test.com"
  }
]
```

---

### ✅ 4. Get User by ID (Protected)

**GET**

```
http://localhost:3000/users/{id}
```

**Headers:**

```
x-api-key: SECRET_KEY
```

---

## ❌ Error Testing (Important)

### Without API Key

Response:

```
401 Unauthorized
```

### Invalid User ID

Response:

```
404 User not found
```

---

## 🧠 Key Concepts Covered

* NestJS Modules
* Controllers & Routing
* Services & Dependency Injection
* Guards (Authorization)
* DTOs
* Exception Handling
* Environment Variables
* In-memory data handling

---

## ⚠️ Limitations (Expected)

* No database
* Data lost on restart
* API key auth (not production-ready)

---

## 🚀 Next Improvements (Learning Path)

* Add PostgreSQL / SQLite
* Replace API key with JWT
* Add Pipes for validation
* Add Unit & E2E tests
* Role-based authorization

---

## ✅ Final Note

Happy Learning 🚀
