function solution() {

    const storedMicroelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    function breakfastRobot(input) {

        const [methodName, meal, quantity] = input.split(' ');
        const methods = {
            restock(microelement, quantity) {
                storedMicroelements[microelement] += Number(quantity);
                return 'Success'
            },
            report() {
                const currenData = [];
                for (const key in storedMicroelements) {
                    currenData.push(`${key}=${storedMicroelements[key]}`);
                }
                return currenData.join(' ');
            },
            prepare(currentMeal, quantity) {
                const requiredIngredients = Object.entries(recipes[currentMeal]);
                requiredIngredients.forEach(x => { x[1] *= Number(quantity) });

                for (const [key, value] of requiredIngredients) {
                    if (storedMicroelements[key] < value) {
                        return `Error: not enough ${key} in stock`;
                    }
                }

                for (const [key, value] of requiredIngredients) {
                    storedMicroelements[key] -= value;
                }
                return 'Success';
            }
        }

        return methods[methodName](meal, quantity);
    }

    return breakfastRobot;
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"))
console.log(manager("restock flavour 10"))
console.log(manager("prepare apple 1"))
console.log(manager("restock fat 10"))
console.log(manager("prepare burger 1"))
console.log(manager("report"))


