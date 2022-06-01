const dada = document.querySelector(".dada");
const chacha = document.querySelector(".chacha");
const bhai = document.querySelector(".bhai");

bhai.addEventListener(
  "click",
  (e) => {
    console.log("1");
  }
  // { capture: true }
);

chacha.addEventListener(
  "click",
  (e) => {
    console.log("2");
  }
  // { capture: true }
);

dada.addEventListener(
  "click",
  (e) => {
    console.log("3");
  }
  // { capture: true }
);

// document.addEventListener(
//   "click",
//   sayHello
//   // { capture: true }
// );

// function sayHello() {
//   console.log("Hello!");
// }

// setTimeout(() => {
//   document.removeEventListener("click", sayHello);
// }, 2000);
