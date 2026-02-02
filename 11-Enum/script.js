"use strict";
// Enum-Liste mit mehreren vorgeschriebenen konstanten Werten
var PermissionLevel;
(function (PermissionLevel) {
    PermissionLevel["STUDENT"] = "student";
    PermissionLevel["INSTRUCTOR"] = "instructor";
    PermissionLevel["ADMIN"] = "admin";
})(PermissionLevel || (PermissionLevel = {}));
const user1 = {
    name: 'Jörg',
    age: 63,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    permissionLevel: PermissionLevel.ADMIN,
};
console.log(user1);
const user2 = {
    name: 'Sabine',
    age: 42,
    courses: ['Java', 'C#'],
    permissionLevel: PermissionLevel.INSTRUCTOR,
};
console.log(user2);
function printUser(user) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);
    return user;
}
printUser(user1);
