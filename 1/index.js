const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

let interval;

let seconds = 00,
  minutes = 00,
  hours = 00;

function createTimerAnimator(time) {
  clearInterval(interval);
  interval = setInterval(() => {
    if (time > 0) {
      --time;
    }
    animateTimer(time);
  }, 1000);
}

function animateTimer(time) {
  const hours = Math.floor(time / 60 / 60);
  const minutes = Math.floor(time / 60) - hours * 60;
  const seconds = time % 60;

  timerEl.innerText = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
}

inputEl.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^\d]/g, "");
});

buttonEl.addEventListener("click", () => {
  const time = Number(inputEl.value);
  createTimerAnimator(time);
  inputEl.value = "";
});
