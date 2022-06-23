let x = 10;
let y = "10";

x += 10; // x = x + 10;
x -= 10; // x = x - 10;
x *= 10; // x = x * 10;
x /= 10; // x = x / 10;

console.log(x);

x++; // => x + 1;
x--; // => x - 1;

// let y = x++;
// console.log(y); // y -> 10;

console.log(10 > 6);
console.log(10 > 10);
console.log(10 >= 10);
console.log(x == y);
console.log(x === y);

console.log(!"");
console.log(!undefined);

let z = "Heyo!";
console.log(!z);

console.log(10 > 5 && 5 === 5);

// && -> true | true
// || -> true / false | true / false

let exm = "Heyo!" && 123;
exm = "Heyo!" && false;
exm = false && 123;
exm = null && 123;

exm = null || 123;

console.log(exm);

let isMurubbi = x >= 18;
let str = isMurubbi ? "You can join." : "Never!!!";
console.log(str);

console.log(typeof str);
