/**
 * * any – allgemeinster Typ, es wird kein Type-Checking ausgeführt, eigentlich nie verwenden
 * * void – meist bei Rückgaben von Funktionen
 * * null – sehr selten in TS verwendet
 */

function foo(arg: any): void {
    // Ist möglich, sollte aber weitgehends vermieden werden
    console.log(arg);

    // return;
}

let a: number | undefined = undefined;

let b = foo(3);

console.log(b);

a = undefined;
