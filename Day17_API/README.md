# 📝 Full-Stack Todo App (NestJS + Vanilla JavaScript)

This project is a **beginner-friendly full-stack tutorial** that demonstrates **how frontend applications communicate with backend APIs using clear contracts**.


Here is the **converted, project-specific explanation**, kept **within exactly 10 simple lines**, aligned to **this Todo app project**:

1. In this Todo app, the **API contract** defines `/todos` endpoints, HTTP methods, request bodies, responses, and error formats.
2. The frontend communicates with the NestJS backend by sending **HTTP requests** using `fetch()` and receiving **HTTP responses**.
3. Each request contains a **URL, HTTP method, headers, and JSON body** when creating or updating todos.
4. Each response returns a **status code** and either todo data or an error message in JSON format.
5. The app uses **GET** to read todos, **POST** to create, **PUT** to update, and **DELETE** to remove todos.
6. The frontend always checks the **response status code** before displaying data.
7. **200/201** indicate success, **400** means invalid data, **401** means missing authorization, **404** means todo not found, and **500** means server error.
8. Errors are handled safely in the UI by showing messages instead of breaking the page.
9. Required **headers** like `Content-Type` and `Authorization` are always sent with API requests.
10. Following this contract ensures **predictable and stable communication** between frontend and backend.

---

The backend is built using **NestJS (TypeScript)** and the frontend uses **plain HTML, CSS, and JavaScript** (no frameworks).

---

## 🎯 What You Will Learn (Big Picture)

This project helps you:

- Learn how **frontend talks to backend**
- Understand **request / response flow**
- Use correct **HTTP methods**
- Handle **success and error responses**
- Understand **HTTP status codes**
- Send **headers and parameters correctly**
- Read and follow an **API contract**

---

## 🧠 How Frontend and Backend Communicate

```

[ Browser (Frontend) ]
|
|  HTTP Request
|  (URL + Method + Headers + Body)
v
[ Backend API (NestJS) ]
|
|  HTTP Response
|  (Status Code + JSON Data)
v
[ Browser (Frontend) ]

```

The frontend **never accesses backend code directly**.  
It only communicates using **HTTP requests**.

---

## 1️⃣ What Is an API Contract?

An **API contract** is a clear agreement between frontend and backend that defines:

- Which **URL** to call
- Which **HTTP method** to use
- What **headers** are required
- What **data format** is expected
- What **response** will be returned
- What **status codes** mean

```

Frontend 🤝 Backend
|
|  "I promise to send data like this"
|  "You promise to respond like that"

```

In this project, the API contract is documented using **Swagger (OpenAPI)**.

---

## 2️⃣ Request and Response Structure (Very Important)

### 🔹 HTTP Request Structure

```

POST /todos
Headers:
Content-Type: application/json
Authorization: Bearer demo-token

Body:
{
"title": "Learn APIs",
"completed": false
}

```

A request contains:
- **Method** (POST)
- **URL** (/todos)
- **Headers** (metadata)
- **Body** (JSON data)

---

### 🔹 HTTP Response Structure

```

Status: 201 Created

Body:
{
"id": 1,
"title": "Learn APIs",
"completed": false
}

```

A response contains:
- **Status code**
- **Response data (JSON)**

---

## 3️⃣ Using Correct HTTP Methods

Each HTTP method has a **specific meaning**:

| Method | Meaning | Example |
|-----|--------|--------|
| GET | Read data | Get all todos |
| POST | Create data | Create new todo |
| PUT | Update data | Update todo |
| DELETE | Remove data | Delete todo |

```

GET    → Read
POST   → Create
PUT    → Update
DELETE → Remove

````

Using the wrong method breaks the API contract.

---

## 4️⃣ Handling Success and Error Responses

### ✅ Success Example (Frontend)

```js
if (response.ok) {
  // Success response (200 / 201)
}
````

### ❌ Error Example (Frontend)

```js
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }
} catch (error) {
  console.error(error.message);
}
```

```
Frontend must ALWAYS handle:
✔ Success
✔ Failure
```

---

## 5️⃣ Common HTTP Status Codes Explained

| Code | Meaning      | When It Happens    |
| ---- | ------------ | ------------------ |
| 200  | OK           | Successful request |
| 201  | Created      | Resource created   |
| 204  | No Content   | Delete success     |
| 400  | Bad Request  | Invalid input      |
| 401  | Unauthorized | Missing token      |
| 404  | Not Found    | Resource not found |
| 500  | Server Error | Backend crash      |

```
Status Code = Result of Request
```

---

## 6️⃣ Sending Headers and Parameters Correctly

### 🔐 Authorization Header

This project uses a simple auth header:

```
Authorization: Bearer demo-token
```

If missing → backend returns:

```
401 Unauthorized
```

---

### 📦 Content-Type Header

```
Content-Type: application/json
```

This tells the backend:

> “I am sending JSON data”

---

## ✅ Acceptance Criteria (Covered)

✔ Understand what an API contract is
✔ Understand request and response structure
✔ Use correct HTTP methods
✔ Handle success and error responses
✔ Understand common HTTP status codes
✔ Send required headers and parameters

---

## 🔌 API Endpoints (Contract)

| Method | Endpoint     | Description   | Status Codes  |
| ------ | ------------ | ------------- | ------------- |
| POST   | `/todos`     | Create todo   | 201, 400, 401 |
| GET    | `/todos`     | Get all todos | 200           |
| GET    | `/todos/:id` | Get one todo  | 200, 404      |
| PUT    | `/todos/:id` | Update todo   | 200, 404      |
| DELETE | `/todos/:id` | Delete todo   | 204, 404      |

---

## 🚀 How to Run the Project

### Backend

```bash
npm install
npm run start:dev
```

Backend URL:

```
http://localhost:3000
```

Swagger Docs:

```
http://localhost:3000/api
```

---

### Frontend

Open this file directly in browser:

```
src/frontend/index.html
```

---

## 🔐 Swagger Authorization Setup

1. Open Swagger UI
2. Click **Authorize 🔒**
3. Enter:

   ```
   Bearer demo-token
   ```
4. Click **Authorize**

---

## 🧪 Testing with cURL

```bash
curl -X POST http://localhost:3000/todos \
-H "Content-Type: application/json" \
-H "Authorization: Bearer demo-token" \
-d '{"title":"Learn APIs","completed":false}'
```

---

## 🏁 Final Summary

This project teaches **real-world frontend–backend communication** using:

* Clear API contracts
* Proper HTTP methods
* Correct headers
* Meaningful status codes
* Strong error handling
* Swagger documentation

It is **simple, structured, and production-style**, making it perfect for beginners.

---

Happy learning 🚀

```
