function graduation(input) {

    let index = 0;
    let name = input[index];
    index++
    let grades = Number(input[index]);
    let countForExpell = 0;
    let sum = 0;
    let clases = 1
    let numbersOfGrades = 0;
    

    while(clases <= 12) {
        if(grades >= 4){
            sum += grades;
            index++
            grades = Number(input[index]);
            clases++;
            numbersOfGrades++
        } else {
            index++
            grades = Number(input[index]);
            countForExpell++
            numbersOfGrades++
            if(countForExpell > 1) {
                break;
            }
        }
    }

    let averageGrade = sum / numbersOfGrades

    if(countForExpell > 1) {
        console.log(`${name} has been excluded at ${clases} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
    
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])


