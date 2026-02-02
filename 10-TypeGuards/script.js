/**
 * Typ-Umwandlung zu booleans
 * "", 0, undefined, null => false
 */
function printAll(arg) {
    if (typeof arg === "object") {
        for (var _i = 0, arg_1 = arg; _i < arg_1.length; _i++) {
            var s_1 = arg_1[_i];
            console.log(s_1);
        }
        return;
    }
    else if (typeof arg === "string") {
        console.log(arg);
        return;
    }
}
var s = "Jan";
printAll(s);
var a = ["Jan", "Daniel", "Sabine"];
printAll(a);
var n = 2;
if (!n) {
    console.log(false);
}
else {
    console.log(true);
}
var s2 = null;
if (!s2) {
    console.log(false);
}
else {
    console.log(true);
}
//# sourceMappingURL=script.js.map