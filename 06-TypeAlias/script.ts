/**
 * * bei wiederkehrenden Type-Hinweisen komfortabler 
 * * spart coding-Arbeit
 */

type Addable = number | string;

function add(arg1: Addable, arg2: Addable) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2;
    }
}

const a1 = 'Jörg';
const a2 = ' Aderhold';
const r1 = add(a1, a2);

console.log(r1);

const a3 = 'Sabine';
const a4 = 21;
const r2 = add(a3, a4);

console.log(r2);
