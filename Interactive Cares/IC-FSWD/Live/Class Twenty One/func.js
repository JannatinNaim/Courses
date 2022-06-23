// let age = 17;

// if (age >= 18) {
//     console.log("You can enter!");
// } else {
//     console.log("You can't enter!");
// }

let currentDay = new Date().getDay();

if (currentDay === 0) console.log("Sunday");
else if (currentDay === 1) console.log("Monday");
else if (currentDay === 2) console.log("Tuesday");
else if (currentDay === 3) console.log("Wednesday");
else if (currentDay === 4) console.log("Thursday");
else if (currentDay === 5) console.log("Friday");
else if (currentDay === 6) console.log("Saturday");
else console.log("Enter a valid date.");

switch (currentDay) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Enter a valid date.");
        break;
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[currentDay]);

// const rabiPPSize = 2;
// if (rabiPPSize > 0) console.log("Rabi has a PP.");
// else if (rabiPPSize <= 2) console.log("Rabi has a small PP.");
// else if (rabiPPSize <= 4) console.log("Rabi has a medium PP.");
// else if (rabiPPSize <= 6) console.log("Rabi has a large PP.");
// else console.log("Rabi has a huge PP.");
