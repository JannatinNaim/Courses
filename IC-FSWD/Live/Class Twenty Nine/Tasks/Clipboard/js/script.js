const copyButton = document.querySelector(".card__copy");
const code = 1423;

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(code);
});
