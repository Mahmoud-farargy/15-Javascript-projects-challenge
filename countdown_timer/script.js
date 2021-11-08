// lists
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
// target elements
const items = document.querySelectorAll(".deadline-inner h4");
const deadlineTime = document.getElementById("deadlineTime");

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

// const deadline = new Date(2021, 10, 6, 20, 35, 0);
const deadline = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// displays giveaway time
const deadlineDate = deadline.getDate();
const deadlineDay = deadline.getDay();
const deadlineHour = deadline.getHours();
const deadlineYear = deadline.getFullYear();
const deadlineMonth = deadline.getMonth();
const deadlineMinutes = deadline.getMinutes();
const deadlineSeconds = deadline.getSeconds();

deadlineTime.innerHTML = `${weekdays[deadlineDay]}, ${deadlineDate} ${months[deadlineMonth]} ${deadlineYear} ${formatTime(deadlineMinutes)}: ${formatTime(deadlineSeconds)}`;


// gets remaining time

let difference = null;

function formatTime(time) {
  return time !== undefined ? (time < 10 ? `0${time}` : time) : 0;
}
function countTown() {
  const current = new Date();
  difference = deadline.getTime() - current.getTime();
  // 1 second = 1000ms
  // 1 minute = 60secs
  // 1 hour = 60mins
  // 1 day = 24hrs
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const calcDays = Math.floor(difference / oneDay);
  const calcHours = Math.floor((difference % oneDay) / oneHour);
  const calcMinutes = Math.floor((difference % oneHour) / oneMinute);
  const calcSeconds = Math.floor((difference % oneMinute) / 1000);

  const resultArr = [calcDays, calcHours, calcMinutes, calcSeconds];
  // displays data each element at a time
  items.forEach((item, index) => {
    item.innerText = formatTime(resultArr[index]);
  });
}

const interval = setInterval(function () {
  countTown();
  if (difference <= 0) {
    window.clearInterval(interval);
    items[0].parentElement.parentElement.parentElement.innerHTML = "Sorry, this giveaway has expired.";
  }
}, 1000);
