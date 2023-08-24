const Time = document.querySelector(".Time");
const Day = document.querySelector(".day");
const Hours = document.querySelector(".hours");
const Minutes = document.querySelector(".min");
const Second = document.querySelector(".sec");
const countDown = document.querySelector(".Countdown");

const TimerCounter = setInterval(function () {
  let counterTime = new Date("august 11,2023 15:40:00").getTime();

  function updateCountdown() {
    const NowTime = new Date().getTime();
    const timer = counterTime - NowTime;

    if (timer <= 0) {
      add24Hours();
    } else {
      const days = Math.floor(timer / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timer % (1000 * 60)) / 1000);

      Day.innerHTML = `${days} Days :`;
      Hours.innerHTML = `${hours} Hours :`;
      Minutes.innerHTML = `${minutes} Min :`;
      Second.innerHTML = `${seconds} Sec`;
    }
  }

  // Update the countdown immediately and then every second
  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);
  function add24Hours() {
    const addHours = 48 * 60 * 60 * 1000;
    counterTime += addHours;
    updateCountdown();
  }
}, 1000);
