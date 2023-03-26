function onTimeForTheExam(input) {

    let hourOfTheExam = Number(input[0]);
    let minuteOfTheExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);

    let examInMinutes = hourOfTheExam * 60 + minuteOfTheExam;
    let arrivalInMunutes = hourOfArrival * 60 + minuteOfArrival;
    let state 
    let difference = examInMinutes - arrivalInMunutes

    if(difference < 0) {
        state = "Late"
    } else if(difference >= 0 && difference <= 30) {
        state = "On time"
    } else {
        state = "Early"
    }
    console.log(state);
    
    let positiveDiff = Math.abs(examInMinutes - arrivalInMunutes)
    let hourDiff = Math.floor(positiveDiff / 60);
    let minDiff = positiveDiff % 60;


    if(difference <= -60) {
        if(minDiff < 10) {
        console.log(`${hourDiff}:0${minDiff} hours after the start`);
        } else {
            console.log(`${hourDiff}:${minDiff} hours after the start`);
        }
    } else if(difference > -60 && difference < 0) {
        console.log(`${minDiff} minutes after the start`);
    } else if(difference > 0 && difference < 60) {
        console.log(`${minDiff} minutes before the start`);
    } else if(difference >= 60) {
        if(minDiff < 10) {
        console.log(`${hourDiff}:0${minDiff} hours before the start`);
        } else {
            console.log(`${hourDiff}:${minDiff} hours before the start`);
        }
    }
}

onTimeForTheExam(["9",
"00",
"9",
"01"])


















