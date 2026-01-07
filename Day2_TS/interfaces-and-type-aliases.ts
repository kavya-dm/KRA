/*
Type Alias vs Interface demonstration in a single TypeScript file.
This file contains formal definitions and examples for both concepts.
*/

/*
Definition:
A Type Alias is used to create a named reference for any valid TypeScript type.
It can describe primitive types, object shapes, union types, and function types.
*/

/* Type Alias Example 1: Object type definition */
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const userA: User = {
  id: 1,
  name: "Alice",
  isActive: true,
};

/*
Type Alias Example 2:
Union type that restricts a variable to specific string values.
*/
type Status = "success" | "error" | "loading";

function getStatusMessage(status: Status): string {
  return `Current status is ${status}`;
}

getStatusMessage("success");

/*
Definition:
An Interface defines the structure that an object must follow.
It is primarily used for object modeling and supports extension.
*/

/* Interface Example 1: Basic object structure */
interface Product {
  id: number;
  name: string;
  price: number;
}

const productA: Product = {
  id: 101,
  name: "Laptop",
  price: 1500,
};

/*
Interface Example 2:
Demonstrates interface inheritance using extension.
*/
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const employeeA: Employee = {
  name: "John",
  age: 30,
  employeeId: 5001,
};

/*
Summary:
Type Aliases provide flexibility for defining complex and mixed types.
Interfaces are recommended for defining object structures and scalable designs.
*/
