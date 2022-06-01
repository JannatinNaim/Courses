// Variable
let person = "Jannatin Naim";
let persons = ["Jannatin", "Naim"];
let personsObject = {
    name: "Jannatin Naim",
    address: "Cumilla",
    sayHello: function () {
        console.log(this.name);
    },
};

console.log(typeof personsObject);
console.log(personsObject.name);
console.log(personsObject.address);
personsObject.sayHello();
