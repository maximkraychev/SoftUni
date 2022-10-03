function triplesOfLatinLetters(numberAsString) {

    let inputAsNumber = Number(numberAsString);


    for (let i = 0; i < inputAsNumber; i++) {
        let firstLetter = String.fromCharCode(97 + i);

        for (let j = 0; j < inputAsNumber; j++) {
            let secondLetter = firstLetter + String.fromCharCode(97 + j);

            for (let k = 0; k < inputAsNumber; k++) {
                let lastLetter = secondLetter + String.fromCharCode(97 + k);
                console.log(lastLetter);
                lastLetter = '';
            }
        }

    }

}

triplesOfLatinLetters("3"); 