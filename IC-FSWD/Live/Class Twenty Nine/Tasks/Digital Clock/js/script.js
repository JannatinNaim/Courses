const hoursElement = document.querySelector(".clock__time__hours");
const minutesElement = document.querySelector(".clock__time__minutes");
const secondsElement = document.querySelector(".clock__time__seconds");
const halfElement = document.querySelector(".clock__time__half");

setInterval(() => {
  updateTime();
}, 1000);

updateTime();

function updateTime() {
  const date = new Date();

  let hours = date.getHours();
  let half = hours >= 12 ? "PM" : "AM";

  hours = hours > 13 ? hours - 12 : hours;

  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours.toString().length == 1) {
    hours = "0" + hours;
  }

  if (minutes.toString().length == 1) {
    minutes = "0" + minutes;
  }

  if (seconds.toString().length == 1) {
    seconds = "0" + seconds;
  }

  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;
  halfElement.innerText = half;
}
