"use strict";
const user1 = {
    name: 'Jörg',
    age: 63,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
};
console.log(user1);
const user2 = {
    name: 'Sabine',
    age: 42,
    courses: ['Java', 'C#'],
};
console.log(user2);
function printUser(user) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);
    return user;
}
printUser(user1);
