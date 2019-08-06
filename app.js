const time = new Date();

console.log(time.getHours() % 12);
console.log(time.getMinutes());
console.log(time.getSeconds());

const clock = document.getElementById("clock");
const hex = document.getElementById("hex-color");

function hexClock() {
  const time = new Date();
  let hours = (time.getHours() % 12).toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = "0" + hours;
  }

  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }

  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }
  let hexColorStr = "#" + hours + minutes + seconds;

  clock.textContent = hours + ":" + minutes + ":" + seconds;

  hex.textContent = hexColorStr;

  //   let hexNumber = Number(hours + minutes + seconds);

  //   console.log(hexNumber)

  document.body.style.background = hexColorStr;
  //   document.body.style.color = `#${second}`;
}

setInterval(hexClock, 1000);
