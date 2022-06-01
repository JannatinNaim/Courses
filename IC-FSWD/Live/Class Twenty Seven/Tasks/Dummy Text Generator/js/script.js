const form = document.querySelector(".dummy_form");
const formRangeInput = document.getElementById("dummy_form__inputs__range");
const formNumberInput = document.getElementById("dummy_form__inputs__number");
const generatedText = document.querySelector(".generated_text");

const generateLorem = (number) => {
  const lorem = [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora veritatis iusto officiis labore deleniti maiores consequuntur eius maxime nihil repellat, non adipisci expedita blanditiis aspernatur quidem minima ex, odit vero.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa accusantium assumenda et beatae consequuntur nam ut laboriosam nulla. Esse totam architecto perspiciatis obcaecati distinctio minima quod blanditiis voluptas nulla!",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid fugiat fugit, dignissimos earum ratione nam saepe velit nobis eum officiis ex nisi molestiae dolorem voluptates, explicabo architecto facere expedita vero.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id unde numquam deserunt cum ea repellendus, maxime, odit mollitia consectetur eaque omnis voluptas possimus pariatur facilis nulla corrupti soluta quos nisi!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse perspiciatis quisquam veniam, eum nobis adipisci unde expedita architecto. Nesciunt quia odit accusamus provident perspiciatis, illum vitae hic voluptate praesentium.",
  ];

  let generatedLoremArray = [];

  for (let i = 0; i < number; i++) {
    generatedLoremArray.push(lorem[Math.floor(Math.random() * lorem.length)]);
  }

  return generatedLoremArray;
};

const updateGeneratedLorem = (lorem) => {
  generatedText.innerHTML = "";

  lorem.forEach((e) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.classList.add("generated_text__item");
    paragraphElement.innerText = e;

    generatedText.appendChild(paragraphElement);
  });
};

window.addEventListener("load", () => {
  const lorem = generateLorem(formNumberInput.value);
  updateGeneratedLorem(lorem);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

formRangeInput.addEventListener("input", () => {
  formNumberInput.value = formRangeInput.value;
  const lorem = generateLorem(formNumberInput.value);
  updateGeneratedLorem(lorem);
});

formNumberInput.addEventListener("input", () => {
  formRangeInput.value = formNumberInput.value;
  const lorem = generateLorem(formNumberInput.value);
  updateGeneratedLorem(lorem);
});
