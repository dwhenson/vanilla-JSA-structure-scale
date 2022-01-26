/**
 * The Constructor object
 * @param {Array} date A date string, object, or array of arguments
 */
function Constructor(date = [], options = {}) {
  // If the date is not an array, push it into one
  if (!Array.isArray(date)) {
    date = [date];
  }
  // Set instance properties

  // Overwrite default options with user options as needed
  const settings = Object.assign(
    {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      months: [
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
      ],
    },
    options
  );
  // Prevent subsequent mutation of values
  Object.freeze(settings);

  // Define instance properties
  Object.defineProperties(this, {
    date: {
      value: new Date(...date),
      writable: true,
    },
    _settings: { value: settings },
  });
}

/**
 * Get the day of the week
 * @return {String} The day of the week
 */
Constructor.prototype.getDay = function () {
  return this._settings.days[this.date.getDay()];
};

/**
 * Get the month of the year
 * @return {String} The month of the year
 */
Constructor.prototype.getMonth = function () {
  return this._settings.months[this.date.getMonth()];
};

/**
 * Add seconds to a date
 * @param {Integer} n The number of seconds to add
 */
Constructor.prototype.addSeconds = function (n) {
  const date = this.date.setSeconds(this.date.getSeconds() + n);
  return new Constructor(date, this._settings);
};

/**
 * Add minutes to a date
 * @param {Integer} n The number of minutes to add
 */
Constructor.prototype.addMinutes = function (n) {
  const date = this.date.setMinutes(this.date.getMinutes() + n);
  return new Constructor(date, this._settings);
};

/**
 * Add hours to a date
 * @param {Integer} n The number of hours to add
 */
Constructor.prototype.addHours = function (n) {
  const date = this.date.setHours(this.date.getHours() + n);
  return new Constructor(date, this._settings);
};

/**
 * Add days to a date
 * @param {Integer} n The number of days to add
 */
Constructor.prototype.addDays = function (n) {
  const date = this.date.setDate(this.date.getDate() + n);
  return new Constructor(date, this._settings);
};

/**
 * Add months to a date
 * @param {Integer} n The number of months to add
 */
Constructor.prototype.addMonths = function (n) {
  const date = this.date.setMonth(this.date.getMonth() + n);
  return new Constructor(date, this._settings);
};

/**
 * Add years to a date
 * @param {Integer} n The number of years to add
 */
Constructor.prototype.addYears = function (n) {
  const date = this.date.setFullYear(this.date.getFullYear() + n);
  return new Constructor(date, this._settings);
};

export default Constructor;
