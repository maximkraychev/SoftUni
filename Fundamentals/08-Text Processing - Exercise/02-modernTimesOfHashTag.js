function modernTimesOfHashTag(text) {

    let arrayOfText = text.split(' ');

    arrayOfText.forEach(word => {
        if (word.startsWith('#') && word.length > 1) {
            let isValid = true
            word = word.replace('#', '');
            const wordToLower = word.toLowerCase()

            for (const letter of wordToLower) {
                if (letter.charCodeAt() < 96 || letter.charCodeAt() > 122) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                console.log(word);
            }
        }
    })
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia'); 