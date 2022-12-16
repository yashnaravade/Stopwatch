const clock = document.querySelector(".stopwatch-time");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

const start = () => {
    
  console.log("start");

  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  const interval = setInterval(() => {
    milliseconds += 10;

    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds += 1;
    }

    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }

    if (minutes === 60) {
      minutes = 0;
      hours += 1;
    }

    clock.textContent = `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}:${
      milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds
    }`.slice(0, -1);
  }, 10);

  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    clock.textContent = "00:00:00:00";
  });
};

const stop = () => {
  console.log("stop");
};

const reset = () => {
  console.log("reset");
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
