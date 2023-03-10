const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

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
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const hours = Math.floor(time / 3600);

  timerEl.innerText = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
}

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  parseInt(inputEl.value, 10);
});

buttonEl.addEventListener("click", () => {
  const time = Number(inputEl.value);
  createTimerAnimator(time);
  inputEl.value = "";
});
