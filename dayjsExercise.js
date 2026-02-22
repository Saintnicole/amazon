import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

// exercise 15f

const today = dayjs();

 function isWeekend(date){
    const dayOfWeek = date.day(); 
    if (dayOfWeek === 6) return "Saturday";
    if (dayOfWeek === 0) return "Sunday";

    return "not a weekend"; // Not a weekend
    
}


export default isWeekend;
