import Time from "./time.js";

// Create a new Time() instance
const halloween = new Time("October 31, 2021"); // ?
// This should also work
const halloween2 = new Time(2021, 9, 31); // ?
// Get the date object
const { date } = halloween; // ?
// returns "Sunday"
const day = halloween.getDay(); // ?
// returns "October"
const month = halloween.getMonth(); // ?
// Add some time
halloween.addDays(3).addMonths(1).addYears(5); // ?
// returns "Thursday"
const newDay = halloween.getDay(); // ?
// returns "December"
const newMonth = halloween.getMonth(); // ?
