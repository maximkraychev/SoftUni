function petShop(input){
    
    const FOOD_PRICE_DOG = 2.50;
    const FOOD_PRICE_CAT = 4;

    let foodPacksDog = Number(input[0]);
    let foodPacksCat = Number(input[1]);

    let total = (foodPacksDog * FOOD_PRICE_DOG) + (foodPacksCat * FOOD_PRICE_CAT);
    
    console.log(`"${total} lv."`);
    console.log(total + " lv.");
}

petShop(["13",
"9"]
);

