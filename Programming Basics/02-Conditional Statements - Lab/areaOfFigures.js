function areaOfFigures(input) {

    let type = input[0];
    let result = 0

    if(type === "square") {
        let oneSide = Number(input[1]);
        result = oneSide * oneSide;
        console.log(result.toFixed(3));
    } else if(type === "rectangle") {
        let firstSide = Number(input[1]);
        let secondSide = Number(input[2]);
        result = firstSide * secondSide;
        console.log(result.toFixed(3));
    } else if(type ==="circle") {
        let radius = Number(input[1]);
        result = Math.PI * Math.pow(radius,2);
        console.log(result.toFixed(3));
    } else if(type ==="triangle") {
        let side = Number(input[1]);
        let height = Number(input[2]);
        result = (side / 2) * height;
        console.log(result.toFixed(3));
    }
    
}

areaOfFigures(["triangle",
"4.5",
"20"])



