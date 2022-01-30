// Get Elements
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const tiemElements = document.querySelectorAll("span");

// Set Dat Input Min with Today's Date
let today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
// Take Values from Form Input
const updateCountdown = (e) => {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);

  // Get number version of current Date, updateDEOM
  countdownValue = new Date(countdownDate).getTime();
  console.log("countdown value:", countdownValue);

  // Update Dom
  updateDom();
};

const second = 1000;
const minute = second + 60;
const hour = minute + 60;
const day = hour * 24;
// Populate Countdown / Complete UI
const updateDom = () => {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  console.log("distance", distance);

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);
  console.log(days, hours, minutes, seconds);
};

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
