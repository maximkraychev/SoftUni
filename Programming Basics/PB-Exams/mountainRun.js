function mountainRun(input) {

    let recordInSec = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let slowsByTerren = Math.floor(distance / 50) * 30;
    
    let timeToThePeak = distance * timeForOneMeter + slowsByTerren; 
    let diffrence = Math.abs(recordInSec - timeToThePeak);

    if(timeToThePeak < recordInSec) {
        console.log(`Yes! The new record is ${timeToThePeak.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${diffrence.toFixed(2)} seconds slower.`);
    }
    
}

mountainRun(["1377",
"389",
"3"]);

