// Asynchronous JavaScript Concepts
// Topics:
// Callbacks - Old approach
// Promises - Improved approach
// async/await - Modern and recommended approach

// Callback: A function passed to another function and executed later.
// Promise: An object that represents a future result (success or failure).
// async/await: A cleaner way to work with Promises using synchronous style.

// Callback uses functions and can become hard to read.
// Promise uses then() and catch() for better structure.
// async/await uses try/catch and is the most readable.



/* 1. Callbacks */

/* Example 1: Basic callback */

function processData(data, callback) {
  setTimeout(() => {
    callback(`Processed: ${data}`);
  }, 1000);
}

function displayResult(result) {
  console.log(result);
}

processData("File A", displayResult);


/* Example 2: Callback with calculation */

function calculate(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

calculate(5, 10, (sum) => {
  console.log("Sum:", sum);
});


/* 2. Promises */

/* Example 1: Basic Promise */

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data loaded");
    }, 1000);
  });
}

getUserData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });


/* Example 2: Promise with condition */

function checkLogin(isLoggedIn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLoggedIn) {
        resolve("Login successful");
      } else {
        reject("Login failed");
      }
    }, 1000);
  });
}

checkLogin(true)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));


/* 3. async and await */

/* Example 1: Using async and await */

async function loadData() {
  const result = await getUserData();
  console.log(result);
}

loadData();


/* Example 2: async and await with error handling */

async function loginUser() {
  try {
    const message = await checkLogin(false);
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}

loginUser();


/* Summary */

// Callbacks: Function passed to another function, executed later
// Promises: Handle async results using then and catch
// async/await: Cleaner syntax built on top of Promises
