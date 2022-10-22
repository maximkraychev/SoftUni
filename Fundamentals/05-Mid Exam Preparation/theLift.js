function theLift(input) {

    let waitingPeople = Number(input.shift());
    let liftArr = input.shift().split(' ').map(x => Number(x));
    let wagonsMaxCapacity = 4;
    let liftArrLength = liftArr.length;

    for (let wagon = 0; wagon < liftArrLength; wagon++) {

        let freeSpaceInCurrentWagon = Math.abs(wagonsMaxCapacity - liftArr[wagon])

        // Removing people from the Q;
        waitingPeople -= freeSpaceInCurrentWagon;
        let peopleToSeatOnTheWAgon = freeSpaceInCurrentWagon

        // Cheking exactly how many people will sit on the wagon and if there are no more people in Q we end the loop;
        if(waitingPeople <= 0) {
            peopleToSeatOnTheWAgon += waitingPeople;
            liftArr[wagon] += peopleToSeatOnTheWAgon;
            waitingPeople = 0
            break;
        }

        // Adding people on the free spots in the wagon; 
        liftArr[wagon] += peopleToSeatOnTheWAgon;
        
    }

    let freeSpaceLeft = liftArr.filter(digit => digit !== 4);
    let freeSpaceLeftLength = freeSpaceLeft.length 

    if (freeSpaceLeftLength > 0 && waitingPeople <= 0) {
        console.log(`The lift has empty spots!\n${liftArr.join(' ')}`);
    } else if (waitingPeople > 0 && freeSpaceLeftLength <= 0) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!\n${liftArr.join(' ')}`);
    } else if (waitingPeople <= 0 && freeSpaceLeftLength <= 0) {
        console.log(liftArr.join(' '));
    }

}
theLift([
    "15",
    "0 0 0 0 0"
   ]
   )

   theLift([
    "20",
    "0 2 0"
   ]
   )