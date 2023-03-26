function trekkingMania(input) {

    let groups = Number(input[0]);
    let index = 1;

    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    let allPeople = 0;
    

    for(let i = 1; i <= groups; i++) {
        let everyGroup = Number(input[index]);
        allPeople += everyGroup;
        if(everyGroup <= 5) {
            musala += everyGroup;
        } else if(everyGroup <= 12) {
            montBlanc += everyGroup;
        } else if(everyGroup <= 25) {
            kilimanjaro += everyGroup
        } else if(everyGroup <= 40) {
            k2 += everyGroup;
        } else if(everyGroup > 40) {
            everest += everyGroup
        }
        index++
    }

    let musalaPercent = ((musala / allPeople) * 100);
    let montBlancPercent = ((montBlanc / allPeople) * 100);
    let kilimanjaroPercent = ((kilimanjaro / allPeople) * 100);
    let k2Percent = ((k2 / allPeople) * 100);
    let everestPercent = ((everest / allPeople) * 100);

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${montBlancPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

