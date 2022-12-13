/* 
Write a function that calculates how long it takes a student to get to university. 
The function takes three numbers:
•	The first is the number of steps the student takes from their home to the university
•	Тhe second number is the length of the student's footprint in meters
•	Тhe third number is the student speed in km/h
Every 500 meters the student rests and takes a 1-minute break.
Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
The input comes as three numbers.
The output should be printed on the console.
*/
function timeToWalk(steps, footprintLength, kmPerHourSpeed) {

    let metersToUniversity = steps * footprintLength;
    const metersPerHour = kmPerHourSpeed * 1000;
    const metersPerMin = metersPerHour / 60;
    const metersPerSec = metersPerMin / 60;

    let rest = 0;
    if(metersToUniversity % 500 !== 0) {
        rest = Math.floor(metersToUniversity / 500);
    } else {
        rest = Math.floor(metersToUniversity / 500) - 1;
    }

    const hours = Math.floor(metersToUniversity / metersPerHour);
    metersToUniversity = metersToUniversity % metersPerHour;
    const min = Math.floor(metersToUniversity / metersPerMin) + rest;
    metersToUniversity = metersToUniversity % metersPerMin;
    const sec = Math.round(metersToUniversity / metersPerSec);  

    console.log(`${String(hours).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`);
}

timeToWalk(4000, 1, 4);
timeToWalk(2564, 0.70, 5.5);