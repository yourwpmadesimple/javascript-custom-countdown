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