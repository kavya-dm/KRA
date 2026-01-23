# Live Chat & Notification System (NestJS)

This project uses WebSockets for real-time bidirectional communication via a gateway and Webhooks for one-way external events via HTTP, connecting both using an event-driven architecture.

Browser (client.js)
   ↓ WebSocket
chat.gateway.ts
   ↓ broadcast
Browser sees message

Postman
   ↓ HTTP POST
webhook.controller.ts
   ↓ verify
webhook.service.ts
   ↓ emit
chat.gateway.ts
   ↓
Browser sees notification

---

## Overview

This project demonstrates **real-time communication using WebSockets** and **event-driven notifications using Webhooks** in NestJS.

* **WebSockets (Socket.IO)** are used for real-time, bidirectional chat between clients.
* **Webhooks (HTTP POST)** are used to receive external events (e.g., payment or system events).
* When a webhook is received and verified, a **real-time notification** is broadcast to all connected WebSocket clients.

The project uses **in-memory data only** (no database) and runs on **localhost:3000**.

---

## Features

* Real-time chat using Socket.IO
* Support for multiple chat rooms
* Webhook endpoint with HMAC-SHA256 signature verification
* Webhook events broadcast as live notifications
* Simple HTML/JavaScript client for testing
* Proper error handling (400, 401 responses)

---

## Technologies Used

* Node.js
* NestJS
* Socket.IO
* TypeScript
* Express (NestJS platform)

---

## Project Structure

```
live-chat-webhooks/
├── public/
│   ├── index.html
│   └── client.js
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── main.ts
│   ├── chat/
│   │   ├── chat.module.ts
│   │   └── chat.gateway.ts
│   └── webhook/
│       ├── webhook.module.ts
│       ├── webhook.controller.ts
│       └── webhook.service.ts
├── package.json
├── nest-cli.json
└── tsconfig.json
```

---

## Installation

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Start the application

```bash
npm run start:dev
```

Server will run at:

```
http://localhost:3000
```

---

## Using the Application

### 1. WebSocket Chat (Browser)

1. Open the browser:

   ```
   http://localhost:3000
   ```
2. Enter a room name and click **Join Room**
3. Enter your name and message
4. Send messages and see real-time updates

---

### 2. Webhook Notification (Postman / curl)

#### Endpoint

```
POST /webhook/notify
```

#### Headers

```
Content-Type: application/json
X-Signature: sha256=<generated_signature>
```

#### Body (example)

```json
{
  "event": "payment",
  "data": {
    "amount": 500
  }
}
```

If the signature is valid:

* HTTP response: `200 OK`
* All connected WebSocket clients receive a live notification

---

## Error Handling

| Scenario                   | Response         |
| -------------------------- | ---------------- |
| Missing payload or headers | 400 Bad Request  |
| Invalid signature          | 401 Unauthorized |

---

## Learning Objectives Covered

* Difference between WebSockets and Webhooks
* Real-time event handling with Socket.IO
* One-way external event processing with webhooks
* Event-driven architecture in NestJS
* Room-based message broadcasting

---

## Notes

* No database is used (in-memory only)
* Designed for learning and local development
* Suitable as a reference for real-time systems

---


