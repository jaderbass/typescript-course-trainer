/**
 * * 
 * * Array ist eine Liste mit variablen Einträgen und in der Anzahl der Werte dynamisch
 * * Ein Tuple ist eine nicht variable und fixe Liste. Für sehr spezielle Anforderungen.
 * * script.ts entsprechend Vorlage anpassen. Zunächst ohne Typ-Hinweise. 
 * * Diese später hinzufügen. In Browser-Konsole anschauen.
 */

let arr = [1, 2, 3, 4, 5];
console.log(arr);

function printArray(arr: number[]) {
    console.log(arr);
}

printArray(arr);
// printArray(27);

function printTuple(tpl: [number, number, string, number]) {
    console.log(tpl);
}

let tpl: [number, number, string, number] = [27, 23, 'Jörg', 5];

printTuple(tpl);
