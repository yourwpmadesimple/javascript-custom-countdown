# Javascript Custom Countdown
![alt text][javascript]

[javascript]: https://github.com/yourwpmadesimple/javascript-navigation-animation/blob/master/javascript_banner.jpg "Javascript Banner"

## Get Elements
```javascript
// Get Elements
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");
```

## Set ISO Date format 
```javascript
// Set Dat Input Min with Today's Date
let today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);
```

## Get Values from the Form Inputs
```javascript
let countdownTitle = "";
let countdownDate = "";
// Take Values from Form Input
const updateCountdown = (e) => {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownDate);
  
};

// Event Listeners
countdownForm.addEventListener("submit", updateCountdown);
```

## Populate Countdown
```javascript
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
```


## Get Values from the Form Inputs (REV)
```javascript
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
```

## Update Countdown Timer With setInterval
```javascript
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
```
## Check Conditions If Timer Info Has Been Filled Out
```javascript
// Take Values from Form Input
const updateCountdown = (e) => {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  //console.log(countdownTitle, countdownDate);

  // Check for valid date
  if (countdownDate === "" && countdownTitle == "") {
    alert("Please Enter a Title and Select a Date");
  } else if (countdownTitle == "") {
    alert("Please Enet a Title");
  } else if (countdownDate === "") {
    alert("Please Select a Date");
  } else {
    // Get number version of current Date, updateDEOM
    countdownValue = new Date(countdownDate).getTime();
    console.log("countdown value:", countdownValue);

    // Update Dom
    updateDom();
  }
};
```
## Reset Function
```javascript
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
```