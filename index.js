

const currentDate = new Date();
const currentDay = currentDate.getDay();

//Indicate the current day of the week (e.g., Monday, Tuesday).
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayName = daysOfWeek[currentDay];

document.getElementById("display_current_day").innerHTML = dayName;

// Display the current UTC time in milliseconds,

const currentTimeMilliseconds = currentDate.getTime();

document.getElementById("display_time_in_milliseconds").innerHTML = `${currentTimeMilliseconds} Milliseconds `

