const remOutput = document.querySelector(".rem__value");
const pixelInput = document.querySelector("#pixel__input");

pixelInput.addEventListener("input", () => {
  remOutput.innerText = pixelInput.value / 16;
});
