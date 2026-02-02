function getArray(items) {
    return new Array().concat(items);
}
var numberArray = getArray([5, 10, 15, 20]);
var stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);
stringArray.push('Rabbits');
numberArray.push('This is not a number');
stringArray.push(30);
console.log(numberArray);
console.log(stringArray);
function getGenericArray(items) {
    return new Array().concat(items);
}
var numberArray2 = getGenericArray([10, 20, 30, 40]);
numberArray2.push(50);
// numberArray2.push('This is not a number'); // generiert einen type-check Fehler
console.log(numberArray);
var stringArray2 = getGenericArray(['Cats', 'Dogs', 'Birds']);
stringArray2.push('Rabbits');
// stringArray2.push(25); // generiert einen type-check Fehler
console.log(stringArray2);
function identity(value, message) {
    console.log(message);
    return value;
}
var returnNumber = identity(100, 'Hallo');
var returnString = identity('100', '!Hola');
var returnBoolean = identity(false, 'Bonjour!');
returnNumber *= 100;
returnString *= 100;
returnBoolean *= 100;
console.log(returnNumber, returnString, returnBoolean);
//# sourceMappingURL=script.js.map