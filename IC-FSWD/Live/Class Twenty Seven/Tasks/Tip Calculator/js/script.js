const form = document.querySelector(".tip_calculator");
const output = document.querySelector(".total_amount");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = Number(document.getElementById("amount").value);
  const percentage = Number(document.getElementById("tip_percentage").value);

  const total = amount + (amount * percentage) / 100;
  output.innerText = total;
});
