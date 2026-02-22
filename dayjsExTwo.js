import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isSatSun from '../dayjsExercise.js'

// lesson 15 exercises

// exercise 15a
const today = dayjs();
const fiveDays= today.add(5, 'days');
console.log(fiveDays.format('MMMM, D'));

// exercise 15b
const oneMonth= today.add(1, 'month');
console.log(oneMonth.format('MMMM, D'));

// exercise 15c subtract one month before today
const minusOneMonth= today.subtract(1, 'month');
console.log(minusOneMonth.format('MMMM, D'));

// exercise 15d
const twoDays = today.add(2, 'days');
console.log(twoDays.format('dddd'));

// exercise 15f and 15g change name to satsun
const newDate = today.add(6, 'days');
newDate.format('MMMM D, YYYY');
console.log(isSatSun(newDate));