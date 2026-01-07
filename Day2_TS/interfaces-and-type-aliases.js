/*
Type Alias vs Interface demonstration in a single TypeScript file.
This file contains formal definitions and examples for both concepts.
*/
var userA = {
    id: 1,
    name: "Alice",
    isActive: true,
};
function getStatusMessage(status) {
    return "Current status is ".concat(status);
}
getStatusMessage("success");
var productA = {
    id: 101,
    name: "Laptop",
    price: 1500,
};
var employeeA = {
    name: "John",
    age: 30,
    employeeId: 5001,
};
/*
Summary:
Type Aliases provide flexibility for defining complex and mixed types.
Interfaces are recommended for defining object structures and scalable designs.
*/
