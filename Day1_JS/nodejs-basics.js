// Node.js Basics
// Node.js is a JavaScript runtime built on Chrome's V8 engine.
// It allows JavaScript to run outside the browser.


/* 1. What Node.js is */

console.log("Node.js runs JavaScript on the server");

const path = require("path");
console.log("Current directory:", path.resolve());


/* 2. Why Node.js is used */

setTimeout(() => {
  console.log("Asynchronous task executed");
}, 1000);

console.log("Node.js continues executing code");


/* 3. Built-in modules */

const fs = require("fs");

fs.writeFileSync("sample.txt", "Hello from Node.js");
const content = fs.readFileSync("sample.txt", "utf-8");
console.log("File content:", content);


/* 4. Node.js features */

// Event-driven and non-blocking
setTimeout(() => {
  console.log("Non-blocking operation");
}, 500);

// Single-threaded but scalable
function handleTask() {
  console.log("Handled using event loop");
}
handleTask();

// Fast execution using V8
console.log("Fast JavaScript execution");

// Cross-platform support
console.log("Runs on Windows, macOS, and Linux");


/* 5. Real-world usage example */

function handleRequest() {
  console.log("Handling request in Node.js");
}

handleRequest();


// Node.js is commonly used for:
// Web servers
// REST APIs
// File systems
// Real-time applications
