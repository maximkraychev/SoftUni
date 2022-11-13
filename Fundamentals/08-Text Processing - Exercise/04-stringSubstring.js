function stringSubstring(word, text) {

    const wordTolowerCase = word.toLowerCase();
    const arrOftext = text.split(' ').map(word => word.toLowerCase());

    if(arrOftext.includes(wordTolowerCase)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language'
); 