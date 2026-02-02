"use strict";
// Funktion liefert das größere von zwei Arrays
function lengthComparsion(arr1, arr2) {
    if (arr1.length >= arr2.length) {
        return arr1;
    }
    return arr2;
}
const a1 = [1, 2, 3];
const a2 = [1, 2];
const r1 = lengthComparsion(a1, a2);
console.log(r1);
const s1 = lengthComparsion('alice', 'bob');
console.log(s1);
// const n1 = lengthComparsion(10, 100); funktioniert nicht, da der numerische Type keine length-Eigenschaft besitzt
// const b1 = lengthComparsion(true, false); ebenfalls keine Eigenschaft length
