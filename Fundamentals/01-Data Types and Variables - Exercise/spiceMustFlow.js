function spiceMustFlow(number) {

    let source = Number(number);
    let dayCount = 0;
    let collectedSpice = 0;
    let spiceConsumeByMiningCrew = 26;

    for (source; source >= 100; source -= 10) {
        dayCount++;
        collectedSpice += source - spiceConsumeByMiningCrew;
    }

    if (collectedSpice >= spiceConsumeByMiningCrew) {
        collectedSpice -= spiceConsumeByMiningCrew
    }

    console.log(dayCount);
    console.log(collectedSpice);
}

spiceMustFlow(111);
spiceMustFlow(450);