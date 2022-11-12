function countStringOccurrences(sentence, word) {

    const arr = sentence.split(' ');
    let counter = 0;
    for(el of arr) {
        if(el === word) {
            counter++
        }
    }

    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence',
'is'
);