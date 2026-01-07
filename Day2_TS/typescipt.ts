/*
This file demonstrates core TypeScript features.
Each topic is presented in a VS format with definitions,
usage examples, and explanatory comments.
The code is syntactically correct, type-safe, and executable.
*/

/* =====================================================
INTERFACE VS TYPE ALIAS
===================================================== */

/*
Definition:
An Interface defines the structure of an object.
It is mainly used for object shapes and supports extension.
*/
interface UserInterface {
  id: number;
  name: string;
}

const interfaceUser: UserInterface = {
  id: 1,
  name: "Alice",
};
// Creates an object that follows the structure defined by the interface

console.log("Interface User:", interfaceUser);
// Displays the interface-based object

/*
Definition:
A Type Alias creates a named reference for any type.
It is more flexible and can define unions and primitives.
*/
type UserType = {
  id: number;
  name: string;
};

const typeUser: UserType = {
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
enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
}

const currentOrder: OrderStatus = OrderStatus.Shipped;
// Assigns a predefined enum value to represent order status

console.log("Enum Order Status:", currentOrder);
// Displays the numeric value of the enum member

/*
Definition:
A Union Type restricts a variable to a fixed set of values.
It is lightweight and commonly used instead of enums.
*/
type PaymentStatus = "Paid" | "Unpaid";

const payment: PaymentStatus = "Paid";
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
function identity<T>(value: T): T {
  return value;
}

const numberValue = identity<number>(10);
// Passes a number and receives the same type as output

console.log("Generic Function Output:", numberValue);
// Displays the value returned by the generic function

/*
Definition:
A Generic Class allows class-level reusability with type safety.
*/
class DataStorage<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  public getData(): T {
    return this.data;
  }
}

const stringStorage = new DataStorage<string>("TypeScript");
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

class Account {
  public owner: string;
  private balance: number;
  protected accountType: string;

  constructor(owner: string, balance: number, accountType: string) {
    let initialBalance = balance;
    // Local variable holds the incoming balance value

    this.owner = owner;
    // Assigns constructor parameter to public property

    this.balance = initialBalance;
    // Assigns local variable to private property using this

    this.accountType = accountType;
    // Assigns constructor parameter to protected property
  }

  public getBalance(): number {
    return this.balance;
    // Returns private property through a public method
  }
}

class SavingsAccount extends Account {
  public getAccountType(): string {
    return this.accountType;
    // Accesses protected property from subclass using this
  }
}

const account = new SavingsAccount("John", 5000, "Savings");
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
