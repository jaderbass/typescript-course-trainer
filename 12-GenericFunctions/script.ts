function getArray(items:any[]):any[] {
    return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);

numberArray.push(25);
stringArray.push('Rabbits');

numberArray.push('This is not a number');
stringArray.push(30);

console.log(numberArray);
console.log(stringArray);

function getGenericArray<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let numberArray2 = getGenericArray<number>([10, 20, 30, 40]);
numberArray2.push(50);
// numberArray2.push('This is not a number'); // generiert einen type-check Fehler

console.log(numberArray);

let stringArray2 = getGenericArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray2.push('Rabbits');
// stringArray2.push(25); // generiert einen type-check Fehler

console.log(stringArray2);

function identity<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
}

let returnNumber = identity<number, string>(100, 'Hallo');
let returnString = identity<string, string>('100', '!Hola');
let returnBoolean = identity<boolean, string>(false, 'Bonjour!');

returnNumber *= 100;
returnString *= 100;
returnBoolean *= 100;

console.log(returnNumber, returnString, returnBoolean);
