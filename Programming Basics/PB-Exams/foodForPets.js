function foodForPets(input) {
    
    let index = 0;
    let days = Number(input[index++]);
    let totalFood = Number(input[index++]);

    
    let eatenBiscuits = 0;
    let totalFoodEatenByDog = 0;
    let totalFoodEatenByCat = 0; 
    let totalEatenFood = 0 ;
    let dayCount = 0;

    for(let i = 1; i <= days; i++) {
        dayCount++;
        let foodEatenByDogPerDay = Number(input[index++]);
        let foodEatenByCatPerDay = Number(input[index++]);
        let foodEatenPerday = foodEatenByCatPerDay + foodEatenByDogPerDay;

        totalFoodEatenByCat += foodEatenByCatPerDay;
        totalFoodEatenByDog += foodEatenByDogPerDay;
        totalEatenFood += foodEatenPerday;


        if(dayCount % 3 === 0) {
            eatenBiscuits += foodEatenPerday * 0.10;
        }
    }

    let percentEatenFood = (totalEatenFood / totalFood) * 100;
    let percentEatenFoodByDog = (totalFoodEatenByDog / totalEatenFood) * 100;
    let percentEatenFoodByCat = (totalFoodEatenByCat / totalEatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(eatenBiscuits)}gr.`);
    console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentEatenFoodByDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentEatenFoodByCat.toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])

