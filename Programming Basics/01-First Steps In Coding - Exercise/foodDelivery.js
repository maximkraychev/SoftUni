function foodDelivery(input){

    const CHICKEN_MENU = 10.35;
    const FISH_MENU = 12.40;
    const VEGAN_MENU = 8.15;
    const DELIVERY = 2.50;

    let numberChickenMenu = Number(input[0]);
    let numberFishMenu = Number(input[1]);
    let numberVeganMenu = Number(input[2]);

    let sumOfMenuPrice = numberChickenMenu * CHICKEN_MENU + numberFishMenu * FISH_MENU + numberVeganMenu * VEGAN_MENU;

    let dessert = sumOfMenuPrice * 0.20;

    let totalPrice = sumOfMenuPrice + dessert + DELIVERY;

    console.log(totalPrice);
}

foodDelivery(["9 ",
"2 ",
"6 "]
)