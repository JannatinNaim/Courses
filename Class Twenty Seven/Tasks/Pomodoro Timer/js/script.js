const timerCountMinutes = document.querySelector(".timer__count__timer__minutes__name");
const timerCountSeconds = document.querySelector(".timer__count__timer__seconds__name");

const timerBreakMinutes = document.querySelector(".timer__break__timer__minutes__name");
const timerBreakSeconds = document.querySelector(".timer__break__timer__seconds__name");

const startButton = document.querySelector(".button_start");
const resetButton = document.querySelector(".button_reset");
const pauseButton = document.querySelector(".button_pause");

const countDownClockPomodoro = () => {
  if (pomodoroTimerFinished) return;

  let minutes = Number(timerCountMinutes.innerText);
  let seconds = Number(timerCountSeconds.innerText);

  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 60;

    seconds--;
    minutes--;
  }

  timerCountMinutes.innerText = minutes;
  timerCountSeconds.innerText = seconds;
};

let pomodoroTimerStopped = true;
let breakTimerStopped = true;
let pomodoroTimerFinished = false;
let breakTimerFinished = false;

setInterval(() => {
  if (pomodoroTimerFinished) return;

  if (!pomodoroTimerStopped) countDownClockPomodoro();

  if (parseInt(timerCountMinutes.innerText) === 0 && parseInt(timerCountSeconds.innerText) === 0) {
    pomodoroTimerStopped = true;
    pomodoroTimerFinished = true;
    breakTimerStopped = false;
  }
}, 1000);

startButton.addEventListener("click", async (e) => {
  pomodoroTimerStopped = false;
  breakTimerStopped = pomodoroTimerFinished ? false : true;

  startButton.disabled = true;
  pauseButton.disabled = false;
});

resetButton.addEventListener("click", async (e) => {
  timerCountMinutes.innerText = 25;
  timerCountSeconds.innerText = 0;

  timerBreakMinutes.innerText = 5;
  timerBreakSeconds.innerText = 0;

  pomodoroTimerStopped = true;
  breakTimerStopped = true;

  startButton.disabled = false;
  pauseButton.disabled = false;
});

pauseButton.addEventListener("click", (e) => {
  // pomodoroTimerStopped = pomodoroFinished ? false : true;
  pomodoroTimerStopped = true;
  breakTimerStopped = true;

  startButton.disabled = false;
  pauseButton.disabled = true;
});

const countDownClockBreak = async () => {
  let minutes = Number(timerBreakMinutes.innerText);
  let seconds = Number(timerBreakSeconds.innerText);

  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 60;

    seconds--;
    minutes--;
  }

  timerBreakMinutes.innerText = minutes;
  timerBreakSeconds.innerText = seconds;
};

setInterval(() => {
  if (breakTimerFinished) return;

  if (!breakTimerStopped) countDownClockBreak();

  if (parseInt(timerBreakMinutes.innerText) === 0 && parseInt(timerBreakSeconds.innerText) === 0) {
    breakTimerStopped = true;
    breakTimerFinished = true;
    pauseButton.disabled = true;
  }
}, 1000);

const dev = document.querySelector(".dev");

dev.addEventListener("click", () => {
  timerCountMinutes.innerText = 0;
  timerCountSeconds.innerText = 5;

  timerBreakMinutes.innerText = 0;
  timerBreakSeconds.innerText = 5;
});
