// Event Loop – High Level Understanding
// Topics:
// 1. Synchronous execution
// 2. Macrotasks (setTimeout)
// 3. Microtasks (Promises)
// 4. Execution order


// Event Loop: Manages how JavaScript runs async code.
// Executes synchronous code first.
// Then runs Promises, then setTimeout callbacks.


/* 1. Synchronous code */

/* Example 1 */
console.log("Sync Example 1 - Start");
console.log("Sync Example 1 - End");

/* Example 2 */
function syncFunction() {
  console.log("Sync Example 2 - Function executed");
}
syncFunction();


/* 2. Macrotasks (setTimeout) */

/* Example 1 */
setTimeout(() => {
  console.log("Macrotask Example 1 - setTimeout");
}, 0);

/* Example 2 */
setTimeout(() => {
  console.log("Macrotask Example 2 - setTimeout");
}, 1000);


/* 3. Microtasks (Promises) */

/* Example 1 */
Promise.resolve().then(() => {
  console.log("Microtask Example 1 - Promise resolved");
});

/* Example 2 */
Promise.resolve().then(() => {
  console.log("Microtask Example 2 - Promise resolved");
});


/* 4. Combined execution order examples */

/* Example 1 */
console.log("Combined Example 1 - Start");

setTimeout(() => {
  console.log("Combined Example 1 - setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Combined Example 1 - Promise");
});

console.log("Combined Example 1 - End");


/* Example 2 */
console.log("Combined Example 2 - Start");

setTimeout(() => {
  console.log("Combined Example 2 - setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Combined Example 2 - Promise");
});

console.log("Combined Example 2 - End");


/* Expected behavior */

// Synchronous logs execute first.
// Promise callbacks (microtasks) execute next.
// setTimeout callbacks (macrotasks) execute last.
