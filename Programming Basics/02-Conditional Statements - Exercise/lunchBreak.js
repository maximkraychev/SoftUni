function lunchBreak(input) {

    let tvShow = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration * (1/8);
    let restTime = breakDuration * (1/4);

    let freeTimetoWatchTvShow = breakDuration - (lunchTime + restTime);
    let totalTime = Math.abs(freeTimetoWatchTvShow - episodeDuration);

    if(freeTimetoWatchTvShow >= episodeDuration) {
        console.log(`You have enough time to watch ${tvShow} and left with ${Math.ceil(totalTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvShow}, you need ${Math.ceil(totalTime)} more minutes.`);
    }
    
}

lunchBreak(["Teen Wolf",
"48",
"60"])

