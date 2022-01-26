/**
 * The Constructor object
 * @param {Array} date A date string, object, or array of arguments
 */
function Constructor(date = []) {
  // If the date is not an array, push it into one
  if (!Array.isArray(date)) {
    date = [date];
  }

  // Set instance properties
  this.date = new Date(...date);
}

/**
 * Get the day of the week
 * @return {String} The day of the week
 */
Constructor.prototype.getDay = function () {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[this.date.getDay()];
};

/**
 * Get the month of the year
 * @return {String} The month of the year
 */
Constructor.prototype.getMonth = function () {
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
  return months[this.date.getMonth()];
};

/**
 * Add seconds to a date
 * @param {Integer} n The number of seconds to add
 */
Constructor.prototype.addSeconds = function (n) {
  this.date.setSeconds(this.date.getSeconds() + n);
  return this;
};

/**
 * Add minutes to a date
 * @param {Integer} n The number of minutes to add
 */
Constructor.prototype.addMinutes = function (n) {
  this.date.setMinutes(this.date.getMinutes() + n);
  return this;
};

/**
 * Add hours to a date
 * @param {Integer} n The number of hours to add
 */
Constructor.prototype.addHours = function (n) {
  this.date.setHours(this.date.getHours() + n);
  return this;
};

/**
 * Add days to a date
 * @param {Integer} n The number of days to add
 */
Constructor.prototype.addDays = function (n) {
  this.date.setDate(this.date.getDate() + n);
  return this;
};

/**
 * Add months to a date
 * @param {Integer} n The number of months to add
 */
Constructor.prototype.addMonths = function (n) {
  this.date.setMonth(this.date.getMonth() + n);
  return this;
};

/**
 * Add years to a date
 * @param {Integer} n The number of years to add
 */
Constructor.prototype.addYears = function (n) {
  this.date.setFullYear(this.date.getFullYear() + n);
  return this;
};

export default Constructor;
