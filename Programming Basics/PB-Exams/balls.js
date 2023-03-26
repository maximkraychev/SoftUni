function balls(input) {

    let index = 0;
    let ballsNumber = Number(input[index]);
    index++
    let points = 0;

    let otherCounter = 0
    let redCounter = 0;
    let orangeCounter = 0;
    let yellowCounter = 0;
    let whiteCounter = 0;
    let blackCounter = 0; 

    for(let i = 0; i < ballsNumber; i++) {
        let color = input[index];
        index++
        
        switch(color) {
            case "red":
                points += 5;
                redCounter++;
                break;
            case "orange":
                points += 10;
                orangeCounter++;
                break;
            case "yellow":
                points += 15;
                yellowCounter++;
                break;
            case "white":
                points += 20;
                whiteCounter++;
                break;
            case "black":
                points = Math.floor(points / 2);
                blackCounter++;
                break;
            default:
            otherCounter++;
            break;
        }
    }

    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redCounter}`);
    console.log(`Orange balls: ${orangeCounter}`);
    console.log(`Yellow balls: ${yellowCounter}`);  
    console.log(`White balls: ${whiteCounter}`);
    console.log(`Other colors picked: ${otherCounter}`);
    console.log(`Divides from black balls: ${blackCounter}`);
}

balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])
