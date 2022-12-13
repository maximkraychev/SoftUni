/* 
Write a JS function that calculates the date of the previous day by given year, month, and day.
The input comes as three numeric parameters. The first element is the year, the second is the month and the third is the day.
The output must be the return date of the previous day in the format: `{year}-{month}-{day}`

Examples:

   Input	      Output
2016, 9, 30	    2016-9-29
2016, 10, 1	    2016-9-30
*/

function previousDay(year, month, day) {
    let formated = `${year}-${month}-${day}`
    let date = new Date(formated);
    date.setDate(date.getDate() -1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);