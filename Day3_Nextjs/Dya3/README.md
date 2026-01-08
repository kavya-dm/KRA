# NestJS Core Concepts – Basic Application✨

## Project Overview

This project demonstrates the **core architectural concepts of NestJS** using a minimal and clean setup.
It is designed to help beginners understand how NestJS applications are structured and how the main building blocks work together.

The project includes:

* A root module
* A controller to handle HTTP requests
* A service to handle business logic
* Dependency Injection managed by NestJS
* A clear and scalable folder structure

This structure forms the foundation of all professional NestJS applications.

============================================================

## Technologies Used

* Node.js
* TypeScript
* NestJS Framework
* npm package manager

============================================================

## Project Folder Structure

The application follows NestJS’s recommended modular structure.

```
src
│
├── main.ts
├── app.module.ts
├── app.controller.ts
├── app.service.ts
```

Each file has a **single responsibility**, which improves maintainability and scalability.

============================================================

## File Responsibilities Explained

### main.ts

Purpose
This is the **entry point** of the application.

Responsibilities

* Bootstraps the NestJS application
* Creates the application instance
* Starts the HTTP server

How it works
NestFactory creates an application instance using the root module.
The server listens on port 3000.

============================================================

### app.module.ts

Purpose
This is the **root module** of the application.

Responsibilities

* Registers controllers
* Registers services (providers)
* Defines how different parts of the application are connected

Key Concept
A module acts as a **container** that groups related functionality.

Every NestJS application must have **at least one module**, known as the root module.

============================================================

### app.controller.ts

Purpose
Handles incoming HTTP requests from the client.

Responsibilities

* Maps routes to methods
* Delegates processing to services
* Returns responses to the client

Key Concept
Controllers **do not contain business logic**.
They focus only on handling requests and responses.

============================================================

### app.service.ts

Purpose
Contains the **business logic** of the application.

Responsibilities

* Processes data
* Implements reusable logic
* Returns results to controllers

Key Concept
Services are injectable and reusable across the application.

============================================================

## Core NestJS Concepts Explained

============================================================

### Modules

Definition
A module is a class annotated with the Module decorator.

Purpose

* Groups related controllers and services
* Defines application structure
* Controls dependency visibility

In this project
AppModule is the root module that connects the controller and service.

============================================================

### Controllers

Definition
A controller is responsible for handling incoming HTTP requests.

Purpose

* Receives requests from the client
* Calls appropriate service methods
* Sends responses back to the client

In this project
AppController handles a GET request on the root route.

============================================================

### Services

Definition
A service is a class that contains business logic.

Purpose

* Encapsulates application logic
* Promotes reusability
* Keeps controllers clean

In this project
AppService provides a method that returns a response message.

============================================================

### Dependency Injection

Definition
Dependency Injection is a design pattern where objects are created and provided by a framework rather than manually instantiated.

How NestJS handles it

* Services are marked as injectable
* Controllers request services via constructors
* NestJS automatically creates and injects instances

Benefits

* Loose coupling
* Improved testability
* Easier maintenance

In this project
AppService is injected into AppController through the constructor.

============================================================

### Decorators Used

Decorators provide metadata that tells NestJS how to treat classes and methods.

Decorators in this project:

Module
Defines a module and its metadata

Controller
Marks a class as a controller

Injectable
Marks a class as a service that can be injected

Get
Maps an HTTP GET request to a controller method

============================================================

## Application Flow

1. The application starts from main.ts
2. main.ts loads the AppModule
3. AppModule registers the controller and service
4. A client sends an HTTP GET request
5. The controller receives the request
6. The controller calls the service
7. The service processes logic and returns data
8. The controller sends the response back to the client

NestJS manages all object creation and dependency wiring automatically.

============================================================

## How This Project Was Built

1. NestJS CLI was used to scaffold the project
2. The default folder structure was generated
3. A controller was created to handle requests
4. A service was created to handle logic
5. The module was configured to connect both
6. Dependency Injection was applied using constructors
7. The application was started using the NestJS runtime

============================================================

## How to Run the Project

Prerequisites

* Node.js installed
* npm installed

Steps

Navigate to the project root where package.json exists

```
npm install
npm run start
```

Open a browser and visit

```
http://localhost:3000
```

Expected Output

```
Hello from NestJS Service
```

============================================================

## Final Notes

This project demonstrates:

* Modular architecture
* Clean separation of concerns
* Proper use of Dependency Injection
* Core NestJS decorators
* Professional project structure

These concepts are fundamental to building scalable, testable, and maintainable NestJS applications.
✨❤️
                       Next API Route
                              ↓
                        NestJS Controller
                              ↓
                         NestJS Service
                              ↓
                          Database / Logic