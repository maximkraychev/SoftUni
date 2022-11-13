function revealWords(words, sentence) {

    const arrWords = words.split(', ');  

    for (const word of arrWords) {
        const match = '*'.repeat(word.length);
        sentence = sentence.replace(match, word);
    }  
    console.log(sentence);
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);