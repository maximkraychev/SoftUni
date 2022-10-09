function passwordValidator(password) {

    let passwordLength = password.length;
    let digitCount = 0;

    let isThereAllCharAllowed = true;
    let isPasswordLengthCoveringTheRequirements = isPasswordLengthOK(passwordLength);
    let isThereAtLeastTwoDigits = false;

    for (let index = 0; index < passwordLength; index++) {

        let currentCharAsNumber = password[index].charCodeAt();

        let isDigit = currentCharAsNumber >= 48 && currentCharAsNumber <= 57;
        let isSmallLetter = currentCharAsNumber >= 97 && currentCharAsNumber <= 122;
        let isLargeLetter = currentCharAsNumber >= 65 && currentCharAsNumber <= 90;

        if (isDigit) {
            digitCount++
        }

        if (!isDigit && !isSmallLetter && !isLargeLetter) {

            isThereAllCharAllowed = false;
            break;
        }
    }

    if (digitCount >= 2) {
        isThereAtLeastTwoDigits = true;
    }

    function isPasswordLengthOK(passwordLength) {
        if (passwordLength >= 6 && passwordLength <= 10) {
            return true;
        } else {
            return false;
        }
    }

    if (isThereAllCharAllowed === true && isPasswordLengthCoveringTheRequirements === true && isThereAtLeastTwoDigits === true) {
        console.log(`Password is valid`);
    }

    if (!isPasswordLengthCoveringTheRequirements) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isThereAllCharAllowed) {
        console.log("Password must consist only of letters and digits");
    }

    if (!isThereAtLeastTwoDigits) {
        console.log("Password must have at least 2 digits");
    }

}

passwordValidator('logIn');
passwordValidator('MyPass123');