console.clear();

/*
Let's calculate some interesting facts based on how many years you've been practicing a skill!
The program expects the user to provide the number of years as a numerical input.
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days you've been practicing (assume 365 days/year). 1
2. The estimated number of remaining days to reach a 10-year milestone. 10
3. The percentage of the milestone you've already completed. % 
4. The cumulative number of days you've spent practicing, assuming an average of 1 hour of practice per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const yearsPracticing = Number(process.argv[2]); // This takes the `<years>` entered in the command `node index.js <years>`.

let Years = yearsPracticing;
const milestoneYear = 10;
let percentage = (Years / milestoneYear) * 100;

let remainingYears = milestoneYear - Years;
let remainingDays = remainingYears * 365;

console.log("You've been practicing for: " + yearsPracticing + " years");
console.log(remainingYears + " years" + " left!");
console.log("This are about " + remainingDays + " days");
console.log(percentage + "%" + " already done!");
