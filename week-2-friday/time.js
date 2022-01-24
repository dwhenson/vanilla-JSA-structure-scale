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

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Time = (function () {
  const Constructor = function (weightInMg) {
    this.weightInMg = weightInMg;
  };

  Constructor.prototype.getDay = function (date) {
    return days[date.getDay()];
  };

  Constructor.prototype.getMonth = function (date) {
    return months[date.getMonth()];
  };

  Constructor.prototype.addSeconds = function (date, number) {
    return date.setSeconds(date.getSeconds() + number);
  };

  Constructor.prototype.addMinutes = function (date, number) {
    return date.setMinutes(date.getMinutes() + number);
  };

  Constructor.prototype.addHours = function (date, number) {
    return date.setHours(date.getHours() + number);
  };

  Constructor.prototype.addDays = function (date, number) {
    return date.setDate(date.getDate() + number);
  };

  Constructor.prototype.addMonths = function (date, number) {
    return date.setMonth(date.getMonth() + number);
  };

  Constructor.prototype.addYears = function (date, number) {
    return date.setFullYear(date.getFullYear() + number);
  };

  return Constructor;
})();

// Create a new Time() instance
const halloween = new Time("October 31, 2021");
// This should also work
const halloween2 = new Time(2021, 9, 31);
// Get the date object
const { date } = halloween;
// returns "Sunday"
const day = halloween.getDay();
// returns "October"
const month = halloween.getMonth();
// Add some time
halloween.addDays(3).addMonths(1).addYears(5);
// returns "Thursday"
const newDay = halloween.getDay();
// returns "December"
const newMonth = halloween.getMonth();
