// ES6 Basics
// Concepts covered:
// 1. let and const
// 2. Arrow functions
// 3. Destructuring (object and array)
// 4. Modules (export and import)

/* Summary of Concepts */
// let: variable that can be reassigned; use when value may change.
// const: variable that cannot be reassigned; use for fixed values.

// Arrow functions: shorter syntax for functions; cleaner and commonly used.
// Regular functions: longer syntax; used when you need own this or arguments.

// Destructuring: extracts values from objects or arrays into variables.
// Use it to write cleaner and shorter code when accessing data.

// Modules: export shares code, import uses it in another file.
// Use modules to organize code into reusable files.



/* 1. let and const */

// const: value cannot be reassigned
const appName = "ES6 Learning App";

// let: value can be reassigned
let usersOnline = 10;
usersOnline += 5;

console.log("App Name:", appName);
console.log("Users Online:", usersOnline);


/* 2. Arrow Functions */

// Regular function
function greet(name) {
  return "Hello " + name;
}

// Arrow function
const greetArrow = (name) => {
  return `Hello ${name}`;
};

// Arrow function with implicit return
const square = (num) => num * num;

console.log(greet("Alice"));
console.log(greetArrow("Bob"));
console.log("Square of 4:", square(4));


/* 3. Destructuring */

// Object destructuring
const user = {
  id: 1,
  username: "john_doe",
  email: "john@example.com",
  role: "admin"
};

const { username, email } = user;

console.log("Username:", username);
console.log("Email:", email);

// Array destructuring
const languages = ["JavaScript", "Python", "Java"];
const [firstLang, secondLang] = languages;

console.log("First Language:", firstLang);
console.log("Second Language:", secondLang);


/* 4. Destructuring in function parameters */

const printUserInfo = ({ username, role }) => {
  console.log(`${username} is a ${role}`);
};

printUserInfo(user);


/* 5. Modules (concept example) */

/*
File: mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
*/

/*
File: main.js
import { add, subtract } from "./mathUtils.js";

console.log(add(5, 3));
console.log(subtract(10, 4));
*/

/*
Modules require:
- Browser: <script type="module">
- Node.js: "type": "module" in package.json
*/


/* 6. Combined example */

const employee = {
  name: "Sarah",
  position: "Frontend Developer",
  skills: ["HTML", "CSS", "JavaScript"],
  experience: 3
};

const getEmployeeSummary = ({ name, position, experience }) =>
  `${name} works as a ${position} with ${experience} years experience`;

const [primarySkill] = employee.skills;

console.log(getEmployeeSummary(employee));
console.log("Primary Skill:", primarySkill);
