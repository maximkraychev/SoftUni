function fitnessCenter(input) {

    let index = 0; 
    let visitors = Number(input[index]); 
    index++;
    let activity = input[index];
    index++

    let peopleForBack = 0;
    let peopleForChest = 0;
    let peopleForLegs = 0;
    let peopleForAbs = 0;
    let peopleForProteinShake = 0;
    let peopleForProteinBar = 0;

    let workout = 0;
    let protein = 0;
    
    for(let i = 0; i < visitors; i++) {
        switch(activity) {
            case "Back":
                peopleForBack++
                workout++
                break;
            case "Chest":
                peopleForChest++
                workout++
                break;
            case "Legs":
                peopleForLegs++
                workout++
                break;
            case "Abs":
                peopleForAbs++
                workout++
                break;
            case "Protein shake":
                peopleForProteinShake++
                protein++
                break;
            case "Protein bar":
                peopleForProteinBar++
                protein++
                break;
        }

        activity = input[index];
        index++

    }

    let workOutPercent = (workout / visitors) * 100;
    let proteinPercent = (protein / visitors) * 100;

    console.log(`${peopleForBack} - back`);
    console.log(`${peopleForChest} - chest`);
    console.log(`${peopleForLegs} - legs`);
    console.log(`${peopleForAbs} - abs`);
    console.log(`${peopleForProteinShake} - protein shake`);
    console.log(`${peopleForProteinBar} - protein bar`);
    console.log(`${workOutPercent.toFixed(2)}% - work out`);
    console.log(`${proteinPercent.toFixed(2)}% - protein`);
}

fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])


