function melrahShake(input) {

    let text = input[0];
    let pattern = input[1];
    let firstPatternInText = text.indexOf(pattern);
    let lastPatternInText = text.lastIndexOf(pattern);


    while (firstPatternInText >= 0 && firstPatternInText !== lastPatternInText) {

        const patternLength = pattern.length;

        // Removing the first pattern
        const firstPart = text.substring(0, firstPatternInText);
        const secondPart = text.substring(firstPatternInText + patternLength);
        text = firstPart.concat(secondPart);

        // Taking the index of the last pattern again cuz after the first removing index is shifted 
        lastPatternInText = text.lastIndexOf(pattern);

        // Removing the last pattern 
        const firstPartFromTheBack = text.substring(0, lastPatternInText);
        const secondPartFromTheBack = text.substring(lastPatternInText + patternLength);
        text = firstPartFromTheBack.concat(secondPartFromTheBack)

        // Removing index from the pattern 
        const indexToRemove = Math.floor(patternLength / 2);
        const firstPartPattern = pattern.substring(0, indexToRemove);
        const secondParthPattern = pattern.substring(indexToRemove + 1);
        pattern = firstPartPattern.concat(secondParthPattern);

        console.log('Shaked it.');

        // If the pattern is empty => Exit the loop 
        if(pattern.length < 1) {
            break;
        }

        // Getting the index again for the while loop 
        // If there isn't 2 pattern in the text, will not go in 
        firstPatternInText = text.indexOf(pattern);
        lastPatternInText = text.lastIndexOf(pattern);
    }

    console.log('No shake.');
    console.log(text);
}

// melrahShake(['astalavista baby',
// 'sta']
// ); 

melrahShake(['##mtm!!mm#.mm#*mtm.##',
    '##']
)