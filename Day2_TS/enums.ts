/*
This file demonstrates the concept of Enums in TypeScript.
It compares Numeric Enums and String Enums with clear definitions
and two examples for each topic.
*/

/*
Definition:
A Numeric Enum is an enumeration where members are represented
by numeric values. By default, numbering starts from zero and
increments automatically.
*/

/* Numeric Enum Example 1 */
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const moveDirection: Direction = Direction.Up;

/*
Numeric Enum Example 2:
Explicit numeric values can also be assigned.
*/
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

const responseStatus: StatusCode = StatusCode.Success;

/*
Definition:
A String Enum is an enumeration where each member is associated
with a string value. String Enums provide better readability
and are commonly used in application logic.
*/

/* String Enum Example 1 */
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

const currentUserRole: UserRole = UserRole.Admin;

/*
String Enum Example 2:
String Enums are useful for representing fixed states.
*/
enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
}

const currentOrderStatus: OrderStatus = OrderStatus.Shipped;

/*
Summary:
Numeric Enums are suitable when numeric representation is required.
String Enums are preferred when clarity and readability are important.
*/
