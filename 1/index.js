const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");
const secondsEl = document.querySelector(".seconds");
const minutesEl = document.querySelector(".minutes");
const hoursEl = document.querySelector(".hours");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

let interval;

let seconds = 00,
  minutes = 00,
  hours = 00;

function createTimerAnimator(time) {
  clearInterval(interval);

  interval = setInterval(() => {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    var hours = Math.floor(time / 3600);

    console.log(minutes)

    secondsEl.innerText = seconds;
    minutesEl.innerText = minutes;
    hoursEl.innerText = hours;

    --seconds;

    if (seconds < 10) {
      secondsEl.innerText = "0" + seconds;
    }

    if (minutes < 10) {
      minutesEl.innerText = "0" + minutes;
    } else {
      minutesEl.innerText = minutes;
    }

    if (hours < 10) {
      hoursEl.innerText = "0" + hours;
    } else {
      hoursEl.innerText = hours;
    }

    if (seconds <= 0) {
      secondsEl.innerText = `00`;
    }
  }, 1000);

  // setInterval((seconds) => {

  // console.log(seconds)
  // --seconds;

  // if (seconds < 10) {
  //   secondsEl.innerText = "0" + seconds;
  // } else {
  //   secondsEl.innerText = seconds;
  // }

  // if (minutes < 10) {
  //   minutesEl.innerText = "0" + minutes;
  // } else {
  //   minutesEl.innerText = minutes;
  // }

  // if (hours < 10) {
  //   hoursEl.innerText = "0" + hours;
  // } else {
  //   hoursEl.innerText = hours;
  // }
  // }, 1000);
}
// return (seconds) => {};

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener("click", () => {
  const time = Number(inputEl.value);

  // animateTimer(seconds);
  createTimerAnimator(time);

  inputEl.value = "";
});
