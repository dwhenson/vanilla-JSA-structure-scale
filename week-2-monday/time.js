const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const time = (function () {
  const getDay = function (date) {
    return days[date.getDay()];
  };

  const getMonth = function (date) {
    return months[date.getMonth()];
  };

  const addSeconds = function (date, number) {
    return date.setSeconds(date.getSeconds() + number);
  };

  const addMinutes = function (date, number) {
    return date.setMinutes(date.getMinutes() + number);
  };

  const addHours = function (date, number) {
    return date.setHours(date.getHours() + number);
  };

  const addDays = function (date, number) {
    return date.setDate(date.getDate() + number);
  };

  const addMonths = function (date, number) {
    return date.setMonth(date.getMonth() + number);
  };

  const addYears = function (date, number) {
    return date.setFullYear(date.getFullYear() + number);
  };

  return { getDay, getMonth, addSeconds, addMinutes, addHours, addDays, addMonths, addYears };
})();

// Create a Date() object for halloween
const halloween = new Date("October 31, 2021");
// // returns "Sunday"
const day = time.getMonth(halloween); // ?

// // // Add 4 months to the dat
const future = time.addDays(halloween, 4);

// // // logs "Thu Mar 03 2022 ..."
console.log(halloween);
