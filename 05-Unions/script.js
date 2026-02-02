function add(arg1, arg2) {
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        return arg1 + arg2;
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        return arg1 + " " + arg2;
    }
    else {
        return "Falsche Datentypen";
    }
}
var a1 = "Jörg";
var a2 = "Aderhold";
var r1 = add(a1, a2);
console.log(r1);
var a3 = "Sabine";
var a4 = 7;
var r2 = add(a3, a4);
console.log(r2);
//# sourceMappingURL=script.js.map