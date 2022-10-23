function schoolLibrary(input) {

    let shelfArr = input.shift().split('&');
    let currentRow = input.shift();

    while (currentRow !== 'Done') {

        let currentRowAsArray = currentRow.split(' | ')
        let command = currentRowAsArray[0];
        let firstBook = currentRowAsArray[1];
        let secondBook = currentRowAsArray[2];

        switch (command) {

            case 'Add Book':
                if (!shelfArr.includes(firstBook)) {
                    shelfArr.unshift(firstBook);
                }
                break;

            case 'Take Book':
                if (shelfArr.includes(firstBook)) {
                    let indexOfThebookToRemove = shelfArr.indexOf(firstBook);
                    shelfArr.splice(indexOfThebookToRemove, 1);
                }
                break;

            case 'Swap Books':
                if (shelfArr.includes(firstBook) && shelfArr.includes(secondBook)) {
                    let firstBookIndex = shelfArr.indexOf(firstBook);
                    let secondBookIndex = shelfArr.indexOf(secondBook);
                    shelfArr.splice(firstBookIndex, 1, secondBook);
                    shelfArr.splice(secondBookIndex, 1, firstBook);
                }
                break;

            case 'Insert Book':
                if (!shelfArr.includes(firstBook)) {
                    shelfArr.push(firstBook);
                }
                break;

            case 'Check Book':
                let indexToPrint = Number(firstBook);
                if (indexToPrint >= 0 && indexToPrint < shelfArr.length) {
                    console.log(shelfArr[indexToPrint]);
                }
                break;

        }

        currentRow = input.shift();
    }

    console.log(shelfArr.join(', '));
}

schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"])

schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"])

schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])
