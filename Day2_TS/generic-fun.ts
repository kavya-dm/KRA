/*
This file demonstrates the implementation of Generics in TypeScript.
It compares Generic Functions and Generic Classes with clear definitions
and two examples for each topic.
*/

/*
Definition:
A Generic Function allows the function to work with different data types
while maintaining type safety. The type is specified at the time of use.
*/

/* Generic Function Example 1 */
function identity<T>(value: T): T {
  return value;
}

const numberResult = identity<number>(10);
const stringResult = identity<string>("Hello");

/*
Generic Function Example 2:
Generic function operating on arrays.
*/
function getFirstElement<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(["A", "B", "C"]);

/*
Definition:
A Generic Class allows a class to work with multiple data types.
The type is defined when an object of the class is created.
*/

/* Generic Class Example 1 */
class DataHolder<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  getData(): T {
    return this.data;
  }
}

const numberHolder = new DataHolder<number>(100);
const textHolder = new DataHolder<string>("TypeScript");

/*
Generic Class Example 2:
Generic class with multiple properties.
*/
class KeyValuePair<K, V> {
  key: K;
  value: V;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
}

const pair1 = new KeyValuePair<number, string>(1, "One");
const pair2 = new KeyValuePair<string, boolean>("isActive", true);

/*
Summary:
Generic Functions provide flexibility for reusable logic.
Generic Classes are useful for creating reusable and type-safe data structures.
*/
