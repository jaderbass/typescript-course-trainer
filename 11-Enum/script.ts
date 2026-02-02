/**
 * * gibt es nur in TS
 * * Enum-Liste mit mehreren vorgeschriebenen konstanten Werten
 */

enum PermissionLevel {
    STUDENT = 'student',
    INSTRUCTOR = 'instructor',
    ADMIN = 'admin',
}

interface User {
    name: string;
    age: number;
    courses: string[];
}

interface UserExtended extends User {
    permissionLevel: PermissionLevel;
}

const user1: UserExtended = {
    name: 'Jörg',
    age: 63,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    permissionLevel: PermissionLevel.ADMIN,
};

console.log(user1);

const user2: UserExtended = {
    name: 'Sabine',
    age: 42,
    courses: ['Java', 'C#'],
    permissionLevel: PermissionLevel.INSTRUCTOR,
};

console.log(user2);

function printUser(user: User) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);

    return user;
}

printUser(user1);
