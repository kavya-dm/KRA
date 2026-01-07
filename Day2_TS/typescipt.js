/*
This file demonstrates core TypeScript features.
Each topic is presented in a VS format with definitions,
usage examples, and explanatory comments.
The code is syntactically correct, type-safe, and executable.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var interfaceUser = {
    id: 1,
    name: "Alice",
};
// Creates an object that follows the structure defined by the interface
console.log("Interface User:", interfaceUser);
var typeUser = {
    id: 2,
    name: "Bob",
};
// Creates an object using a type alias instead of an interface
console.log("Type Alias User:", typeUser);
// Displays the type-alias-based object
/* =====================================================
ENUM VS UNION TYPE
===================================================== */
/*
Definition:
An Enum defines a set of named constant values.
It improves readability and consistency.
*/
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
var currentOrder = OrderStatus.Shipped;
// Assigns a predefined enum value to represent order status
console.log("Enum Order Status:", currentOrder);
var payment = "Paid";
// Ensures the variable can only hold allowed string values
console.log("Union Payment Status:", payment);
// Displays the union type value
/* =====================================================
GENERIC FUNCTION VS GENERIC CLASS
===================================================== */
/*
Definition:
A Generic Function allows reuse with different data types
while maintaining type safety.
*/
function identity(value) {
    return value;
}
var numberValue = identity(10);
// Passes a number and receives the same type as output
console.log("Generic Function Output:", numberValue);
// Displays the value returned by the generic function
/*
Definition:
A Generic Class allows class-level reusability with type safety.
*/
var DataStorage = /** @class */ (function () {
    function DataStorage(data) {
        this.data = data;
    }
    DataStorage.prototype.getData = function () {
        return this.data;
    };
    return DataStorage;
}());
var stringStorage = new DataStorage("TypeScript");
// Creates a class instance that safely stores a string value
console.log("Generic Class Output:", stringStorage.getData());
// Displays the value stored inside the generic class
/* =====================================================
ACCESS MODIFIERS VS NORMAL VARIABLES
===================================================== */
/*
Definition:
Public members are accessible from anywhere.
Private members are accessible only within the class.
Protected members are accessible within the class and subclasses.
*/
var Account = /** @class */ (function () {
    function Account(owner, balance, accountType) {
        var initialBalance = balance;
        // Local variable holds the incoming balance value
        this.owner = owner;
        // Assigns constructor parameter to public property
        this.balance = initialBalance;
        // Assigns local variable to private property using this
        this.accountType = accountType;
        // Assigns constructor parameter to protected property
    }
    Account.prototype.getBalance = function () {
        return this.balance;
        // Returns private property through a public method
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingsAccount.prototype.getAccountType = function () {
        return this.accountType;
        // Accesses protected property from subclass using this
    };
    return SavingsAccount;
}(Account));
var account = new SavingsAccount("John", 5000, "Savings");
// Creates an object and initializes all class members
console.log("Account Balance:", account.getBalance());
// Displays private data accessed via public method
console.log("Account Type:", account.getAccountType());
// Displays protected data accessed via subclass method
/*
Summary:
Interfaces and type aliases define data structures.
Enums and union types manage fixed values.
Generics provide reusable and type-safe logic.
Access modifiers protect and control class data.
These features enable scalable and maintainable TypeScript code.
*/
