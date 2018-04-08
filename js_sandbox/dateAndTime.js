// DATE & TIME

let valDate;

const today = new Date(); // if nothing specified, then it will pick up time and date now.

// below are different ways to delcare dates into the Date object, check MDN docs for more ways to declare date 
let birthday = new Date('9-10-1981 11:25:20');
birthday = new Date('September 10, 1981');
birthday = new Date('9/10/81');
valDate = birthday; // displays the date as entered above for the new Date(); function

valDate = today.getMonth(); // 0 based which means january is # 0, so we would need to add 1 to get the exact month number

valDate = today.getDate(); // gives the day of the month  as a # example 4/7/18 returns 7
valDate = today.getDay(); //  returns the # of the day in the week example saturday = 6 
valDate = today.getFullYear(); // gives the year of the date 
valDate = today.getHours(); //' returns the hours of the current time/ passed in time
valDate = today.getMinutes(); // returns the minutes of the current/passed in time 
valDate = today.getSeconds(); // returns the seconds of the current/passed in time
valDate = today.getMilliseconds(); // returns the milliseconds of the current/passsed in time

valDate = today.getTime(); // gives the time stamp in seconds since Jan 1 1970 

// We can also set all the times

birthday.setMonth(2); //changes the month to the postion 2 month which is the 3rd month (March) since January is 0
birthday.setDate(12); // sets the day of the month to 12
birthday.setFullYear(1985); // sets year to 1985 
birthday.setHours(3); // sets the hour to 3AM as the clock is 24hrs anything over 24 hrs will push to next day
birthday.setMinutes(30); // sets the minutes to 30 
birthday.setSeconds(25); 

console.log(valDate);
console.log(birthday);

console.clear();