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
function identity(value) {
    return value;
}
var numberResult = identity(10);
var stringResult = identity("Hello");
/*
Generic Function Example 2:
Generic function operating on arrays.
*/
function getFirstElement(items) {
    return items[0];
}
var firstNumber = getFirstElement([1, 2, 3]);
var firstString = getFirstElement(["A", "B", "C"]);
/*
Definition:
A Generic Class allows a class to work with multiple data types.
The type is defined when an object of the class is created.
*/
/* Generic Class Example 1 */
var DataHolder = /** @class */ (function () {
    function DataHolder(data) {
        this.data = data;
    }
    DataHolder.prototype.getData = function () {
        return this.data;
    };
    return DataHolder;
}());
var numberHolder = new DataHolder(100);
var textHolder = new DataHolder("TypeScript");
/*
Generic Class Example 2:
Generic class with multiple properties.
*/
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var pair1 = new KeyValuePair(1, "One");
var pair2 = new KeyValuePair("isActive", true);
/*
Summary:
Generic Functions provide flexibility for reusable logic.
Generic Classes are useful for creating reusable and type-safe data structures.
*/
