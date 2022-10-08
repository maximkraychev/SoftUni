function repeatString(stringInput, repeatCount) {

    let finalReturn = '';

    for(let i = 0; i < repeatCount; i++) {
        finalReturn += getString(stringInput)
    }
    
     
    function getString(string) {
        return string;
    }
    
    return finalReturn;
}

repeatString("abc", 3);