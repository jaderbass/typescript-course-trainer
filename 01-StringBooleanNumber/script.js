"use strict";
function add(arg1, arg2) {
    return arg1 + arg2;
}
function concatenate(arg1, arg2) {
    return arg1 + arg2;
}
function check(arg) {
    if (arg > 2) {
        return false;
    }
    return true;
}
const a1 = 2;
// const a2 = 'Jörg';
const a2 = 5;
const r1 = add(a1, a2);
console.log(r1);
const a3 = 'Jörg';
const a4 = ' Aderhold';
const r2 = concatenate(a3, a4);
console.log(r2);
const a5 = 3;
const r3 = check(a5);
console.log(r3);
