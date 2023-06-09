const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadLine = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 6, 1, 10, 30, 0);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`;

function getRemainingTime() {
  const futureTime = futureDate.getTime();
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculte all values
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  const format = (item) => {
    if (item < 10) item = `0${item}`;
    return item;
  };
  items.forEach((item, index) => {
    item.textContent = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadLine.innerHTML =
      "<h4 class = 'expired'>sorry, this giveaway has expired</h4>";
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
