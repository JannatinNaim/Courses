/**
 * ? String -> String()
 * ? Number -> Number()
 * ? Boolean -> Boolean()
 * Undefined
 * null
 * Symbol (ES6)
 *
 *
 * Object
 * ------
 * 1. Key value pair.
 * 2. Property and method.
 *
 *
 * true -> 1
 * false -> 0
 *
 * Falsy Value
 * ------------
 * 1. null
 * 2. NaN
 * 3. undefined
 * 4. 0
 * 5. ''
 * 6. false
 * 7. []
 * 8. {}
 */

let x = "Jannatin Naim";
console.log(typeof x);

console.log(true + 1);
// -> 2
// True is converted to 1 because of type of coercion.

let func = function () {
    console.log("Hello");
};

console.log(typeof func);

let str = "Hello, world!";
console.log(str.toUpperCase());

let num = "123";
console.log(num);
console.log(typeof num);

let newNum = Number(num);
console.log(newNum);
console.log(typeof newNum);

let newStr = String(newNum);
console.log(newStr);
console.log(typeof newStr);

let newBoolean = Boolean(newStr);
console.log(newBoolean);
console.log(typeof newBoolean);

str = "12"; // string
num = 10; // number
console.log(str + num);
console.log(str - num);
console.log(str / num);
console.log(str * num);

str = "12ab"; // string
num = 10; // number
console.log(str + num);
console.log(str - num);
console.log(str / num);
console.log(str * num);

str = true; // boolean
num = 10; // number
console.log(str + num);
console.log(str - num);
console.log(str / num);
console.log(str * num);

if ("") {
    console.log("Hello");
}

if (" ") {
    console.log("Hello");
}

let primitive = 5;
let newPrimitive = primitive;

primitive = 10;
console.log(newPrimitive);

let reference = [1, 2];
let newReference = reference;

newReference[0] = 2;
console.log(reference);

let someObject = {
    a: 12,
    b: 23,
    c: 40,
};
let referenceObject = someObject;

someObject.a = 1000000000;
console.log(referenceObject);

str = "12";
num = 10;

console.log(typeof str + num);
