function wordTracker(input) {

    let wordsWeSearchFor = input.shift().split(' ');

    const objWordsAndCount = {};

    wordsWeSearchFor.forEach(word => {
        objWordsAndCount[word] = 0;
    })

    for (const key in objWordsAndCount) {

        for (const el of input) {
            if (key === el) {
                objWordsAndCount[key] += 1
            }
        }
    }

    const entriesOfObjWordsAndCount = Object.entries(objWordsAndCount);

    entriesOfObjWordsAndCount.sort((a, b) => b[1] - a[1]);

    for (const [word, count] of entriesOfObjWordsAndCount) {
        console.log(word + ' - ' + count);
    }
}

// wordTracker([
//     'this sentence', 
//     'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
//     ]
//     );

wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)