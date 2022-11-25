function adAstra(input) {

    const text = input[0];

    // 1. Extract the valid food info from the text;
    const regExp = /([\||#]{1})(?<name>[A-za-z ]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>\d{1,4})\1/g;
    let allFood = text.matchAll(regExp);

    // 2. Calculate how many days you can last with the food if you need 2000 per day;
    const foodPerDay = 2000;
    let totalCloriesFromTheFood = 0;
    for (const food of allFood) {
        totalCloriesFromTheFood += Number(food.groups.calories);
    }

    let dayToLast = 0;

    if (totalCloriesFromTheFood !== 0) {
        dayToLast = Math.floor(totalCloriesFromTheFood / foodPerDay);
    }
    console.log(`You have food to last you for: ${dayToLast} days!`);

    // 3. Print how many days will you last and then all the food in the given format; 
    allFood = text.matchAll(regExp);
    for (const food of allFood) {
        console.log(`Item: ${food.groups.name}, Best before: ${food.groups.date}, Nutrition: ${food.groups.calories}`);
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]
); 