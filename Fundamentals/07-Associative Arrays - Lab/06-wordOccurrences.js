function wordOccurrences(input) {

    const objOfWords = {};

    for (const word of input) {

        if (!objOfWords.hasOwnProperty(word)) {
            objOfWords[word] = 1;
            continue;
        }
        objOfWords[word] += 1
    }

    const arrayOfEntries = Object.entries(objOfWords);


    arrayOfEntries.sort((a, b) => b[1] - a[1]);

    arrayOfEntries.forEach(([word, occurs]) => {
        console.log(`${word} -> ${occurs} times`);
    });
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);