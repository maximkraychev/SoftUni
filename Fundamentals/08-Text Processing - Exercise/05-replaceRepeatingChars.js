function replaceRepeatingChars(text) {

    let textWithoutRepeating = text[0];
    const textLength = text.length;
    
    for(let index = 1; index < textLength; index++) {
        if(text[index] !== text[index - 1]) {
            textWithoutRepeating += text[index];
        }
    }

    console.log(textWithoutRepeating);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'); 