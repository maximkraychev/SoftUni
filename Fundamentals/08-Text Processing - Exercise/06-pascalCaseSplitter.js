function pascalCaseSplitter(text) {
    const arrayOfWords = []
    let word = text[0];
    const textLnegth = text.length

    for(let index = 1; index < textLnegth; index++) {
        if(text[index].charCodeAt() < 65 || text[index].charCodeAt() > 90) {
            word += text[index]
        } else {
            arrayOfWords.push(word);
            word = text[index];
        }
    }
    arrayOfWords.push(word);
    
    console.log(arrayOfWords.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');