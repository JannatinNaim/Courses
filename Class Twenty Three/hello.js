// Functions modularize code and are reusable.

function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(50, 50);

function sayHello(user = "John Doe") {
    console.log("Hello " + user);
}

sayHello("Janantin");
sayHello("Naim");

let num1 = 10;
let num2 = 20;

function newAdder(num1, num2) {
    return num1 + num2;
}

const result = newAdder(20, 30);
console.log(result);

const newSayHello = function (name) {
    console.log("Hello, " + name);
};

newSayHello("Naim");

let arrowHello = (name) => "Hello, " + name;
const arrowResult = arrowHello("Jannatin Naim");
console.log(arrowResult);
