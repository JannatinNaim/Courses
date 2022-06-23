const img = document.getElementById("image");
const li = document.getElementById("list");

const lightButton = document.getElementById("light_button");
const darkButton = document.getElementById("darkButton");

img.classList.add("IMG");
img.classList.toggle("IMG");

darkButton.addEventListener("click", () => {
  li.classList.toggle("dark");
});

lightButton.addEventListener("click", () => {
  li.classList.toggle("light");
});
