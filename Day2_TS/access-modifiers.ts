/*
This file demonstrates the use of access modifiers in TypeScript.
It compares public, private, and protected access modifiers
with clear definitions and two examples for each.
*/

/*
Definition:
The public access modifier allows class members to be accessible
from anywhere. It is the default access level in TypeScript.
*/

/* Public Access Modifier Example 1 */
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const personA = new Person("Alice");
personA.getName();

/*
Public Access Modifier Example 2:
Public members can be accessed directly outside the class.
*/
class Car {
  public brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

const carA = new Car("Toyota");
carA.brand;

/*
Definition:
The private access modifier restricts access to class members
to within the same class only.
*/

/* Private Access Modifier Example 1 */
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  public getBalance(): number {
    return this.balance;
  }
}

const accountA = new BankAccount(5000);
accountA.getBalance();

/*
Private Access Modifier Example 2:
Private members cannot be accessed directly outside the class.
*/
class User {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  public getPasswordLength(): number {
    return this.password.length;
  }
}

const userA = new User("securePass");
userA.getPasswordLength();

/*
Definition:
The protected access modifier allows access within the class
and its derived subclasses.
*/

/* Protected Access Modifier Example 1 */
class Animal {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }
}

class Dog extends Animal {
  public getType(): string {
    return this.type;
  }
}

const dogA = new Dog("Mammal");
dogA.getType();

/*
Protected Access Modifier Example 2:
Protected members are accessible in subclasses but not outside.
*/
class Employee {
  protected employeeId: number;

  constructor(employeeId: number) {
    this.employeeId = employeeId;
  }
}

class Manager extends Employee {
  public getEmployeeId(): number {
    return this.employeeId;
  }
}

const managerA = new Manager(101);
managerA.getEmployeeId();

/*
Summary:
Public members are accessible everywhere.
Private members are accessible only within the defining class.
Protected members are accessible within the class and its subclasses.
*/
