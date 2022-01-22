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

export {
  getDay,
  getMonth,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears,
};
