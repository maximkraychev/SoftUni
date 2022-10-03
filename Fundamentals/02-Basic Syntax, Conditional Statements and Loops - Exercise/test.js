function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let heightSteps = 0;

    for (let i = base; i > 0; i -= 2) {
        heightSteps++
        if (i <= 2) {
            gold += (i * i) * increment;
            break;
        } else if(heightSteps % 5 === 0) {
            lapisLazuli += (i * 4 - 4) * increment;
            stone += Math.pow(i - 2, 2) * increment;
        } else {
            marble += (i * 4 - 4) * increment;
            stone += Math.pow(i - 2, 2) * increment;
        }
    }

    let height = heightSteps * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

thePyramidOfKingDjoser(23, 0.5);