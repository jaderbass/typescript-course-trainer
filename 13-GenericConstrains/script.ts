/**
 * ! generic constraints = generische Einschränkungen
 * 
 * * Wenn Sie die Anweisung let result: T = value + value zur identity-Funktion hinzufügen, löst TypeScript den Fehler Die linke Seite einer arithmetischen Operation muss den Typ „any“, „number“ oder „bigint“ aufweisen oder ein Enumerationstyp sein, da nicht bekannt ist, welcher Wert zur Laufzeit übergeben wird. Wenn Sie einen nicht numerischen Wert übergeben, generiert der Ausdruck einen Fehler, sodass TypeScript Sie zur Kompilierzeit über das Problem informiert.
 */
// function identity<T, U> (value: T, message: U) : T {
//     let result: T = value + value;    // Error
//     console.log(message);
//     return result
// }

/**
 * * Die Funktion identity kann jeden Typ akzeptieren, den Sie an die Typvariablen übergeben. In diesem Fall sollten Sie jedoch die Typen einschränken, die der Parameter value akzeptieren kann, sodass nur Typen akzeptiert werden, für die Sie einen Hinzufügungsvorgang durchführen können, anstatt jeden möglichen Typ zu akzeptieren. Dies wird als generische Einschränkung bezeichnet.
 * 
 * * Je nach Typvariable gibt es verschiedene Methoden, eine solche Einschränkung einzurichten. Eine Möglichkeit besteht darin, einen benutzerdefinierten type-Wert als Tupel und dann die Typvariable extend mit dem benutzerdefinierten Typ zu deklarieren. Im folgenden Beispiel wird ValidTypes als Tupel mit string und number deklariert. Anschließend wird T mit dem neuen Typ erweitert. Nun können Sie nur die Typen number und string an die Typvariable übergeben.
 */

/* type ValidTypes = string | number;

function identity<T extends ValidTypes, U> (value: T, message: U) : T {
    // let result: T = value + value;    // Error
    let result: T = value;    // später mit oben ersetzen
    console.log(message);
    return result
}

let returnNumber = identity<number, string>(100, 'Hello!');      // OK
let returnString = identity<string, string>('100', 'Hola!');     // OK */
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

/**
 * * Sie können auch einen Typ auf die Eigenschaft eines anderen Objekts einschränken. Im folgenden Beispiel wird extends mit dem Operator keyof verwendet, der einen Objekttyp akzeptiert und eine Zeichenfolge oder eine numerische Literalunion der Schlüssel erzeugt. Hier wird durch K extends keyof T sichergestellt, dass der Schlüsselparameter den richtigen Typ für den Typ aufweist, der pet zugewiesen ist.
 */

function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}

console.log(getPets(pets1, "fish"));  // Returns 6
// console.log(getPets(pets2, "3"));     // Error

/**
 * * Verwenden von Typwächtern mit Generics
 * * Sie werden bemerken, dass TypeScript weiterhin ein Problem mit dem Ausdruck value + value in der Funktion identity meldet. Allerdings wissen Sie nun, dass nur die Typen number und string an die Funktion übergeben werden können.
 * 
 * * Sie können den Typwächter typeof in einem if-Block verwenden, um den Typ des Parameters value zu überprüfen, bevor Sie einen Vorgang ausführen (siehe folgendes Beispiel). TypeScript kann anhand der if-Anweisung ermitteln, ob der Vorgang mit den im Block angegebenen Werten funktioniert.
 */
type ValidTypes = string | number;
function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100