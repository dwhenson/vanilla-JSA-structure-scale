/*!
 * Emit a custom event
 * (c) 2021 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} type   The event type
 * @param  {Object} detail Any details to pass along with the event
 * @param  {Node}   elem   The element to attach the event to
 */
function emitEvent(type, detail = {}, element = document) {
  // Make sure there's an event type
  if (!type) return;

  // Create a new event
  const event = new CustomEvent(type, {
    bubbles: true,
    cancelable: true,
    detail: detail,
  });

  // Dispatch the event
  return element.dispatchEvent(event);
}

/**
 * The Constructor object
 * @param {Array}  date    A date string, object, or array of arguments
 * @param {Object} options Options and settings
 */
function Constructor(date = [], options = {}) {
  // If the date is not an array, push it into one
  if (!Array.isArray(date)) {
    date = [date];
  }

  // Merge user options into defaults
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

  // Freeze settings
  Object.freeze(settings);

  // Assign instance properties
  Object.defineProperties(this, {
    date: { value: new Date(...date) },
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
  const d = new Date(this.date);
  d.setSeconds(d.getSeconds() + n);
  return new Constructor(d, this._settings);
};

/**
 * Add minutes to a date
 * @param {Integer} n The number of minutes to add
 */
Constructor.prototype.addMinutes = function (n) {
  const d = new Date(this.date);
  d.setMinutes(d.getMinutes() + n);
  return new Constructor(d, this._settings);
};

/**
 * Add hours to a date
 * @param {Integer} n The number of hours to add
 */
Constructor.prototype.addHours = function (n) {
  const d = new Date(this.date);
  d.setHours(d.getHours() + n);
  return new Constructor(d, this._settings);
};

/**
 * Add days to a date
 * @param {Integer} n The number of days to add
 */
Constructor.prototype.addDays = function (n) {
  const d = new Date(this.date);
  d.setDate(d.getDate() + n);
  return new Constructor(d, this._settings);
};

/**
 * Add months to a date
 * @param {Integer} n The number of months to add
 */
Constructor.prototype.addMonths = function (n) {
  const d = new Date(this.date);
  d.setMonth(d.getMonth() + n);
  return new Constructor(d, this._settings);
};

/**
 * Add years to a date
 * @param {Integer} n The number of years to add
 */
Constructor.prototype.addYears = function (n) {
  const d = new Date(this.date);
  d.setFullYear(d.getFullYear() + n);
  return new Constructor(d, this._settings);
};

export default Constructor;
