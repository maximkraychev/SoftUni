function passwordGuess(input) {

    let inputPassword = input[0];
    let password = "s3cr3t!P@ssw0rd";

    if(inputPassword === password) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
    
}

passwordGuess(["s3cr3t!p@ss"]);