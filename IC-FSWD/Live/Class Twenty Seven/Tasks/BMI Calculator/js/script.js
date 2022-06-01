const form = document.querySelector(".bmi_calculator");
const output = document.querySelector(".bmi_value");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateBMI();
});

const calculateBMI = () => {
  const height = document.querySelector("#height_selection__input").value / 100;
  const weight = document.querySelector("#weight_selection__input").value;

  output.innerText = (weight / (height * height)).toFixed(2);
};
