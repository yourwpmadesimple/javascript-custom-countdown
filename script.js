// Get Elements
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const tiemElements = document.querySelectorAll("li span");

// Set Dat Input Min with Today's Date
let today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Populate Countdown / Complete UI
const updateDom = () => {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log("distance", distance);

    const days = Math.floor(distance / day);
    console.log(days);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    // Populate Countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    tiemElements[0].textContent = `${days}`;
    tiemElements[1].textContent = `${hours}`;
    tiemElements[2].textContent = `${minutes}`;
    tiemElements[3].textContent = `${seconds}`;

    // Hide Input
    inputContainer.hidden = true;
    // Show Countdown
    countdownEl.hidden = false;
  }, 1000);
};

// Take Values from Form Input
const updateCountdown = (e) => {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  //console.log(countdownTitle, countdownDate);

  // Get number version of current Date, updateDEOM
  countdownValue = new Date(countdownDate).getTime();
  //console.log("countdown value:", countdownValue);

  // Update Dom
  updateDom();
};

// Reset All Values
const reset = () => {
  // Hide Countdowns, Show Input
  countdownEl.hidden = true;
  inputContainer.hidden = false;
  // Stop the Countdown
  clearInterval(countdownActive);
  countdownTitle = "";
  countdownDate = "";
};

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
