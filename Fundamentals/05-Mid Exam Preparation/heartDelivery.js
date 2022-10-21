function heartDelivery(input) {

    let neighborhoodArr = input.shift().split('@').map(x => Number(x));
    let currrentRow = input.shift();
    let cupidIndex = 0;
    let neighborhoodArrLength = neighborhoodArr.length;
    let isEachHouseHasHadValentinesDay = true;
    let housesThatDidntCelebrateCount = 0;

    while (currrentRow !== 'Love!') {
        let currrentRowAsArray = currrentRow.split(' ');
        let jumpLength = Number(currrentRowAsArray[1]);

        cupidIndex += jumpLength

        if (cupidIndex > neighborhoodArrLength - 1) {
            cupidIndex = 0;
        }

        if (neighborhoodArr[cupidIndex] <= 0) {
            console.log(`Place ${cupidIndex} already had Valentine's day.`);
            currrentRow = input.shift();
            continue;
        }

        neighborhoodArr[cupidIndex] -= 2;

        if (neighborhoodArr[cupidIndex] <= 0) {
            console.log(`Place ${cupidIndex} has Valentine's day.`);
        }
        currrentRow = input.shift();
    }

    console.log(`Cupid's last position was ${cupidIndex}.`);

    for (el of neighborhoodArr) {
        if (el > 0) {
            isEachHouseHasHadValentinesDay = false;
            housesThatDidntCelebrateCount++
        }
    }

    if (isEachHouseHasHadValentinesDay) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${housesThatDidntCelebrateCount} places.`);
    }

}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]);

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])

