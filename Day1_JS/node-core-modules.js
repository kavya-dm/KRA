// Node.js Core Modules Examples
// Modules used: fs, path, http


/* Example 1: fs and path modules */

// fs is used to work with the file system
// path is used to handle file paths

const fs = require("fs");
const path = require("path");

// Create a file path
const filePath = path.join(__dirname, "example.txt");

// Write data to a file
fs.writeFileSync(filePath, "This file was created using fs module");

// Read data from the file
const fileData = fs.readFileSync(filePath, "utf-8");

console.log("File path:", filePath);
console.log("File content:", fileData);


/* Example 2: http module */

// http is used to create a web server

const http = require("http");

// Create a simple server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js HTTP server");
});

// Start the server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
