/*
This file demonstrates the use of access modifiers in TypeScript.
It compares public, private, and protected access modifiers
with clear definitions and two examples for each.
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
/*
Definition:
The public access modifier allows class members to be accessible
from anywhere. It is the default access level in TypeScript.
*/
/* Public Access Modifier Example 1 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var personA = new Person("Alice");
personA.getName();
/*
Public Access Modifier Example 2:
Public members can be accessed directly outside the class.
*/
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    return Car;
}());
var carA = new Car("Toyota");
carA.brand;
/*
Definition:
The private access modifier restricts access to class members
to within the same class only.
*/
/* Private Access Modifier Example 1 */
var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        this.balance = balance;
    }
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var accountA = new BankAccount(5000);
accountA.getBalance();
/*
Private Access Modifier Example 2:
Private members cannot be accessed directly outside the class.
*/
var User = /** @class */ (function () {
    function User(password) {
        this.password = password;
    }
    User.prototype.getPasswordLength = function () {
        return this.password.length;
    };
    return User;
}());
var userA = new User("securePass");
userA.getPasswordLength();
/*
Definition:
The protected access modifier allows access within the class
and its derived subclasses.
*/
/* Protected Access Modifier Example 1 */
var Animal = /** @class */ (function () {
    function Animal(type) {
        this.type = type;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.getType = function () {
        return this.type;
    };
    return Dog;
}(Animal));
var dogA = new Dog("Mammal");
dogA.getType();
/*
Protected Access Modifier Example 2:
Protected members are accessible in subclasses but not outside.
*/
var Employee = /** @class */ (function () {
    function Employee(employeeId) {
        this.employeeId = employeeId;
    }
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getEmployeeId = function () {
        return this.employeeId;
    };
    return Manager;
}(Employee));
var managerA = new Manager(101);
managerA.getEmployeeId();
/*
Summary:
Public members are accessible everywhere.
Private members are accessible only within the defining class.
Protected members are accessible within the class and its subclasses.
*/
