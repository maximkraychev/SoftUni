function thePyramidOfKingDjoser(widthAndLength,height) {

let currentWIthAndLength = widthAndLength;    
let stone = 0;
let marble = 0;
let lapisLazuli = 0;
let gold = 0;
let steps = 0;

for(currentWIthAndLength; currentWIthAndLength > 0; currentWIthAndLength -= 2) {
    steps++;
    let volume = currentWIthAndLength * currentWIthAndLength;
    let bulk = (currentWIthAndLength - 2) * (currentWIthAndLength - 2); 
    let outerLayer = volume - bulk;

    if(currentWIthAndLength <= 2) {
        gold = volume * height;
        break;
    } else if (steps % 5 === 0) {
        lapisLazuli += outerLayer * height;
        stone += bulk * height;
    } else {
        marble += outerLayer * height;
        stone += bulk * height;
    }

}
let totalHeight = steps * height;

console.log(`Stone required: ${Math.ceil(stone)}`);
console.log(`Marble required: ${Math.ceil(marble)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
console.log(`Gold required: ${Math.ceil(gold)}`);
console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
}

thePyramidOfKingDjoser(23, 0.5);

