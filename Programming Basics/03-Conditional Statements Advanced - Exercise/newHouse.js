function newHouse(input) {

    let typeFlower = input[0];
    let numberOfFlower = Number(input[1]);
    let budget = Number(input[2]);

    let totalPrice = 0;

    switch(typeFlower) {
        case "Roses":
            totalPrice = numberOfFlower * 5.00;
            if(numberOfFlower > 80) {
                totalPrice *= 0.90; 
            }
            break;
        case "Dahlias":
            totalPrice = numberOfFlower * 3.80;
            if(numberOfFlower > 90) {
                totalPrice *= 0.85; 
            }
            break;
        case "Tulips":
            totalPrice = numberOfFlower * 2.80;
            if(numberOfFlower > 80) {
                totalPrice *= 0.85; 
            }
            break;
        case "Narcissus":
            totalPrice = numberOfFlower * 3.00;
            if(numberOfFlower < 120) {
                totalPrice *= 1.15; 
            }
            break;
        case "Gladiolus":
            totalPrice = numberOfFlower * 2.50;
            if(numberOfFlower < 80) {
                totalPrice *= 1.20; 
            }
            break;
    }

    let sum = Math.abs(budget - totalPrice);

    if(budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${numberOfFlower} ${typeFlower} and ${sum.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${sum.toFixed(2)} leva more.`);
    }
    
}

newHouse(["Narcissus",
"119",
"360"])
