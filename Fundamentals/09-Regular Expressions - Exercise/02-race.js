function race(input) {
    // Taking the participants and put them in array
    const participants = input.shift().split(', ');

    const peopleAndDistance = {};

    const regExPeople = /[A-Za-z]+/g;
    const regExDigits = /\d/g;

    // Taking the participants from the array and push them into the object set the value to 0
    for (const person of participants) {
        peopleAndDistance[person] = 0;
    }

    let line = input.shift();

    // take every line one by one untill 'end of race' is recived
    while (line !== 'end of race') {

        // Take all of the letter from the current line with RegEx
        // Interate over them and combine them in name 
        let name = '';
        const letters = line.match(regExPeople);
        for (const letter of letters) {
            name += letter
        }

        // Chek if the person existe in the object(if he dosn't just skip this line and go to the next)
        if (peopleAndDistance.hasOwnProperty(name)) {
            // Take all the digits from the current line with RegEx
            // Take the sum of all them and push it into the object(peopleAndDistance) with the key(name);
            const digits = line.match(regExDigits);
            const sum = digits
                .map(x => Number(x))
                .reduce((a, b) => a + b);
            peopleAndDistance[name] += sum;
        }

        line = input.shift();
    }

    // Make an Array of the object were we store everything and sort the array after that;
    const entries = Object.entries(peopleAndDistance);
    const sorted = entries.sort((a, b) => b[1] - a[1]);

    // Print only the top 3 racers with the most distance covered 
    for (let index = 0; index < 1; index++) {
        console.log(`1st place: ${sorted[index][0]}`);
        console.log(`2nd place: ${sorted[index + 1][0]}`);
        console.log(`3rd place: ${sorted[index + 2][0]}`);
    }
}

// race(['George, Peter, Bill, Tom',
// 'G4e@55or%6g6!68e!!@ ',
// 'R1@!3a$y4456@',
// 'B5@i@#123ll',
// 'G@e54o$r6ge#',
// '7P%et^#e5346r',
// 'T$o553m&6',
// 'end of race']
// );

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
)