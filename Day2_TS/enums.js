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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var moveDirection = Direction.Up;
/*
Numeric Enum Example 2:
Explicit numeric values can also be assigned.
*/
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
var responseStatus = StatusCode.Success;
/*
Definition:
A String Enum is an enumeration where each member is associated
with a string value. String Enums provide better readability
and are commonly used in application logic.
*/
/* String Enum Example 1 */
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
var currentUserRole = UserRole.Admin;
/*
String Enum Example 2:
String Enums are useful for representing fixed states.
*/
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
var currentOrderStatus = OrderStatus.Shipped;
/*
Summary:
Numeric Enums are suitable when numeric representation is required.
String Enums are preferred when clarity and readability are important.
*/
