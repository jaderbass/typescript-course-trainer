"use strict";
function foo(arg) {
    // Ist möglich, sollte aber weitgehends vermieden werden
    console.log(arg);
    // return;
}
let a = undefined;
let b = foo(3);
console.log(b);
a = undefined;
