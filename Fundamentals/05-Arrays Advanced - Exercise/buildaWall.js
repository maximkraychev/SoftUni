function buildaWall(array) {

    array.map(Number);
    let concreteUsedEachDay = '';
    let overallUsedConcrete = Number();

    let concreteInOneFootHeigth = 195;
    let oneFootConcreteCostPesos = 1900;
    let crewHaveEnded = 30;
    let count = 0

    while (array.length > 0) {

        if(count === 0 && array.includes(crewHaveEnded)) {
            while (array.includes(crewHaveEnded)) {
                let currentIndexToRemove = array.indexOf(crewHaveEnded);
    
                if (currentIndexToRemove === 0) {
                    array.shift()
                } else {
                    array.splice(currentIndexToRemove, 1);
                }
                
            }
        }
        count++

        let mileLength = array.length;
        array = array.map(x => x + 1);
        let concreteUsedForCurrentDay = mileLength * concreteInOneFootHeigth;
        overallUsedConcrete += concreteUsedForCurrentDay;

        while (array.includes(crewHaveEnded)) {
            let currentIndexToRemove = array.indexOf(crewHaveEnded);

            if (currentIndexToRemove === 0) {
                array.shift()
            } else {
                array.splice(currentIndexToRemove, 1);
            }
            
        }

        concreteUsedEachDay += concreteUsedForCurrentDay
        if (array.length > 0) {
            concreteUsedEachDay += ', ';
        }
    }

    let finalPriceInPesos = overallUsedConcrete * oneFootConcreteCostPesos;
    console.log(concreteUsedEachDay);
    console.log(`${finalPriceInPesos} pesos`);

}

buildaWall([30, 22, 17, 19, 17]);

// function test (array) {
//     while(array.includes(30)){
//         let currentIndexToRemove = array.indexOf(30);

//         if (currentIndexToRemove === 0) {
//             array.shift()
//         } else {
//             array.splice(currentIndexToRemove, 1);
//         }
//     }
//     console.log(array);
// }

// test([30, 30 , 17, 22, 30, 17, 19, 30, 17])
