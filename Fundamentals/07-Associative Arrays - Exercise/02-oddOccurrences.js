function oddOccurrences(input) {

    const mapOfWord = new Map();
    const inputAsArray = input.split(' ').map(el => el.toLowerCase());

    for (const el of inputAsArray) {
        const repeatedWords = inputAsArray.filter(element => {
            if (element === el) {
                return el
            }
        })
        const countOfEl = repeatedWords.length;

        if (countOfEl % 2 !== 0 && !mapOfWord.has(el)) {
            mapOfWord.set(el, countOfEl)
        }
    }

    let finalRow = '';

    for (const [word, count] of mapOfWord) {
        finalRow += word + ' ';
    }

    console.log(finalRow.trim());
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');