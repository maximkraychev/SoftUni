function rightPlace(string, char, result) {

    let firstString = "";

    for(let i = 0; i < string.length; i++) {
        let letter = string[i];

        if(letter === "_") {
            firstString += char; 
        } else {
            firstString += letter
        }
    }

    let output = firstString === result? "Matched": "Not Matched";
    console.log(output);
    
}

rightPlace('Str_ng', 'i', 'String');