const currentDate = new Date();
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

// Display the current UTC time in milliseconds,.
const currentTimeMilliseconds = currentDate.getTime();

console.log(`Current time in milliseconds: ${currentTimeMilliseconds}`);

console.log("hello world")