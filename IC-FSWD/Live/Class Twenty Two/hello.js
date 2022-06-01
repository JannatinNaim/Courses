for (let i = 0; i < 10; i++) {
    console.log(i);
}

let arr = ["Apple", "Banana", "Orange", "Mango", "JackFruit", "Papaya"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " Fruit");
}

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// for ... of
for (let fruit of arr) {
    console.log(fruit);
}

for (let fruit of arr.reverse()) {
    console.log(fruit);
}

for (let fruit in arr) {
    console.log(fruit);
}

console.log(i);

arr.forEach(function (element, index, arr) {
    console.log("Element: " + element);
    console.log("Index: " + index);
    console.log("Array: " + arr);
});

arr.forEach((e) => console.log(e));

// for - known number of iterations
// while - unknown number of iterations
// do while
// for of
// forEach

let num = 10;

while (num < 10) {
    console.log("Hello, world!");
}

num = 0;
do {
    console.log(num);
    num++;
} while (num < 10);

let sum = 0;
for (let i = 0, number = 50; i <= number; i++) sum += i;
console.log(sum);

let str = "Hello, world!";

for (let i = 0; i < str.length; i++) console.log(str[i]);
for (s of str) console.log(s);
// str.forEach((s) => console.log(s));
