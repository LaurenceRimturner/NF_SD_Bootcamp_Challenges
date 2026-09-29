console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');
const currentTime = new Date().getHours();
const currentDay = new Date().getDay();

function getGreeting() {
  if (currentTime >= 6 && currentTime <= 12) {
    return "Good Morning";
  }
  if (currentTime >= 13 && currentTime <= 18) {
    return "Good Afternoon";
  }
  if (currentTime >= 19 && currentTime <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  if (currentDay === 1) {
    return "darkgray";
  }
  if (currentDay >= 2 && currentDay <= 5) {
    return "lightblue";
  }
  if (currentDay >= 6 && currentDay <= 7) {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
