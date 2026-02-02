function add(arg1: string | number, arg2: string | number)  {
    if(typeof arg1 === "number" && typeof arg2 === "number") {
        return arg1 + arg2;
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        return arg1 + " " + arg2;
    } else {
        return "Falsche Datentypen";
    }
}

const a1 = "Jörg";
const a2 = "Aderhold";
const r1 = add(a1,a2);

console.log(r1);

const a3 = "Sabine";
const a4 = 7;
const r2 = add(a3,a4);

console.log(r2);
