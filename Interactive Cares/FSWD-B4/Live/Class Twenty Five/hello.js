// let personOne = {
//     name: "Jannatin",
//     address: "Cumilla",
//     speak: function () {
//         console.log("Heyo!");
//     },
// };

// let personTwo = {
//     name: "Naim",
//     address: "Cumilla",
//     speak: function () {
//         console.log("Heyo!");
//     },
// };

// let personThree = {
//     name: "Jannatin Naim",
//     address: "Cumilla",
//     speak: function () {
//         console.log("Heyo!");
//     },
// };

// 'use strict' is weird :)

// Factory Function -> object

function createPerson(name, address) {
    return {
        name,
        address,
        speak() {
            console.log("Heyo! " + this.name + ".");
        },
    };
}

let personOne = createPerson("Jannatin", "Cumilla");
console.log(personOne);
personOne.speak();

let personTwo = createPerson("Naim", "Cumilla");
console.log(personTwo);

// Constructor Function

// new => {}

let date = new Date();
console.log(date);

// camelCase
// PascalCase

function Person(name, address) {
    this.name = name;
    this.address = address;
    this.sayHello = function () {
        console.log("Heyo!");
    };
}

let newPersonOne = new Person("Jannatin Naim", "Cumilla");
console.log(newPersonOne);
newPersonOne.sayHello();
let newPersonTwo = new Person("Jannatin Naim", "Cumilla");
console.log(newPersonTwo);
newPersonTwo.sayHello();
let newPersonThree = new Person("Jannatin Naim", "Cumilla");
console.log(newPersonThree);
newPersonThree.sayHello();

/*

Method: this => object
Function: this => window (browser) / global (node)

*/

var name = "Naim";

let obj = {
    name: "Jannatin Naim",
    interest: ["A", "B", "C"],
    sayHello() {
        console.log("Heyo! " + this.name + ".");
    },
    showInterest() {
        this.interest.forEach(function (i) {
            console.log(i + " " + this.name);
        });
    },
};

obj.sayHello();
obj.showInterest();
