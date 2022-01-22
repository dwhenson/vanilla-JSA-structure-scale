import { addDays, getMonth } from "./time.js";

// Create a Date() object for halloween
const halloween = new Date("October 31, 2021");
// // returns "Sunday"
const day = getMonth(halloween); // ?
// // // Add 4 months to the dat
const future = addDays(halloween, 4);
// // // logs "Thu Mar 03 2022 ..."
console.log(halloween);
