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