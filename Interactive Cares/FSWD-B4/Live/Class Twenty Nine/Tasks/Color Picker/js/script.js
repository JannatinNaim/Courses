const globalBackground = document.querySelector(".global_background");
const generateButton = document.querySelector(".generate_button");
const colorCode = document.querySelector(".color_code");

generateButton.addEventListener("click", () => {
  generateRandomColor();
});

generateRandomColor();

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  let hexString = "#";

  hexString += red.toString("16");
  hexString += green.toString("16");
  hexString += blue.toString("16");

  globalBackground.style.background = hexString;
  colorCode.innerText = hexString;
}
