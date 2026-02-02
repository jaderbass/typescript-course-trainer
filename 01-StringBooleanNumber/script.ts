/**
 * * Datentypen wie in JS nur String, Number, Object und Boolean
 * * Datentypen/StringNumberBoolean – RK auf den Ordner und "Open in Integrated Terminal" 2x
 * *  1. Terminal Server starten npm run start bzw. lite-server
 * *  2. Terminal npm run watch um den Compiler zu starten
 * * script.ts zunächst ohne Typ-Hinweise. Diese später hinzufügen. In Browser-Konsole anschauen.
 */

function add(arg1: number, arg2: number) {
    return arg1 + arg2;
}

function concatenate(arg1: string, arg2: string) {
    return arg1 + arg2;
}

function check(arg: number): boolean {
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
