const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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

const Time = (function () {
  const Constructor = function (date) {
    this.date = new Date(date); // ?
  };

  Constructor.prototype.getDay = function () {
    return days[this.date.getDay()];
  };

  Constructor.prototype.getMonth = function () {
    return months[this.date.getMonth()];
  };

  Constructor.prototype.addSeconds = function (n) {
    this.date.setSeconds(this.date.getSeconds() + n);
    return this;
  };

  Constructor.prototype.addMinutes = function (n) {
    this.date.setMinutes(this.date.getMinutes() + n);
    return this;
  };

  Constructor.prototype.addHours = function (n) {
    this.date.setHours(this.date.getHours() + n);
    return this;
  };

  Constructor.prototype.addDays = function (n) {
    this.date.setDate(this.date.getDate() + n);
    return this;
  };

  Constructor.prototype.addMonths = function (n) {
    this.date.setMonth(this.date.getMonth() + n);
    return this;
  };

  Constructor.prototype.addYears = function (n) {
    this.date.setFullYear(this.date.getFullYear() + n);
    return this;
  };

  return Constructor;
})();

export default Time;
