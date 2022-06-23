const colorPallet = document.querySelector(".color_pallet");

colorPallet.addEventListener("click", (e) => {
  const messages = ["Will do!", "Copied!", "Use me!"];
  const message = messages[Math.floor(Math.random() * messages.length)];

  const color = e.target.dataset.color;

  const alertBoxMessage = document.querySelector(".alert_box__name");
  alertBoxMessage.innerText = message;

  const alertBoxInfo = document.querySelector(".alert_box__value");
  alertBoxInfo.innerText = color;

  const alertBox = document.querySelector(".alert_box");
  alertBox.style.display = "block";
  alertBox.style.background = color;

  navigator.clipboard.write(color);

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 1200);
});
