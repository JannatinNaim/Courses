let arr = ["Jannatin Naim", "Nushrat Jahan", "Morzina Khatun", "Khorshed Alam"];

console.log(arr);
console.log(arr[0]);

arr[1] = "Tisha";
console.log(arr);

arr[15] = "F";
console.log(arr);

const arrLastItem = arr.pop();
console.log(arrLastItem);
console.log(arr);

console.log(arr.length);

arr.push("X");
console.log(arr);

// delete arr[0];
// console.log(arr);

const arrFirstItem = arr.shift();
console.log(arrFirstItem);
console.log(arr);

arr.push(arr.shift());
console.log(arr);

arr.unshift(arr.pop());
console.log(arr);

console.log(arr.toString());
console.log(arr.toString().split(","));

console.log(arr.concat(arr));

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach((item) => console.log(item));

const newArr = [
    ["Jannatin Naim", "Bogura", "JavaScript"],
    ["John Doe", "Mars", ["PHP", "Scala", "Python"]],
    ["Jane Doe", "Jupiter", "Go"],
];

console.log(newArr[0][1]);
console.log(newArr[1][2][2]);
console.log(newArr[1][2][2].toUpperCase());
