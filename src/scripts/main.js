/* ==========================================================================
   Global variables
   ========================================================================== */
const body = document.querySelector("body");
const dateDOM = document.querySelector("#date");
const timeDOM = document.querySelector("#time");
const jsColorDOM = document.querySelector(".jscolor");
let date, day, dayName;

/* ==========================================================================
   Initialize
   ========================================================================== */
document.addEventListener("DOMContentLoaded", init);
function init() {
  //do stuff after page has loaded

  //Display date and update time every 1s
  day = moment().format("dddd Do MMMM YYYY");
  dayName = moment().format("dddd");
  displayDate();
  displayTime();
  setInterval(displayTime, 1000);

  //Fetch tasks
  fetch("scripts/data/tasks.json")
    .then(result => result.json())
    .then(data => displayTasks(data));
}

/* ==========================================================================
   Functions
   ========================================================================== */

// Display the time in binary, 12-hours format with AM or PM
function displayTime() {
  date = new Date();
  const hour24 = date.getHours();
  const min = binaryNumber(date.getMinutes());
  const period = {
    true: "PM",
    false: "AM"
  }[hour24 > 12];
  const hour12 = binaryNumber(hour24 > 12 ? hour24 - 12 : hour24);
  timeDOM.textContent = `${hour12}.${min} ${period}`;
}

//Display date
function displayDate() {
  console.log(day);
  dateDOM.textContent = day;
}

//Convert any number to a binary string
function binaryNumber(numb) {
  return numb > 9 ? numb.toString() : "0" + numb;
}

function displayTasks(data) {
  const template = document.querySelector("#task-template").content;
  const container = document.querySelector("#tasks .container");
  console.log(data);

  data.forEach(task => {
    if (task.day === dayName) {
      const clone = template.cloneNode(true);
      clone.firstElementChild.dataset.id = task.id;
      clone.querySelector("h3").textContent = task.time;
      clone.querySelector("h4").textContent = task.description;
      container.appendChild(clone);
    } else {
      //nothing
    }
  });
}

function changeBackground(jscolor) {
  console.log("Yee" + jscolor);
  body.style.background = "#" + jscolor;
}
