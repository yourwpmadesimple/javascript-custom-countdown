// Get Elements
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("li span");

const completeEl = document.getElementById("complete");
const completeElInfo = document.getElementById("complete-info");
const completeBtn = document.getElementById("complete-button");

// Error Message Element
const erroMessage = document.getElementById("error-message");

// Set Dat Input Min with Today's Date
let today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

let countdownTitle = "";
let countdownDate = "";
/* var = Date() Class */
// Tue Feb 01 2022 14:05:21 GMT-0500 (Eastern Standard Time)

/* var = Date Method */
//  ƒ Date() { [native code] }
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
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    // Hide Input
    inputContainer.hidden = true;

    // If the countdown has ended, show complete
    if (distance < 0) {
      countdownEl.hidden = true;
      clearInterval(countdownActive);
      completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
      completeEl.hidden = false;
    } else {
      // Else, show the countdown in progress

      // Populate Countdown
      countdownElTitle.textContent = `${countdownTitle}`;
      timeElements[0].textContent = `${days}`;
      timeElements[1].textContent = `${hours}`;
      timeElements[2].textContent = `${minutes}`;
      timeElements[3].textContent = `${seconds}`;
      completeEl.hidden = true;
      countdownEl.hidden = false;
    }
  }, second);
};

// Take Values from Form Input
const updateCountdown = (e) => {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  //console.log(countdownTitle, countdownDate);

  // Check for valid date
  let errorMessageText = [
    "Please Enter a Tile and Select a Date",
    "Please Enter a Title",
    "Please Select a Date",
  ];
  if (countdownDate === "" && countdownTitle == "") {
    erroMessage.textContent = errorMessageText[0];
  } else if (countdownTitle == "") {
    erroMessage.textContent = errorMessageText[1];
  } else if (countdownDate === "") {
    erroMessage.textContent = errorMessageText[2];
  } else {
    // Get number version of current Date, updateDEOM
    countdownValue = new Date(countdownDate).getTime();
    console.log("countdown value:", countdownValue);

    // Update Dom
    updateDom();
  }
};

// Reset All Values
const reset = () => {
  // Hide Countdowns, Show Input
  countdownEl.hidden = true;
  completeEl.hidden = true;
  inputContainer.hidden = false;
  // Stop the Countdown
  clearInterval(countdownActive);
  // Reset the values
  countdownTitle = "";
  countdownDate = "";
};

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
completeBtn.addEventListener("click", reset);
